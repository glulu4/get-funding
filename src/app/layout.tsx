
// "use client"
import {cn} from "@/lib/utils";
import type {Metadata} from "next";
import {Inria_Serif, Inter, Mulish} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Providers from "@/components/theme-provider";
import toast, {Toaster} from 'react-hot-toast';

// const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontSans = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--font-sans"
});


const fontSerif = Inria_Serif({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})


export const metadata = {
  title: "Demo Title",
  description: "Get access to funding with Company X. Apply for business loans, startup financing, personal funding, and more. Fast approval, flexible repayment, and competitive rates.",
  keywords: "business funding, startup loans, personal financing, small business loans, fast approval loans, venture capital, angel investors, SBA loans, funding for new businesses, easy business loans, no credit check business loans, flexible repayment loans",
  
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16919707289"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16919707289');
          `,
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZ969433');
            `,
          }}
        /> */}
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased m-auto",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <noscript
          // dangerouslySetInnerHTML={{
          //   __html: `
          //     <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZ969433"
          //     height="0" width="0" style="display:none;visibility:hidden"></iframe>
          //   `,
          // }}
        />
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
          <Toaster/>
        </Providers>
      </body>
    </html>
  );
}
