# 🔌 Endpoints API - Agroshop

## 📋 Descripción General

Este documento describe todos los endpoints disponibles en la API de Agroshop.

**Base URL:** `http://localhost:3000`

---

## 🔐 Autenticación

### POST /api/login
Iniciar sesión de usuario.

**Request:**
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "password": "contraseña123"
  }'
```

**Response (Éxito - 200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "usuario@example.com"
  }
}
```

**Response (Error - 401):**
```json
{
  "success": false,
  "message": "Email o contraseña incorrectos"
}
```

---

### POST /api/register
Registrar nuevo usuario.

**Request:**
```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "password": "contraseña123",
    "passwordConfirm": "contraseña123"
  }'
```

**Response (Éxito - 201):**
```json
{
  "success": true,
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": 2,
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "message": "El email ya está registrado"
}
```

---

### POST /api/logout
Cerrar sesión.

**Request:**
```bash
curl -X POST http://localhost:3000/api/logout \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
```

**Response:**
```json
{
  "success": true,
  "message": "Sesión cerrada"
}
```

---

## 📦 Productos

### GET /api/products
Obtener todos los productos.

**Request:**
```bash
curl http://localhost:3000/api/products
```

**Query Parameters:**
```
?category=frutas      (Filtrar por categoría)
?sort=price          (Ordenar por precio)
?limit=10            (Limitar cantidad)
```

**Response:**
```json
{
  "success": true,
  "count": 12,
  "products": [
    {
      "id": 1,
      "name": "Manzanas Rojas",
      "price": 2.50,
      "category": "frutas",
      "image": "https://...",
      "description": "Manzanas frescas y crujientes"
    },
    {
      "id": 2,
      "name": "Plátanos Frescos",
      "price": 1.80,
      "category": "frutas",
      "image": "https://...",
      "description": "Recién llegados"
    }
  ]
}
```

---

### GET /api/products/:id
Obtener producto específico.

**Request:**
```bash
curl http://localhost:3000/api/products/1
```

**Response:**
```json
{
  "success": true,
  "product": {
    "id": 1,
    "name": "Manzanas Rojas",
    "price": 2.50,
    "category": "frutas",
    "image": "https://...",
    "description": "Manzanas frescas y crujientes",
    "stock": 50
  }
}
```

---

### GET /api/categories
Obtener todas las categorías.

**Request:**
```bash
curl http://localhost:3000/api/categories
```

**Response:**
```json
{
  "success": true,
  "categories": [
    {
      "id": 1,
      "name": "Frutas",
      "slug": "frutas",
      "icon": "🍎"
    },
    {
      "id": 2,
      "name": "Verduras",
      "slug": "verduras",
      "icon": "🥕"
    },
    {
      "id": 3,
      "name": "Lácteos",
      "slug": "lacteos",
      "icon": "🥛"
    },
    {
      "id": 4,
      "name": "Cereales",
      "slug": "cereales",
      "icon": "🌾"
    }
  ]
}
```

---

## 🛒 Carrito

### POST /api/cart
Agregar producto al carrito.

**Request:**
```bash
curl -X POST http://localhost:3000/api/cart \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer token" \
  -d '{
    "productId": 1,
    "quantity": 2
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Producto agregado al carrito",
  "cart": {
    "id": "cart_123",
    "items": [
      {
        "productId": 1,
        "quantity": 2,
        "price": 2.50
      }
    ],
    "total": 5.00
  }
}
```

---

### GET /api/cart
Obtener carrito del usuario.

**Request:**
```bash
curl http://localhost:3000/api/cart \
  -H "Authorization: Bearer token"
```

**Response:**
```json
{
  "success": true,
  "cart": {
    "id": "cart_123",
    "userId": 1,
    "items": [
      {
        "productId": 1,
        "name": "Manzanas Rojas",
        "quantity": 2,
        "price": 2.50,
        "subtotal": 5.00
      }
    ],
    "total": 5.00
  }
}
```

---

### DELETE /api/cart/:productId
Eliminar producto del carrito.

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/cart/1 \
  -H "Authorization: Bearer token"
```

**Response:**
```json
{
  "success": true,
  "message": "Producto eliminado del carrito",
  "cart": {
    "total": 0,
    "items": []
  }
}
```

---

### DELETE /api/cart
Vaciar carrito completo.

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/cart \
  -H "Authorization: Bearer token"
```

**Response:**
```json
{
  "success": true,
  "message": "Carrito vaciado",
  "cart": {
    "items": [],
    "total": 0
  }
}
```

---

## 📋 Órdenes

### POST /api/orders
Crear nueva orden.

**Request:**
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer token" \
  -d '{
    "cartId": "cart_123",
    "shippingAddress": "Calle 123",
    "paymentMethod": "credit_card"
  }'
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": "order_456",
    "userId": 1,
    "items": [...],
    "total": 25.50,
    "status": "pending",
    "createdAt": "2025-11-22T10:30:00Z"
  }
}
```

---

### GET /api/orders
Obtener órdenes del usuario.

**Request:**
```bash
curl http://localhost:3000/api/orders \
  -H "Authorization: Bearer token"
```

**Response:**
```json
{
  "success": true,
  "orders": [
    {
      "id": "order_456",
      "total": 25.50,
      "status": "completed",
      "createdAt": "2025-11-22T10:30:00Z"
    }
  ]
}
```

---

### GET /api/orders/:orderId
Obtener detalle de una orden.

**Request:**
```bash
curl http://localhost:3000/api/orders/order_456 \
  -H "Authorization: Bearer token"
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": "order_456",
    "userId": 1,
    "items": [...],
    "total": 25.50,
    "status": "completed",
    "trackingNumber": "TR123456",
    "createdAt": "2025-11-22T10:30:00Z",
    "completedAt": "2025-11-23T14:45:00Z"
  }
}
```

---

## 👤 Usuario

### GET /api/user
Obtener información del usuario autenticado.

**Request:**
```bash
curl http://localhost:3000/api/user \
  -H "Authorization: Bearer token"
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "phone": "+1234567890",
    "address": "Calle Principal 123",
    "city": "Ciudad",
    "country": "País",
    "createdAt": "2025-01-15T08:00:00Z"
  }
}
```

---

### PUT /api/user
Actualizar información del usuario.

**Request:**
```bash
curl -X PUT http://localhost:3000/api/user \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer token" \
  -d '{
    "phone": "+1987654321",
    "address": "Nueva Calle 456"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Usuario actualizado",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "phone": "+1987654321",
    "address": "Nueva Calle 456"
  }
}
```

---

## 📧 Contacto

### POST /api/contact
Enviar mensaje de contacto.

**Request:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Carlos López",
    "email": "carlos@example.com",
    "message": "Me gustaría más información sobre..."
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Mensaje enviado exitosamente",
  "ticketId": "TICKET_789"
}
```

---

## 📊 Códigos de Estado HTTP

| Código | Significado |
|--------|-------------|
| 200 | OK - Solicitud exitosa |
| 201 | Created - Recurso creado |
| 400 | Bad Request - Datos inválidos |
| 401 | Unauthorized - No autenticado |
| 403 | Forbidden - No autorizado |
| 404 | Not Found - Recurso no existe |
| 500 | Server Error - Error del servidor |

---

## 🔄 Rate Limiting

**Límites por hora:**
- `/api/login` - 5 intentos
- `/api/register` - 3 por IP
- `/api/contact` - 10 por IP
- Otros endpoints - 100 por usuario autenticado

---

## 📦 Headers Requeridos

```http
Content-Type: application/json
Authorization: Bearer <token>     (para endpoints autenticados)
User-Agent: Agroshop/1.0
Accept: application/json
```

---

## ✅ Ejemplo de Flujo Completo

```bash
# 1. Registrarse
curl -X POST http://localhost:3000/api/register \
  -d '{"name":"Juan","email":"juan@test.com","password":"123456"}'

# 2. Iniciar sesión
curl -X POST http://localhost:3000/api/login \
  -d '{"email":"juan@test.com","password":"123456"}'
# Obtienes token: eyJhbGciOiJIUzI1NiIs...

# 3. Obtener productos
curl http://localhost:3000/api/products?category=frutas

# 4. Agregar al carrito
curl -X POST http://localhost:3000/api/cart \
  -H "Authorization: Bearer <token>" \
  -d '{"productId":1,"quantity":2}'

# 5. Ver carrito
curl http://localhost:3000/api/cart \
  -H "Authorization: Bearer <token>"

# 6. Crear orden
curl -X POST http://localhost:3000/api/orders \
  -H "Authorization: Bearer <token>" \
  -d '{"cartId":"cart_123"}'

# 7. Ver órdenes
curl http://localhost:3000/api/orders \
  -H "Authorization: Bearer <token>"
```

---

## 🔮 Endpoints Futuros

- `PATCH /api/products/:id` - Actualizar producto (admin)
- `DELETE /api/products/:id` - Eliminar producto (admin)
- `POST /api/reviews` - Crear reseña
- `GET /api/reviews/:productId` - Obtener reseñas
- `POST /api/wishlist` - Agregar a favoritos
- `GET /api/notifications` - Obtener notificaciones

---

**Última actualización:** Noviembre 2025 | **Versión API:** 1.0.0
