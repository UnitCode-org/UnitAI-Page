import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function WhyChooseUs() {
  const features = [
    {
      icon: "/why-choose-us-icons/Verified.svg",
      title: "End-to-End Stack",
      description:
        "One platform to go from prototype to production — no fragmentation.",
    },
    {
      icon: "/why-choose-us-icons/Filter.svg",
      title: "Modular & Composable",
      description:
        "Use our tools or plug in your own — designed for flexibility.",
    },
    {
      icon: "/why-choose-us-icons/GroupIcon.svg",
      title: "Interdisciplinary by Design",
      description: "Creatives and coders build side by side, not in silos.",
    },
    {
      icon: "/why-choose-us-icons/Website.svg",
      title: "Open Ecosystem",
      description:
        "Built for future tokenization, DAOs, and decentralized AI governance.",
    },
  ];

  return (
    <section className="relative py-50 px-4 bg-gradient-to-b from-white to-gray-50 -mt-12">
      {/* Background Ellipse Pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-4xl">
          <Image
            src="/why-choose-us-icons/Ellipse.svg"
            alt="Background pattern"
            width={1034}
            height={1034}
            className="w-full h-auto opacity-75"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-[32px] font-semibold text-gray-900 mb-4 ${poppins.className}`}
          >
            Why choose us?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="flex mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call-to-Action Section */}
        <div className="mt-44 pb-10">
          {/* Decorative Stars */}
          <div className="absolute  text-white/20">
            <Image
              src="/why-choose-us-icons/Vector.svg"
              alt="Stars"
              width={100}
              height={32}
            />
          </div>

          <div className=" overflow-hidden rounded-[32px] border-6 border-white/70 bg-[radial-gradient(761.48%_240.78%_at_98.26%_169.92%,_#FFF_5.14%,_#9D85FF_12.87%,_#6B5EE0_82.15%)] p-18 text-center">
            <div className="absolute  left-24 text-white/20">
              <Image
                src="/why-choose-us-icons/VectorRightBottom.svg"
                alt="Stars"
                width={32}
                height={32}
              />
            </div>
            <div className="absolute right-12 text-white/20">
              <Image
                src="/why-choose-us-icons/VectorRightTop.svg"
                alt="Stars"
                width={45}
                height={45}
              />
            </div>
            <div className="absolute bottom-16 right-46 text-white/20">
              <Image
                src="/why-choose-us-icons/VectorRightTop.svg"
                alt="Stars"
                width={32}
                height={32}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl">
              <p className="mb-4 text-2xl text-white/90">
                The next generation of AI won't be built in silos —
              </p>
              <h3 className="mb-8 text-4xl font-medium text-white md:text-4xl">
                it will be co-created by developers, artists, and dreamers.
              </h3>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${poppins.className} text-xl`}
              >
                <button className="rounded-full border border-white/20 bg-white/20 px-7 py-3 font-medium text-[#5645f7] backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
                  Explore Platform
                </button>
                <button className="rounded-full border border-white/20 bg-white/20 px-7 py-3 font-medium text-[#5645f7] backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
                  Join the Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
