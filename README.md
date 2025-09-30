# Finmarkets Interview Challenge: ☑️ TODO List

API REST para gestión de tareas desarrollada con TypeScript, Node.js y arquitectura hexagonal. Permite crear, actualizar, eliminar y consultar tareas con comunicación en tiempo real a través de WebSockets.

El challenge se encuentra deployado en https://todo.odev.lat ✈️

> Si se busca probar en local, la opción más recomendada levantar con docker compose y abrir el index.html de /client

[Click aquí para ver documentación en postman](https://documenter.getpostman.com/view/16890532/2sB3QFQsNH)

## Consideraciones 🚀
Apliqué unas cuantas prácticas vinculadas a Clean Architectures, DDD, Ports and Adapters, SOLID: con el fin de mostrar algunas de mis habilidades para encaminar proyectos que pueden escalar y a su vez, mostrar la facilidad de testear este tipo de arquitecturas. En cuanto a las tecnologías elegí las más fáciles para empezar y llegar a un MVP lo más rápido posible en un día. Tampoco desarrollé la logica de negocio estrictamente en el dominio (Anemic Domain Model) por lo que tiene algunos aspectos que deben mejorar.

Por otro lado, respecto a las funcionalidades, estas se encuentran 100% cubiertas hasta las opcionales.

## Pre-requisitos 📋

- **Node.js** (versión 20 o superior)
- **npm** (incluido con Node.js)

### Asegura esto:

```bash
# Verificar versiones
node --version
npm --version
```

## Instalación 🔧

#### Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd finmarkets-todolist
```

#### Instalar dependencias

```bash
npm install
```

#### Configurar variables de entorno

Crear archivo `.env` en la raíz del proyecto:

```bash
touch .env
```

Environments:

```env
NODE_ENV
PORT
CLIENT_URL
```

#### Ejecutar en modo desarrollo

```bash
# Watch de typescript
npm run spec

# Iniciar con nodemon
npm run dev
```

## Ejecutar pruebas integradas y unitarias ⚙️

```bash
# Ejecutar todas las pruebas
npm run test

# Ejecutar pruebas en modo watch
npm run test:watch
```
## Despliegue
### Despliega con Docker compose 📦

```bash
docker compose up
```

### Asegura que funcione

```bash
curl http://localhost:3030/health

{ok: true, message: "Server is running"}
```

## Construido con 🛠️

- **Node.js** 
- **TypeScript**
- **Express**
- **TypeORM**
- **SQLite**
- **Socket.io**
- **Jest**
- **Docker**
- **AWS EC2**
