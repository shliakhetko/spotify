using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using spotify_server.Models;
using spotify_server.Models.Artist;
using spotify_server.Models.Playlist;
using spotify_server.Models.Track;

namespace spotify_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaylistController : ControllerBase
    {
        private readonly ItemsContext _context;

        public PlaylistController(ItemsContext context)
        {
            _context = context;
        }

        // GET: api/Playlist
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PlaylistPublic>>> GetPlaylist()
        {
            var playlists = await _context.playlists.ToListAsync();
            List<PlaylistPublic> playlistPublics = new List<PlaylistPublic>();
            
            foreach (var playlist in playlists)
            {
                await _context.Director.ConstructPlaylist(playlist);

                playlistPublics.Add(_context.Builder.GetItem());
            }
            
            return playlistPublics;
        }

        // GET: api/Playlist/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PlaylistPublic>> GetPlaylist(long id)
        {
            var playlist = await _context.playlists.FindAsync(id);
            
            if (playlist == null)
            {
                return NotFound();
            }
            
            await _context.Director.ConstructPlaylist(playlist);

            return _context.Builder.GetItem();
        }

        // PUT: api/Playlist/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlaylist(long id, Playlist playlist)
        {
            if (id != playlist.id)
            {
                return BadRequest();
            }

            _context.Entry(playlist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlaylistExists(id))
                {
                    return NotFound();
                }
            }

            return NoContent();
        }

        // POST: api/Playlist
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Playlist>> PostPlaylist(Playlist playlist)
        {
            _context.playlists.Add(playlist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlaylist", new { id = playlist.id }, playlist);
        }

        // DELETE: api/Playlist/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlaylist(long id)
        {
            var playlist = await _context.playlists.FindAsync(id);
            if (playlist == null)
            {
                return NotFound();
            }

            _context.playlists.Remove(playlist);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlaylistExists(long id)
        {
            return _context.playlists.Any(e => e.id == id);
        }
    }
}
