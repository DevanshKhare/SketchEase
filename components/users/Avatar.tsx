import React from "react";
import styles from "./Avatar.module.css";
import Image from "next/image";

const IMAGE_SIZE = 48;

export function Avatar({ otherStyles, name }: { otherStyles: string; name: string }) {
  return (
    <div className={`${styles.avatar} ${otherStyles} w-9 h-9`} data-tooltip={name}>
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random()*30)}.png`}
        alt="avatar"
        fill
        className={styles.avatar_picture}
      />
    </div>
  );
}