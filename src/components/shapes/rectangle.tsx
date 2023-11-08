import { Color, RectangleLayer } from "@/types";

interface Props {
  id: string;
  layer: RectangleLayer;
}

const colorToCSS = (color: Color): string =>
  `rgb(${color.r}, ${color.g}, ${color.b})`;

export const Rectangle = ({ layer, id }: Props) => {
  const { x, y, width, height, fill } = layer;

  return (
    <div
      className="rectangle"
      style={{
        position: "absolute",
        transform: `translate(${x}px, ${y}px)`,
        backgroundColor: fill ? colorToCSS(fill) : "#CCC",
        width: width + "px",
        height: height + "px",
      }}
      id={id}
    />
  );
};
