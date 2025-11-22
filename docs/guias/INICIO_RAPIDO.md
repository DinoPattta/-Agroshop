# ⚡ Guía Rápida de Inicio - Agroshop

## 🎯 Objetivo
Poner en marcha Agroshop en 5 minutos.

---

## ✅ Paso 1: Descargar el Proyecto

```bash
git clone https://github.com/DinoPattta/-Agroshop.git
cd agroshop-main
```

---

## ✅ Paso 2: Instalar Dependencias

```bash
npm install
```

---

## ✅ Paso 3: Ejecutar la Aplicación

### Opción A: Windows (Más fácil)
Haz doble clic en `abrir.bat`

### Opción B: Terminal Node.js
```bash
node server/server.js
```

### Opción C: Terminal Python
```bash
python server/server.py
```

---

## ✅ Paso 4: Abrir en Navegador

```
http://localhost:3000
```

---

## 📱 Estructura Básica

```
HOME (/inicio)
├── Hero Banner
├── 4 Beneficios
└── Productos Destacados
    └── [Botón] Ver Todos

STORE (/tienda)
├── Categorías (Todas, Frutas, Verduras, Lácteos, Cereales)
└── Grid de Productos
    └── [Botón] Añadir al Carrito

ABOUT (/nosotros)
└── Información de la empresa

CONTACT (/contacto)
├── Formulario
└── Información de contacto

CARRITO (Accesible siempre)
├── Items del carrito
├── Total
└── Vaciar Carrito
```

---

## 🛒 Funcionalidades Clave

### 🔍 Filtrar Productos
1. Ve a "Tienda"
2. Haz clic en una categoría
3. Los productos se filtran automáticamente

### 🛒 Agregar al Carrito
1. Haz clic en "Añadir al Carrito" en cualquier producto
2. Verás una notificación de confirmación
3. El contador del carrito se actualiza

### 👁️ Ver Carrito
1. Haz clic en el icono de carrito (arriba a la derecha)
2. Puedes eliminar productos individuales
3. Puedes vaciar todo el carrito

### 📝 Enviar Contacto
1. Ve a "Contacto"
2. Rellena el formulario
3. Haz clic en "Enviar Mensaje"

---

## 🎨 Personalización Rápida

### Cambiar Colores
📄 Archivo: `web/public/css/style.css` (Líneas 1-15)

```css
:root {
    --primary-color: #10b981;      /* Verde principal */
    --primary-dark: #059669;       /* Verde oscuro */
    --secondary-color: #f59e0b;    /* Ámbar */
    --accent-color: #8b5cf6;       /* Púrpura */
}
```

### Agregar Productos
📄 Archivo: `web/public/js/main.js` (Líneas 24-50)

```javascript
const products = {
    frutas: [
        { name: 'Producto Nuevo', price: '$X.XX/kg', 
          image: 'https://...' }
    ]
}
```

### Cambiar Textos
📄 Archivo: `web/public/index.html`
- Línea 47: Hero title
- Línea 48: Hero description
- Línea 59: Features descriptions

---

## 🔧 Solución de Problemas

### ❌ "Puerto 3000 ya en uso"
```bash
# Usar otro puerto
node server/server.js --port 3001
```

### ❌ "No se cargan las imágenes"
- Verificar conexión a internet (usan Unsplash)
- Imágenes tienen fallback automático

### ❌ "JavaScript no funciona"
- Abrir DevTools (F12)
- Ver pestaña Console para errores
- Verificar que `js/main.js` está cargando

---

## 📱 Desarrollo Móvil

### Para Android:
```bash
npm run build
npx cap sync android
npx cap open android
```

---

## 📚 Documentación Completa

Para más detalles, ver:
- [Instalación Completa](INSTALACION.md)
- [Estructura del Proyecto](ESTRUCTURA.md)
- [Funcionalidades](FUNCIONALIDADES.md)

---

**¡Listo! Ahora tienes Agroshop corriendo en tu máquina.** 🎉
