import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "basic NextJS",
  description: "NextJS application with basic features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center py-4">
          <h1 className="font-[900] text-[82px]">The Times</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
