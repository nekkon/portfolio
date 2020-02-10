"use strict";
var nodemailer = require("nodemailer");
const settings = require("./email.settings.js");

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

async function sendEmail(data, res) {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: settings.email,
      pass: settings.password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: data.email, // sender address
    to: settings.email, // list of receivers
    subject:
      "Message from: " +
      data.name +
      ", Email: " +
      data.email +
      " (portfolio / nekkon.com)", // Subject line
    text: data.message // plain text body
  };

  try {
    // send mail with defined transport object
    const response = await transporter.sendMail(mailOptions);
    console.log(response);
    res.json({
      success: "Email sent successfully",
      status: 200
    });
  } catch (error) {
    res.json({
      errorMessage: "Error while sending email",
      error: error,
      status: 500
    });
  }
}

module.exports = {
  sendEmail: function(postData, res) {
    sendEmail(postData, res);
  }
};
