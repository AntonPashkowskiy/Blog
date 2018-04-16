using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using Polygon.Todo.Core.Entities;

namespace Polygon.Todo.Core.Services.Interfaces
{
    public interface IMongoCollectionHelper<TDocument> where TDocument : BaseMongoDbEntity
    {
        void SetCollection(IMongoCollection<TDocument> collection);

        void SetUpdateDefinitionCreator(Func<TDocument, UpdateDefinition<TDocument>> updateDefinitionCreator);

        Task<IList<TDocument>> FindAll();

        Task<TDocument> GetById(string id);

        Task<TDocument> Insert(TDocument entity);

        Task Update(TDocument entity);

        Task Delete(string id);
    }
}
