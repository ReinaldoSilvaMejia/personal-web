import type { Metadata } from "next";
import { Bitter, Karla } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider, noFlashThemeScript } from "@/components/providers/ThemeProvider";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reinaldosilva.dev"),
  title: "Reinaldo Silva Mejía",
  description:
    "Ingeniero informático especializado en optimización de procesos — travel tech, fintech y aerolíneas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bitter.variable} ${karla.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Sets data-mode on <html> before hydration to avoid a flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
