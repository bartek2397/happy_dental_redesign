import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./sections/Footer";
import ToasterProvider from "./components/providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Happy Dental",
  description: "Artykuły do higieny jamy ustnej",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <body className={raleway.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        {children}
        <Footer />
      {/* <script src="https://accounts.google.com/gsi/client" async></script> */}
      </body>
    </html>
  );
}

