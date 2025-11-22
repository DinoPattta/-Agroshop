# ✨ Funcionalidades Disponibles - Agroshop

## 📋 Índice

1. [Navegación](#navegación)
2. [Catálogo de Productos](#catálogo)
3. [Carrito de Compras](#carrito)
4. [Autenticación](#autenticación)
5. [Contacto](#contacto)
6. [Funcionalidades Técnicas](#técnicas)

---

## 🗺️ Navegación {#navegación}

### Estructura Principal

```
┌─ Inicio (Página Principal)
│  ├─ Hero Banner
│  ├─ 4 Características
│  └─ Productos Destacados
│
├─ Tienda (Catálogo)
│  ├─ Filtros de Categoría
│  └─ Grid de Productos
│
├─ Nosotros (About)
│  ├─ ¿Quiénes Somos?
│  ├─ Nuestra Misión
│  └─ Nuestros Valores
│
└─ Contacto
   ├─ Formulario
   └─ Información de Contacto
```

### Cómo Navegar

**Menú Superior:**
```
[AGROSHOP] [Inicio] [Tienda] [Nosotros] [Contacto] [🛒] [👤]
```

- Haz clic en cualquier sección para navegar
- El carrito está siempre accesible (arriba a la derecha)
- Login disponible en icono usuario (arriba a la derecha)

### Características de Navegación

✅ Navegación sin recargar página (SPA-like)
✅ Scroll automático al inicio de sección
✅ Historial con back button (si JavaScript lo permite)
✅ Links internos de secciones a secciones

---

## 🛍️ Catálogo de Productos {#catálogo}

### Productos Disponibles

#### 🍎 Frutas (3 productos)
```
1. Manzanas Rojas        $2.50/kg
   └─ Frescas y crujientes

2. Plátanos Frescos      $1.80/kg
   └─ Recién llegados

3. Naranjas              $2.00/kg
   └─ Jugosas y dulces
```

#### 🥕 Verduras (3 productos)
```
1. Zanahorias Orgánicas  $1.20/kg
   └─ Cultivadas sin químicos

2. Tomates Frescos       $3.00/kg
   └─ Recién cosechados

3. Lechuga Verde         $1.50/kg
   └─ Crujiente y fresca
```

#### 🥛 Lácteos (3 productos)
```
1. Leche Fresca Pura     $1.50/L
   └─ De granja local

2. Queso Artesanal       $12.00/kg
   └─ Hecho a mano

3. Yogurt Natural        $3.50/kg
   └─ Sin colorantes
```

#### 🌾 Cereales (3 productos)
```
1. Avena en Hojuelas     $4.00/kg
   └─ Alto en fibra

2. Maíz Fresco           $1.00/kg
   └─ Dulce y nutritivo

3. Arroz Integral        $2.50/kg
   └─ Variedad completa
```

### Filtrar por Categoría

**Paso a paso:**

1. Ve a la sección "Tienda"
2. En la barra lateral izquierda, selecciona una categoría:
   - "Todas" → Ver todos los 12 productos
   - "Frutas" → Ver solo 3 frutas
   - "Verduras" → Ver solo 3 verduras
   - "Lácteos" → Ver solo 3 lácteos
   - "Cereales" → Ver solo 3 cereales

3. Los productos se filtran automáticamente

**Características:**
✅ Filtrado instantáneo
✅ Sin recargar página
✅ Indicador visual de categoría activa
✅ Categoría "Todas" siempre disponible

---

## 🛒 Carrito de Compras {#carrito}

### Agregar Productos

**Método 1: Desde cualquier sección**
```
1. Hacer click en botón "Añadir al Carrito"
2. Verás notificación verde: "✓ Producto añadido"
3. El contador del carrito se actualiza
```

**Método 2: Búsqueda de productos**
```
1. Ve a "Tienda"
2. Busca el producto que quieres
3. Click en "Añadir al Carrito"
```

### Ver Carrito

**Abrir carrito:**
```
1. Click en icono de carrito (arriba a la derecha)
2. Se abre modal con items
3. Muestra total calculado
```

**Información mostrada:**
- Imagen del producto
- Nombre
- Precio unitario
- Botón para eliminar
- Total general
- Botón "Vaciar Carrito"

### Modificar Carrito

**Eliminar un producto:**
```
1. Abrir carrito (click en icono 🛒)
2. Buscar el producto
3. Click en botón "Eliminar" (rojo)
4. Producto se quita inmediatamente
5. Total se recalcula
```

**Vaciar todo el carrito:**
```
1. Abrir carrito
2. Click en botón "Vaciar Carrito"
3. Confirmar en el popup
4. Carrito se limpia y contador se oculta
```

### Características del Carrito

✅ Suma automática de totales
✅ Actualización en tiempo real
✅ Contador con badge (número de items)
✅ Confirmar antes de vaciar
✅ Fallback de imágenes si falta conexión
✅ Persiste durante la sesión
✅ Accesible desde cualquier sección
✅ Modal con scroll si hay muchos items

### Ejemplo de Compra

```
INICIO
  ↓ Click "Ir a la Tienda"
TIENDA
  ↓ Ver Manzanas ($2.50)
  ↓ Click "Añadir al Carrito"
  ✓ Notificación: "Manzanas Rojas añadido"
  ↓ Ver Tomates ($3.00)
  ↓ Click "Añadir al Carrito"
  ✓ Notificación: "Tomates Frescos añadido"
  ↓ Click en icono carrito 🛒
MODAL CARRITO
  ├─ Manzanas Rojas - $2.50 - [Eliminar]
  ├─ Tomates Frescos - $3.00 - [Eliminar]
  ├─ Total: $5.50
  └─ [Proceder al Pago]
```

---

## 🔐 Autenticación {#autenticación}

### Páginas de Autenticación

#### Login
```
URL: /auth/login.html
Campos:
  - Email
  - Contraseña
  - [Iniciar Sesión]
  - Enlace: "¿No tienes cuenta? Regístrate"
```

#### Registro
```
URL: /auth/register.html
Campos:
  - Nombre Completo
  - Email
  - Contraseña
  - Confirmar Contraseña
  - [Registrarse]
  - Enlace: "¿Ya tienes cuenta? Inicia Sesión"
```

### Acceso

**Método 1: Desde navegación**
- Click en icono usuario (👤) arriba a la derecha
- Te redirige a login.html

**Método 2: URL directa**
```
http://localhost:3000/auth/login.html
http://localhost:3000/auth/register.html
```

### Características

✅ Validación de formularios HTML5
✅ Campos requeridos
✅ Validación de email
✅ Diseño responsivo
✅ Animaciones suaves
✅ Colores consistentes con marca
✅ Links de navegación entre login/registro

**Nota:** Actualmente es UI solamente. Backend con BD en próximas versiones.

---

## 📧 Contacto {#contacto}

### Formulario de Contacto

**Ubicación:** Sección "Contacto"

**Campos disponibles:**
```
1. Nombre (requerido)
2. Email (requerido, validado)
3. Mensaje (requerido)
```

**Cómo usar:**
```
1. Rellena los campos
2. Click en "Enviar Mensaje"
3. Recibirás confirmación: "✓ Mensaje enviado"
4. Formulario se limpia automáticamente
```

### Información de Contacto

Mostrada en la misma sección:

```
📍 Ubicación
   Calle Principal 123, Ciudad, País

📱 Teléfono
   +1 (555) 123-4567

📧 Email
   info@agroshop.com

🕐 Horarios
   Lun-Vie: 9am - 6pm
   Sáb-Dom: 10am - 4pm
```

### Características

✅ Validación de campos
✅ Notificación de envío
✅ Reset automático de formulario
✅ Información de contacto completa
✅ Diseño profesional y limpio
✅ Contacto lado a lado con info

**Nota:** Actualmente muestra notificación local. Backend integrado en próximas versiones.

---

## 🔧 Funcionalidades Técnicas {#técnicas}

### Web Components

**ProductCard - Tarjeta de Producto**

```html
<product-card 
  name="Manzanas Rojas"
  price="$2.50/kg"
  image="https://images.unsplash.com/..."
></product-card>
```

Características:
- Renderizado automático
- Hover effects
- Imagen responsiva
- Botón "Añadir al Carrito" funcional
- Fallback de imágenes
- Accesible (alt texts)

### Animaciones

```css
/* Entrada */
@keyframes fadeInUp

/* Scroll */
@keyframes slideIn

/* Hover */
transform: translateY(-8px)
box-shadow: 0 12px 30px rgba(...)
```

Aplicadas a:
- Elementos al cargar
- Tarjetas de producto
- Modal del carrito
- Botones

### Diseño Responsivo

**Breakpoints:**

| Dispositivo | Ancho | Cambios |
|------------|-------|---------|
| Desktop | >768px | Layout completo, sidebar, menú |
| Tablet | 768-481px | Layout adaptado, categorías horizontal |
| Mobile | <480px | Layout full-width, menú colapsado |

**Prueba responsive:**
```bash
F12 en navegador → Toggle device toolbar → Ver cambios
```

### Accesibilidad

✅ Atributos `aria-label` en elementos interactivos
✅ Atributos `alt` en imágenes
✅ Colores con contraste WCAG AA
✅ Fuentes legibles (Poppins 400-700)
✅ Textos descriptivos en botones
✅ Links navegables por teclado (Tab)
✅ Atajos de teclado (ESC para cerrar modal)

### Performance

✅ Cero dependencias externas (excepto CDN)
✅ CSS optimizado (~600 líneas)
✅ JavaScript vanilla (~340 líneas)
✅ Imágenes optimizadas (Unsplash)
✅ Carga instantánea de secciones
✅ Sin re-renders innecesarios

---

## 🎨 Temas y Personalización

### Colores Personalizables

Editar `web/public/css/style.css` línea 4:

```css
:root {
    --primary-color: #10b981;      /* Cambiar aquí */
    --primary-dark: #059669;       /* Y aquí */
    --secondary-color: #f59e0b;    /* Y aquí */
    --accent-color: #8b5cf6;       /* Y aquí */
}
```

### Tipografía Personalizable

```css
/* Cuerpo del texto */
font-family: 'Poppins', sans-serif;

/* Títulos */
font-family: 'Merriweather', serif;
```

Para cambiar, editar en `web/public/index.html` la importación de Google Fonts.

---

## 📊 Estadísticas de Uso

```
Secciones:      4 (Inicio, Tienda, Nosotros, Contacto)
Productos:      12 (3 de cada categoría)
Categorías:     5 (Todas, Frutas, Verduras, Lácteos, Cereales)
Páginas Auth:   2 (Login, Register)
Formularios:    2 (Contacto, Login/Register)
Web Components: 1 (ProductCard)
Animaciones:    10+
```

---

## 🔮 Próximas Funcionalidades

- [ ] Búsqueda por nombre
- [ ] Filtro por precio
- [ ] Ordenar por popularidad
- [ ] Wishlist (favoritos)
- [ ] Reseñas de productos
- [ ] Autenticación real (JWT)
- [ ] Pasarela de pagos
- [ ] Historial de compras
- [ ] Perfil de usuario
- [ ] Notificaciones push

---

**Última actualización:** Noviembre 2025
