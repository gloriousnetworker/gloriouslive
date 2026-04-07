import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: "iniubongudofot2000@gmail.com",
        subject: `New Portfolio Contact: ${name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #6d28d9; padding: 24px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Request</h1>
              <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">From your portfolio at gloriouslive.vercel.app</p>
            </div>
            <div style="background: #111113; padding: 24px; border-radius: 0 0 12px 12px; color: #e4e4e7;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #8b5cf6; font-weight: bold; width: 80px; vertical-align: top;">Name</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #8b5cf6; font-weight: bold; vertical-align: top;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #22d3ee;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #8b5cf6; font-weight: bold; vertical-align: top;">Message</td>
                  <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 16px 0;" />
              <p style="color: rgba(255,255,255,0.3); font-size: 12px; margin: 0;">
                Sent at ${new Date().toISOString()} • Reply directly to ${email}
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
