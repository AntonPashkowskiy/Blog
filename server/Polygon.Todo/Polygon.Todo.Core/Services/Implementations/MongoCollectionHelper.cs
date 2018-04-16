using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using Polygon.Todo.Core.Entities;
using Polygon.Todo.Core.Services.Interfaces;

namespace Polygon.Todo.Core.Services.Implementations
{
    public class MongoCollectionHelper<TDocument> : IMongoCollectionHelper<TDocument> where TDocument : BaseMongoDbEntity
    {
        #region Fields

        private IMongoCollection<TDocument> _collection;
        private Func<TDocument, UpdateDefinition<TDocument>> _updateDefinitionCreator;

        #endregion

        #region Public methods

        public async Task<IList<TDocument>> FindAll()
        {
            return (await _collection.FindAsync(FilterDefinition<TDocument>.Empty)).ToList();
        }

        public async Task<TDocument> GetById(string id)
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                throw new ArgumentException($"{nameof(GetById)} requires not null parameter {nameof(id)}");
            }

            var filter = Builders<TDocument>.Filter.Eq(x => x.Id, new ObjectId(id));
            var elementCursor = await _collection.FindAsync(filter);

            return elementCursor.FirstOrDefault();
        }

        public async Task<TDocument> Insert(TDocument entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException($"{nameof(Insert)} requires not null parameter {nameof(entity)}");
            }

            await _collection.InsertOneAsync(entity);
            return entity;
        }

        public async Task Update(TDocument entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException($"{nameof(Update)} requires not null parameter {nameof(entity)}");
            }

            var filter = Builders<TDocument>.Filter.Eq(x => x.Id, entity.Id);
            await _collection.FindOneAndUpdateAsync(filter, _updateDefinitionCreator(entity));
        }

        public async Task Delete(string id)
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                throw new ArgumentException($"{nameof(Delete)} requires not null parameter {nameof(id)}");
            }

            var filter = Builders<TDocument>.Filter.Eq(x => x.Id, new ObjectId(id));
            await _collection.FindOneAndDeleteAsync(filter);
        }

        public void SetCollection(IMongoCollection<TDocument> collection)
        {
            _collection = collection ??
                throw new ArgumentNullException($"{nameof(SetCollection)} requires not null parameter {nameof(collection)}");
        }

        public void SetUpdateDefinitionCreator(Func<TDocument, UpdateDefinition<TDocument>> updateDefinitionCreator)
        {
            _updateDefinitionCreator = updateDefinitionCreator ??
                throw new ArgumentNullException($"{nameof(SetUpdateDefinitionCreator)} requires not null parameter {nameof(updateDefinitionCreator)}");
        }

        #endregion
    }
}
;