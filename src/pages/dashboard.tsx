import { Draft } from "@/components/dashboard/draft";
import { NavBar } from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

const drafts = [...Array(19).keys()];

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="grid lg:grid-cols-5">
        <div className="hidden lg:block">Sidebar</div>
        <div className="col-span-3 lg:col-span-4">
          <ScrollArea className="h-[calc(100vh-4rem)]  bg-[#F4F0FB] px-4 py-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">Drafts</h2>
            <div className="mt-8 grid grid-cols-12 gap-8">
              {drafts.map((draft, i) => (
                <Draft
                  key={`draft-${i}`}
                  title="Draft Title"
                  link="#"
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
