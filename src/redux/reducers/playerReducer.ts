import { createReducer } from "@reduxjs/toolkit";
import { addToQueue, loop, playNew, playNext, playPrevious, remix, removeFromQueue, volume } from "../actions/playerActions";
import ID from "../../models/ID";
import Playlist from "../../models/Items/Playlist";
import Album from "../../models/Items/Album";
import Track from "../../models/Items/Track";
import ItemType from "../../models/ItemType";

export enum LoopType {
    None,
    Playlist,
    Track
}

export interface PlayerState {
    remix: boolean,
    loop: LoopType,
    playing: ID | null,
    playlist: Track | Playlist | Album | null,
    previous: ID[],
    next: ID[],
    volume:number
}

const playerInitialState: PlayerState = {
    remix: false,
    loop: LoopType.None,
    playing: null,
    playlist: null,
    previous: [],
    next: [],
    volume:1
};

const playerReducer = createReducer(playerInitialState, (builder) => {
    builder.addCase(playNew, (state, action) => {
        const type = action.payload.type;
        state.playlist = action.payload;
        if (type == ItemType.TRACK) {
            state.playing = action.payload.id;
            state.next = [action.payload.id];
        }
        else {
            state.next = [...action.payload.contents];
            state.playing = state.next.shift() || null;
        }
    }).addCase(playNext, (state, action) => {
        if (state.playing != null) {
            if (state.next.length > 0) {
                state.previous.push(state.playing);
            }
            if (state.previous.length > 0 && state.next.length == 0) {
                state.next = [...state.previous];
            }
            if ((state.previous.length == 0 && state.next.length == 0) || state.loop == LoopType.Track) {
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
    }).addCase(playPrevious, (state, action) => {
        if (state.playing != null && state.previous.length > 0) {
            state.next.unshift(state.playing);
            state.playing = state.previous.pop() || null;
        }
    }).addCase(addToQueue, (state, action) => {
        const type = action.payload.type;
        if (type == ItemType.TRACK) {
            state.next = [...state.next, action.payload.id];
        }
        else {
            state.next = [...state.next, ...action.payload.contents];
        }
    }).addCase(removeFromQueue, (state, action) => {
        state.next = state.next.filter((id) => id != action.payload.id);
    }).addCase(remix, (state, action) => {
        state.remix = !state.remix;
    }).addCase(loop, (state, action) => {
        if (state.loop == LoopType.None) {
            state.loop = LoopType.Playlist;
        }
        else if (state.loop == LoopType.Playlist) {
            state.loop = LoopType.Track;
        } else {
            state.loop = LoopType.None;
        }
    }).addCase(volume, (state, action)=>{
        state.volume = action.payload > 1 ? 1 : action.payload < 0 ? 0 : action.payload ;
    });
})

export default playerReducer;