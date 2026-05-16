import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // In a real production environment, you would use a service like Resend, SendGrid, or Nodemailer here.
    // For now, we'll simulate the successful submission and log the formatted message.
    
    console.log("--- NEW CONTACT FORM SUBMISSION ---");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("-----------------------------------");

    // This is the formatted message that would be sent to info@bulwark.co.ke
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 40px; border: 1px solid #eee; border-radius: 20px;">
        <h2 style="color: #FF5400; font-size: 24px; font-weight: 900; margin-bottom: 20px;">NEW INQUIRY: ${subject}</h2>
        
        <div style="margin-bottom: 30px;">
          <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; font-weight: 900;">Sender Details</p>
          <p style="margin: 5px 0; font-size: 16px; font-weight: bold; color: #1e293b;">${name}</p>
          <p style="margin: 0; font-size: 14px; color: #64748b;">${email}</p>
        </div>

        <div style="background: #f8fafc; padding: 30px; rounded: 15px; border-left: 4px solid #FF5400;">
          <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; font-weight: 900; margin-bottom: 10px;">Message Content</p>
          <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1e293b;">${message}</p>
        </div>

        <div style="margin-top: 40px; border-top: 1px solid #eee; pt: 20px; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px;">This message was sent from the Bulwark Industries Contact Form.</p>
        </div>
      </div>
    `;

    return NextResponse.json({ 
      success: true, 
      message: "Inquiry received. Our team will contact you shortly." 
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Failed to send message. Please try again later." 
    }, { status: 500 });
  }
}
