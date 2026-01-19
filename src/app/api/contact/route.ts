import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

/**
 * Node runtime required for Resend
 */
export const runtime = "nodejs";

/**
 * Disable caching for submissions
 */
export const dynamic = "force-dynamic";

/**
 * POST /api/contact
 */
export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 },
      );
    }

    const body = await req.json();

    const payload = {
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      requirement: sanitize(body.requirement),
      subCategory: sanitize(body.subCategory),
      message: sanitize(body.message),
      source: sanitize(body.source),
    };

    // Required validation
    if (!payload.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    try {
      await sendContactEmail(payload);
    } catch (err) {
      console.error("Email error:", err);
      return NextResponse.json(
        { error: "Email service unavailable" },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}

/* ---------- helpers ---------- */

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
