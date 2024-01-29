const path = require('path');
const {
    createComment,
    verifyCaptcha,
} = require('../controllers/commentController');


module.exports = (app) => {
    // /api/service
    // this route is created for demo purposes only - backend can return any file from the REACT build folder
    app.get('/api/service', (req, res) =>
        res.sendFile(path.join(__dirname, '..', '/..', '/client', '/build', '/static', '/media', '/cryptocoin.7441200b89a515098451.png'))
    );


    // /api/comment
    // adds a comment from the contact form to the database
    app.post('/api/comment', createComment);

    // /api/captcha
    // verifies the captcha response token with google
    app.post('api/captcha', verifyCaptcha);


    // all other routes - send back REACT index.html file which will handle all other routes
    app.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '..', '/..', '/client', '/build', '/index.html'))
    );


};