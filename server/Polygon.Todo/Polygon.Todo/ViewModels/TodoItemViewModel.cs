using System;
using Polygon.Todo.Core.Constants;

namespace Polygon.Todo.ViewModels
{
    public class TodoItemViewModel
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public TodoItemPriority Priority { get; set; }

        public TodoItemStatus Status { get; set; }

        public DateTime DueDate { get; set; }
    }
}
