import emailjs from "@emailjs/browser";
import { ContactFormData } from "@/types";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const AUTO_REPLY_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; warning?: boolean; message: string }> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return {
      success: false,
      message: "EmailJS configuration is missing.",
    };
  }

  const contactFormParams = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
    reply_to: data.email,
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, contactFormParams, PUBLIC_KEY);

  let autoReplyFailed = false;
  if (AUTO_REPLY_TEMPLATE_ID) {
    try {
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message:
            "Thank you for contacting me! I have received your message and will get back to you soon.",
        },
        PUBLIC_KEY
      );
    } catch {
      autoReplyFailed = true;
    }
  }

  if (autoReplyFailed) {
    return {
      success: true,
      warning: true,
      message: "Message sent, but auto-reply failed.",
    };
  }

  return {
    success: true,
    message: "Message sent successfully! I'll get back to you soon.",
  };
}
