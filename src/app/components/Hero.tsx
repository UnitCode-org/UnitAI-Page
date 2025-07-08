import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Sparkles } from "lucide-react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Hero() {
  return (
    <main id="hero" className="relative px-6 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <div className="absolute left-50">
          <Image src="/small-star.svg" alt="Star Icon" width={10} height={10} />
        </div>
        {/* Logo Section */}
        <div
          className={`flex items-center justify-center mb-16 ${poppins.className}`}
        >
          <div className="flex items-center space-x-3">
            <div className="absolute top-20 left-180">
              <Image
                src="/small-star.svg"
                alt="Star Icon"
                width={20}
                height={20}
              />
            </div>
            <Image src="/unit-logo.svg" width={1} height={1} alt="Unit Logo" />
            <span className="text-xl font-normal text-gray-700">
              Unit Network
            </span>
          </div>
        </div>

        <div className="relative border-2 border-dashed border-violet-400 ">
          <div className="absolute -bottom-2 -left-30 ">
            <Image
              src="/Notification.svg"
              alt="Notification Icon"
              width={190}
              height={190}
            />
          </div>
          <div className="absolute -top-20 -right-31 ">
            <Image
              src="/Settings.svg"
              alt="Settings Icon"
              width={190}
              height={190}
            />
          </div>
          <div className="absolute top-50 -right-61">
            <Image
              src="/small-star.svg"
              alt="Star Icon"
              width={20}
              height={20}
            />
          </div>
          {/* Corner dots */}
          <div className=" absolute -top-2 -left-2 w-3 h-3 bg-black  border-2 border-violet-400 rounded-sm"></div>

          <div className=" absolute -bottom-2 -left-2 w-3 h-3 bg-black  border-2 border-violet-400 rounded-sm"></div>
          <div className=" absolute -bottom-2 -right-2 w-3 h-3 bg-black border-2 border-violet-400  rounded-sm"></div>
          {/* Main Headline */}
          <h1 className="pt-5 text-5xl sm:text-6xl md:text-[82px] font-bold text-gray-900 mb-8 leading-tight">
            Build the Future of
            <br />
            <span className="font-bold text-gray-900  bg-clip-text ">
              AI, Together.
            </span>
          </h1>
        </div>
        {/* Description */}
        <div className="space-y-4 mb-12 pt-10">
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

        <div className="absolute bottom-20 left-60">
          <Image src="/small-star.svg" alt="Star Icon" width={15} height={15} />
        </div>
        {/* Primary CTA */}
        <div className={`mb-8 ${poppins.className}`}>
          <Button className="rounded-full text-xl md:px-31 md:py-8 md:text-2xl text-white bg-gradient-to-b from-[#D5BFFF] to-[#7B61FF] shadow-md font-medium ">
            <Sparkles className="mr-2" />
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
          <div className="absolute -bottom-30 left-190 ">
            <Image
              src="/small-star.svg"
              alt="Star Icon"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
