const nodemailer = require('nodemailer')
var dotenv = require("dotenv")
dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user: process.env.EMAIL, 
    pass: process.env.PASSWORD 
  }
})

// https://dev.to/nirupamvas/nodemailer-module-5174
const sendMail = (email, subject, text, cb) => {
  console.log(text)

  const mailOptions = {
    from: 'brnmcdonnald@gmail.com',
    to: email,
    subject: subject, // subject - this is ok in es6
    text: text,
  }


  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null) 
    } else {
      cb(null,data)
    }
  })



}


module.exports = sendMail
