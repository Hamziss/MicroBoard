import { RectangleLayer } from "@/types";
import { colorToCss } from "@/utils/utils";

interface Props {
  layer: RectangleLayer;
}

export const Rectangle = ({ layer }: Props) => {
  const { x, y, width, height, fill } = layer;

  return (
    <div
      className="rectangle"
      style={{
        position: "absolute",
        transform: `translate(${x}px, ${y}px)`,
        backgroundColor: fill ? colorToCss(fill) : "#CCC",
        width: width + "px",
        height: height + "px",
      }}
    />
  );
};
