import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import Navbar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/helveticanowdisplay-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/helveticanowdisplay-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNowDisplay-LightIta.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/helveticanowdisplay-blackita.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const metadata = {
  title: "Sprintexa — Ship Sprints Faster",
  description:
    "Sprintexa helps teams plan, track, and ship sprints without the chaos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${helvetica.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
