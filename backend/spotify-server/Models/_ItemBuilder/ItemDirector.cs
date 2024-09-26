namespace spotify_server.Models.ItemBuilder;

public class ItemDirector(ItemBuilder itemBuilder) : IItemDirector
{
    private ItemBuilder _itemBuilder = itemBuilder;
    
    public async Task ConstructArtist(Artist.Artist artist)
    {
        await ConstructArtist(artist.id, artist.title, artist.image, artist.date, artist.tracks, artist.playlists, artist.folders);
    }
    public async Task ConstructArtist(long id, string title, string image, DateTime date, long[] tracks, long[] playlists, long[] folders)
    {
        _itemBuilder.BuildType(ItemTypeMethods.GetItemTypeString(ItemType.ARTIST));
        _itemBuilder.BuildId(id);
        _itemBuilder.BuildTitle(title);
        _itemBuilder.BuildDate(date);
        _itemBuilder.BuildImage(image);
        await _itemBuilder.BuildTracks(tracks);
        await _itemBuilder.BuildPlaylists(playlists);
        await _itemBuilder.BuildFolders(folders);
    }
    
    public async Task ConstructTrack(Track.Track track)
    {
        await ConstructTrack(track.id, track.title, track.image, track.audio, track.date, track.owner);
    }
    public async Task ConstructTrack(long id, string title, string image, string audio, DateTime date, long[] owner)
    {
        _itemBuilder.BuildType(ItemTypeMethods.GetItemTypeString(ItemType.TRACK));
        _itemBuilder.BuildId(id);
        _itemBuilder.BuildTitle(title);
        _itemBuilder.BuildDate(date);
        _itemBuilder.BuildImage(image);
        _itemBuilder.BuildAudio(audio);
        await _itemBuilder.BuildOwner(owner);
    }
    
    public async Task ConstructPlaylist(Playlist.Playlist playlist)
    {
        await ConstructPlaylist(playlist.id, playlist.title, playlist.image, playlist.date, playlist.owner, playlist.contents);
    }
    public async Task ConstructPlaylist(long id, string title, string image, DateTime date, long[] owner, long[] contents)
    {
        _itemBuilder.BuildType(ItemTypeMethods.GetItemTypeString(ItemType.PLAYLIST));
        _itemBuilder.BuildId(id);
        _itemBuilder.BuildTitle(title);
        _itemBuilder.BuildDate(date);
        _itemBuilder.BuildImage(image);
        await _itemBuilder.BuildPlaylistConetnts(contents);
        await _itemBuilder.BuildOwner(owner);
    }
    
    public async Task ConstructFolder(Folder.Folder folder)
    {
        await ConstructFolder(folder.id, folder.title, folder.date, folder.owner, folder);
    }
    public async Task ConstructFolder(long id, string title, DateTime date, long[] owner, Folder.Folder folderWithContents)
    {
        _itemBuilder.BuildType(ItemTypeMethods.GetItemTypeString(ItemType.FOLDER));
        _itemBuilder.BuildId(id);
        _itemBuilder.BuildTitle(title);
        _itemBuilder.BuildDate(date);
        await _itemBuilder.BuildFolderContents(folderWithContents);
        await _itemBuilder.BuildOwner(owner);
    }
}