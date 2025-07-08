"use client";
import { slide as Menu } from "react-burger-menu";
import "../../styles/burgermenu.css";

export default function BurgerMenu() {
  return (
    <Menu>
      <a className="menu-item">Home</a>
      <a className="menu-item">Mission</a>
      <a className="menu-item">Products</a>
      <a className="menu-item">Users</a>
      <a className="menu-item">Why Us</a>
    </Menu>
  );
}
