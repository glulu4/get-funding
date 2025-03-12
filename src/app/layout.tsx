"use client"
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inria_Serif, Inter, Mulish } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Providers from "@/components/theme-provider";
import FormProvider from "@/context/form-context";
// const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontSans = Mulish({ 
  weight: ["200", "300" ,"400" ,"500" ,"600" ,"700" ,"800" ,"900" ,"1000" ],
  subsets: ["latin"], 
  variable: "--font-sans" });


  const fontSerif = Inria_Serif({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    variable: "--font-serif",
  })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased m-auto",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <FormProvider>
            <main>
              <Header />

              {children}
              <Footer />
            </main>
          </FormProvider>

        </Providers>
      </body>
    </html>
  );
}
