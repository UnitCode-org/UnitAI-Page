import { useState } from "react";
import { cn } from "@/lib/utils";
import { HambergerMenu } from "iconsax-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const sidebarLinks = [
    { label: "Unit AI", href: "#Hero" },
    { label: "Mission", href: "#mission" },
    { label: "Products", href: "#products" },
    { label: "Users", href: "#users" },
    { label: "Why Us", href: "#whyus" },
  ];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none cursor-pointer">
        <HambergerMenu className="size-6 block md:hidden" color="#8E8E93" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white">
        {sidebarLinks.map((link, idx) => (
          <button
            key={link.label + idx}
            type="button"
            onClick={() => {
              const el = document.querySelector(link.href);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
              setOpen(false);
            }}
            className={cn(
              "flex w-full items-center gap-x-3 px-5 py-3 text-unit-gray-400 transition-colors",
              "hover:bg-unit-purple-100 hover:text-unit-purple-400"
            )}
          >
            <span className="text-sm font-semibold">{link.label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
