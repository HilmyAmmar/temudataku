'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleGetStarted = () => {
   router.push("/login");
  };

  return (
    
    <div className="flex flex-col-reverse md:flex-row items-center content-center justify-between pt-[7vh] gap-x-10">
      <div className="flex-none flex-col text-black max-w-xl">
        <h1 className="text-5xl md:text-7xl font-bold">Practice Data Science. Build Real Skills.</h1>
        <p className="pt-[5vh] text-xl font-extralight text-gray-500">
          Stop relying only on tutorials. Apply your knowledge with real case studies and guided practice.
          TemuDataku helps you build your portfolio with hands-on exercises and mentor feedback. Perfect for self-taught learners who want to go further.
        </p>
        <button onClick={handleGetStarted} className="mt-[10vh] w-fit px-16 py-5 bg-[#15ae70] text-white rounded-2xl hover:bg-[#139762] transition duration-300">
          Get Started
        </button>
      </div>

      <div className="flex-none items-center justify-center pt-[5vh] mb-[5vh]">
        <Image
          src="/assets/images/3811712.png"
          alt="Hero Illustration"
          priority
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
