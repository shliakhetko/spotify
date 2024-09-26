using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using spotify_server.Models;
using spotify_server.Models.Artist;
using spotify_server.Models.Track;

namespace spotify_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrackController : ControllerBase
    {
        private readonly ItemsContext _context;

        public TrackController(ItemsContext context)
        {
            _context = context;
        }

        // GET: api/Track
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrackPublic>>> GetTracks()
        {
            var tracks = await _context.tracks.ToListAsync();
            List<TrackPublic> trackPublics = new List<TrackPublic>();
            
            foreach (var track in tracks)
            {
                await _context.Director.ConstructTrack(track);
                
                trackPublics.Add(_context.Builder.GetItem());
            }
            
            return trackPublics;
        }

        // GET: api/Track/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrackPublic>> GetTrack(long id)
        {
            var track = await _context.tracks.FindAsync(id);
            
            if (track == null)
            {
                return NotFound();
            }
            
            await _context.Director.ConstructTrack(track);
                
            return _context.Builder.GetItem();
        }

        // PUT: api/Track/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrack(long id, Track track)
        {
            if (id != track.id)
            {
                return BadRequest();
            }

            _context.Entry(track).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrackExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Track
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Track>> PostTrack(Track track)
        {
            _context.tracks.Add(track);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrack", new { id = track.id }, track);
        }

        // DELETE: api/Track/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrack(long id)
        {
            var track = await _context.tracks.FindAsync(id);
            if (track == null)
            {
                return NotFound();
            }

            _context.tracks.Remove(track);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrackExists(long id)
        {
            return _context.tracks.Any(e => e.id == id);
        }
    }
}
