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
  - [API de Productos](#api-de-productos)
  - [API de Carritos](#api-de-carritos)
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
git clone https://github.com/TrePiceno/proyecto-final-backend
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
node ".\src\app.js"
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
- **PUT /api/product** - Actualizar todos los productos
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

### Carrito

```javascript
{
  products: [
    {
      product: ObjectId, // Referencia al ID del producto
      quantity: Number, // Cantidad del producto en el carrito
    },
  ];
}
```

## 🔌 API REST

La aplicación incluye APIs RESTful para interactuar con productos y carritos:

### API de Productos

#### Obtener todos los productos

```
GET /api/product
```

**Respuesta**: Lista paginada de productos con metadatos de paginación.

#### Obtener un producto específico

```
GET /api/product/:pid
```

**Parámetros**:

- `pid`: ID del producto

**Respuesta**: Detalles del producto solicitado.

#### Crear un nuevo producto

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

**Cuerpo**: Datos del producto a crear.

**Respuesta**: Producto creado con su ID generado.

#### Actualizar un producto específico

```
PUT /api/product/:pid
Content-Type: application/json

{
  "price": 120,
  "stock": 15
}
```

**Parámetros**:

- `pid`: ID del producto a actualizar

**Cuerpo**: Campos a actualizar.

**Respuesta**: Producto actualizado.

#### Actualizar todos los productos

```
PUT /api/product
Content-Type: application/json

{
  "price": 100
}
```

**Cuerpo**: Campos a actualizar en todos los productos.

**Respuesta**: Resultado de la operación de actualización masiva.

#### Eliminar un producto

```
DELETE /api/product/:pid
```

**Parámetros**:

- `pid`: ID del producto a eliminar

**Respuesta**: Producto eliminado.

### API de Carritos

#### Crear un nuevo carrito

```
POST /api/cart
Content-Type: application/json

{
  "products": [
    {
      "product": "6421a3a48c3d1f4d15e4d6a9",
      "quantity": 2
    }
  ]
}
```

**Cuerpo**: (Opcional) Lista inicial de productos para el carrito.

**Respuesta**: Carrito creado con su ID generado.

#### Obtener un carrito específico

```
GET /api/cart/:cid
```

**Parámetros**:

- `cid`: ID del carrito

**Respuesta**: Detalles del carrito con sus productos.

#### Actualizar la cantidad de un producto en el carrito

```
PUT /api/cart/:cid/product/:pid
Content-Type: application/json

{
  "quantity": 5
}
```

**Parámetros**:

- `cid`: ID del carrito
- `pid`: ID del producto

**Cuerpo**: Nueva cantidad del producto.

**Respuesta**: Carrito actualizado.

#### Añadir múltiples productos al carrito

```
PUT /api/cart/:cid
Content-Type: application/json

{
  "products": [
    {
      "product": "6421a3a48c3d1f4d15e4d6a9",
      "quantity": 1
    },
    {
      "product": "6421a3a48c3d1f4d15e4d6b2",
      "quantity": 3
    }
  ]
}
```

**Parámetros**:

- `cid`: ID del carrito

**Cuerpo**: Lista de productos a añadir.

**Respuesta**: Carrito actualizado.

#### Eliminar un producto del carrito

```
DELETE /api/cart/:cid/product/:pid
```

**Parámetros**:

- `cid`: ID del carrito
- `pid`: ID del producto a eliminar

**Respuesta**: Carrito actualizado sin el producto eliminado.

#### Vaciar el carrito

```
DELETE /api/cart/:cid
```

**Parámetros**:

- `cid`: ID del carrito a vaciar

**Respuesta**: Carrito vacío.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`)
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

Desarrollado como parte del curso de Backend I de CoderHouse.
