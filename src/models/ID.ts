import ItemType from "./ItemType";

type ID = number | string; 
export interface Identificator {
    type: "id";
    id:ID;
    getType:ItemType;
}
export default ID;