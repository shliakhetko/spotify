namespace spotify_server.Models;

public class DefaultObject : IDefaultObject
{
    public string type {get;set;}
    public long id {get;set;}
    public long[] owner {get;set;}
    public string title {get;set;}
    public DateTime date {get;set;}
    
    public static async Task<IEnumerable<Track.Track>> GetItemModel (ItemsContext _context, long[] arr, Track.Track type)
    {
        Track.Track[] currentArr = new Track.Track[arr.Length];

        for (int i = 0; i < arr.Length; i++)
        {
            var currentItem = await _context.tracks.FindAsync(arr[i]);
            
            if (currentItem == null)
            {
                return [];
            }

            currentArr[i] = currentItem;
        }

        if (currentArr.Length == 0)
        {
            return [];
        }

        return currentArr;
    }
    
    public static async Task<IEnumerable<Playlist.Playlist>> GetItemModel (ItemsContext _context, long[] arr, Playlist.Playlist type)
    {
        Playlist.Playlist[] currentArr = new Playlist.Playlist[arr.Length];

        for (int i = 0; i < arr.Length; i++)
        {
            var currentItem = await _context.playlists.FindAsync(arr[i]);
            
            if (currentItem == null)
            {
                return [];
            }

            currentArr[i] = currentItem;
        }

        if (currentArr.Length == 0)
        {
            return [];
        }

        return currentArr;
    }
    
    public static async Task<IEnumerable<Folder.Folder>> GetItemModel (ItemsContext _context, long[] arr, Folder.Folder type)
    {
        Folder.Folder[] currentArr = new Folder.Folder[arr.Length];

        for (int i = 0; i < arr.Length; i++)
        {
            var currentItem = await _context.folders.FindAsync(arr[i]);
            
            if (currentItem == null)
            {
                return [];
            }

            currentArr[i] = currentItem;
        }

        if (currentArr.Length == 0)
        {
            return [];
        }

        return currentArr;
    }
}