// use npm install nodemailer first in your folder where this file is saved

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'xyz', // add whatever service you would like to use('gmail' for example), check out nodemailer api for the services they have
  auth: {
    user: 'youremail@xyz.com', // add your email id
    pass: '******' // add your password
  }
});

var mailOptions = {
  from: 'youremail@xyz.com',
  to: 'email1@xyz.com, email2@xyz.com', // recipient email ids
  subject: 'Warning: Account compromized',
  text: 'gaand mara'
  //html: `<h1>Hi</h1><p>HTML generated Messsage</p>` //html formatting if preferred
};


  transporter.sendMail(mailOptions, function(error, info){ //transporetr object to send email
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

// execute using node email.js in your terminal
