import Album from "./Items/Album";
import Artist from "./Items/Artist";
import Folder from "./Items/Folder";
import Playlist from "./Items/Playlist";
import Track from "./Items/Track";

type Item = Artist | Track | Album | Playlist | Folder;

export default Item;