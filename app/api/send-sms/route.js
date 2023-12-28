import twilio from 'twilio';
import { NextResponse } from 'next/server';
import { messageHistory } from '@/app/page';

const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export async function POST(request){
  const { message } = await request.json();

  client.messages.create({
    body: message,
    from:'+18444745161',
    to:'+17072960426'
  })

  try{
    console.log(message)
  } catch{
    console.log(error)
  }

  return NextResponse.json({message: "Success"}, {status: 200})
}
