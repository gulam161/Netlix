import React from "react";
import Image from "next/image";
import BackgroundImage from "@/public/background-image.jpg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import HomeNav from "./HomeNav";
type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <HomeNav />
      <div className="w-4/5 border border-red-500 flex flex-col justify-center  md:justify-center gap-y-4 text-white text-center mt-28">
        {/* <div className="w-4/5 border border-red-500 flex flex-col justify-center md:justify-center gap-y-4 text-white text-center mt-28"> */}
        <h1 className="text-5xl font-extrabold">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-2xl font-normal mt-3">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-xl font-normal">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className=" flex space-x-4 w-[60%] m-auto">
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            className="bg-[#333] rounded-sm placeholder:text-base placeholder:text-gray-400 border border-gray-400 w-full inline-block p-6"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-2/5 bg-[#e50914] p-6 text-xl"
          >
            Get Started
          </Button>
        </div>
      </div>

      <Image
        src={BackgroundImage}
        alt="background image"
        className="object-cover -z-10 brightness-50"
        priority
        fill
      />
    </div>
  );
};
export default Homepage;
