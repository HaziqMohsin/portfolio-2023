import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggleThemes } from "@/components/nav-theme";
import Script from "next/script";

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
         {/* <Script id="chatbot-config" strategy="beforeInteractive">
          {`
            window.marinaIP = 'https://uat.hlb.com.my/ai-chatbot/bcb';
            window.userDataString = '{chatSessionID: "123123123", isLoginInFlag: "false", SourceChat: "BCB"}';
          `}
        </Script> */}

        {/* Load chatbot script as module */}
        {/* <Script
          src="https://hlb-gt-aicoe-watson-uat.web.app/Qchat.js"
          type="module"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
