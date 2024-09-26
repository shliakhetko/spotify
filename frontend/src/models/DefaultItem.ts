import ID from "./ID";
import ImageURL from "./url";
import ItemType from "./ItemType";
import { ArtistView } from "./Items/Artist";

interface DefaultItem{
    type: ItemType;
    id: ID;
    date: Date;
}

export default DefaultItem