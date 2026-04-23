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
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='16' fill='%237c3aed'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='system-ui,sans-serif' font-weight='700' font-size='13' fill='white' letter-spacing='-0.5'>RM</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}