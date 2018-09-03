// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

// Node mailer
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.contactMessage = functions.https.onRequest((request, response) => {
 
    const mailOptions = {
        to: 'jaimeandresmonc@gmail.com',
        subject: `Information Request from hihihhi`,
        html: `test`
    };
    return mailTransport.sendMail(mailOptions).then(() => {
        response.send("Success");
        return console.log('Mail sent to: test@example.com')

});
  });
