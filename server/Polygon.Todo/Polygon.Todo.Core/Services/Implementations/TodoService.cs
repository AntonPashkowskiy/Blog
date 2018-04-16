using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using Polygon.Todo.Core.Constants;
using Polygon.Todo.Core.Entities;
using Polygon.Todo.Core.Services.Interfaces;

namespace Polygon.Todo.Core.Services.Implementations
{
    public class TodoService : ITodoService
    {
        #region Fields

        private readonly IMongoDbProvider _databaseProvider;
        private readonly IMongoCollectionHelper<TodoItem> _mongoCollectionHelper;

        #endregion

        #region Ctor

        public TodoService(IMongoDbProvider databaseProvider, IMongoCollectionHelper<TodoItem> mongoCollectionHelper)
        {
            _databaseProvider = databaseProvider;
            _mongoCollectionHelper = mongoCollectionHelper;

            var collection = _databaseProvider.Database.GetCollection<TodoItem>(CollectionNames.TodoItems);
            var updateDefinitionCreator = GetUpdateDefinitionCreator();

            _mongoCollectionHelper.SetCollection(collection);
            _mongoCollectionHelper.SetUpdateDefinitionCreator(updateDefinitionCreator);
        }

        #endregion

        #region Private Properties


        #endregion

        #region Service Implementation

        public async Task<IList<TodoItem>> GetAll()
        {
            return await _mongoCollectionHelper.FindAll();
        }

        public async Task<TodoItem> GetById(string id)
        {
            return await _mongoCollectionHelper.GetById(id);
        }


        public async Task<TodoItem> Save(TodoItem entity)
        {
            await _mongoCollectionHelper.Insert(entity);
            return entity;
        }

        public async Task Update(TodoItem entity)
        {
            await _mongoCollectionHelper.Update(entity);
        }

        public async Task Delete(string id)
        {
            await _mongoCollectionHelper.Delete(id);
        }

        #endregion

        #region Private methods

        private Func<TodoItem, UpdateDefinition<TodoItem>> GetUpdateDefinitionCreator()
        {
            UpdateDefinition<TodoItem> creator(TodoItem entity)
            {
                return Builders<TodoItem>.Update
                    .Set(x => x.Title, entity.Title)
                    .Set(x => x.Priority, entity.Priority)
                    .Set(x => x.Status, entity.Status)
                    .Set(x => x.DueDate, entity.DueDate);
            }

            return creator;
        }

        #endregion
    }
}
