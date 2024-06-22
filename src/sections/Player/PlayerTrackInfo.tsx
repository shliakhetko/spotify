import React from "react";
import { LibraryItem } from "../Library/LibraryItem";
import { library } from "../../data/userData";
import { DisplayLibraryItem } from "../../components/ItemDisplays/DisplayLibraryItem";
import { LikeButton } from "../../components/buttons/LikeButton";
import { useAppSelector } from "../../redux/hooks";

export const PlayerTrackInfo = () => {
  const track = useAppSelector((state) => state.player.playing);

  return  (
    <div className="max-w-1/4 w-fit flex pl-4 items-center">
      <DisplayLibraryItem item={track || null} showArtist={true}/>
      <LikeButton id={track ? (track.id as string) : ""} />
    </div>
  );
};
