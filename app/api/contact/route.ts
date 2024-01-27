import send from '@/app/api/contact/transporter';
import Mailgen from 'mailgen';
import composeEmail from '@/app/api/contact/composeEmail';


export async function POST(request: Request) {
  const data = await request.json();
  
  const emailAddress = process.env.NEXT_PRIVATE_EMAIL_CONTACT ?? '';
  const emailString = `${emailAddress}, ${data.name} <${data.email}>}`;
  const actionEmail = composeEmail(data);

  send({
    from: process.env.NEXT_PUBLIC_GMAIL_USER ?? '',
    to: emailString,
    subject: `${data.name} has requested a quote -- 4 Seasons Landscaping`,
    html: actionEmail,
  }).catch((err) => console.log(err));
  return new Response('OK');
};

