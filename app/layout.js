import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
