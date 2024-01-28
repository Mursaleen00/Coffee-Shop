import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Product />
      <History />
      <Steps />
      <Banner />
    </div>
  );
}
