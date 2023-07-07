import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./sections/Footer";
import ToasterProvider from "./components/providers/ToasterProvider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Happy Dental",
  description: "Artykuły do higieny jamy ustnej",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
