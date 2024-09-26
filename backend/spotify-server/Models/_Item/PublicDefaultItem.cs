namespace spotify_server.Models;

public class PublicDefaultItem : IPublicDefaultItem
{
    public string type{get;set;}
    public long id {get;set;}
    public string title {get;set;}
    public DateTime date {get;set;}
}