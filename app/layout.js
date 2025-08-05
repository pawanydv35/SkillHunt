import { Geist, Geist_Mono } from "next/font/google";
import navbar from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillHunt",
  description: "SkillHunt is a modern job portal connecting skilled professionals with top companies. Explore thousands of job listings, post openings, and hire the right talent faster. Your career starts here",
};

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <main className="pt-16"> {/* pt-16 to avoid overlapping navbar */}
//         {/* Your page content here */}
//       </main>
//     </>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
