const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/api/contact", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const number = req.body.number;
    const message = req.body.message;
    console.log(username);
    console.log(email);
    console.log(number);
    console.log(message);



    // let testAccount = nodemailer.createTestAccount();
    // connect with the smtp
    const transporter = nodemailer.createTransport({
        host: '',
        port: 587,
        auth: {
            user: '',
            pass: ''
        }
    });

    const mailDetails = {
        // from: '"Iqbal" <mohd.abd.6602@gmail.com>', // sender address
        from: "",
        to: "", // list of receivers
        subject: "message from contact sender", // Subject line
        text: "hellow this is the message", // plain text body
        html: `<b>${username}</b><br /><b>${email}</b><br /><b>${number}</b><br /><b>${message}</b>`, // html body
    }

    transporter.sendMail(mailDetails, (err) => {
        if (err) console.log("it has err", err)
        else console.log("success");
    });

    // console.log("Message sent: %s", info.messageId);
    // res.json(info);


});




app.listen(5000, () => {
    console.log("server running on 5000")
})