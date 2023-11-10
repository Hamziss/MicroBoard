import { MainNavBar } from "@/components/mainNavBar";
import Canvas from "@/components/canvas";
import { useStorage } from "@/liveblocks.config";
import BottomRight from "@/components/ui/bottomRight";
const Main = () => {
  const shapes = useStorage((root) => root.shapes);

  if (shapes == null) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Loading
      </div>
    );
  }

  return (
    <div className="h-screen bg-radial-gradient bg-25px">
      <Canvas shapes={JSON.stringify(shapes)} />
      <MainNavBar />
      <BottomRight />
    </div>
  );
};

export default Main;