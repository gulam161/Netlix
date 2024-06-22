import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/netflix_logo.svg";
import { MdOutlineTranslate } from "react-icons/md";
import login from "@/app/(auth)/layout";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

type HomeNavProps = {};

const HomeNav: React.FC<HomeNavProps> = () => {
  return (
    <div className="absolute top-3 w-full max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8">
      <Link href="/home">
        <Image
          src={Logo}
          alt="Netflix logo"
          width={150}
          height={150}
          priority
        />
      </Link>
      <div className="flex justify-between">
        <Select>
          <SelectTrigger className="w-[130px] mr-3">
            <div className="flex space-x-2 items-center">
              <MdOutlineTranslate />
              <SelectValue placeholder="English" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Hindi">Hindi</SelectItem>
          </SelectContent>
        </Select>
        <Button
          type="submit"
          variant="destructive"
          className="w-[35%] h-8 rounded-sm text-base bg-[#e50914]"
        >
          <Link href="login">Sign In</Link>
        </Button>
      </div>
    </div>
  );
};
export default HomeNav;
