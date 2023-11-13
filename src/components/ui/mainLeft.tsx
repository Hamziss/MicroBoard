"use client";
import { Home, Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";
import * as Switch from '@radix-ui/react-switch';
import { useState } from "react"
const MainLeft = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [dotsModeIsChecked, setDotsModeIsChecked] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev)
  }
  const handleDotsModeCheck = () => {
    setDotsModeIsChecked((prev) => !prev)
  }
  console.log(menuOpen);
  return (
    <div className="flex justify-between items-center w-20 h-12 px-[5px] py-0  text-slate-700">
      <div className='h-8 w-8 flex items-center justify-center border border-slate-200 rounded-md border-solid cursor-pointer hover:shadow-lg hover:bg-slate-100 bg-white'>
        <Home />
      </div>
      <DropdownMenu onOpenChange={handleMenuClick}>
        <DropdownMenuTrigger asChild>
          <div className='h-8 w-8 flex items-center justify-center border border-slate-200 rounded-md border-solid cursor-pointer hover:shadow-lg hover:bg-slate-100 bg-white'>
            {menuOpen ? <X /> : <Menu />}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="w-56 ml-9" align="end" forceMount >
            <DropdownMenuGroup className="font-normal flex flex-col space-y-2">
              <DropdownMenuItem>
                <div className='flex w-full justify-between items-center pl-[20px]'>
                  <p>Open...</p>
                  <p>⌘[</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className='flex w-full justify-between items-center pl-[20px]'>
                  <p>Export as...</p>
                  <p>⌘]</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className='flex w-full justify-between items-center pl-[20px]'>
                  <p>Reset canvas...</p>
                  <p>⌘R</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuCheckboxItem
                className="flex justify-between"
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >

                <p className='ml-1'>
                  Show Bookmarks Bar{' '}
                </p>
                <div className="">
                  ⌘⇑B
                </div>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                className="flex justify-between"
                checked={urlsChecked}
                onCheckedChange={setUrlsChecked}
              >
                <p className='ml-1'>
                  Show Full URLs
                </p>
              </DropdownMenuCheckboxItem>

            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="pl-[20px]">
              People
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="pl-[20px]">
              Sombre
            </DropdownMenuItem>
            <DropdownMenuItem className="pl-[20px]">
              <form>
                <div className="flex items-center">
                  <Switch.Root
                    className="w-[48px] h-[25px] bg-gray-300 rounded-full relative data-[state=checked]:bg-black outline-none cursor-default"
                    id="airplane-mode"
                    checked={dotsModeIsChecked}
                    onCheckedChange={handleDotsModeCheck}
                  >
                    <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[23px]" />
                  </Switch.Root>
                  <label className="ml-4" htmlFor="airplane-mode">
                    Dots Mode
                  </label>
                </div>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div >
  );
};

export default MainLeft;


