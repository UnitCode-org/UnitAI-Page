import { Poppins } from "next/font/google";
import FadeIn from "./FadeIn";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Mission() {
  return (
    <section
      id="mission"
      className="flex flex-col items-center py-55 px-4 text-center"
    >
      <FadeIn enableInView delay={0.2}>
        <div className="mb-5">
          <span
            className={`bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-md font-normal shadow-sm ${poppins.className}`}
          >
            Mission
          </span>
        </div>
      </FadeIn>
      <FadeIn enableInView delay={0.4}>
        <h2 className="text-3xl md:text-[32px]font-medium text-gray-900 mb-5">
          We’re building a platform where
          <br className="hidden md:inline" />
          creativity meets computation —
        </h2>
        <p className="text-gray-400 text-xl ">
          empowering teams to design, deploy, and scale groundbreaking AI
          applications across disciplines.
        </p>
      </FadeIn>
    </section>
  );
}
