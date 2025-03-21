# Documentación del Proyecto E-commerce

<div align="center">
  <h1>🛒 Sistema de Catálogo de Productos</h1>
  <p>Una aplicación de backend para gestión de productos con interfaz moderna y funcional</p>
</div>

## 📋 Índice

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas](#rutas)
- [Funcionalidades](#funcionalidades)
- [Vistas](#vistas)
- [Modelos de datos](#modelos-de-datos)
- [API REST](#api-rest)
- [Contribuciones](#contribuciones)

## 📝 Descripción

Este proyecto es un sistema de catálogo de productos desarrollado como parte del curso de Backend de CoderHouse. La aplicación permite visualizar un listado de productos con paginación, ver detalles de productos específicos y está preparada para funcionalidades de carrito de compras.

## ✨ Características

- **Catálogo de productos** con paginación avanzada
- **Vista detallada** de productos individuales
- **Interfaz de usuario moderna** con diseño responsive
- **Manejo de errores** con páginas personalizadas
- **Arquitectura MVC** para mejor organización del código
- **API RESTful** para interacción con el frontend

## 🚀 Tecnologías utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **mongoose-paginate-v2** - Paginación de resultados
- **Handlebars** - Motor de plantillas
- **CSS** - Estilos visuales
- **Font Awesome** - Iconografía

## 📂 Estructura del proyecto

```
src/
├── config/          # Configuración de la aplicación
├── models/          # Modelos de datos (Mongoose)
├── routes/          # Definición de rutas
├── public/          # Archivos estáticos
│   ├── css/         # Hojas de estilo
│   ├── js/          # Scripts del cliente
│   └── img/         # Imágenes y recursos gráficos
├── views/           # Plantillas Handlebars
│   ├── layouts/     # Layouts principales
│   └── partials/    # Componentes reutilizables
└── app.js           # Punto de entrada de la aplicación
```

## 💻 Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd proyecto-final-backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Define las siguientes variables:

```
PORT=8080
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

4. Inicia la aplicación:

```bash
npm start
```

## 🔍 Uso

Una vez iniciada la aplicación, puedes acceder a ella a través de tu navegador:

- **Vista principal**: http://localhost:8080/
- **Catálogo de productos**: http://localhost:8080/products
- **Detalle de producto**: http://localhost:8080/products/:pid

## 🛣️ Rutas

### Vistas

- **GET /** - Página de inicio
- **GET /products** - Listado de productos con paginación
- **GET /products/:pid** - Detalle de un producto específico

### API

- **GET /api/product** - Obtener todos los productos
- **GET /api/product/:id** - Obtener un producto específico
- **POST /api/product** - Crear un nuevo producto
- **PUT /api/product/:id** - Actualizar un producto existente
- **DELETE /api/product/:id** - Eliminar un producto

## 🛠️ Funcionalidades

### Paginación

El sistema implementa paginación avanzada utilizando mongoose-paginate-v2, permitiendo:

- Navegación entre páginas
- Límite de elementos por página
- Información sobre total de elementos y páginas

### Vistas Responsivas

Todas las vistas están diseñadas siguiendo principios de diseño responsivo:

- Adaptación a diferentes tamaños de pantalla
- Disposición fluida de elementos
- Experiencia de usuario optimizada en dispositivos móviles

### Manejo de Errores

El sistema cuenta con un manejo de errores robusto que incluye:

- Páginas de error personalizadas
- Mensajes descriptivos
- Redirección a páginas relevantes

## 🎨 Vistas

### Catálogo de Productos

La vista de catálogo muestra los productos en un formato de cuadrícula, con información resumida y opciones para:

- Ver detalles del producto
- Añadir al carrito (funcionalidad preparada para implementación)
- Navegar entre páginas

### Detalle de Producto

La vista de detalle ofrece información completa sobre un producto específico:

- Imagen del producto
- Título y categoría
- Descripción detallada
- Precio
- Disponibilidad (stock)
- Control de cantidad para añadir al carrito

### Página de Error

Una vista personalizada que se muestra cuando ocurre un error, proporcionando:

- Mensaje descriptivo
- Opciones para navegar a páginas principales
- Diseño consistente con el resto de la aplicación

## 📊 Modelos de datos

### Producto

```javascript
{
  title: String,        // Título del producto
  description: String,  // Descripción detallada
  category: String,     // Categoría
  imageUrl: String,     // URL de la imagen
  price: Number,        // Precio
  stock: Number         // Cantidad disponible
}
```

## 🔌 API REST

La aplicación incluye una API RESTful para interactuar con los productos:

### Obtener todos los productos

```
GET /api/product
```

### Obtener un producto específico

```
GET /api/product/:id
```

### Crear un nuevo producto

```
POST /api/product
Content-Type: application/json

{
  "title": "Nombre del producto",
  "description": "Descripción del producto",
  "category": "Categoría",
  "imageUrl": "URL de la imagen",
  "price": 100,
  "stock": 10
}
```

### Actualizar un producto

```
PUT /api/product/:id
Content-Type: application/json

{
  "price": 120,
  "stock": 15
}
```

### Eliminar un producto

```
DELETE /api/product/:id
```

## 👥 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`)
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

Desarrollado como parte del curso de Backend I de CoderHouse.
