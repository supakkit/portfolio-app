import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { ThemeProvider } from "@/components/navigation/theme-provider";
import { AppTopBar } from "@/components/navigation/app-top-bar";
import { DockContact } from "@/components/home/dock-contact";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supakkit's Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full relative">
              <AppTopBar />
              <div className="min-h-screen -mt-16 px-8">{children}</div>
              <DockContact />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
