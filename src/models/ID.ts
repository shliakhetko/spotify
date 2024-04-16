import ItemType from "./ItemType";

type ID = string; 
export interface Identificator {
    type: "id";
    id:ID;
    getType:ItemType;
}
export default ID;