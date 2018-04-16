using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using NSubstitute;
using Polygon.Todo.Core.Constants;
using Polygon.Todo.Core.Entities;
using Polygon.Todo.Core.Services.Implementations;
using Polygon.Todo.Core.Services.Interfaces;
using Xunit;

namespace Polygon.Todo.Core.UnitTests.Services
{
    public class TodoServiceTests
    {
        #region Constants

        private const string FirstEntityId = "FirstEntityId";
        private const string SecondEntityId = "SecondEntityId";

        #endregion

        #region Fields

        private IMongoCollection<TodoItem> _mongoCollection;
        private IMongoDatabase _mongoDb;
        private IMongoDbProvider _databaseProvider;
        private IMongoCollectionHelper<TodoItem> _mongoCollectionHelper;

        private ITodoService _todoService;

        #endregion

        #region Ctor

        public TodoServiceTests()
        {
            _mongoCollection = Substitute.For<IMongoCollection<TodoItem>>();
            _mongoDb = Substitute.For<IMongoDatabase>();
            _mongoCollectionHelper = Substitute.For<IMongoCollectionHelper<TodoItem>>();
            _databaseProvider = Substitute.For<IMongoDbProvider>();

            _mongoDb.GetCollection<TodoItem>(Arg.Is(CollectionNames.TodoItems)).Returns(_mongoCollection);
            _databaseProvider.Database.Returns(_mongoDb);

            _todoService = new TodoService(_databaseProvider, _mongoCollectionHelper);
        }

        #endregion

        #region GetAll

        [Fact]
        public async void GetAll_CallsCollectionHelperAndReturnsAllDataFromCollection()
        {
            // Arrange
            var todoItems = new List<TodoItem>
            {
                new TodoItem(),
                new TodoItem()
            };

            _mongoCollectionHelper.FindAll().Returns(todoItems);

            // Action
            var result = await _todoService.GetAll();

            // Assert
            await _mongoCollectionHelper.Received(1).FindAll();
            Assert.NotEmpty(result);
            Assert.True(result.Count == todoItems.Count);
        }

        #endregion

        #region GetById

        [Theory]
        [InlineData(FirstEntityId)]
        [InlineData(SecondEntityId)]
        public async void GetById_ReturnsNullIfCollectionHelperReturnsNull(string id)
        {
            // Arrange
            _mongoCollectionHelper.GetById(Arg.Is(FirstEntityId)).Returns(new TodoItem());

            // Action
            var result = await _todoService.GetById(id);

            // Assert
            await _mongoCollectionHelper.Received(1).GetById(Arg.Is(id));
            Assert.True((result == null && id == SecondEntityId) || (result != null && id == FirstEntityId));
        }

        #endregion

        #region Save

        [Fact]
        public async void Save_JustCallsMongoCollectionHelperAndReturnsEntity()
        {
            // Action
            var result = await _todoService.Save(new TodoItem());

            // Assert
            await _mongoCollectionHelper.Received(1).Insert(Arg.Any<TodoItem>());
            Assert.NotNull(result);
        }

        #endregion

        #region Update

        [Fact]
        public async void Update_JustCallsMongoCollectionHelper()
        {
            // Action
            await _todoService.Update(new TodoItem());

            // Assert
            await _mongoCollectionHelper.Received(1).Update(Arg.Any<TodoItem>());
        }

        #endregion

        #region Delete

        [Fact]
        public async void Delete_JustCallsMongoCollectionHelper()
        {
            // Action
            await _todoService.Delete(FirstEntityId);

            // Assert
            await _mongoCollectionHelper.Received(1).Delete(Arg.Is(FirstEntityId));
        }

        #endregion
    }
}
