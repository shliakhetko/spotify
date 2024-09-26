using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using spotify_server.Models;
using spotify_server.Models.Artist;
using spotify_server.Models.Folder;
using spotify_server.Models.ItemBuilder;
using spotify_server.Models.Playlist;
using spotify_server.Models.Track;

namespace spotify_server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ArtistController(ItemsContext context) : ControllerBase
{
    // GET: api/Artist
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ArtistPublic>>> GetArtists()
    {
        var artists = await context.artists.ToListAsync();
        List<ArtistPublic> artistPublics = new List<ArtistPublic>();
        
        foreach (var artist in artists)
        {
            await context.Director.ConstructArtist(artist);
            
            artistPublics.Add(context.Builder.GetItem());
        }

        return artistPublics;
    }

    // GET: api/Artist/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ArtistPublic>> GetArtist(long id)
    {
        var artist = await context.artists.FindAsync(id);

        if (artist == null)
        {
            return NotFound();
        }
        
        await context.Director.ConstructArtist(artist);
        
        return context.Builder.GetItem();
    }

    // PUT: api/Artist/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutArtist(long id, Artist artist)
    {
        if (id != artist.id)
        {
            return BadRequest();
        }

        context.Entry(artist).State = EntityState.Modified;

        try
        {
            await context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException ex)
        {
            if (!await _innerArtistExists(id))
            {
                return NotFound();
            }

            throw new Exception("Concurrency error", innerException: ex);
        }

        return NoContent();
    }

    // POST: api/Artist
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Artist>> PostArtist(Artist artist)
    {
        context.artists.Add(artist);
        await context.SaveChangesAsync();

        return CreatedAtAction("GetArtists", new { id = artist.id }, artist);
    }

    // DELETE: api/Artist/5
    [HttpDelete("{id:long}")]
    public async Task<IActionResult> DeleteArtist(long id)
    {
        var artist = await context.artists.FindAsync(id);
        if (artist == null)
        {
            return NotFound();
        }

        context.artists.Remove(artist);
        await context.SaveChangesAsync();

        return NoContent();
    }

    private async Task<bool> _innerArtistExists(long id)
        => await context.artists.AnyAsync(e => e.id == id);
    
    public async Task<ActionResult<bool>> ArtistExists(long id)
        => await _innerArtistExists(id);
}