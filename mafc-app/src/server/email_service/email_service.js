'use server'
 import { createTransport } from "nodemailer";

const PASS = process.env.EMAIL_SERVICE_PASS;
const EMAIL = process.env.EMAIL_SERVICE;
const recipient = process.env.RECIPIENT_EMAIL;



 export const sendEmail = async(messageData)=> {

    const transporter = createTransport({
        port: 465,
        host: "smtp.ukr.net",
        auth: {
          user: EMAIL,
          pass: PASS,
        },
        secure: true,
      });

      const {name, email, message} = messageData;

      const mailData = {
        from: EMAIL,
        to: recipient,
        subject: `Повідомлення від: ${name}, ${email}`,
        text: message,
        html: `<div>${message}</div><p>Адреса зворотнього звязку:
        ${email}</p>`
      };

  

    try {
      const res = await transporter.sendMail(mailData);
      return res;
      } catch (error) {
        throw error;
      }
 };