namespace spotify_server.Models.ItemBuilder;

public interface IItemBuilder
{
    public void BuildType(string type);

    public void BuildId(long id);

    public void BuildTitle(string title);

    public void BuildDate(DateTime date);

    public void BuildImage(string image);

    public void BuildAudio(string audio);

    public Task BuildOwner(long[] owner);

    public Task BuildFolderContents(Folder.Folder folder);

    public Task BuildPlaylistConetnts(long[] contents);

    public Task BuildTracks(long[] tracks);

    public Task BuildPlaylists(long[] playlists);

    public Task BuildFolders(long[] folders);

    public dynamic GetItem();
}