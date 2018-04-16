using MongoDB.Driver;
using Polygon.Todo.Core.Services.Interfaces;

namespace Polygon.Todo.Core.Services.Implementations
{
    public class MongoDbProvider : IMongoDbProvider
    {
        #region Fields

        private MongoClient _client;
        private IMongoDatabase _database;

        #endregion

        public MongoDbProvider(MongoClientSettings settings, string databaseName)
        {
            _client = new MongoClient(settings);
            _database = _client.GetDatabase(databaseName);
        }

        public IMongoDatabase Database => _database;
    }
}
