import Bento from "@/components/bento";
import CTA from "@/components/cta";
import Divider from "@/components/divider";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Right from "@/components/right";
import Ticker from "@/components/ticker";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Ticker />
      <Bento />
      <Pricing />
      <CTA />
      <Divider />
      <Footer />
      <Divider />
      <Right />
    </div>
  );
}
