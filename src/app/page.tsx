import Features from "@/components/landing/Features";
import {Hero} from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Row1 from "@/components/Row1";

const Page = () => {
  // w-5/6
  return (
    <div className="mx-auto min-h-screen ">
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
