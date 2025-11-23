import Image from "next/image";
import Navbar from "./navbar";
import { ChevronRight, Star } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative w-full h-screen px-4 pt-2">
      <div className="max-w-7xl mx-auto mb-8">
        <Navbar />
      </div>

      {/* Background wrapper */}
      <div className="absolute inset-0 px-4 pt-4 pb-0">
        <div className="w-full h-full overflow-hidden rounded-lg relative mask-b-from-60% mask-b-to-100%">
          <Image
            src="/hero.jpg"
            alt="hero"
            fill
            className="object-cover z-[-5]"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center text-white px-4 top-8">

        <Badge 
          text="Working"
          icon={<Star className="w-4 h-4 text-black" />}
        />

        <h1 className="text-5xl text-black mb-4 drop-shadow-lg font-sans">
          Ideas, Notes, Clarity,
          <br />
          Wherever your mind goes.
        </h1>

        <p className="max-w-xl text-lg mb-8 opacity-90">
          Every summit begins with a single step. Craft your journey,
          <br />
           build your vision.
        </p>
        <div className="flex gap-4 justify-center">
          <Button text="Get Started" />
          <Button text="Learn More" varient="outline"/>
        </div>
      </div>
    </section>
  );
}

function Badge({ text, icon }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-row items-center border rounded-full bg-white/20 px-3 py-1 mb-4  text-black font-medium text-sm shadow-md gap-2">
      {icon}
      {text}
    </div>
  );
}


function Button({ text,varient }: { text: string,varient?:string }) {
  if(varient==='outline'){
    return (
      <button className="bg-white/40 text-black px-6 py-3 flex flex-rows justify-center items-center rounded-full text-lg font-medium hover:bg-white/80 border border-white transition">
        {text}
        <ChevronRight className="w-5 h-5 inline-block my-2" />
      </button>
    );
  }
  else if (varient==='secondary'){
    return (
      <button className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition mb-4">
        {text}
      </button>
    );
  }
  return (
    <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-black/80 transition">
      {text}
    </button>
  );
}