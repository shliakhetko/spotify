import { createReducer } from "@reduxjs/toolkit";
import {
    addToQueue,
    loop,
    playNew,
    playNext,
    playPrevious,
    remix,
    removeFromQueue,
    setPause,
    setPlay,
    volume,
} from "../actions/playerActions";
import ID from "../../models/ID";
import Playlist from "../../models/Items/Playlist";
import Album from "../../models/Items/Album";
import Track from "../../models/Items/Track";
import ItemType from "../../models/ItemType";
import Artist from "../../models/Items/Artist";

export enum LoopType {
    None,
    Playlist,
    Track,
}

export interface PlayerState {
    remix: boolean;
    loop: LoopType;
    playing: Track | null;
    playlist: Track | Playlist | Album | Artist | null;
    previous: Track[];
    next: Track[];
    isPlaying: boolean;
    volume: number;
}

const playerInitialState: PlayerState = {
    remix: false,
    loop: LoopType.None,
    playing: null,
    playlist: null,
    previous: [],
    next: [],
    isPlaying: true,
    volume: 1,
};

const playerReducer = createReducer(playerInitialState, (builder) => {
    builder
        .addCase(playNew, (state, action) => {
            const type = action.payload.type;
            state.playlist = action.payload;
            if (type == ItemType.TRACK) {
                state.playing = action.payload;
                state.next = [action.payload];
            } else {
                if (type == ItemType.ARTIST) {
                    state.next = [...action.payload.tracks];
                }else if (type == ItemType.PLAYLIST) {
                    state.next = [...action.payload.contents];
                } else if (type == ItemType.TRACK) {
                    state.next = [action.payload];
                }
                state.playing = state.next.shift() || null;
            }

            state.isPlaying = true;
        })
        .addCase(playNext, (state, action) => {
            if (state.playing != null) {
                if (state.next.length > 0) {
                    state.previous.push(state.playing);
                }
                if (state.previous.length > 0 && state.next.length == 0) {
                    state.previous.push(state.playing);
                    state.next = [...state.previous];
                }
                if (
                    (state.previous.length == 0 && state.next.length == 0) ||
                    state.loop == LoopType.Track
                ) {
                    state.next = [state.playing];
                }

                if (state.remix) {
                    let index: number = Math.floor(Math.random() * state.next.length);
                    state.playing = state.next[index];
                    state.next.slice(index, 1);
                } else {
                    state.playing = state.next.shift() || null;
                }
            }

            state.isPlaying = true;
        })
        .addCase(playPrevious, (state, action) => {
            if (state.playing != null && state.previous.length > 0) {
                state.next.unshift(state.playing);
                state.playing = state.previous.pop() || null;
            }

            state.isPlaying = true;
        })
        .addCase(addToQueue, (state, action) => {
            const type = action.payload.type;
            if (type == ItemType.ARTIST) {
                state.next = [...action.payload.tracks];
            }else if (type == ItemType.PLAYLIST) {
                state.next = [...action.payload.contents];
            } else if (type == ItemType.TRACK) {
                state.next = [action.payload];
            }
        })
        .addCase(removeFromQueue, (state, action) => {
            state.next = state.next.filter((id) => id != action.payload);
        })
        .addCase(remix, (state, action) => {
            state.remix = !state.remix;
        })
        .addCase(loop, (state, action) => {
            if (state.loop == LoopType.None) {
                state.loop = LoopType.Playlist;
            } else if (state.loop == LoopType.Playlist) {
                state.loop = LoopType.Track;
            } else {
                state.loop = LoopType.None;
            }
        })
        .addCase(setPause, (state, action) => {
            state.isPlaying = false;
        })
        .addCase(setPlay, (state, action) => {
            state.isPlaying = true;
        })
        .addCase(volume, (state, action) => {
            state.volume =
                action.payload > 1 ? 1 : action.payload < 0 ? 0 : action.payload;
        });
});

export default playerReducer;
