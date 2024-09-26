namespace spotify_server.Models;

public class ItemTypeMethods
{
    public static string GetItemTypeString(ItemType type)
    {
        switch(type)
        {
            case ItemType.TRACK:
                return "track";
            case ItemType.ARTIST:
                return "artist";
            case ItemType.PLAYLIST:
                return "playlist";
            case ItemType.ALBUM:
                return "album";
            case ItemType.FOLDER:
                return "folder";
            default:
                return "unknown";
        }
    }
    
    public static ItemType GetItemTypeEnum(string type)
    {
        switch(type)
        {
            case "track":
                return ItemType.TRACK;
            case "artist":
                return ItemType.ARTIST;
            case "playlist":
                return ItemType.PLAYLIST;
            case "album":
                return ItemType.ALBUM;
            case "folder":
                return ItemType.FOLDER;
            default:
                return ItemType.TRACK;
        }
    }
}