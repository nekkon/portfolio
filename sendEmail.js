"use strict";
var nodemailer = require("nodemailer");
const settings = require("./email.settings.js");

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

async function sendEmail(data, res) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: settings.email,
      pass: settings.password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: data.email, // sender address
    to: settings.email, // list of receivers
    subject: "Message from: " + data.name + " (portfolio / nekkon.com)", // Subject line
    text: data.message // plain text body
  };

  // send mail with defined transport object
  const response = await transporter.sendMail(mailOptions);
  console.log(response);
  if (response.err) {
    res.json({
      errorMessage: "Error while sending email",
      error: response.err,
      status: 500
    });
  } else {
    res.json({
      success: "Email sent successfully",
      status: 200
    });
  }
}

module.exports = {
  sendEmail: function(postData) {
    sendEmail(postData);
  }
};
