import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "./providers";
import Header from "../components/Header";
import AuthButton from "../components/AuthButton"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Div355 TCRC",
  description: "Union serving Engineers, Trainmen, Conductors employed by CPKC in Calgary",


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="h-screen flex flex-col items-center justify-item">
          <Providers>
            <div className="w-screen flex mb-2 sticky top-0 bg-transparent">
              <Header />
              <AuthButton />
            </div>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
