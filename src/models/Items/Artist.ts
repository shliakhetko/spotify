import Album, { AlbumID } from "./Album";
import Folder, { FolderID } from "./Folder";
import ID from "../ID";
import ItemType from "../ItemType";
import Playlist, { PlaylistID } from "./Playlist";
import Track, { TrackID } from "./Track";
import {ImageURL} from "../url";
import DefaultItem from "../DefaultItem";

interface Artist extends DefaultItem {
    type: ItemType.ARTIST;
    id: ArtistID;
    title: string;
    image?: ImageURL;
    tracks: Track[];
    albums: AlbumID[];
    playlists: Playlist[];
    folders: FolderID[];
}

export interface ArtistView extends DefaultItem {
    type: ItemType.ARTIST;
    title: string;
    id: ArtistID;
    image?: ImageURL;
}

export type ArtistID = ID;

export default Artist;