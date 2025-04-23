'use server'
import { NextResponse } from 'next/server';
import { sendEmail } from '@/server/email_service/email_service';



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