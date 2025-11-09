import {NextResponse} from 'next/server';

import {z} from 'zod';

export const runtime = 'edge';

const schema = z.object({
  email: z.string().email()
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({success: false}, {status: 400});
  }

  // Placeholder: integrate with Brevo/Mailerlite here
  return NextResponse.json({success: true});
}
