namespace spotify_server.Models;

public interface IPublicDefaultItem
{
    public string type{get;set;}
    public long id {get;set;}
    public string title {get;set;}
    public DateTime date {get;set;}
}