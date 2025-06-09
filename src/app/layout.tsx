import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggleThemes } from "@/components/nav-theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haziq Mohsin",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed right-10 top-10 z-10">
            <ModeToggleThemes />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
