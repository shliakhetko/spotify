import DefaultItem from "../DefaultItem";
import ID from "../ID";
import {AudioURL, ImageURL} from "../url";
import ItemType from "../ItemType";
import { ArtistID, ArtistView } from "./Artist";

interface Track extends DefaultItem {
    type: ItemType.TRACK;
    id: TrackID;
    title: string;
    owner: ArtistView[];
    audio: AudioURL;
    image?: ImageURL;
    subtitles?: string;
}

export type TrackID = ID;

export default Track;