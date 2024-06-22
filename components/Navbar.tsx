import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/netflix_logo.svg";
import BackgroundImage from "@/public/background-image.jpg";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    // <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
    //   <div className="flex items-center">
    //     <Link href="/home" className="w-32">
    //       <Image src={Logo} alt="Netflix logo" priority />
    //     </Link>
    //   </div>
    // </div>

    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <Image
        src={Logo}
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
    </div>
  );
};
export default Navbar;
