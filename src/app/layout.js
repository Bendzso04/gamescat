import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import SessionProviderWrapper from "./SessionProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catalog App",
  description: "Top Playstation games wishlist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          <Navbar />
          <div className="items-center w-[80vw] min-h-screen flex flex-col justify-between m-auto px-[3em]">
            {children}
          </div>
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
