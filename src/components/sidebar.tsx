import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/cn";
import { ChevronDown, ChevronUp, Home, LayoutGrid, Plus } from "lucide-react";
import { useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  // TODO: Add props
}

export function Sidebar({}: SidebarProps) {
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
    <div className="bg-side-bar shadow-side-bar h-screen">
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
          className="h-40 w-64 bg-neutral-50"
          sideOffset={-3}
        >
          hhhhhh
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="mb-2 ml-4 mt-4 flex content-center items-center gap-x-3 p-3">
        <Home color="#7E7E7E" strokeWidth={2} className="h-5 w-5" />
        <h3 className="text-sm font-semibold text-zinc-500 ">Dashboard</h3>
      </div>
      <div className="mb-6 ml-4 mr-3 flex content-center items-center gap-x-3 rounded-lg bg-violet-50 p-3">
        <LayoutGrid color="#6F67EA" strokeWidth={2} className="h-5 w-5" />
        <h3 className="text-sm font-semibold text-indigo-500">Drafts</h3>
      </div>
      <div className="m-auto w-[228px] border border-stone-300"></div>
      <div className="ml-4 mr-2 flex items-center justify-between p-3">
        <h2 className="font-bold">Collections</h2>
        <Plus className="h-8 w-8 rounded-md border border-slate-200 bg-white p-2" />
      </div>
    </div>
  );
}
