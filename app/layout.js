import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-poppins dark:bg-[#18181B]`}>{children}</body>
    </html>
  );
}
