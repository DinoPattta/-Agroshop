# 📂 Estructura del Proyecto - Agroshop

## 🎯 Visión General

Agroshop está organizado en módulos independientes para fácil mantenimiento:
- **web/** - Todo lo relacionado con la app web
- **mobile/** - Todo lo relacionado con Android
- **server/** - Servidores backend
- **docs/** - Toda la documentación
- **config/** - Archivos de configuración global
- **scripts/** - Scripts útiles

---

## 📁 Árbol Completo de Carpetas

```
agroshop-main/
│
├── 📁 web/                           ← APLICACIÓN WEB
│   └── public/
│       ├── 📄 index.html            ← Página principal
│       ├── 📁 css/
│       │   ├── style.css            ← Estilos generales (487 líneas)
│       │   ├── login.css            ← Estilos login
│       │   └── register.css         ← Estilos registro
│       ├── 📁 js/
│       │   └── main.js              ← Lógica JavaScript (340+ líneas)
│       ├── 📁 auth/
│       │   ├── login.html           ← Página de login
│       │   └── register.html        ← Página de registro
│       └── diagnostico.html         ← Herramienta de diagnóstico
│
├── 📁 mobile/                        ← APLICACIÓN ANDROID
│   └── android/
│       ├── app/
│       │   ├── src/
│       │   │   ├── androidTest/
│       │   │   ├── main/
│       │   │   └── test/
│       │   ├── build.gradle         ← Build config Android
│       │   └── proguard-rules.pro   ← Reglas ProGuard
│       ├── gradle/
│       │   └── wrapper/
│       │       └── gradle-wrapper.properties
│       ├── build.gradle             ← Build raíz
│       ├── settings.gradle          ← Settings Gradle
│       └── capacitor.settings.gradle
│
├── 📁 server/                        ← BACKEND
│   ├── 📄 server.js                 ← Servidor Node.js
│   ├── 📄 server.py                 ← Servidor Python (alternativa)
│   └── 📄 README.md                 ← Instrucciones servidor
│
├── 📁 config/                        ← CONFIGURACIÓN
│   ├── 📄 capacitor.config.json     ← Config Capacitor
│   └── 📄 .env.example              ← Variables de entorno
│
├── 📁 docs/                          ← DOCUMENTACIÓN
│   ├── 📁 guias/
│   │   ├── 📄 INICIO_RAPIDO.md      ← Guía rápida (5 min)
│   │   ├── 📄 INSTALACION.md        ← Instalación paso a paso
│   │   ├── 📄 ESTRUCTURA.md         ← Este archivo
│   │   └── 📄 FUNCIONALIDADES.md    ← Features disponibles
│   ├── 📁 api/
│   │   ├── 📄 ENDPOINTS.md          ← Endpoints disponibles
│   │   └── 📄 AUTENTICACION.md      ← Sistema de auth
│   └── 📄 CAMBIOS.md                ← Registro de cambios
│
├── 📁 scripts/                       ← SCRIPTS ÚTILES
│   ├── 📄 patch-java-version.ps1    ← Parchear Java (Windows)
│   └── 📄 setup.sh                  ← Setup inicial (Linux/macOS)
│
├── 📁 -Agroshop/                     ← ARCHIVOS ADICIONALES
│   └── 📄 README.md                 ← Notas adicionales
│
├── 📁 .git/                          ← Control de versión
├── 📁 .vscode/                       ← Configuración VS Code
├── 📁 node_modules/                  ← Dependencias instaladas
│
├── 📄 package.json                   ← Dependencias globales
├── 📄 package-lock.json              ← Lock de versiones
├── 📄 capacitor.config.json          ← Config principal Capacitor
├── 📄 abrir.bat                      ← Script abrir (Windows)
├── 📄 README_NUEVO.md                ← README principal (NUEVO)
└── 📄 .gitignore                     ← Git ignore rules
```

---

## 📄 Detalle de Archivos Principales

### web/public/index.html (512 líneas)
```html
<!-- Estructura de secciones -->
<section id="inicio" class="section active">      <!-- Página principal -->
<section id="tienda" class="section">             <!-- Catálogo -->
<section id="nosotros" class="section">           <!-- About -->
<section id="contacto" class="section">           <!-- Contact -->
<div class="shopping-cart-modal">                 <!-- Carrito modal -->
```

**Contenido:**
- Header con navegación
- 4 Secciones principales (Inicio, Tienda, Nosotros, Contacto)
- Modal de carrito
- Footer
- Links a CSS y JS

---

### web/public/css/style.css (600+ líneas)

**Estructura:**
```css
:root { }                                    /* Variables CSS */
* { }                                        /* Reset global */
body { }                                     /* Estilos base */
.top-bar { }                                 /* Barra superior */
nav { }                                      /* Navegación */
.section { }                                 /* Secciones */
.hero { }                                    /* Hero banner */
.features { }                                /* Características */
.product-grid { }                            /* Grid de productos */
.shopping-cart-modal { }                     /* Modal carrito */
.contact-form { }                            /* Formulario contacto */
@media (max-width: 768px) { }               /* Tablet */
@media (max-width: 480px) { }               /* Mobile */
```

**Paleta de Colores (variables):**
```css
--primary-color: #10b981         /* Verde */
--primary-dark: #059669          /* Verde oscuro */
--secondary-color: #f59e0b       /* Ámbar */
--accent-color: #8b5cf6          /* Púrpura */
--background-color: #f9fafb      /* Fondo */
```

---

### web/public/js/main.js (340+ líneas)

**Estructura de funciones:**

```javascript
// Web Components
class ProductCard extends HTMLElement { }

// Estado Global
const products = { }              /* Datos de productos */
let cartItems = []                /* Items en carrito */

// Navegación
function goToSection(sectionId) { }           /* Cambiar sección */
function displayFeaturedProducts() { }        /* Mostrar destacados */

// Carrito
function addToCart(name, price, image) { }    /* Agregar producto */
function updateCart() { }                     /* Actualizar vista carrito */
function removeFromCart(index) { }            /* Eliminar producto */
function clearCart() { }                      /* Vaciar carrito */

// UI
function showNotification(msg) { }            /* Mostrar notificación */
function displayProducts(category) { }        /* Mostrar productos */
function setupCategoryFilters() { }           /* Setup filtros */

// Contacto
function handleContactForm(event) { }         /* Procesar formulario */

// Inicialización
document.addEventListener('DOMContentLoaded', () => { })
```

**Estructura de Productos:**
```javascript
const products = {
    frutas: [3 productos],
    verduras: [3 productos],
    lacteos: [3 productos],
    cereales: [3 productos]
}
```

Cada producto tiene:
- `name` - Nombre del producto
- `price` - Precio
- `image` - URL de imagen (Unsplash)

---

### server/server.js (Node.js)

```javascript
// Puerto por defecto
const PORT = process.env.PORT || 3000;

// Express setup (si usas)
// o HTTP nativo

// Servir archivos estáticos
app.use(express.static('web/public'));

// Rutas principales
GET  / (index.html)
GET  /auth/login.html
GET  /auth/register.html
POST /api/login (placeholder)
POST /api/register (placeholder)
```

---

### server/server.py (Python)

```python
# Puerto por defecto
PORT = 3000

# HTTP Server
# Servir archivos estáticos desde web/public

# Soporta:
# GET / (index.html)
# GET /any-static-file
```

---

## 🔄 Flujo de Datos

```
┌─────────────────────────────────┐
│      Browser (Usuario)          │
│  ┌─────────────────────────────┐│
│  │    index.html               ││
│  │  ┌───────────────────────┐  ││
│  │  │ CSS (style.css)       │  ││
│  │  │ - Layout              │  ││
│  │  │ - Colores             │  ││
│  │  │ - Responsive          │  ││
│  │  └───────────────────────┘  ││
│  │  ┌───────────────────────┐  ││
│  │  │ JS (main.js)          │  ││
│  │  │ - ProductCard WC      │  ││
│  │  │ - Funciones           │  ││
│  │  │ - Event listeners     │  ││
│  │  └───────────────────────┘  ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
         ↑         ↓
    GET http://localhost:3000/
    
┌──────────────────────────┐
│    Node/Python Server    │
│  (server.js/server.py)   │
│  ┌────────────────────┐  │
│  │ web/public/        │  │
│  │ - index.html       │  │
│  │ - css/*.css        │  │
│  │ - js/*.js          │  │
│  │ - auth/*.html      │  │
│  └────────────────────┘  │
└──────────────────────────┘
```

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Archivos HTML | 4 |
| Archivos CSS | 3 |
| Archivos JS | 1 (principal) |
| Líneas de CSS | 600+ |
| Líneas de JS | 340+ |
| Productos | 12 |
| Categorías | 5 |
| Secciones web | 4 |
| Responsive breakpoints | 2 (768px, 480px) |
| Web Components | 1 (ProductCard) |

---

## 🔧 Configuración de Archivos

### capacitor.config.json
```json
{
  "appId": "com.example.app",
  "appName": "Agroshop",
  "webDir": "web/public",
  "server": {
    "url": "http://localhost:3000"
  }
}
```

### .env.example
```env
NODE_ENV=development
PORT=3000
HOST=localhost
API_URL=http://localhost:3000
```

### package.json
```json
{
  "name": "agroshop",
  "version": "1.0.0",
  "description": "Tienda de productos agrícolas",
  "main": "server/server.js",
  "scripts": {
    "start": "node server/server.js",
    "dev": "PORT=3001 node server/server.js",
    "build": "npm run build"
  }
}
```

---

## 🎯 Convenciones de Código

### Nomenclatura
- **Variables:** `camelCase` (cartItems, currentSection)
- **Funciones:** `camelCase` (addToCart, displayProducts)
- **Clases:** `PascalCase` (ProductCard)
- **Constantes:** `UPPER_CASE` (PORT, API_URL)
- **CSS classes:** `kebab-case` (product-card, cart-item)

### Estructura de Carpetas
- Agregar nuevas funciones → `web/public/js/main.js`
- Agregar nuevos estilos → `web/public/css/style.css`
- Agregar nuevas páginas → `web/public/`
- Documentar cambios → `docs/CAMBIOS.md`

---

## 📝 Próximas Adiciones

Cuando agregues nuevas features:

1. **Backend API** → `server/` (endpoints)
2. **Base de datos** → Nueva carpeta `db/`
3. **Autenticación** → `server/auth/`
4. **Tests** → Nueva carpeta `tests/`
5. **Componentes** → `web/public/components/` (si hay muchos)

---

**Última actualización:** Noviembre 2025
