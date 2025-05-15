
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
  metadataBase: new URL("https://www.gettfunded.com"),
  title: "Gett Funded | Fast Business & Startup Loans with Quick Approval",
  description: "Get access to funding with Gett Funded. Apply for business loans, startup financing, personal funding, and more. Fast approval, flexible repayment, and competitive rates.",
  keywords: "business funding, startup loans, personal financing, small business loans, fast approval loans, venture capital, angel investors, SBA loans, funding for new businesses, easy business loans, no credit check business loans, flexible repayment loans",
  openGraph: {
    title: "Gett Funded | Secure Business & Startup Loans Instantly",
    description: "Apply for fast business and startup funding with Gett Funded. Get approved quickly and access the capital you need for growth.",
    url: "https://www.gettfunded.com",
    siteName: "Gett Funded",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gett Funded - Secure Business & Startup Loans",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gett Funded | Business & Personal Loans with Fast Approval",
    description: "Need funding? Gett Funded offers quick approval business and startup loans with flexible terms. Apply today!",
    images: ["/opengraph-image.png"],
  },

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of funding does Gett Funded offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gett Funded provides business loans, startup financing, personal funding, and flexible repayment plans. Whether you're a new entrepreneur or an established business owner, we help you secure the right financial solution."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can I get approved for funding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer same-day approvals for qualifying applicants. Most funding applications are reviewed within 24 hours."
          }
        },
        {
          "@type": "Question",
          "name": "What credit score is required for funding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with applicants across all credit levels. While higher credit scores may qualify for better terms, we also provide funding options for those with less-than-perfect credit."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any upfront fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, Gett Funded does not charge any upfront fees. We provide transparent pricing and terms with no hidden costs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer funding for startups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer startup funding for new businesses, even those without an extensive financial history. Get financing to launch and grow your startup with ease."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get funding without a business plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer funding solutions that do not require a formal business plan. Approval depends on various factors, including revenue, credit score, and business potential."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you provide funding for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide funding for businesses in various industries, including retail, technology, healthcare, real estate, e-commerce, manufacturing, and more."
          }
        }
      ]
    })
  },
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
