import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import { Quicksand } from "next/font/google";

const robotoFont = Roboto_Condensed({
  variable: "--font--condensed-roboto",
  weight: ["400", "700"],
  subsets: ["latin"]
});

const quicksandFont = Quicksand({
  variable: "--font-quicksand",
  weight: ["300"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoFont.variable} ${quicksandFont.variable}`}>
        <Theme appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
