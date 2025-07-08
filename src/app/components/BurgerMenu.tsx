"use client";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "../../styles/burgermenu.css";

export default function BurgerMenu() {
  // State to control menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu and scroll after overlay is gone
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      // Force-hide the overlay if it exists
      const overlay = document.querySelector(".bm-overlay");
      if (overlay) {
        (overlay as HTMLElement).style.display = "none";
      }
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // Fallback for some layouts
        const rect = el.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + rect.top,
          behavior: "smooth",
        });
      }
    }, 350); // Adjust delay if needed
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
      <a
        className="menu-item"
        href="#hero"
        onClick={(e) => handleLinkClick(e, "#hero")}
      >
        Home
      </a>
      <a
        className="menu-item"
        href="#mission"
        onClick={(e) => handleLinkClick(e, "#mission")}
      >
        Mission
      </a>
      <a
        className="menu-item"
        href="#products"
        onClick={(e) => handleLinkClick(e, "#products")}
      >
        Products
      </a>
      <a
        className="menu-item"
        href="#users"
        onClick={(e) => handleLinkClick(e, "#users")}
      >
        Users
      </a>
      <a
        className="menu-item"
        href="#whyus"
        onClick={(e) => handleLinkClick(e, "#whyus")}
      >
        Why Us
      </a>
    </Menu>
  );
}
