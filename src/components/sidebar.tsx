import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/cn";
import { ChevronDown, ChevronUp, HelpCircle, Home, LayoutGrid, Plus } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  // TODO: Add props
}

export function Sidebar({ }: SidebarProps) {
  const [clicked, setClicked] = useState(false);
  // const [userstyle, setUserstyle] = useState("bg-side-bar");
  // useEffect(() => {
  // if (typeof window !== "undefined") {
  //   // Access the document object here
  //   const user = document.querySelector("#user");
  //   if (user) {
  //     user.addEventListener("click", () => {
  //       if (!clicked) {
  //         setUserstyle("bg-neutral-200");
  //       } else {
  //         setUserstyle("bg-side-bar");
  //       }
  //       setClicked(!clicked);
  //     });
  //   }
  // }
  // }, [clicked]);
  return (
    <div className="flex flex-col bg-side-bar shadow-side-bar h-[calc(100vh-64px)]">
      <DropdownMenu onOpenChange={setClicked}>
        <DropdownMenuTrigger className="outline-none">
          <div
            className={cn(
              `mx-4 mt-2 flex h-16 w-64 flex-wrap content-center items-center gap-x-3 rounded-lg px-2 py-3`,
              clicked ? "bg-neutral-200" : "bg-side-bar",
            )}
            id="user"
          >
            <div className="h-10 w-10 shrink-0 rounded border border-black bg-gradient-to-b from-blue-700 via-purple-700 to-red-600"></div>
            <div className="flex flex-shrink-0 flex-grow basis-0 flex-col items-start gap-0.5">
              <div className="text-sm font-semibold">Hamza</div>
              <p className="text-xs text-[#8A8A8A]">Workspace</p>
            </div>
            <div>
              <ChevronUp color="#7E7E7E" strokeWidth={3} size={15} />
              <ChevronDown
                color="#7E7E7E"
                strokeWidth={3}
                size={15}
                className="mt-[-0.125rem]"
              />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="h-40 w-64 bg-neutral-50 px-4 py-3"
          sideOffset={-3}
        >
          <h4 className="text-stone-500 text-xs font-bold leading-none">Personal Account</h4>
          <div className="flex items-center content-center mb-4 mt-2">
            <Avatar className="mr-2 mt-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="text-xs font-bold leading-snug">Hamza</h3>
          </div>
          <h4 className="text-stone-500 text-xs font-bold leading-none mb-2">Organizations</h4>
          <p className="text-stone-500 text-xs">Upgrade your plane to pro to create organizations</p>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex-1">
        <div className="mb-2 ml-4 mt-4 flex content-center items-center gap-x-3 p-3">
          <Home color="#7E7E7E" strokeWidth={2} className="h-5 w-5" />
          <h3 className="text-sm font-semibold text-zinc-500 ">Dashboard</h3>
        </div>
        <div className="mb-6 ml-4 mr-3 flex content-center items-center gap-x-3 rounded-lg bg-violet-50 p-3">
          <LayoutGrid color="#6F67EA" strokeWidth={2} className="h-5 w-5" />
          <h3 className="text-sm font-semibold text-indigo-500">Drafts</h3>
        </div>
        <div className="m-auto w-[14.25rem] border border-stone-300"></div>
        <div className="ml-4 mr-2 flex items-center justify-between p-3">
          <h2 className="font-bold">Collections</h2>
          <Plus className="h-8 w-8 rounded-md border border-slate-200 bg-white p-2" />
        </div>
      </div>
      <div>
        <div className="w-[14.25rem] h-[6.688rem] bg-neutral-50 rounded-lg border border-neutral-200 mx-auto p-4">
          <h3 className="text-sm font-bold mb-1">Upgrade account</h3>
          <p className="text-stone-500 text-xs ">Your trial ends in 3 days,<br />upgrade your plan.</p>
          <div className="relative mt-2">
            <div className="w-[196px] h-1 bg-zinc-300 rounded-[100px] " />
            <div className="w-[124px] h-1 bg-violet-600 rounded-[100px] absolute top-0" />
          </div>
        </div>
        <div className="flex items-center content-center gap-x-3 mt-4 mb-2 p-3 ml-4">
          <HelpCircle color="#7E7E7E" strokeWidth={2} className="w-5 h-5" />
          <h3 className="text-zinc-500 text-sm font-semibold ">Help</h3>
        </div>
      </div>

    </div>
  );
}
