import ID from "../ID";
import ItemType from "../ItemType";
import Track, { TrackID } from "./Track";
import { ArtistID, ArtistView } from "./Artist";
import {ImageURL} from "../url";
import DefaultItem from "../DefaultItem";

export type PlaylistContent = Track;

interface Playlist extends DefaultItem {
    type: ItemType.PLAYLIST;
    id: PlaylistID;
    title: string;
    image?: ImageURL;
    owner: ArtistView[];
    contents: PlaylistContent[]
}

export type PlaylistID = ID;

export default Playlist