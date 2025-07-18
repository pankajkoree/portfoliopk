import "./globals.css";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "500",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.className} dark:bg-[#18181B]`}>
        {children}
      </body>
    </html>
  );
}
