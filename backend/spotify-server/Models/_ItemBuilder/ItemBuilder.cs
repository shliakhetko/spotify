using spotify_server.Models.Artist;
using spotify_server.Models.Folder;
using spotify_server.Models.Playlist;
using spotify_server.Models.Track;

namespace spotify_server.Models.ItemBuilder;

public class ItemBuilder(ItemsContext context) : IItemBuilder
{
    private dynamic _item;
    private ItemsContext _context = context;
        
    public void BuildType(string type)
    {
        if (type == ItemTypeMethods.GetItemTypeString(ItemType.TRACK))
        {
            _item = new TrackPublic();
        }
        else if (type == ItemTypeMethods.GetItemTypeString(ItemType.ARTIST))
        {
            _item = new ArtistPublic();
        }
        else if (type == ItemTypeMethods.GetItemTypeString(ItemType.PLAYLIST))
        {
            _item = new PlaylistPublic();
        }
        else if (type == ItemTypeMethods.GetItemTypeString(ItemType.FOLDER))
        {
            _item = new FolderPublic();
        }
        
        _item.type = type;
    }

    public void BuildId(long id)
    {
        _item.id = id;
    }

    public void BuildTitle(string title)
    {
        _item.title = title;
    }

    public void BuildDate(DateTime date)
    {
        _item.date = date;
    }
    
    public void BuildImage(string image)
    {
        _item.image = image;
    }
    
    public void BuildAudio(string audio)
    {
        _item.audio = audio;
    }
    
    public async Task BuildOwner(long[] owner)
    {
        _item.owner = await ArtistPublic.GetArtist(_context, owner);
    }
    
    public async Task BuildFolderContents(Folder.Folder folder)
    {
        var curFolder = await FolderPublic.GetFolder(_context, folder);
        _item.contents = curFolder.contents;
    }
    
    public async Task BuildPlaylistConetnts(long[] contents)
    {
        var curContents = await DefaultObject.GetItemModel(_context, contents, new Track.Track());
        _item.contents = curContents.ToArray();
    }
    
    public async Task BuildTracks(long[] tracks)
    {
        var curTracks = await DefaultObject.GetItemModel(_context, tracks, new Track.Track());
        _item.tracks = curTracks.ToArray();
    }
    
    public async Task BuildPlaylists(long[] playlists)
    {
        var curPlaylists = await DefaultObject.GetItemModel(_context, playlists, new Playlist.Playlist());
        _item.playlists = curPlaylists.ToArray();
    }
    
    public async Task BuildFolders(long[] folders)
    {
        var curFolders = await DefaultObject.GetItemModel(_context, folders, new Folder.Folder());
        _item.folders = curFolders.ToArray();
    }
    
    public dynamic GetItem()
    {
        return _item;
    }
}