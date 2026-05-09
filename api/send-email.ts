import type { VercelRequest, VercelResponse } from "@vercel/node";

const ALLOWED_ORIGIN = "https://rv-portfolio-sigma.vercel.app";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

interface ContactMessage {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers on every response
  Object.entries(corsHeaders).forEach(([key, value]) => res.setHeader(key, value));

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message, captchaToken } = req.body as ContactMessage;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (name.length > 200 || email.length > 254 || message.length > 5000) {
      return res.status(400).json({ error: "Input exceeds allowed length" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    if (!captchaToken) {
      return res.status(400).json({ error: "CAPTCHA verification required" });
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SECRET_KEY not configured");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const captchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${recaptchaSecret}&response=${captchaToken}`,
    });

    const captchaData = await captchaResponse.json() as { success: boolean; score: number };

    if (!captchaData.success || captchaData.score < 0.5) {
      return res.status(400).json({ error: "CAPTCHA verification failed" });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.log("Email service not configured, but form data received:", { name, email, message });
      return res.status(200).json({ success: true });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: "romana.vitkova.coach@gmail.com",
        reply_to: email,
        subject: `Nová zpráva z kontaktního formuláře - ${name}`,
        html: `
          <div style="font-family: sans-serif; color: #333;">
            <h2>Nová zpráva z kontaktního formuláře</h2>
            <p><strong>Jméno:</strong> ${escapeHtml(name)}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Zpráva:</strong></p>
            <p style="background: #f5f5f5; padding: 12px; border-radius: 4px;">${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
