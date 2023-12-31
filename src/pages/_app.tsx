import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types";
import { SessionProvider } from "next-auth/react";
import { RoomProvider } from "../liveblocks.config";
import { LiveMap, LiveObject, LsonObject } from "@liveblocks/client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <RoomProvider
        id="microBoard"
        initialPresence={{}}
        initialStorage={{
          layers: new LiveMap<string, LiveObject<LsonObject>>(),
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </RoomProvider>
    </SessionProvider>
  );
}
