require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3001; // Assuming your React app runs on port 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS to allow requests from the React app
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// POST route to handle form submission

app.listen(process.env.PORT, () => {
  app.post("/send-email", (req, res) => {
    const { username, email, phone, service } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail", // Update with your email service provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
    <h2>${process.env.EMAIL_HEADING}</h2>
    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <td><strong>Name:</strong></td>
        <td>${username}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>${email}</td>
      </tr>
      <tr>
        <td><strong>Phone:</strong></td>
        <td>${phone}</td>
      </tr>
      <tr>
        <td><strong>Service:</strong></td>
        <td>${service}</td>
      </tr>
    </table>
  `;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "PEB Enquiry Quote",
      html: htmlContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.send("Email sent successfully");
      }
    });
  });
});
