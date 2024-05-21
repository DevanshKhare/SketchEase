import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex bg-zinc-950 absolutex flex-row h-screen">
      <div className="h-full w-[50%] bg-zinc-100 text-zinc-950">
        <div className="px-[8rem] h-full flex py-[5rem] flex-col gap-[2rem]">
          <div className="h-[10rem]">
            <Image src="/logo.png" alt="logo" height={50} width={50} />
            <h1 className="text-[2.2rem] font-bold mt-3">Create Account</h1>
            <p className="text-zinc-500">
              Sign up toady and unlock a world of possibilities. Your adventure
              begings here.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="border-zinc-300 hover:bg-zinc-200"
            >
              <FcGoogle className="mr-2 h-4 w-4" /> Login with Email
            </Button>{" "}
            <Button
              variant="outline"
              className="border-zinc-300 hover:bg-zinc-200"
            >
              <FaGithub className="mr-2 h-4 w-4" /> Login with Email
            </Button>
          </div>
        </div>
      </div>
      <div className="h-full w-[50%]">
        <div className="absolute bottom-0 h-[15rem] px-[4rem] text-[1.2rem]">
          <h2 className="text-zinc-300">
            SketchEase: It's the design equivalent of <br />
            discovering the theory of relativity
            <br />
            for your creativity!
          </h2>
          <h2 className="text-zinc-300 mt-6">- Albert Einstein</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
