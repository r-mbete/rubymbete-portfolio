import { Resend } from "resend";

// Escape user-supplied text before it goes into the email HTML.
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  // Per-request, not module scope: a missing key would otherwise fail the build.
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { success: false, error: "Email is not configured." },
      { status: 500 },
    );
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rubymbete.m@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7B2FBE;">New message from your portfolio!</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f3ff; padding: 1rem; border-radius: 0.5rem; white-space: pre-wrap;">
            ${escapeHtml(message)}
          </p>
          <p style="color: #666; font-size: 0.875rem;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return Response.json(
      { success: false, error: "Could not send message. Please try again." },
      { status: 500 },
    );
  }
}
