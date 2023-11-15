import { Layer } from "@/types";
import React from "react";

const Canvas = ({ shapes }: { shapes: string }) => {
  const parsedShapes = JSON.parse(shapes) as Layer;

  return <div></div>;
};

export default Canvas;
