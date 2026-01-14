'use server'
 import { createTransport } from "nodemailer";

const PASS = process.env.EMAIL_SERVICE_PASS;
const EMAIL = process.env.EMAIL_SERVICE;
const defaultRecipient = process.env.RECIPIENT_EMAIL;
const StopCorruptionRecipient = process.env.STOP_CORRUPTION_RECIPIENT;



 export const sendEmail = async(mailData)=> {
 

    const transporter = createTransport({
        port: 465,
        host: "smtp.ukr.net",
        auth: {
          user: EMAIL,
          pass: PASS,
        },
        secure: true,
      });
      const recipient = mailData?.page === 'contact'? defaultRecipient : StopCorruptionRecipient;
      const {name, email, message} = mailData?.userData;

      const sendData = {
        from: EMAIL,
        to: recipient,
        subject: `Повідомлення від: ${name}, ${email}`,
        text: message,
        html: `<div>${message}</div><p>Адреса зворотнього звязку:
        ${email}</p>`
      };

    try {
      const res = await transporter.sendMail(sendData);
      return res;
      } catch (error) {
        throw error;
      }
 };