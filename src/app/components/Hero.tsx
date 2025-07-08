import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Hero() {
  return (
    <main className="relative z-10 px-6 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo Section */}
        <div
          className={`flex items-center justify-center mb-16 ${poppins.className}`}
        >
          <div className="flex items-center space-x-3">
            <Image
              src="/unit-logo.svg"
              width={30}
              height={30}
              alt="Unit Logo"
            />
            <span className="text-xl font-normal text-gray-700">
              Unit Network
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[82px] font-bold text-gray-900 mb-8 leading-tight">
          Build the Future of
          <br />
          <span className="font-bold text-gray-900 mb-8 bg-clip-text ">
            AI, Together.
          </span>
        </h1>

        {/* Description */}
        <div className="space-y-4 mb-12">
          <p className="text-xl text-gray-400  mx-auto">
            Full-stack AI studio and ecosystem for creative
            technologists,engineers, and researchers.
          </p>
          <p className="text-xl text-gray-400  mx-auto">
            From prompt to product, we power the{" "}
            <span className="font-semibold text-gray-900">next generation</span>{" "}
            of intelligent tools, content, and infrastructure.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mb-8">
          <Button className="rounded-full px-35 py-8 text-2xl text-white bg-gradient-to-b from-[#D5BFFF] to-[#7B61FF] shadow-md font-medium ">
            Launch Studio
          </Button>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button className="rounded-full text-sm md:text-lg px-6 md:px-9 py-4 md:py-6 text-[#7063c9] font-medium ">
            Explore Platform
          </Button>
          <Button className="rounded-full text-sm md:text-lg px-6 md:px-9 py-4 md:py-6 text-[#7063c9] font-medium  ">
            Join the Network
          </Button>
        </div>
      </div>
    </main>
  );
}
