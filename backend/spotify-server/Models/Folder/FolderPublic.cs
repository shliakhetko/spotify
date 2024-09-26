using spotify_server.Models.Artist;
using spotify_server.Models.Playlist;

namespace spotify_server.Models.Folder;

public class FolderPublic  : PublicDefaultItem
{
    public FolderPublic() {}
    public FolderPublic(Folder folder, Artist.Artist[] owner, object[] contents)
    {
        this.type = "folder";
        this.id = folder.id;
        this.owner = owner;
        this.title = folder.title;
        this.contents = contents;
        this.date = folder.date;
    }
    
    public static async Task<FolderPublic> GetFolder(ItemsContext _context, Folder folder)
    {
        var owners = await ArtistPublic.GetArtist(_context, folder);

        if (owners.Length == 0)
        {
            return null;
        }
                
        var contents = new List<object>();
        
        if((folder.contents == null || folder.contentsType == null) && folder.contentsType.Length != folder.contents.Length)
        {
            return null;
        }

        for (int i = 0; i < folder.contents.Length; i++)
        {
            if (folder.contentsType[i] == "folder")
            {
                var currentItem = await _context.folders.FindAsync(folder.contents[i]);
                if (currentItem != null)
                {
                    FolderPublic currentFolder = await GetFolder(_context, currentItem);
                    contents.Add(currentFolder);
                }
            }
            if (folder.contentsType[i] == "playlist")
            {
                var currentItem = await _context.playlists.FindAsync(folder.contents[i]);
                if(currentItem != null)
                {
                    // await _context.Director.ConstructPlaylist(currentItem);
                    // contents.Add(_context.Builder.GetItem() as PlaylistPublic);
                    
                    contents.Add(await PlaylistPublic.GetPlaylist(_context, currentItem));
                }
            }
            
        }
            
        FolderPublic folderPublic = new FolderPublic(folder, owners, contents.ToArray());
        return folderPublic;
    }
    
    public string type {get;set;}
    public long id {get;set;}
    public Artist.Artist[] owner {get;set;}
    public string title {get;set;}
    public object[] contents {get;set;}
    public DateTime date {get;set;}
}