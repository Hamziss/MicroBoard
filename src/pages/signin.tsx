import big_banner from "../assets/images/big_banner.svg";
import bottom_left from "../assets/images/bottom_left.svg";
import top_left from "../assets/images/top_left.svg";
import Image from "next/image";
import icon from "../assets/images/icon.svg";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Sign_in() {
  return (
    <>
      <section className="h-screen w-screen px-20">
        <div className="absolute left-0 top-0 w-32 lg:w-44">
          <Image src={top_left as string} alt="" />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row lg:justify-between lg:gap-x-52">
          <div className="flex h-full w-full flex-col items-center justify-center gap-y-6 lg:w-1/2">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="h-12 w-11">
                  <Image src={icon as string} alt="" />
                </div>

                <h2 className="font-daniel bg-gradient-to-r from-[#004DFF] via-[#712B97] to-[#FF0014] bg-clip-text text-lg leading-normal text-transparent">
                  MicroBoard
                </h2>
              </div>
              <h2 className="text-2xl font-semibold">Sign in account</h2>
            </div>

            <div className="flex w-full max-w-md flex-col items-start justify-center gap-6 lg:max-w-xs">
              <div className="flex w-full max-w-md flex-col items-start gap-1.5 lg:max-w-xs">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="w-full">
                <Separator orientation="horizontal" />
              </div>

              <div className="flex w-full flex-row justify-between gap-x-3">
                <Button
                  variant="outline"
                  className="h-12 w-1/2 rounded-lg bg-[#E7F2F5] shadow-sm"
                >
                  Google
                </Button>

                <Button
                  variant="outline"
                  className="h-12 w-1/2 rounded-lg bg-[#E7F2F5] shadow-sm"
                >
                  Github
                </Button>
              </div>
              <Button
                variant="outline"
                className="w-full bg-[#141415] font-light text-white shadow-sm"
              >
                Continue
              </Button>
              <div className="flex w-full flex-col items-center justify-center">
                <p className="text-xs">
                  By signing up, I have read an agree to
                </p>
                <p className="text-xs">
                  <span className="text-[#0151FC]">
                    <a href="">Terms</a>
                  </span>{" "}
                  and
                  <span className="text-[#0151FC]">
                    <a href=""> Privacy Policy</a>
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 lg:w-[31rem]">
              <Image src={bottom_left as string} alt="" />
            </div>
          </div>
          <div className="hidden w-[45rem] lg:flex">
            <Image src={big_banner as string} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
