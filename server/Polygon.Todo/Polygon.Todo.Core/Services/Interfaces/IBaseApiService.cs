using System.Collections.Generic;
using System.Threading.Tasks;

namespace Polygon.Todo.Core.Services.Interfaces
{
    public interface IBaseApiService<T> where T : class
    {
        Task<IList<T>> GetAll();

        Task<T> GetById(string id);

        Task<T> Save(T entity);

        Task Update(T entity);

        Task Delete(string id);
    }
}
