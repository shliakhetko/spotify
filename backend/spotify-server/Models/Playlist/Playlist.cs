namespace spotify_server.Models.Playlist;

public class Playlist : IDefaultItem
{
     public string type {get;set;}
    public long id {get;set;}
    public long[] owner {get;set;}
    public string title {get;set;}
    public string image {get;set;}
    public long[] contents {get;set;}
    public DateTime date {get;set;}
}