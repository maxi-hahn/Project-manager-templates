# {{PROJECT_NAME}}

{{DESCRIPTION}}

---

## Requisitos

- .NET SDK 8 o superior.
  Descargalo en https://dotnet.microsoft.com/download

---

## Cómo correr

```bash
dotnet run
```

La API estará disponible en:

- API: http://localhost:5000
- Swagger: http://localhost:5000/swagger

---

## Estructura

```
.
├── Controllers/        # Controladores (endpoints)
├── Properties/         # Configuración de launch
├── Program.cs          # Punto de entrada
├── WeatherForecast.cs  # Modelo de ejemplo
├── appsettings.json    # Configuración
└── {{PROJECT_NAME}}.csproj
```

---

## Nota sobre el namespace

El namespace del proyecto es `{{PROJECT_NAME}}`. Si tu nombre de
proyecto contiene espacios o caracteres especiales, editá los
archivos `.cs` para usar un namespace válido (sin espacios).