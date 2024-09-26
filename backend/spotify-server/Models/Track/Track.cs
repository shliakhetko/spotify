namespace spotify_server.Models.Track;

public class Track : IDefaultItem
{
    public string type {get;set;}
    public long id {get;set;}
    public long[] owner {get;set;}
    public string title {get;set;}
    public string image {get;set;}
    public string audio {get;set;}
    public DateTime date {get;set;}
}