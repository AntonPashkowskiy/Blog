using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Polygon.Todo.Core.Entities
{
    public class BaseMongoDbEntity
    {
        [BsonId]
        public ObjectId Id { get; set; }
    }
}
