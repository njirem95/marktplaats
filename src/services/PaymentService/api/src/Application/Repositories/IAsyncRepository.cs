using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using PaymentService.Domain.Entities;

namespace PaymentService.Application.Repositories
{
    public interface IAsyncRepository<T> where T : BaseEntity
    {
        Task<T> CreateAsync(T entity);

        Task<IReadOnlyList<T>> FindAsync(Expression<Func<T, bool>> predicate);

        Task<IReadOnlyList<T>> AllAsync();

        Task UpdateAsync(T entity);

        Task<bool> DeleteAsync(T entity); 
    }
}