const path = require('path');

module.exports = (app) => {

    app.get('/service', (req, res) =>
    res.sendFile(path.join(__dirname, '..', '/..', '/client', '/build','/static', '/media', '/cryptocoin.7441200b89a515098451.png'))
);
    app.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '..', '/..', '/client', '/build', '/index.html'))
    );
};