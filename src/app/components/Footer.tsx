import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const socialIcons = [
  { name: "telegram", src: "/footer-icons/telegram.svg", alt: "Telegram" },
  { name: "Social", src: "/footer-icons/X.svg", alt: "X" },
  { name: "linkedin", src: "/footer-icons/linkedin.svg", alt: "LinkedIn" },
  { name: "instagram", src: "/footer-icons/instagram.svg", alt: "Instagram" },
  { name: "discord", src: "/footer-icons/discord.svg", alt: "Discord" },
  { name: "youtube", src: "/footer-icons/youtube.svg", alt: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      className={`w-full px-4 sm:pl-16 sm:pr-10 pb-6 ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        {/* Left: Logo and text */}
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image src="/unit-logo.svg" alt="Unit Logo" width={24} height={24} />
          <span
            className="ml-4 text-sm font-normal"
            style={{ fontWeight: 400 }}
          >
            A project by Unit Network
          </span>
        </div>
        {/* Right: Social icons and Get Involved */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 justify-center sm:justify-end w-full sm:w-auto">
          {socialIcons.map((icon) => (
            <a key={icon.name} href="#" aria-label={icon.alt}>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={22}
                height={22}
                className="hover:opacity-80 transition sm:w-[28px] sm:h-[28px] w-[22px] h-[22px]"
              />
            </a>
          ))}
          <span className="text-sm font-semibold ml-2 sm:ml-6 mt-2 sm:mt-0">
            Get Involved
          </span>
        </div>
      </div>
    </footer>
  );
}
