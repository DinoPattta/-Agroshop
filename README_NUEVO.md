# 🌱 Agroshop - Plataforma de Productos Agrícolas

![Agroshop](https://img.shields.io/badge/Status-Activo-green) ![Version](https://img.shields.io/badge/Version-1.0.0-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 📋 Descripción General

**Agroshop** es una plataforma integral para la venta de productos agrícolas frescos. Incluye:
- 🌐 **Aplicación Web** - Interface moderna y responsiva
- 📱 **Aplicación Android** - Acceso móvil nativo
- ⚙️ **Servidor Backend** - Node.js y Python disponibles
- 📦 **Catálogo de Productos** - 12+ productos en 5 categorías

---

## 📁 Estructura del Proyecto

```
agroshop-main/
├── web/                           # 🌐 Aplicación Web
│   ├── public/
│   │   ├── index.html            # Página principal
│   │   ├── css/
│   │   │   ├── style.css         # Estilos principales
│   │   │   ├── login.css         # Estilos login
│   │   │   └── register.css      # Estilos registro
│   │   ├── js/
│   │   │   └── main.js           # Lógica principal
│   │   ├── auth/
│   │   │   ├── login.html        # Página login
│   │   │   └── register.html     # Página registro
│   │   └── diagnostico.html      # Herramienta diagnóstico
│   └── package.json              # Dependencias Node
│
├── mobile/                        # 📱 Aplicación Android
│   └── android/                  # Código Android (Capacitor/Gradle)
│
├── server/                        # ⚙️ Backend
│   ├── server.js                 # Servidor Node.js
│   ├── server.py                 # Servidor Python
│   └── README.md                 # Instrucciones servidor
│
├── config/                        # ⚙️ Configuración
│   ├── capacitor.config.json     # Config Capacitor
│   └── .env.example              # Variables de entorno
│
├── docs/                          # 📚 Documentación
│   ├── guias/
│   │   ├── INICIO_RAPIDO.md      # Guía rápida
│   │   ├── INSTALACION.md        # Instrucciones instalación
│   │   ├── ESTRUCTURA.md         # Estructura proyecto
│   │   └── FUNCIONALIDADES.md    # Features disponibles
│   ├── api/
│   │   ├── ENDPOINTS.md          # Endpoints disponibles
│   │   └── AUTENTICACION.md      # Sistema de auth
│   └── CAMBIOS.md                # Registro de cambios
│
├── scripts/                       # 🔧 Scripts útiles
│   ├── patch-java-version.ps1    # Parchear Java
│   └── setup.sh                  # Setup inicial
│
├── -Agroshop/                     # 📂 Código adicional
├── .gitignore                     # Git ignore
├── package.json                   # Dependencias globales
└── abrir.bat                      # Abrir app (Windows)
```

---

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js v14+ o Python 3.8+
- Git
- Android Studio (opcional, solo para app móvil)

### Para la Web

```bash
# 1. Navegar a la carpeta web
cd web

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor
node ../server/server.js

# 4. Abrir en navegador
# http://localhost:3000
```

### Para Android

```bash
# 1. Navegar a carpeta del proyecto
cd .

# 2. Compilar para Android
npm run build
npx cap build android

# 3. Abrir en Android Studio
npx cap open android
```

---

## 📱 Características

### 🌐 Aplicación Web
- ✅ Página principal atractiva
- ✅ Catálogo de 12+ productos
- ✅ Filtrado por 5 categorías
- ✅ Carrito de compras funcional
- ✅ Sistema de login/registro
- ✅ Sección "Nosotros"
- ✅ Página de contacto
- ✅ Diseño completamente responsivo
- ✅ Animaciones suaves

### 📦 Productos Disponibles
- 🍎 Frutas (3)
- 🥕 Verduras (3)
- 🥛 Lácteos (3)
- 🌾 Cereales (3)

### 🔒 Seguridad
- Validación de formularios
- Confirmaciones en acciones críticas
- URLs seguras en imágenes

---

## 🎨 Diseño

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| Verde Principal | #10b981 | Botones, headers |
| Verde Oscuro | #059669 | Hover, gradientes |
| Ámbar | #f59e0b | Acentos secundarios |
| Púrpura | #8b5cf6 | Detalles especiales |
| Fondo | #f9fafb | Página de fondo |

### Tipografía
- **Poppins** - Cuerpo del texto
- **Merriweather** - Títulos principales

---

## 📱 Navegación Principal

```
Inicio
├── Hero Banner
├── 4 Características
└── Productos Destacados

Tienda
├── Filtros por Categoría
└── Grid de Productos

Nosotros
├── ¿Quiénes Somos?
├── Nuestra Misión
└── Nuestros Valores

Contacto
├── Formulario
└── Información de Contacto

Carrito (Accesible desde cualquier sección)
```

---

## 🔧 Funcionalidades Técnicas

### Web
- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsivo con media queries
- **JavaScript Vanilla** - Sin dependencias externas
- **Web Components** - Custom Elements para tarjetas de producto
- **Font Awesome 6.0** - Iconografía

### Mobile (Android)
- **Capacitor** - Bridge entre web y nativo
- **Gradle/Maven** - Build system
- **Android SDK** - Compilación nativa

### Backend
- **Node.js** - Servidor principal
- **Python** - Servidor alternativo
- **CORS** - Soporte cross-origin
- **Rutas estáticas** - Servir archivos públicos

---

## 🛠️ Instalación Detallada

### Paso 1: Clonar Repositorio
```bash
git clone https://github.com/DinoPattta/-Agroshop.git
cd agroshop-main
```

### Paso 2: Instalar Dependencias
```bash
npm install
```

### Paso 3: Configuración (Opcional)
```bash
cp config/.env.example config/.env
# Editar config/.env con tus valores
```

### Paso 4: Ejecutar Aplicación

**Opción A - Windows (Batch)**
```bash
abrir.bat
```

**Opción B - Servidor Node.js**
```bash
node server/server.js
```

**Opción C - Servidor Python**
```bash
python server/server.py
```

---

## 📚 Documentación Adicional

| Documento | Descripción |
|-----------|-------------|
| [Guía Rápida](docs/guias/INICIO_RAPIDO.md) | Primeros pasos |
| [Instalación Completa](docs/guias/INSTALACION.md) | Instalación paso a paso |
| [Estructura del Proyecto](docs/guias/ESTRUCTURA.md) | Organización de carpetas |
| [Funcionalidades](docs/guias/FUNCIONALIDADES.md) | Features disponibles |
| [Endpoints API](docs/api/ENDPOINTS.md) | Endpoints disponibles |
| [Sistema de Autenticación](docs/api/AUTENTICACION.md) | Auth documentación |
| [Registro de Cambios](docs/CAMBIOS.md) | Historial de versiones |

---

## 🎯 Próximas Mejoras

- [ ] Backend con base de datos (MongoDB/PostgreSQL)
- [ ] Sistema de autenticación real (JWT)
- [ ] Pasarela de pagos (Stripe/PayPal)
- [ ] Notificaciones en tiempo real
- [ ] Sistema de reseñas de productos
- [ ] Dashboard de administrador
- [ ] Seguimiento de pedidos
- [ ] Integración con redes sociales

---

## 📧 Contacto

**Información de Contacto:**
- 📍 Ubicación: Calle Principal 123, Ciudad, País
- 📱 Teléfono: +1 (555) 123-4567
- 📧 Email: info@agroshop.com
- 🕐 Horarios: Lun-Vie 9am-6pm | Sáb-Dom 10am-4pm

---

## 📄 Licencia

Este proyecto está bajo licencia **MIT**. Ver archivo `LICENSE` para más detalles.

---

## 👨‍💻 Desarrollado por

**DinoPattta** - 2025

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Última actualización:** Noviembre 2025 | **Versión:** 1.0.0
