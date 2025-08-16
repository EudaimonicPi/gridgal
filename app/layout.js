import { Inter } from "next/font/google";
import Header from '@/components/elements/Header'
import NextAuthSessionProvider from "@/providers/SessionProvider";
import "@/styles/globals.css";
import { UserProvider } from "@/providers/UserProvider";


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
           <UserProvider>
          <div>
              <div style={{flex: '1'}}>
              <Header title={"PostaGrid Gallery"} msg={'Post and View 1-Page Fractal Grids from the Community!'}/>
              </div>
            <div style={{flex: '9', padding: '2%'}}>
              {children}
            </div>
        </div>
        </UserProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
