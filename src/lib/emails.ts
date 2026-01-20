import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const passwordSendEmail = process.env.RESEND_PASSWORD_RESET_EMAIL;

export async function sendEmail({
  to,
  subject,
  html,
  text,
  attachments,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer | string }[];
}) {
  const { data, error } = await resend.emails.send({
    from: `Prime Capital <${passwordSendEmail}>`,
    to: to,
    subject: subject,
    html: html,
    text: text,
    attachments: attachments,
  });

  if (error) {
    console.error("Resend API Error");
    throw new Error(`Failed to send email: ${error.message}`);
  }

  return data;
}

export function sendPasswordResetEmail({
  user,
  url,
}: {
  user: { email: string; name: string };
  url: string;
}) {
  return sendEmail({
    to: user.email,
    subject: "Reset your password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Reset Your Password</h2>
        <p>Hello ${user.name},</p>
        <p>You requested to reset your password. Click the button below to reset it:</p>
        <a href="${url}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0;">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link will expire in 24 hours.</p>
      </div>
    `,
    text: `Hello ${user.name},\n\nYou requested to reset your password. Click this link to reset it: ${url}\n\nIf you didn't request this, please ignore this email.\n\nThis link will expire in 24 hours.\n`,
  });
}

export async function sendEmailVerificationEmail({
  user,
  url,
}: EmailVerificationData) {
  await sendEmail({
    to: user.email,
    subject: "Verify your email address",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Verify Your Email</h2>
        <p>Hello ${user.name},</p>
        <p>Please verify your email address by clicking the button below:</p>
        <a href="${url}" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0;">Verify Email</a>
        <p>If you didn't create an account, please ignore this email.</p>
        <p>This link will expire in 24 hours.</p>
      </div>
    `,
    text: `Hello ${user.name},\nPlease verify your email address by clicking this link: ${url}\n\nIf you didn't create an account, please ignore this email.\n\nThis link will expire in 24 hours.\n`,
  });
}

interface EmailVerificationData {
  user: {
    name: string;
    email: string;
  };
  url: string;
}

export function sendOtpEmail({
  user,
  otp,
}: {
  user: { email: string; name: string };
  otp: string;
}) {
  return sendEmail({
    to: user.email,
    subject: "Prime Capital - One-Time Password (OTP)",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Your OTP Code</h2>
        <p>Hello ${user.name},</p>
        <p>Use the code below to verify your identity or complete your sign-in:</p>
        <div style="font-size: 28px; font-weight: bold; letter-spacing: 4px; margin: 24px 0; text-align: center; color: #007bff;">
          ${otp}
        </div>
        <p>This code will expire in 10 minutes for your security.</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
    text: `Hello ${user.name},\n\nYour OTP code is: ${otp}\n\nThis code expires in 10 minutes.\nIf you didn't request this, please ignore this email.\n`,
  });
}
