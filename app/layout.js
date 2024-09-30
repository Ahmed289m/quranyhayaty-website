import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "700"],
});
export const metadata = {
  title: {
    template: "%s | قرآني حياتي",
    default: "قرآني حياتي",
  },
  description: "Islamic website for test and islamic blogs",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${amiri.className} text-primary-100 min-h-screen flex flex-col bg-primary-950 relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
