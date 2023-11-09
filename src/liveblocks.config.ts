import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey:
    "pk_dev_C5oTHnzsr_lh3z34yJSaFJgVRP3LL10TyVzF5aIb3oR8ES5UIXle7qrwnkmzfSkO",
});

export const { RoomProvider, useStorage } = createRoomContext(client);
