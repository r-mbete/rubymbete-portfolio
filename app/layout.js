import MotionProvider from "@/components/ui/MotionProvider";
import { Newsreader, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

// Display: a soft book serif, as on the palette card.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

// Labels, ordinals and chips: the card's mono caps.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Body copy and UI.
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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%234F0C28'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='Georgia,serif' font-size='15' fill='%23C5D2F8'>RM</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexMono.variable} ${inter.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
