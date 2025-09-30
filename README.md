# FinMarkets Interview - Task Management API

API REST para gestión de tareas desarrollada con TypeScript, Node.js y arquitectura hexagonal. Permite crear, actualizar, eliminar y consultar tareas con comunicación en tiempo real a través de WebSockets.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

Mira [Despliegue](#despliegue-) para conocer como desplegar el proyecto.

## Pre-requisitos 📋

Que cosas necesitas para instalar el software y como instalarlas:

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)

### Da un ejemplo:

```bash
# Verificar versiones
node --version
npm --version
```

## Instalación 🔧

Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutándose:

### Dí cómo será ese paso:

#### Paso 1: Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd finmarkets-interview
```

#### Paso 2: Instalar dependencias

```bash
npm install
```

#### Paso 3: Configurar variables de entorno

Crear archivo `.env` en la raíz del proyecto:

```bash
touch .env
```

Agregar las siguientes variables:

```env
NODE_ENV=development
PORT=3030
CLIENT_URL=http://localhost:3000
```

#### Paso 4: Ejecutar en modo desarrollo

```bash
npm run dev
```

### Da un ejemplo:

```bash
# El servidor estará disponible en http://localhost:3030
# Puedes probar los endpoints con:
curl http://localhost:3030/api/tasks
```

### Y repite hasta finalizar:

Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo:

```bash
# Crear una nueva tarea
curl -X POST http://localhost:3030/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Mi primera tarea", "description": "Descripción de la tarea"}'

# Listar todas las tareas
curl http://localhost:3030/api/tasks
```

## Ejecutando las pruebas ⚙️

Explica como ejecutar las pruebas automatizadas para este sistema:

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch
npm run test:watch
```

## Analice las pruebas end-to-end 🔩

Explica que verifican estas pruebas y por qué:

Las pruebas end-to-end verifican el flujo completo de la API, desde la recepción de peticiones HTTP hasta la persistencia en base de datos y la comunicación en tiempo real via WebSockets.

### Da un ejemplo:

```javascript
// Verifica que se pueda crear una tarea y recibir actualizaciones en tiempo real
describe("Task Creation E2E", () => {
  it("should create task and emit socket event", async () => {
    const response = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Task", description: "Test Description" });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });
});
```

## Y las pruebas de estilo de codificación ⌨️

Explica que verifican estas pruebas y por qué:

Las pruebas de estilo verifican que el código cumpla con las convenciones de TypeScript y las mejores prácticas de la arquitectura hexagonal implementada.

### Da un ejemplo:

```bash
# Verificar tipos de TypeScript
npm run typescript

# Compilar sin errores
tsc --noEmit
```

## Despliegue 📦

Agrega notas adicionales sobre como hacer deploy:

### Docker

```bash
# Construir imagen
docker build -t finmarkets-api .

# Ejecutar contenedor
docker-compose up
```

### Producción

```bash
npm run start
```

## Construido con 🛠️

Menciona las herramientas que utilizaste para crear tu proyecto:

- **Node.js** - El runtime de JavaScript usado
- **TypeScript** - Superset tipado de JavaScript
- **Express** - El framework web usado
- **TypeORM** - ORM para manejo de base de datos
- **SQLite** - Base de datos embebida
- **Socket.io** - Usado para comunicación en tiempo real
- **Jest** - Framework de testing
- **Mongoose** - ODM para MongoDB
