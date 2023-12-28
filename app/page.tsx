"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const messageHistory = [];

export default function Home() {
  const [message, setMessage] = useState('')

  async function sendSMS() {
    await fetch('/api/send-sms',{
      method: "POST",
      headers: {
        "content-type": "application.json"
      },
      body: JSON.stringify({
        message: message
      })
    })
  }

  async function recieveSMS(){
    await fetch('api/recieve-sms',{
      method:'POST',
      headers:{
        'content-type': 'application.json'
      },
      body: JSON.stringify({
        messageReceived: message
      })
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {messageHistory}
        <form>
          <label>Sending to:</label>
          <input placeholder='message' type='text' value={message} onChange={(e) => setMessage(e.target.value)} className='text-black'/>
          <button className='bg-green-900 p-16' type='submit' onClick={sendSMS}>Send Message</button>
        </form>
      </div>
    </main>
  )
}
