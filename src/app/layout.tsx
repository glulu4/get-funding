// "use client"
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inria_Serif, Inter, Mulish } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Providers from "@/components/theme-provider";
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


export const metadata = {
  title: "Gett Funded | Fast & Flexible Funding Solutions",
  description: "Secure funding with fast approvals and flexible financing options.",
  keywords: "business funding, startup loans, personal financing, small business loans, fast approval funding, flexible financing",
  openGraph: {
    title: "Gett Funded | Get the Funding You Need Fast",
    description: "Get approved for business and personal funding quickly. Apply today and secure the financing you need.",
    url: "https://www.gettfunded.com",
    siteName: "Gett Funded",
    images: [
      {
        url: "https://www.gettfunded.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gett Funded Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gett Funded | Quick & Flexible Funding Solutions",
    description: "Need funding? Gett Funded provides fast approvals and flexible financing options for businesses and individuals.",
    images: ["https://www.gettfunded.com/opengraph-image.png"],
  },
};



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
          {/* <FormProvider> */}
            <main>
              <Header />

              {children}
              <Footer />
            </main>
          {/* </FormProvider> */}

        </Providers>
      </body>
    </html>
  );
}
