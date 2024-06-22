"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

type layoutProps = {};

const layout: React.FC<layoutProps> = () => {
  const session = useSession();
  console.log("session", session);
  return (
    <div className=" h-screen w-full m-auto">
      {/* //@ts-ignore */}
      {/* <button onClick={() => signOut("google")}> LogOut -1 </button> */}
      {/* <h2>{session?.user?.name}</h2>
       */}
      {/* <p>{session?.user?.email}</p>  */}
      <h1 className="text-4xl">home page</h1>
    </div>
  );
};
export default layout;
