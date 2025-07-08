import Image from "next/image";

const products = [
  {
    icon: "/product-services-icons/pencil.svg",
    title: "AI Creative Studio",
    desc: "Generate text, video, visuals, and voice content using advanced generative models — collaboratively, securely, and at scale.",
  },
  {
    icon: "/product-services-icons/cloud.svg",
    title: "LLM & Agent Engineering",
    desc: "Train, fine-tune, and deploy custom large language models and autonomous agents with robust workflows and evaluation tools.",
  },
  {
    icon: "/product-services-icons/Gear.svg",
    title: "Developer Tooling",
    desc: "Access modular APIs, SDKs, and prompt chains to build AI-powered features into any application.",
  },
  {
    icon: "/product-services-icons/glass.svg",
    title: "Full-Stack R&D Environment",
    desc: "Experiment with cutting-edge AI, data pipelines, and knowledge graphs — all in a collaborative, sandboxed lab.",
  },
  {
    icon: "/product-services-icons/Chain.svg",
    title: "On-Chain Infrastructure",
    desc: "Enable tokenized incentives, attribution models, and decentralized coordination for AI-native projects (coming soon).",
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-gray-100 text-gray-600 text-md font-semibold">
          What we offer
        </span>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          <span className="font-bold text-black">UnitNetwork.ai</span> operates
          at the intersection of creative expression, advanced development, and
          AI infrastructure. The platform brings together:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto items-center justify-center">
        {products.slice(0, 3).map((p) => (
          <div
            key={p.title}
            className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl min-h-[230px]"
          >
            <div className="absolute -top-15 -right-5 z-10">
              <Image
                src={p.icon}
                alt={p.title}
                width={185}
                height={131.227}
                className="drop-shadow-lg"
              />
            </div>
            <div className="pt-12 pr-2">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}

        {/* Wrapper for last two cards */}
        <div className="md:col-span-3 flex justify-center gap-12 pt-12">
          {products.slice(3).map((p) => (
            <div
              key={p.title}
              className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl min-h-[230px] w-full md:max-w-sm"
            >
              <div className="absolute -top-11 -right-5 z-10">
                <Image
                  src={p.icon}
                  alt={p.title}
                  width={185}
                  height={131.227}
                  className="drop-shadow-lg"
                />
              </div>
              <div className="pt-12 pr-2">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
