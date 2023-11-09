import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types";
import { SessionProvider } from "next-auth/react";
import { RoomProvider } from "../liveblocks.config";
import { LiveMap } from "@liveblocks/client";

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
          shapes: new LiveMap(),
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </RoomProvider>
    </SessionProvider>
  );
}
