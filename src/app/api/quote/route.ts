import { z } from "zod";

const quoteRequestSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = quoteRequestSchema.safeParse(json);
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const { name, company, phone, email, service, message } = parsed.data;

  const whatsappMessage = `*New Quote Request*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Company:* ${encodeURIComponent(company)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*Service:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;

  const whatsappUrl = `https://wa.me/917761925078?text=${whatsappMessage}`;

  return Response.json({ ok: true, whatsappUrl });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
