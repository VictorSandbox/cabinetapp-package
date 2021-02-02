const express = require("express");
const sendMail = require("./mailer"); // custom module for email processing
const PORT = process.env.PORT ||3000;
const app = express();
const path = require("path"); // built in module, no installation required

// middlewares or configuration
 app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.htm"));
 });

 app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.htm"));
 });

 app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "gallery.htm"));
 });

 app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.htm"));
 });


// public folders - for css and images
// app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/email', (req, res) => {
  // res.json({message: 'message sent'})
  
  const email = req.body.email
  console.log(req.body.email);
  const subject = "Contact Request From :" + req.body.name
  console.log(subject);
  const txtArea = req.body.message
  console.log(txtArea);

  sendMail(
    email,
    subject,
    txtArea,
    function (err, data) {
      if (err) {
        // res.status(500).json({ message: "Internal Error" });
        console.log(err)
        res.status(500)
        res.sendFile(path.join(__dirname, "views", "errorPage.htm"));
      } else {
        // res.json({ message: "Email sent" });
         res.sendFile(path.join(__dirname, "views", "thankYou.htm"));
      }
    });
});

app.listen(PORT, () => {
  console.log(`Server is starting on Port: '${PORT}`);
});
