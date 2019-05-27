'use strict';
var nodemailer = require('nodemailer');
var settings = require('./server.settings.json');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

function sendEmail(data) {
    console.log(settings);
    console.log(data);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: settings.email.email,
            pass: settings.email.password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: data.email, // sender address
        to: settings.email.email, // list of receivers
        subject: 'Message from: ' + data.name + ' (portfolio / nekkon.com)', // Subject line
        text: data.message // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}

module.exports = {
    sendEmail: function(postData) {
        sendEmail(postData)
    }
}