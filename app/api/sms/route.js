const MessagingResponse =
  require("twilio").twiml.MessagingResponse;

  
export default function POST(request, response){
  const twiml = new MessagingResponse();
  twiml.message("Thank you for confirming your appointment.");
  response.type('text/xml').send(twiml.toString());

  console.log(twiml)
}