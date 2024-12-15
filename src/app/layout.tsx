import NavBar from "./Components/NavBar";
import "./globals.css";
import { ThemeProvider } from "./Components/ThemeProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <NavBar />
        <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
