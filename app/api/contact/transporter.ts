"use strict";
import nodemailer from "nodemailer";

const config = {
  service: "gmail",
  auth: {
    user: process.env.NEXT_PRIVATE_GMAIL_USER,
    pass: process.env.NEXT_PRIVATE_GMAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(config);

type SenderParams = {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const send = async (params: SenderParams) => {
  const info = await transporter.sendMail({
    from: params.from,
    to: params.to,
    subject: params.subject,
    html: params.html,
  });
  console.log("Message sent: %s", info.messageId);
  return info;
}

export default send;