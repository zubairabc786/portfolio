import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./Home/Nav/ResponsiveNav";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "WebDev Portfolio",
  description: "WebDev portfolio with next js 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
