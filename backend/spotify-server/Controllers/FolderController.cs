using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using spotify_server.Models;
using spotify_server.Models.Folder;

namespace spotify_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FolderController : ControllerBase
    {
        private readonly ItemsContext _context;

        public FolderController(ItemsContext context)
        {
            _context = context;
        }

        // GET: api/Folder
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FolderPublic>>> Getfolders()
        {
            var folders =  await _context.folders.ToListAsync();
            List<FolderPublic> folderPublics = new List<FolderPublic>();
            
            foreach (var folder in folders)
            {
                await _context.Director.ConstructFolder(folder);
                
                folderPublics.Add(_context.Builder.GetItem());
            }
            
            return folderPublics;
        }

        // GET: api/Folder/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FolderPublic>> GetFolder(long id)
        {
            var folder = await _context.folders.FindAsync(id);

            if (folder == null)
            {
                return NotFound();
            }
            
            await _context.Director.ConstructFolder(folder);
                
            return _context.Builder.GetItem();
        }

        // PUT: api/Folder/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFolder(long id, Folder folder)
        {
            if (id != folder.id)
            {
                return BadRequest();
            }

            _context.Entry(folder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FolderExists(id))
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

        // POST: api/Folder
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Folder>> PostFolder(Folder folder)
        {
            _context.folders.Add(folder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFolder", new { id = folder.id }, folder);
        }

        // DELETE: api/Folder/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFolder(long id)
        {
            var folder = await _context.folders.FindAsync(id);
            if (folder == null)
            {
                return NotFound();
            }

            _context.folders.Remove(folder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FolderExists(long id)
        {
            return _context.folders.Any(e => e.id == id);
        }
    }
}
