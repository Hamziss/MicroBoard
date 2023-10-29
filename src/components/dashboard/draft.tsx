import { cn } from "@/utils/cn";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DraftProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    link: string;
}

export function Draft({ title, className, ...props }: DraftProps) {
    return (
        <Link href={"#"} className={cn("space-y-3", className)} {...props}>
            <div className="rounded-lg overflow-hidden relative aspect-video w-full">
                <Image src="/placeholder.png" alt={title} fill className="w-full h-full object-cover transition-all hover:scale-105" />
            </div>
            <div className="space-y-1 flex justify-between items-center">
                <h3 className="font-semibold leading-none">{title}</h3>
                <MoreVertical size={18} />
            </div>
        </Link>
    )
}