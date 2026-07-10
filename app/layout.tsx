import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damien Nsoh Ayine | Software Engineer | DevOps | Cybersecurity",
  description: "Full-Stack Software Engineer with a unique background in public health. Building AI-native applications, cloud infrastructure, and secure systems that bridge technology and human impact.",
  keywords: ["Software Engineer", "DevOps", "Cybersecurity", "AI", "Full-Stack", "Next.js", "React", "Python", "AWS", "Ghana"],
  authors: [{ name: "Damien Nsoh Ayine" }],
  openGraph: {
    title: "Damien Nsoh Ayine | Software Engineer",
    description: "Full-Stack Engineer bridging public health and technology. AI-native apps, cloud infrastructure, and secure systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
