import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/wholeApp/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PostaGrid",
  description: "Post Fractal Grids!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
          <div>
            <div style={{flex: '1'}}>
             <Header title={"PostaGrid Gallery"} msg={'Post and View Fractal Grids from the Community!'}/>
          </div>

          <div style={{flex: '9', padding: '2%'}}>
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
