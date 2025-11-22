# ⚡ Referencia Rápida para Desarrolladores

> Guía de consulta rápida para desarrolladores de Agroshop

---

## 🚀 Setup Inicial

```bash
# 1. Clonar
git clone https://github.com/DinoPattta/-Agroshop.git
cd agroshop-main

# 2. Instalar
npm install

# 3. Ejecutar
node server/server.js

# 4. Abrir
http://localhost:3000
```

---

## 📁 Carpetas Clave

| Carpeta | Contenido | Uso |
|---------|-----------|-----|
| `web/public/` | Código web | App web completa |
| `web/public/js/main.js` | Lógica principal | Toda la interactividad |
| `web/public/css/style.css` | Estilos | Diseño y animaciones |
| `server/` | Backends | Node.js o Python |
| `docs/` | Documentación | Guías y referencias |
| `config/` | Configuración | .env, Capacitor |

---

## 🎨 Agregar Producto

**Archivo:** `web/public/js/main.js` (línea 24-50)

```javascript
const products = {
    frutas: [
        { 
            name: 'Nuevo Producto', 
            price: '$5.00/kg', 
            image: 'https://images.unsplash.com/...' 
        }
    ]
};
```

---

## 🎨 Cambiar Colores

**Archivo:** `web/public/css/style.css` (línea 4-15)

```css
:root {
    --primary-color: #10b981;      /* Verde */
    --primary-dark: #059669;       /* Verde oscuro */
    --secondary-color: #f59e0b;    /* Ámbar */
    --accent-color: #8b5cf6;       /* Púrpura */
}
```

---

## 🔧 Funciones Clave en main.js

```javascript
// Navegación
goToSection(sectionId)              // Cambiar sección

// Carrito
addToCart(name, price, image)       // Agregar producto
removeFromCart(index)               // Quitar producto
clearCart()                         // Vaciar carrito
updateCart()                        // Actualizar vista

// Productos
displayProducts(category)           // Mostrar productos
displayFeaturedProducts()           // Destacados

// UI
showNotification(msg)               // Notificación
handleContactForm(event)            // Procesar contacto
```

---

## 📱 HTML - Secciones Principales

```html
<!-- Página principal -->
<section id="inicio" class="section active">

<!-- Tienda con filtros -->
<section id="tienda" class="section">

<!-- About company -->
<section id="nosotros" class="section">

<!-- Contact form -->
<section id="contacto" class="section">
```

---

## 📊 Estructura de Datos

### Producto
```javascript
{
    name: "Manzanas Rojas",
    price: "$2.50/kg",
    image: "https://images.unsplash.com/...",
    category: "frutas"
}
```

### Carrito
```javascript
[
    { name, price, image },
    { name, price, image }
]
```

---

## 🎯 Endpoints (Próximos)

```
POST   /api/register
POST   /api/login
GET    /api/products
POST   /api/cart
GET    /api/cart
DELETE /api/cart/:id
POST   /api/contact
```

---

## 🔐 Variables de Entorno

```env
NODE_ENV=development
PORT=3000
HOST=localhost
CORS_ORIGIN=*
```

---

## 🧪 Testing

### Comprobar la app en navegador
```bash
# Abrir DevTools
F12

# Ver Console para errores
Pestaña Console

# Ver Network para requests
Pestaña Network
```

### Test de API (cuando esté implementada)
```bash
curl -X GET http://localhost:3000/api/products
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123"}'
```

---

## 🐛 Debugging

| Problema | Solución |
|----------|----------|
| Puerto ocupado | `PORT=3001 node server/server.js` |
| Imágenes no cargan | Verificar conexión internet (Unsplash) |
| JS no funciona | F12 > Console, revisar errores |
| Estilos rotos | Limpiar cache: Ctrl+Shift+R |

---

## 📚 Documentación

| Tema | Archivo |
|------|---------|
| Inicio rápido | `docs/guias/INICIO_RAPIDO.md` |
| Instalación | `docs/guias/INSTALACION.md` |
| Estructura | `docs/guias/ESTRUCTURA.md` |
| Features | `docs/guias/FUNCIONALIDADES.md` |
| API | `docs/api/ENDPOINTS.md` |
| Autenticación | `docs/api/AUTENTICACION.md` |
| Changelog | `docs/CAMBIOS.md` |

---

## 🚀 Deploy Rápido

```bash
# Build para producción
npm run build

# Servir con Node
NODE_ENV=production node server/server.js

# Servir con Python
python server/server.py
```

---

## 💾 Git Workflow

```bash
# Crear rama
git checkout -b feature/mi-feature

# Hacer cambios
git add .
git commit -m "Descripción del cambio"

# Push
git push origin feature/mi-feature

# PR en GitHub
```

---

## 🔍 Búsqueda de Código

```bash
# Buscar en archivos
grep -r "función" web/public/js/

# En Windows
findstr /r "función" web\public\js\*.js
```

---

## 📋 Checklist para Nueva Feature

- [ ] Crear rama (`git checkout -b feature/...`)
- [ ] Editar archivos necesarios
- [ ] Verificar en navegador (F12)
- [ ] Commit cambios
- [ ] Push a GitHub
- [ ] Crear Pull Request
- [ ] Actualizar `docs/CAMBIOS.md`

---

## 🔄 Scripts Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor
node server/server.js

# Servidor en puerto diferente
PORT=3001 node server/server.js

# Python
python server/server.py

# Ver versión de dependencias
npm list

# Actualizar dependencias
npm update
```

---

## 🎨 CSS - Clases Comunes

```css
.section                 /* Secciones principales */
.product-grid           /* Grid de productos */
.product-card-simple    /* Tarjeta de producto */
.shopping-cart-modal    /* Modal carrito */
.btn-primary            /* Botón primario */
.container              /* Contenedor máximo ancho */
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop (default) */
@media (max-width: 768px) {
    /* Tablet */
}

@media (max-width: 480px) {
    /* Mobile */
}
```

---

## 🔐 Mejores Prácticas

- ✅ Usar nombres descriptivos
- ✅ Comentar código complejo
- ✅ Validar entrada de usuario
- ✅ Usar let/const (no var)
- ✅ Mantener código DRY
- ✅ Documentar cambios

---

## 🆘 Soporte Rápido

- 📧 info@agroshop.com
- 🐛 Issues en GitHub
- 📚 Documentación en `/docs`
- 💬 FAQs en `docs/INDEX.md`

---

**¡Desarrollo rápido y feliz!** 🚀

**Última actualización:** Noviembre 2025
