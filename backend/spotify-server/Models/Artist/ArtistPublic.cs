namespace spotify_server.Models.Artist;

public class ArtistPublic : PublicDefaultItem
{
    public ArtistPublic() {}
    public ArtistPublic(Artist artist, IEnumerable<Track.Track> tracks, IEnumerable<Playlist.Playlist> playlists, IEnumerable<Folder.Folder> folders)
    {
        this.type = "artist";
        this.id = artist.id;
        this.title = artist.title;
        this.image = artist.image;
        this.date = artist.date;

        this.tracks = tracks.ToArray();
        this.playlists = playlists.ToArray();
        this.folders = folders.ToArray();
    }
    
    public static async Task<Artist[]> GetArtist (ItemsContext _context, IDefaultItem item)
    {
        // List<Artist> owners = new List<Artist>();
        Artist[] owners = new Artist[item.owner.Length];

        try
        {
            for(int i = 0; i < item.owner.Length; i++)
            {
                Console.WriteLine(item.owner[i]);
                var owner = await _context.artists.FindAsync(item.owner[i]);
            
                if (owner == null)
                {
                    return [];
                }
                Console.WriteLine(owner.title);

                // owners.Add(owner);
                owners[i] = owner;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        if (owners.Length == 0)
        {
            return [];
        }

        return owners;
    }
    
    public static async Task<Artist[]> GetArtist (ItemsContext _context, long[] owner)
    {
        // List<Artist> owners = new List<Artist>();
        Artist[] owners = new Artist[owner.Length];

        try
        {
            for(int i = 0; i < owner.Length; i++)
            {
                Console.WriteLine(owner[i]);
                var curOwner = await _context.artists.FindAsync(owner[i]);
            
                if (owner == null)
                {
                    return [];
                }
                Console.WriteLine(curOwner.title);

                // owners.Add(owner);
                owners[i] = curOwner;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        if (owners.Length == 0)
        {
            return [];
        }

        return owners;
    }

    public string type{get;set;}
    public long id {get;set;}
    public string title {get;set;}
    public string image {get;set;}
    
    public Track.Track[] tracks { get; set; }
    public Playlist.Playlist[] playlists { get; set; }
    public Folder.Folder[] folders { get; set; }
    public DateTime date {get;set;}
}