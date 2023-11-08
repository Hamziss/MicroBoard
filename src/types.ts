import { type NextPage } from "next";
import { type Session } from "next-auth";
import { type AppProps } from "next/app";
import { type ReactElement, type ReactNode } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps<{
  session: Session | null;
}> & {
  Component: NextPageWithLayout<{ changeGeistTheme?: (value: string) => void }>;
};

export type Role = "ADMIN" | "USER";

// --------------- Shapes --------------- //
export interface Color {
  r: number;
  g: number;
  b: number;
}

export enum LayerType {
  Rectangle,
  Circle,
}

export type Layer = RectangleLayer | CircleLayer;

export interface RectangleLayer {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
}

export interface CircleLayer {
  type: LayerType.Circle;
  x: number;
  y: number;
  radius: number;
  fill: Color;
}
