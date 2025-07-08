import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Products from "./components/Products";
import UsersSection from "./components/UsersSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Navbar />
      <Hero />
      <Mission />
      <Products />|
      <UsersSection />
      <WhyChooseUs />
    </div>
  );
}
