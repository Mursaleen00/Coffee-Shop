import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden max-w-screen">
      <Navbar />
      <Hero />
      <Product />
      <History />
      <Steps />
      <Banner />
      <Footer />
    </div>
  );
}
