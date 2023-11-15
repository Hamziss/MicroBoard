import { CircleLayer } from "@/types";
import { colorToCss } from "@/utils/utils";

interface Props {
  layer: CircleLayer;
}

export const Circle = ({ layer }: Props) => {
  const { x, y, radius, fill } = layer;

  return (
    <div
      className="circle"
      style={{
        position: "absolute",
        transform: `translate(${x}px, ${y}px)`,
        backgroundColor: fill ? colorToCss(fill) : "#CCC",
        borderRadius: "50%",
        width: radius * 2 + "px",
        height: radius * 2 + "px",
      }}
    />
  );
};
