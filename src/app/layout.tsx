import NavBar from "./components/NavBar";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "@/components/provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Toaster 
        position="bottom-center"
        visibleToasts={2}
        expand
        richColors
        />
        <NavBar />
        <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
