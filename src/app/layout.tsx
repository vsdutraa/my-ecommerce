// global context provider
import { GlobalProvider } from "./GlobalProvider";

// styles
import "@/styles/globals.css";

// next imports
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
          </nav>
          <main>{children}</main>
        </body>
      </html>
    </GlobalProvider>
  );
}
