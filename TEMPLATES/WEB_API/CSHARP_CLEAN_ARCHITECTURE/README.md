# {{PROJECT_NAME}}

{{DESCRIPTION}}

API REST con Clean Architecture, construida con ASP.NET Core y .NET 10.

---

## Requisitos

- .NET SDK 10 o superior.
  Descargalo en https://dotnet.microsoft.com/download

---

## Cómo correr

```bash
dotnet run --project src/{{PROJECT_NAME}}.API
```

La API estará disponible en:

- API: http://localhost:5000
- Swagger: http://localhost:5000/swagger

---

## Estructura

```
src/
├── {{PROJECT_NAME}}.Domain/         # Entidades, interfaces de dominio
├── {{PROJECT_NAME}}.Application/    # Servicios, lógica de aplicación
├── {{PROJECT_NAME}}.Infrastructure/ # Implementaciones (repositorios, servicios externos)
└── {{PROJECT_NAME}}.API/            # Controllers, configuración de la API
```

### Capas de Clean Architecture

- **Domain:** El núcleo. Entidades y contratos. **No depende de nada.**
- **Application:** Servicios y lógica de aplicación. **Solo depende de Domain.**
- **Infrastructure:** Implementaciones concretas (repositorios, servicios externos). **Depende de Application y Domain.**
- **API:** Punto de entrada. Controllers y configuración. **Depende de Application e Infrastructure.**

---

## Flujo de una request

```
Controller (API)
    ↓
Service (Application)
    ↓
Repository (Infrastructure)
    ↓
Domain (Entities)
```

---

## Endpoints

- `GET /api/products` — Lista todos los productos.
- `GET /api/products/{id}` — Obtiene un producto por ID.
- `POST /api/products` — Crea un producto.
- `PUT /api/products/{id}` — Actualiza un producto.
- `DELETE /api/products/{id}` — Elimina un producto.

---

## Nota sobre el namespace

El namespace base es `{{PROJECT_NAME}}`. Si tu nombre de proyecto
contiene espacios o caracteres especiales, editá los archivos `.cs`
para usar un namespace válido (sin espacios).