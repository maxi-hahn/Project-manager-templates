using {{PROJECT_NAME}}.Domain.Entities;
using {{PROJECT_NAME}}.Domain.Interfaces;

namespace {{PROJECT_NAME}}.Infrastructure.Persistence;

public class InMemoryProductRepository : IProductRepository
{
    private readonly List<Product> _products = new();

    public InMemoryProductRepository()
    {
        // Datos de ejemplo
        _products.Add(new Product
        {
            Id = Guid.NewGuid(),
            Name = "Producto 1",
            Price = 9.99m,
            Stock = 100
        });
        _products.Add(new Product
        {
            Id = Guid.NewGuid(),
            Name = "Producto 2",
            Price = 19.99m,
            Stock = 50
        });
    }

    public Task<IEnumerable<Product>> GetAllAsync()
    {
        return Task.FromResult<IEnumerable<Product>>(_products);
    }

    public Task<Product?> GetByIdAsync(Guid id)
    {
        return Task.FromResult(_products.FirstOrDefault(p => p.Id == id));
    }

    public Task<Product> AddAsync(Product product)
    {
        product.Id = Guid.NewGuid();
        _products.Add(product);
        return Task.FromResult(product);
    }

    public Task UpdateAsync(Product product)
    {
        var index = _products.FindIndex(p => p.Id == product.Id);
        if (index >= 0)
        {
            _products[index] = product;
        }
        return Task.CompletedTask;
    }

    public Task DeleteAsync(Guid id)
    {
        _products.RemoveAll(p => p.Id == id);
        return Task.CompletedTask;
    }
}