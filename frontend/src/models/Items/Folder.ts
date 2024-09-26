import Album from "./Album";
import ID from "../ID";
import ItemType from "../ItemType";
import Playlist, { PlaylistID } from "./Playlist";
import { ArtistID, ArtistView } from "./Artist";
import DefaultItem from "../DefaultItem";

export type FolderContent = Folder | Playlist;

interface Folder extends DefaultItem {
    type: ItemType.FOLDER;
    id: FolderID;
    title: string;
    owner: ArtistView[];
    contents: FolderContent[];
}

export type FolderID = ID;

export default Folder;