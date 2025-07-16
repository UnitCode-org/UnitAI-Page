import HamburgerMenu from "@/components/ui/burgermenu";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Navbar() {
  return (
    <header className={`relative z-10 px-10 py-6 ${poppins.className}`}>
      <nav className="flex items-center justify-between  mx-auto">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-xl">
          <a
            href="#hero"
            className="font-medium cursor-pointer hover:text-purple-600 transition-colors"
          >
            Unit AI
          </a>
          <a
            href="#mission"
            className="font-medium cursor-pointer hover:text-purple-600 transition-colors"
          >
            Mission
          </a>
          <a
            href="#products"
            className="font-medium cursor-pointer hover:text-purple-600 transition-colors"
          >
            Products
          </a>
          <a
            href="#users"
            className="font-medium cursor-pointer hover:text-purple-600 transition-colors"
          >
            Users
          </a>
          <a
            href="#whyus"
            className="font-medium cursor-pointer hover:text-purple-600 transition-colors"
          >
            Why Us
          </a>
        </div>
        {/* Mobile Menu */}
        <div className=" mr-4 md:mr-0 md:hidden">
          <HamburgerMenu />
        </div>
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button className="rounded-full md:text-base px-6 py-3 text-white font-semibold  bg-[#6a45ff]">
            Join Us
          </Button>
          <Button className="rounded-full md:text-base px-6 py-3 text-white font-semibold  bg-[#6a45ff] ">
            Launch Studio
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
