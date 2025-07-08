import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";
import BurgerMenu from "./BurgerMenu";

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
          <span className="  font-medium cursor-pointer hover:text-purple-600 transition-colors">
            Unit AI
          </span>
          <span className=" font-medium cursor-pointer hover:text-purple-600 transition-colors">
            Mission
          </span>
          <span className=" font-medium cursor-pointer hover:text-purple-600 transition-colors">
            Products
          </span>
          <span className="font-medium  cursor-pointer hover:text-purple-600 transition-colors">
            Users
          </span>
          <span className=" font-medium  cursor-pointer hover:text-purple-600 transition-colors">
            Why Us
          </span>
        </div>
        {/* Mobile Menu */}
        <div className=" mr-4 md:mr-0 md:hidden">
          <BurgerMenu />
        </div>
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button className="rounded-full md:text-base px-6 py-3 text-white font-semibold md:font-bold bg-[#6a45ff]">
            Join Us
          </Button>
          <Button className="rounded-full md:text-base px-6 py-3 text-white font-semibold md:font-bold bg-[#6a45ff] ">
            Launch Studio
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
