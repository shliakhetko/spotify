namespace spotify_server.Models.Track;

public class TrackPublic : PublicDefaultItem
{
    public TrackPublic() {}
    public TrackPublic(Track track, Artist.Artist[] owner)
    {
        this.type = "track";
        this.id = track.id;
        this.title = track.title;
        this.image = track.image;
        this.audio = track.audio;
        this.date = track.date;
        
        this.owner = owner;
        
    }
    
    public string type {get;set;}
    public long id {get;set;}
    public Artist.Artist[] owner {get;set;}
    public string title {get;set;}
    public string image {get;set;}
    public string audio {get;set;}
    public DateTime date {get;set;}
}