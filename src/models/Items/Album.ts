import ID from "../ID";
import ItemType from "../ItemType";
import Track, { TrackID } from "./Track";
import { ArtistID, ArtistView } from "./Artist";
import {ImageURL} from "../url";
import DefaultItem from "../DefaultItem";

export type AlbumContent = TrackID | ArtistID;

interface Album extends DefaultItem {
    type: ItemType.ALBUM;
    id: AlbumID;
    title:string;
    owner: ArtistView[];
    image?: ImageURL;
    contents: AlbumContent[]
}

export type AlbumID = ID;

export default Album;