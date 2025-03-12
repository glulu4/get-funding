import Features from "@/components/landing/Features";
import {Hero} from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Row1 from "@/components/Row1";
import Head from "next/head";

const Page = () => {
  // w-5/6
  return (
    <div className="mx-auto min-h-screen ">
      <Head>
        <title>Gett Funded | Fast & Flexible Funding Solutions</title>
        <meta name="description" content="Gett Funded provides quick access to funding solutions for businesses and individuals. Apply today and secure the financial support you need." />
        <meta name="keywords" content="business funding, personal loans, quick approval, small business loans, startup funding, flexible financing" />
        <meta name="author" content="Gett Funded" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://www.gettfunded.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gett Funded | Fast & Flexible Funding Solutions" />
        <meta property="og:description" content="Gett Funded provides quick access to funding solutions for businesses and individuals. Apply today and secure the financial support you need." />
        <meta property="og:image" content="https://www.gettfunded.com/opengraph-image.png" />



          <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of funding does Gett Funded offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gett Funded provides a variety of financing options, including business loans, personal loans, startup funding, and flexible financing plans. Whether you need quick cash flow solutions or long-term funding, we have you covered."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can I get approved for funding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer rapid approvals, with most applicants receiving a decision within 24 hours. Some funding options provide same-day deposits."
          }
        },
        {
          "@type": "Question",
          "name": "What credit score is required for funding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with applicants across all credit levels. While higher credit scores may qualify for better terms, we also offer financing solutions for those with less-than-perfect credit."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any upfront fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, we do not charge upfront fees for loan applications. We provide transparent pricing and terms with no hidden costs."
          }
        },
        {
          "@type": "Question",
          "name": "How do I apply for a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can apply online in just a few minutes. Simply fill out our application form, submit your details, and receive a decision quickly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer startup funding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We specialize in funding for startups, offering financing solutions tailored to new businesses, even those without an extensive credit history."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get funding if my business is new?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer funding solutions for new businesses and startups. Even if your business has limited financial history, we can help find the right financing option."
          }
        }
      ]
    })}
  </script>
      </Head>
      <div className="space-y-16">


      <div className="bg-primaryGreenDark rounded-b-3xl">
          <Hero />
      </div>

      <div className="w-5/6 mx-auto space-y-10">
          <Row1 />
      </div>

        <div className="w-5/6 mx-auto space-y-10 bg-white rounded-xl">
          <Features />
        </div>

      <div className="py-10">
        <TrustedBy/>
      </div>

      </div>

    </div>
  );
};

export default Page;
