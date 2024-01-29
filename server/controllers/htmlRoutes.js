const router = require('express').Router();
const path = require('path');
const {
    createComment,
    verifyCaptcha,
} = require('./commentController');


    // /api/service
    // this route is created for demo purposes only - backend can return any file from the REACT build folder
    router.get('/service', (req, res) =>
        res.sendFile(path.join(__dirname, '..', '/..', '/client', '/build', '/static', '/media', '/cryptocoin.7441200b89a515098451.png'))
    );


    // /api/comment
    // adds a comment from the contact form to the database
    router.post('/comment', createComment);

    // /api/captcha
    // verifies the captcha response token with google
    router.post('/captcha', verifyCaptcha);


module.exports = router;