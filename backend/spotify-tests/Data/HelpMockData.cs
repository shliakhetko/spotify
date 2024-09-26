using spotify_server.Models;
using spotify_server.Models.Artist;
using spotify_server.Models.Track;

namespace spotify_tests.Data;

public static class HelpMockData
{
    public static IList<Artist> GetFakeArtists =>
    [
        new Artist
        {
            id = 1,
            title = "Artist1",
            tracks = [1, 2, 3],
            playlists = [1, 2, 3],
            folders = [1, 4]
        },
        new Artist
        {
            id = 2,
            title = "Artist2",
            tracks = [4, 5, 6],
            playlists = [4, 5, 6],
            folders = [2, 5]
        },
        new Artist
        {
            id = 3,
            title = "Artist3",
            tracks = [7, 8, 9],
            playlists = [7, 8, 9],
            folders = [3, 6]
        }
    ];
    
    public static IList<Track> GetFakeTracks =>
    [
        new Track
        {
            id = 1,
            title = "Track1",
            owner = [1],
            type = "rock",
            image = "url1",
            audio = "url1",
        },
        new Track
        {
            id = 2,
            title = "Track2",
            owner = [1],
            type = "rock",
            image = "url2",
            audio = "url2",
        },
        new Track
        {
            id = 3,
            title = "Track3",
            owner = [1],
            type = "rock",
            image = "url3",
            audio = "url3",
        },
        new Track
        {
            id = 4,
            title = "Track4",
            owner = [2],
            type = "pop",
            image = "url4",
            audio = "url4",
        },
        new Track
        {
            id = 5,
            title = "Track5",
            owner = [2],
            type = "pop",
            image = "url5",
            audio = "url5",
        },
        new Track
        {
            id = 6,
            title = "Track6",
            owner = [2],
            type = "pop",
            image = "url6",
            audio = "url6",
        },
        new Track
        {
            id = 7,
            title = "Track7",
            owner = [3],
            type = "jazz",
            image = "url7",
            audio = "url7",
        },
    ];
}