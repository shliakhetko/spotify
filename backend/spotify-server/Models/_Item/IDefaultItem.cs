namespace spotify_server.Models;

public interface IDefaultItem : IDefaultObject
{
    // Artist.Artist[] owner {get;set;}
    public long[] owner {get;set;}
}