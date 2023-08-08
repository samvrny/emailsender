const fs = require('fs');
const nodemailer = require('nodemailer');
const xlsx = require('xlsx');

//Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email_here',
        pass: 'your_password_here'
    }
});

// Read Excel file
const workbook = xlsx.readFile('your_workbook_here');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

console.log(worksheet)

// Convert worksheet to JSON
const emailData = xlsx.utils.sheet_to_json(worksheet);

emailData.forEach(data => {
    const email = data.email;
    const name = data.name;
    console.log(name, email)
    sendPersonalizedEmail(email, name);
});

function sendPersonalizedEmail(email, name) {
    const mailOptions = {
        from: 'your_email_here',
        to: email,
        subject: 'Personalized Greeting',
        text: `Hello, my name is ${name}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`Error sending email to ${email}:`, error);
        } else {
            console.log(`Email sent to ${email}:`, info.response);
        }
    });
}
