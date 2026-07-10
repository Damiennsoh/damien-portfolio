import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the contact form submission (replace with actual email service)
    console.log("Contact Form Submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (e.g., SendGrid, Resend, Nodemailer)
    // For now, return success
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
