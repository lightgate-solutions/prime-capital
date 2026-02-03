/** biome-ignore-all lint/style/noNonNullAssertion: <> */
/** biome-ignore-all lint/complexity/noUselessLoneBlockStatements: <> */

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SES_CONFIG = {
  accessKeyId: process.env.AWS_SES_ACCESS_KEY!,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY!,
};

const sesClient = new SESv2Client({
  region: process.env.AWS_SES_REGION!,
  credentials: SES_CONFIG,
});

const transporter = nodemailer.createTransport({
  SES: { sesClient, SendEmailCommand },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Send email using Resend
    const info = await transporter.sendMail({
      from: process.env.RESEND_SENDER_EMAIL as string,
      to: process.env.CONTACT_EMAIL as string,
      subject: `New Contact Inquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Inquiry</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #D4AF37 0%, #C5A028 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Inquiry</h1>
            </div>

            <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
              <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #D4AF37; margin-top: 0; font-size: 18px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Contact Details</h2>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
                    <td style="padding: 10px 0; color: #333;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                    <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #D4AF37; text-decoration: none;">${email}</a></td>
                  </tr>
                  ${
                    phone
                      ? `
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
                    <td style="padding: 10px 0; color: #333;">${phone}</td>
                  </tr>
                  `
                      : ""
                  }
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Inquiry Type:</td>
                    <td style="padding: 10px 0; color: #333;">${subject}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: white; padding: 20px; border-radius: 8px;">
                <h2 style="color: #D4AF37; margin-top: 0; font-size: 18px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Message</h2>
                <p style="color: #333; white-space: pre-wrap; margin: 0;">${message}</p>
              </div>

              <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-left: 4px solid #D4AF37; border-radius: 4px;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                  <strong>Action Required:</strong> Please respond to this inquiry within one business day.
                </p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
              <p>This email was sent from the Prime Capital contact form.</p>
              <p style="margin: 5px 0;">Prime Capital | No. 3, Sankuru Close, off Rima Street, Maitama, Abuja, Nigeria</p>
            </div>
          </body>
        </html>
      `,
    });

    if (info.rejected) {
      console.error("Error sending contact email:", info.response);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    {
      /**

    // Wait 1 second before sending acknowledgment email
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Send acknowledgment email to user
    const acknowledgmentResult = await transporter.sendMail({
      from: process.env.RESEND_SENDER_EMAIL as string,
      to: email,
      subject: "Thank you for contacting Prime Capital",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You for Your Inquiry</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #D4AF37 0%, #C5A028 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out</h1>
            </div>

            <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
              <div style="background-color: white; padding: 20px; border-radius: 8px;">
                <p style="color: #333; margin-top: 0;">Dear ${name},</p>

                <p style="color: #333;">Thank you for contacting Prime Capital. We have received your inquiry regarding <strong>${subject}</strong>.</p>

                <p style="color: #333;">Our team will review your message and get back to you shortly.</p>

                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #D4AF37; border-radius: 4px;">
                  <p style="margin: 0; color: #555; font-size: 14px;">
                    <strong>Your Message:</strong><br>
                    <span style="white-space: pre-wrap;">${message}</span>
                  </p>
                </div>

                <p style="color: #333;">If you have any urgent concerns, please feel free to call us directly.</p>

                <p style="color: #333; margin-bottom: 0;">Best regards,<br><strong style="color: #D4AF37;">Prime Capital Team</strong></p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
              <p>Prime Capital | No. 3, Sankuru Close, off Rima Street, Maitama, Abuja, Nigeria</p>
              <p style="margin: 5px 0;">This is an automated response. Please do not reply to this email.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (acknowledgmentResult.rejected) {
      console.error(
        "Error sending acknowledgment email:",
        acknowledgmentResult.response,
      );
      // Don't fail the request if acknowledgment fails
    }
  **/
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
