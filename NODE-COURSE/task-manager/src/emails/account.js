// senhadosendgrid1
const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'igorssalgado@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get alone with the app.`
    });
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'igorssalgado@gmail.com',
        subject: 'Good bye',
        text: `Good bye, ${name}. Let me know why you sing off, you bastard.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
