import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rubymbete.m@gmail.com",
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7B2FBE;">New message from your portfolio!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f3ff; padding: 1rem; border-radius: 0.5rem;">
            ${message}
          </p>
          <p style="color: #666; font-size: 0.875rem;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
