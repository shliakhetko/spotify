import { createAction } from "@reduxjs/toolkit";
import { PlayerActionTypes } from "../action-types/playerActionTypes";
import Track from "../../models/Items/Track";
import Playlist from "../../models/Items/Playlist";
import Album from "../../models/Items/Album";
import Artist from "../../models/Items/Artist";

type PlayItem = Track | Playlist | Artist;
// | Album;

export const playNew = createAction<PlayItem>(PlayerActionTypes.PLAY_NEW);
export const playPrevious = createAction(PlayerActionTypes.PLAY_PREVIOUS);
export const playNext = createAction(PlayerActionTypes.PLAY_NEXT);

export const addToQueue = createAction<PlayItem>(PlayerActionTypes.ADD_TO_QUEUE);
export const removeFromQueue = createAction<Track>(PlayerActionTypes.REOVE_FROM_QUEUE);

export const remix = createAction(PlayerActionTypes.REMIX);
export const loop = createAction(PlayerActionTypes.LOOP);

export const setPause = createAction(PlayerActionTypes.SET_PAUSE);
export const setPlay = createAction(PlayerActionTypes.SET_PLAY);
export const volume = createAction<number>(PlayerActionTypes.VOLUME);