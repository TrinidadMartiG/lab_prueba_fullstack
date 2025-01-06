# Prueba Fullstack - Pokémon TCG API y Frontend

Hola Microsystem a continuación el desarrollo de mi prueba 😊.

## Objetivo de la Prueba

1. **Backend**:
   - Implementar un backend con una API REST utilizando la base de datos provista (PostgreSQL).
   - Construir endpoints para listar:
     - Los sets disponibles.
     - Las cartas correspondientes a cada set.
     - (Opcional) Información detallada de una carta específica.

2. **Frontend**:
   - Construir una aplicación web para:
     - Listar los sets disponibles.
     - Mostrar las cartas correspondientes a cada set.
     - (Opcional) Visualizar información detallada de una carta en una vista individual.

3. **Infraestructura**:
   - Usar Docker para la configuración del entorno de desarrollo, incluyendo la base de datos y la API.

## Instalación 
- Clonar a tu ambiente local el repositorio
  
```
git clone https://github.com/TrinidadMartiG/lab_prueba_fullstack.git
cd lab_prueba_fullstack
```

Una vez descargada, se deben construir los contenedores mediante el archivo docker-compose.yaml, iniciando la aplicación la cual quedara ejecutando su frontend en el puerto 3000.

```
docker compose up --build
```

**Saludos y gracias por la oportunidad!**
