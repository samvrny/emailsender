# Email Sender

## Description
This program was built to help out a friend in an internship send emails. The email addresses and names to send are in a spreadsheet. This program automatically reads through the spreadsheet and sends emails to the email addresses in the spreadsheet along with a personalized greeting. 

## Usage
This program runs locally with NodeJS. To install and use the program, clone the repository to your local machine. Then, from the command line, run npm install to install the dependancies. This program requires an excel spreadsheet to read in the root directory of the project. The format is simple: there must be two columns of data in the spreadsheet. The first column with have the header email, and the second column will have the header name. Both the headers must be in row 1 of the spreadsheet. Then you can fill the email column with email addresses to send your email to, and the name column with names for a personalized greeting. From there, you will need to open the file email.js and input in the correct information for the placeholders: your_email_here, your_password_here, and your_workbook_here. If you do not want to use your regular email password, Google accounts has the ability for you to create an "App Password" to use for this application. Please see Google Accounts documentation and follow instructions there to set up an App Password: [App Password](https://support.google.com/accounts/answer/185833?hl=en) Finally, you can add in a personalized subject line and text for your email. (To insert a custom name for a greeting, you will need to use a template literal. This is why the text of the email string is in `` brackets and it has to be in that type of brackets to use a template literal. To add a template literal, add this: ${} and then fill it with your dynamic data variable name. IE: ${name} Run the program by using the command node email.js in the command line and it will run and send the emails after reading the spreadsheet. 

## Built With

* Javascript
* NodeJS
* nodemailer
* xlsx
* ChatGPT

## Contributing

Made by Samuel Varney