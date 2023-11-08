import { Color, CircleLayer } from "@/types";

interface Props {
  id: string;
  layer: CircleLayer;
}

const colorToCSS = (color: Color): string =>
  `rgb(${color.r}, ${color.g}, ${color.b})`;

export const Circle = ({ layer, id }: Props) => {
  const { x, y, radius, fill } = layer;

  return (
    <div
      className="circle"
      style={{
        position: "absolute",
        transform: `translate(${x}px, ${y}px)`,
        backgroundColor: fill ? colorToCSS(fill) : "#CCC",
        borderRadius: "50%",
        width: radius * 2 + "px",
        height: radius * 2 + "px",
      }}
      id={id}
    />
  );
};
