using Microsoft.EntityFrameworkCore;
using spotify_server.Models.ItemBuilder;

namespace spotify_server.Models;

public class ItemsContext : DbContext
{
    public ItemsContext(DbContextOptions<ItemsContext> options) : base(options)
    {
        Builder = new ItemBuilder.ItemBuilder(this);
        Director = new ItemDirector(Builder);
    }
    public ItemsContext() {}
    
    public ItemBuilder.ItemBuilder Builder { get; }
    public ItemDirector Director { get; }
    public virtual DbSet<Track.Track> tracks { get; set; } = null!;
    public virtual DbSet<Artist.Artist> artists { get; set; } = null!;
    public virtual DbSet<Playlist.Playlist> playlists { get; set; } = null!;
    public virtual DbSet<Folder.Folder> folders { get; set; } = null!;
}