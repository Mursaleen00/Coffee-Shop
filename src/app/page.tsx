import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}
