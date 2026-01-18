// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

/**
 * Explicit runtime (Node required for Resend)
 */
export const runtime = "nodejs";

/**
 * Disable caching for form submissions
 */
export const dynamic = "force-dynamic";

/**
 * POST /api/contact
 * Handles sidebar + page contact forms
 */
export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 }
      );
    }

    const body = await req.json();

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const message = sanitize(body.message);
    const source = sanitize(body.source); // optional

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email
    await sendContactEmail({
      name,
      email,
      message,
      source,
    });

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

/* ------------------ helpers ------------------ */

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isValidEmail(email: string): boolean {
  // RFC 5322 simplified
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
