# Email Sender

## Description
This program was built to help out a friend in an internship send emails. The email addresses and names to send are in a spreadsheet. This program automatically reads through the spreadsheet and sends emails to the email addresses in the spreadsheet along with a personalized greeting. 

## Usage
This program runs locally with NodeJS. To install and use the program, clone the repository to your local machine. Then, from the command line, run npm install to install the dependancies. This program requires an excel spreadsheet to read in the root directory of the project. The format is simple: there must be two columns of data in the spreadsheet. The first column with have the header email, and the second column will have the header name. Both the headers must be in row 1 of the spreadsheet. Then you can fill the email column with email addresses to send your email to, and the name column with names for a personalized greeting. From there, you will need to open the file email.js and input in the correct information for the placeholders: your_email_here, your_password_here, and your_workbook_here. If you do not want to use your regular email password, Google accounts has the ability for you to create an "App Password" to use for this application. Please see Google Accounts documentation and follow instructions there to set up an App Password: [App Password](https://support.google.com/accounts/answer/185833?hl=en) Finally, you can add in a personalized subject line and text for your email. There are two ways to add text for your email: add plain text in the text option of the sendPersonalizedEmail function, or add personalized HTML to the html option. The plain text option is far easier since you don't need to know HTML to write it but it has some limitations for hyperlinks. Hyperlinks can be included in the plain text but only without an alias. The HTML option bascially opens to door to add whatever you want to the email. You do have to know some HTML tags to write the greeting though, but if you do write HTML AND know CSS you could make a pretty serious custom email. 

## Built With

* Javascript
* NodeJS
* nodemailer
* xlsx
* ChatGPT

## Contributing

Made by Samuel Varney