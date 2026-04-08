'use server'
import { NextResponse } from 'next/server';
import { sendEmail } from '@/server/email_service/email_service';
import { Resend } from 'resend'

/*
export async function POST(req) {
  const data = await req.json();

  try {

      const result =  await sendEmail(data);

      if(result.accepted[0]){ 
        return NextResponse.json({ok: true, message: 'Message sent successfully' }, { status: 200 });} else{

          return NextResponse.json({ message: result.response}, { status: result.responseCode });
        }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
*/


const resend = new Resend(process.env.RESEND_API_KEY);
const defaultRecipient = process.env.RECIPIENT_EMAIL;
const StopCorruptionRecipient = process.env.STOP_CORRUPTION_RECIPIENT;

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, message } = body?.userData || {};
    const recipient = body?.page === 'contact'? defaultRecipient : StopCorruptionRecipient;

    if (!name || !email || !message) {
      throw new Error('Missing fields')
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: recipient, 
      subject: `Повідомлення від: ${name}, ${email}`,
      text: message,
      html: `
        <div>${message}</div>
        <p><b>Email:</b> ${email}</p>
      `,
    })

    if (error) throw new Error(error.message)

    return Response.json({ ok: true, data })
  } catch (error) {
    return Response.json({ ok: false, message: error.message })
  }
}