namespace spotify_server.Models.Artist;

public class Artist : IDefaultObject
{
    public string type {get;set;}
    public long id {get;set;}
    public string title {get;set;}
    public string image {get;set;}
    
    public long[] tracks { get; set; }
    public long[] playlists { get; set; }
    public long[] folders { get; set; }
    
    public DateTime date {get;set;}
}