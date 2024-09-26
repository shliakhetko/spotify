using spotify_server.Models.Artist;

namespace spotify_server.Models.Playlist;

public class PlaylistPublic : PublicDefaultItem
{
    public PlaylistPublic() {}
    public PlaylistPublic(Playlist playlist, IEnumerable<Artist.Artist> owner, IEnumerable<Track.Track> tracks)
    {
        this.type = "playlist";
        this.id = playlist.id;
        this.owner = owner.ToArray();
        this.title = playlist.title;
        this.image = playlist.image;
        this.contents = tracks.ToArray();
        this.date = playlist.date;
    }

    public static async Task<PlaylistPublic> GetPlaylist(ItemsContext context, Playlist item)
    {
        // await context.Director.ConstructPlaylist(item);
        var owner = await ArtistPublic.GetArtist(context, item);
        var tracks = await DefaultObject.GetItemModel(context, item.contents, new Track.Track());
        
        return new PlaylistPublic(item, owner.ToArray(), tracks.ToArray());
    }
    
    public string type {get;set;}
    public long id {get;set;}
    public Artist.Artist[] owner {get;set;}
    public string title {get;set;}
    public string image {get;set;}
    public Track.Track[] contents {get;set;}
    public DateTime date {get;set;}
}