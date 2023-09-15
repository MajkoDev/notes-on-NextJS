import { Suspense } from "react";
import { Rubik } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Loading from "./loading";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "basic NextJS",
  description: "NextJS application with basic features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <Suspense fallback={<Loading />} />
        {children}
      </body>
    </html>
  );
}
