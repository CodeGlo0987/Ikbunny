import localfont from "next/font/local";
import "./globals.css";

const Orbitrons = localfont({
  src: [
    {
      path: "../BebasNeue-Regular.ttf",
    },
  ],
  variable: "--font--bebas",
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "IkBunny | Official",
  description:
    "Shop Ik Bunny for high-quality furry suits that bring your wildest characters to life! Explore our vibrant designs, custom options, and unbeatable comfort. Perfect for conventions, parties, or personal expression. Embrace your furry side today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Orbitrons.variable} antialiased`}>{children}</body>
    </html>
  );
}
