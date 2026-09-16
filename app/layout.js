import { ThemeProvider } from "next-themes";
import MotionProvider from "@/components/ui/MotionProvider";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

// Display: a true Didone, matching the reference and the palette board.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

// Labels, UI and body copy.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Ruby Mbete | Software Engineer & UI/UX Designer",
  description:
    "Portfolio of Ruby Mbete Mutaki — Software Engineer and UI/UX Designer building clean, accessible, and performant digital experiences.",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Next.js",
    "Angular",
    "React",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%233B0A0A'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='Georgia,serif' font-size='15' fill='%23E3EBF2'>RM</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodoni.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
