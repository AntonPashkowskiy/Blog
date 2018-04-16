using MongoDB.Driver;

namespace Polygon.Todo.Core.Services.Interfaces
{
    public interface IMongoDbProvider
    {
        IMongoDatabase Database { get; }
    }
}
