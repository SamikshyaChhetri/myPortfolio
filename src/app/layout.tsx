import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Samikshya Baniya Chhetri",
  description:
    "Welcome to the portfolio of Samikshya Baniya Chhetri, a passionate full-stack developer with expertise in modern web technologies like Next.js, Tailwind CSS, Prisma, and Express. Explore innovative projects like custom UI components, payroll systems, and creative Matter.js animations. With a strong focus on scalability and unique ideas, Samikshya thrives on building meaningful solutions and is always eager to learn and experiment. Dive into projects that blend creativity and functionality, showcasing a developer dedicated to crafting exceptional user experiences.",
  keywords:
    "Samikshya, Portfolio, Developer, Designer, Full Stack Developer, Frontend Developer, Backend Developer, UI/UX Designer, Samikshya, Baniya,Chhetri, Next.js Developer, Tailwind CSS Expert, Prisma Developer, Creative Animations, Matter.js Developer, Modern Web Solutions, Node.js Developer, Express.js Applications, Custom UI Components, Web Technology Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
