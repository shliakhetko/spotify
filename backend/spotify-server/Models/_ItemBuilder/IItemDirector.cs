namespace spotify_server.Models.ItemBuilder;

public interface IItemDirector
{
    public Task ConstructArtist(Artist.Artist artist);

    public Task ConstructArtist(long id, string title, string image, DateTime date, long[] tracks,
        long[] playlists, long[] folders);

    public Task ConstructTrack(Track.Track track);
    public Task ConstructTrack(long id, string title, string image, string audio, DateTime date, long[] owner);
    public Task ConstructPlaylist(Playlist.Playlist playlist);

    public Task ConstructPlaylist(long id, string title, string image, DateTime date, long[] owner,
        long[] contents);

    public Task ConstructFolder(Folder.Folder folder);

    public Task ConstructFolder(long id, string title, DateTime date, long[] owner,
        Folder.Folder folderWithContents);
}