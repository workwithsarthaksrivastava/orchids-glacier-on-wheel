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

  const emailSubject = encodeURIComponent(`New Quote Request from ${name}`);
  const emailBody = encodeURIComponent(
    `New Quote Request\n\nName: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
  );

  const mailtoUrl = `mailto:nityojjwal@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return Response.json({ ok: true, mailtoUrl });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
