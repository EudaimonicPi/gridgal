import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/wholeApp/header'
import NextAuthSessionProvider from "@/providers/SessionProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PostaGrid",
  description: "Post Fractal Grids!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
         <NextAuthSessionProvider >
          <div>
            <div style={{flex: '1'}}>
             <Header title={"PostaGrid Gallery"} msg={'Post and View 1-Page Fractal Grids from the Community!'}/>
          </div>

          <div style={{flex: '9', padding: '2%'}}>
            {children}
          </div>
        </div>
        </NextAuthSessionProvider>
        </body>
    </html>
  );
}
