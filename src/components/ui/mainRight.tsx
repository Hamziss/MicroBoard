import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Share } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const MainRight = () => {
    return (
        <div className="flex w-[8.6rem] items-center justify-between">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8 hover:shadow-lg border border-orange-500">
                            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                            <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">shadcn</p>
                            <p className="text-xs leading-none text-muted-foreground">
                                m@example.com
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex h-[2.3rem] w-[5.6rem] cursor-pointer items-center justify-between rounded-md border border-slate-200 bg-[white] px-[7px] py-0 text-base text-slate-700 hover:shadow-lg hover:bg-slate-100">
                <Share size={20} className="h-[1.2rem] w-8" />
                <input type="button" value="Share" className='cursor-pointer' />
            </div>
        </div>
    )
}

export default MainRight