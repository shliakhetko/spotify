namespace spotify_server.Models.Folder;

public class Folder : IDefaultItem
{
    public string type {get;set;}
    public long id {get;set;}
    public long[] owner {get;set;}
    public string title {get;set;}
    public string[] contentsType {get;set;}
    public long[] contents {get;set;}
    public DateTime date {get;set;}
}