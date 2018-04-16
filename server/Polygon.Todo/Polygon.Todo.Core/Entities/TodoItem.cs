using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Polygon.Todo.Core.Constants;

namespace Polygon.Todo.Core.Entities
{
    public class TodoItem : BaseMongoDbEntity
    {
        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Priority")]
        public TodoItemPriority Priority { get; set; }

        [BsonElement("Status")]
        public TodoItemStatus Status { get; set; }

        [BsonElement]
        [BsonDateTimeOptions]
        public DateTime DueDate { get; set; }
    }
}
