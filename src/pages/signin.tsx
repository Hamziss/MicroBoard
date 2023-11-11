import big_banner from "../assets/images/big_banner.svg";
import bottom_left from "../assets/images/bottom_left.svg";
import top_left from "../assets/images/top_left.svg";
import Image from "next/image";
import icon from "../assets/images/icon.svg";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Sign_in() {
  return (
    <>
      <section className="h-screen w-screen px-20">
        <div className="absolute left-0 top-0 w-32 lg:w-44">
          <Image src={top_left as string} alt="" />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row lg:justify-between lg:gap-x-52">
          <div className="flex h-full w-1/2 flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="h-12 w-11">
                <Image src={icon as string} alt="" />
              </div>

              <h2 className="font-daniel bg-gradient-to-r from-[#004DFF] via-[#712B97] to-[#FF0014] bg-clip-text text-lg leading-normal text-transparent">
                MicroBoard
              </h2>
            </div>

            <div>
              <h2></h2>
              <div className="flex w-full max-w-lg items-center gap-1.5">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
              </div>
              <button></button>
              <button></button>
              <button></button>
              <p></p>
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
