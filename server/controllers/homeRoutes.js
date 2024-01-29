const router = require('express').Router();
const path = require('path');



    // all other home routes - send back REACT index.html file which will handle all other routes
    router.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '..', '/..', '/client', '/build', '/index.html'))
    );


module.exports = router;