import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronUp, Home, LayoutGrid, Plus } from "lucide-react";
import { useEffect, useState } from "react";


interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  // TODO: Add props
}




export function Sidebar({ }: SidebarProps) {
  const [clicked, setClicked] = useState(false);
  const [userstyle, setUserstyle] = useState("bg-side-bar");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access the document object here
      const user = document.querySelector("#user");
      if (user) {
        user.addEventListener("click", () => {
          if (!clicked) {
            setUserstyle("bg-neutral-200");
          } else {
            setUserstyle("bg-side-bar");
          }
          setClicked(!clicked);
        });
      };
    }
  }, [clicked]);
  return (
    <div className="bg-side-bar shadow-side-bar h-screen">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className={`w-64 h-16 flex py-3 px-4 items-center content-center gap-x-3 flex-wrap ${userstyle}`} id="user">
            <div className="w-10 h-10 shrink-0 border border-black rounded bg-gradient-to-b from-blue-700 via-purple-700 to-red-600"></div>
            <div className="flex flex-col items-start gap-0.5 flex-grow flex-shrink-0 basis-0">
              <div className="text-sm font-semibold">Hamza</div>
              <p className="text-[#8A8A8A] text-xs">Workspace</p>
            </div>
            <div>
              <ChevronUp color="#7E7E7E" strokeWidth={3} size={15} />
              <ChevronDown color="#7E7E7E" strokeWidth={3} size={15} className="mt-[-0.125rem]" />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60 h-40 bg-neutral-50">
          hhhhhh
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center content-center gap-x-3 mt-4 mb-2 p-3 ml-4">
        <Home color="#7E7E7E" strokeWidth={2} className="w-5 h-5" />
        <h3 className="text-zinc-500 text-sm font-semibold ">Dashboard</h3>
      </div>
      <div className="flex items-center content-center gap-x-3 p-3 ml-4 mr-3 mb-6 bg-violet-50 rounded-lg">
        <LayoutGrid color="#6F67EA" strokeWidth={2} className="w-5 h-5" />
        <h3 className="text-sm font-semibold text-indigo-500">Drafts</h3>
      </div>
      <div className="w-[228px] border border-stone-300 m-auto"></div>
      <div className="flex justify-between items-center p-3 ml-4 mr-2">
        <h2 className="font-bold">Collections</h2>
        <Plus className="w-8 h-8 p-2 bg-white rounded-md border border-slate-200" />
      </div>
    </div>

  )
}
