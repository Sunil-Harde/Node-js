
import nodemailer from "nodemailer"


export const sendMail =async ({email, subject, message}) => {


    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASS
        }
    })


    const sendMail = await transport.sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject:subject,
        text: message
    })


}

