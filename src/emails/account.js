const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nessinha.vps@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    }).then(res => console.log(res))
        .catch(e => console.log(e))
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nessinha.vps@gmail.com',
        subject: 'Sorry to see you go =(',
        text: `Goodbye ${name}. I hope to see you back sometime soon.`
    }).then(res => console.log(res))
        .catch(e => console.log(e))
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}