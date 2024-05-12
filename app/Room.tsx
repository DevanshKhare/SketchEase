"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap } from "@liveblocks/client";
import Loader from "@/components/Loader";

export function Room({ children, id }: { children: ReactNode, id: string }) {
  return (
    <RoomProvider id={id} initialPresence={{cursor:null, cursorColor:null, editingText:null}}
      initialStorage={{
        canvasObjects: new LiveMap()
      }}
    >
      <ClientSideSuspense fallback={<Loader/>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}