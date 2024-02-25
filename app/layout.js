import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "@thisisvikasmourya",
  description:
    "MERN developer adept at meeting user needs with high-quality, clean code. Strong in design, development, and deployment. Collaborates for flawless applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} oncontextmenu={"return false"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
