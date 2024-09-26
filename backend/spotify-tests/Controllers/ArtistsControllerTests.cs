using Moq;
using Moq.EntityFrameworkCore;
using spotify_server.Controllers;
using spotify_server.Models;
using spotify_server.Models.Artist;
using spotify_tests.Data;

namespace spotify_tests.Controllers;

[TestFixture]
public class ArtistControllerTests
{
    #nullable disable
    private ArtistController _artistController;
    private ItemsContext _contextMock;
    
    [SetUp]
    public void Setup()
    {
        // Arrange
        var mock = new Mock<ItemsContext>();
        mock.Setup(cnt => cnt.artists)
            .ReturnsDbSet(HelpMockData.GetFakeArtists);
        _contextMock = mock.Object;
        
        _artistController = new ArtistController(_contextMock);
    }

    [Test]
    public async Task ShouldGetArtistsOnGetArtistsMethod()
    {
        // Act
        var result = await _artistController.GetArtists();
        // Assert
        Assert.That(result, Is.Not.Null);
    }
    
    [Test]
    public async Task ShouldGetArtistOnGetArtistMethod()
    {
        // Arrange 
        int id = 1;
        // Act
        var result = await _artistController.GetArtist(1);
        // Assert
        Assert.That(result, Is.Not.Null);
    }

    [Test]
    public async Task ShouldPostArtistOnPostArtistMethod()
    {
        // Arrange 
        var request = new Artist
        {
            id = 100,
            title = "Artist1",
            tracks = [1, 2, 3],
            playlists = [1, 2, 3],
            folders = [1, 4]
        };
        // Act
        var result = _artistController.PostArtist(request).IsCompletedSuccessfully;
        // Assert
        Assert.That(result, Is.True);
    }
    
    [Test]
    public async Task ShouldDeleteArtistOnDeleteArtistMethod()
    {
        // Arrange 
        int id = 1;
        // Act
        var result = _artistController.DeleteArtist(id).IsCompletedSuccessfully;
        // Assert
        Assert.That(result, Is.True);
    }

    [Test]
    public async Task ShouldCheckExistsArtistOnArtistExist()
    {
        // Arrange 
        int id = 1;
        // Act
        var result = (await _artistController.ArtistExists(1)).Value;
        // Assert
        Assert.That(result, Is.True);
    }

    [TearDown]
    public void Cleanup()
    {
        _contextMock.Dispose();
    }
}