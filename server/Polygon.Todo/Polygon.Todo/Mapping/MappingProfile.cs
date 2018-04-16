using AutoMapper;
using MongoDB.Bson;
using Polygon.Todo.Core.Entities;
using Polygon.Todo.ViewModels;

namespace Polygon.Todo.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<TodoItemViewModel, TodoItem>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => new ObjectId(x.Id)));
            CreateMap<TodoItem, TodoItemViewModel>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id.ToString()));
        }
    }
}
