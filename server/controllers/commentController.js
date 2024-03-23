
const { Comment } = require('../models/Comment');
require('dotenv').config();
const fetch = require("node-fetch");
const nodemailer = require('nodemailer');

const emailForm = (req) => {

    // Extract form data from request body
    const { userName, email, message } = req;

    let transporter = nodemailer.createTransport({

        // SMTP configuration
        pool: true,
        host: 'smtp.mailgun.org',
        port: 465,
        secure: true, // use TLS
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    // Define email options
    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAILTO,
        subject: 'New Lead Submission',
        text: `Name: ${userName}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            return {error:error, response:null};
        } else {
            console.log('Email sent:', info.response);
            return {error:null, response:info.response};
        }
    });

};

module.exports = {

    // Create a comment
    async createComment(req, res) {
        /*Comment.create(req.body)
            .then((comment) => res.json(comment))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });*/
        try {
            const comment = new Comment(req.body);
            comment.save();
            emailForm(req.body);
            return res.json(comment);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Verify the captcha response token with google
    async verifyCaptcha(req, res) {

        const token = req.body.token;
        try {
            const secretKey = process.env.CAPSECRET;
            const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    secret: secretKey,
                    response: token,
                }),

            });
            const data = await response.json();
            if (data.success) {
                res.json({ success: true, message: 'Captcha passed' });
            } else {
                res.status(400).json({ success: false, message: 'Captcha failed' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Backend to check Captcha failed' });
        };


    },

};