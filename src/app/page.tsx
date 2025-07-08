"use client";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Products from "./components/Products";
import UsersSection from "./components/UsersSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /*Below Styles for the burger menu*/
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 26px;
    top: 26px;
  }
  .bm-burger-bars {
    background: #9d85ff;
  }
  .bm-burger-bars-hover {
    background: #9d85ff;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-cross {
    background: #FFFAFA;
  }
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }
  .bm-menu {
    background: rgba(169,169,169,0.8);
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
    display: flex;
    flex-direction: column;
  }
`;

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Mission />
      <Products />
      <UsersSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
