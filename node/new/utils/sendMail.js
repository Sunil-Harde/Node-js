import nodemailer from "nodemailer"



export const sendMail = async (user_mail, subject, message) => {


    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASS
        }
    })


     await transport.sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to: user_mail,
        subject,
        text: message
    })


} 