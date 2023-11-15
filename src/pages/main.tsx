import { MainNavBar } from "@/components/mainNavBar";
import Canvas from "@/components/canvas";
import { useStorage } from "@/liveblocks.config";
import BottomRight from "@/components/ui/bottomRight";
const Main = () => {
  const layers = useStorage((root) => root.layers);

  if (layers == null) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Loading
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-radial-gradient bg-25px">
      <Canvas shapes={JSON.stringify(layers)} />
      <MainNavBar />
      <BottomRight />
    </div>
  );
};

export default Main;
