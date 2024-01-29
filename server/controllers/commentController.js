
const { Comment } = require('../models/Comment');

module.exports = {

    // Create a comment
    createComment(req, res) {
        Comment.create(req.body)
            .then((comment) => res.json(comment))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // Verify the captcha response token with google
    async verifyCaptcha(req, res) {

        const token = req.body.token;
        try {
            const secretKey = process.env.CAPSECRET;
            const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `secret=${secretKey}&response=${token}`,
            });
            const data = await response.json();
            if (data.success) {
                res.json({ success: true, message: 'Captcha passed' });
            } else {
                res.status(400).json({ success: false, message: 'Captcha failed' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Captcha failed' });
        };


    },

};