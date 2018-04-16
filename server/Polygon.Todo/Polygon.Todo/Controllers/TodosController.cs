using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Polygon.Todo.Core.Entities;
using Polygon.Todo.Core.Services.Interfaces;
using Polygon.Todo.ViewModels;

namespace Polygon.Todo.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        #region Fields

        private readonly ITodoService _todoService;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;

        #endregion


        #region Constructor

        public TodosController(
            ITodoService todoService,
            IMapper mapper,
            ILogger<TodosController> logger)
        {
            _todoService = todoService;
            _mapper = mapper;
            _logger = logger;
        }

        #endregion

        // GET api/todos
        [HttpGet]
        public async Task<IEnumerable<TodoItemViewModel>> Get()
        {
            try
            {
                var todoItems = await _todoService.GetAll();
                return todoItems.Select(t => _mapper.Map<TodoItem, TodoItemViewModel>(t));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unable to get todos.");
                return null;
            }
        }

        // GET api/todos/5
        [HttpGet("{id}")]
        public async Task<TodoItemViewModel> Get(string id)
        {
            try
            {
                var todoItem = await _todoService.GetById(id);
                return todoItem == null ? null : _mapper.Map<TodoItem, TodoItemViewModel>(todoItem);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unable to get todo by id.", id);
                return null;
            }
        }

        // POST api/todos
        [HttpPost]
        public async Task<TodoItemViewModel> Post([FromBody] TodoItemViewModel item)
        {
            try
            {
                var todoItem = _mapper.Map<TodoItemViewModel, TodoItem>(item);
                var savedTodoItem = await _todoService.Save(todoItem);

                return savedTodoItem == null ? null : _mapper.Map<TodoItem, TodoItemViewModel>(savedTodoItem);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unable to save a todo item.");
                return null;
            }
        }

        // PUT api/todos
        [HttpPut]
        public async Task Put([FromBody] TodoItemViewModel item)
        {
            try
            {
                var todoItem = _mapper.Map<TodoItemViewModel, TodoItem>(item);

                await _todoService.Update(todoItem);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unable to update a todo item.");
            }
        }

        // DELETE api/todos/5
        [HttpDelete("{id}")]
        public async Task Delete(string id)
        {
            try
            {
                await _todoService.Delete(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unable to delete a todo item.", id);
            }
        }
    }
}
