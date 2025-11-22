# 📦 Guía de Instalación Completa - Agroshop

## 📋 Requisitos del Sistema

### Mínimo Requerido
- **SO:** Windows 10+, macOS 10.15+, Linux (cualquier distro moderna)
- **Node.js:** v14.0.0 o superior
- **NPM:** v6.0.0 o superior
- **Git:** v2.0.0 o superior
- **RAM:** 2GB mínimo
- **Espacio:** 500MB

### Para Desarrollo Android
- **Android Studio:** v4.0 o superior
- **JDK:** Java 11 o superior
- **SDK Android:** API 21+
- **RAM:** 4GB mínimo (recomendado 8GB)

---

## 🔧 Instalación Pre-requisitos

### Windows

#### 1. Node.js
1. Descargar desde https://nodejs.org/ (LTS recomendado)
2. Ejecutar instalador
3. Aceptar defaults
4. Verificar instalación:
```bash
node --version
npm --version
```

#### 2. Git
1. Descargar desde https://git-scm.com/
2. Ejecutar instalador
3. Aceptar defaults
4. Verificar instalación:
```bash
git --version
```

### macOS

```bash
# Instalar Homebrew (si no tienes)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Node.js
brew install node

# Instalar Git
brew install git

# Verificar
node --version
npm --version
git --version
```

### Linux (Ubuntu/Debian)

```bash
# Actualizar repositorios
sudo apt update

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar Git
sudo apt install -y git

# Verificar
node --version
npm --version
git --version
```

---

## 🚀 Instalación de Agroshop

### Paso 1: Clonar Repositorio

```bash
# Crear carpeta para proyectos (opcional)
mkdir ~/Proyectos
cd ~/Proyectos

# Clonar repositorio
git clone https://github.com/DinoPattta/-Agroshop.git

# Entrar a carpeta
cd agroshop-main
```

### Paso 2: Instalar Dependencias del Proyecto

```bash
# En la raíz del proyecto
npm install

# Esto descargará todos los paquetes necesarios
# Espera 2-5 minutos según tu conexión
```

### Paso 3: Estructura de Carpetas

Verificar que tengas esta estructura:

```
agroshop-main/
├── web/                    # Aplicación web
├── mobile/                 # App Android
├── server/                 # Servidores
├── docs/                   # Documentación
├── config/                 # Configuración
├── package.json            # Dependencias
└── abrir.bat              # Script Windows
```

---

## 🌐 Ejecutar Aplicación Web

### Opción 1: Script Windows (Recomendado)

1. Navegar a la carpeta del proyecto
2. Doble clic en `abrir.bat`
3. Se abrirá automáticamente en navegador

### Opción 2: Node.js (Todos los SO)

```bash
# En la raíz del proyecto
node server/server.js

# Debería mostrar:
# Server running at http://localhost:3000/
```

Luego abre navegador en: `http://localhost:3000`

### Opción 3: Python (Todos los SO)

```bash
# En la raíz del proyecto
python server/server.py

# Debería mostrar:
# Server running at http://localhost:3000/
```

Luego abre navegador en: `http://localhost:3000`

---

## ⚙️ Configuración Avanzada

### Variable de Entorno (Opcional)

1. Copiar archivo de ejemplo:
```bash
cp config/.env.example config/.env
```

2. Editar `config/.env`:
```
NODE_ENV=development
PORT=3000
HOST=localhost
```

### Cambiar Puerto

Si el puerto 3000 está ocupado:

**Node.js:**
```bash
PORT=3001 node server/server.js
```

**Python:**
```bash
python server/server.py --port 3001
```

---

## 📱 Configuración Android (Opcional)

### Paso 1: Instalar Android Studio
1. Descargar desde https://developer.android.com/studio
2. Instalar siguiendo wizard
3. Instalar Android SDK y emulador

### Paso 2: Sincronizar Capacitor

```bash
# En raíz del proyecto
npm install @capacitor/core @capacitor/cli

# Sincronizar con Android
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

### Paso 3: Compilar

En Android Studio:
1. Seleccionar emulador o dispositivo
2. Click en "Run" (Play button)
3. Esperar compilación (5-15 min primera vez)

---

## ✅ Verificación de Instalación

### Checklist

- [ ] Node.js instalado (`node --version`)
- [ ] Git instalado (`git --version`)
- [ ] Repositorio clonado
- [ ] Dependencias instaladas (`npm install` completado)
- [ ] Servidor inicia sin errores
- [ ] Navegador abre en `http://localhost:3000`
- [ ] Ver página "Inicio" con Hero Banner
- [ ] Clickear en "Tienda" funciona
- [ ] Agregar producto al carrito funciona
- [ ] Carrito se abre al hacer click en icono

---

## 🐛 Solución de Problemas

### Problema: "Command not found: node"

**Solución:**
```bash
# Reinstalar Node.js
# Windows: Descargar de nodejs.org
# macOS: brew install node
# Linux: sudo apt install nodejs
```

### Problema: "Port 3000 already in use"

**Solución 1 - Usar otro puerto:**
```bash
PORT=3001 node server/server.js
```

**Solución 2 - Liberar puerto (Windows):**
```bash
# Ver qué usa el puerto
netstat -ano | findstr :3000

# Matar proceso (reemplazar PID)
taskkill /PID <PID> /F
```

### Problema: "No se cargan las imágenes"

**Verificar:**
- Conexión a internet activa
- Acceso a unsplash.com no bloqueado
- DevTools F12 > Console sin errores CORS

### Problema: "npm: command not found"

**Solución:**
```bash
# Reinstalar Node.js completamente
# Reiniciar terminal
# Verificar: npm --version
```

### Problema: "Cannot find module"

**Solución:**
```bash
# Eliminar node_modules
rm -rf node_modules

# Eliminar lock file
rm package-lock.json

# Reinstalar
npm install
```

---

## 🔍 Verificar Archivos Clave

```bash
# Verificar estructura existe
ls web/public/index.html
ls web/public/css/style.css
ls web/public/js/main.js
ls server/server.js

# En Windows usar "dir" en lugar de "ls"
```

---

## 📞 Soporte

Si tienes problemas:

1. Revisar sección "Solución de Problemas"
2. Verificar DevTools (F12 en navegador)
3. Revisar Console para mensajes de error
4. Contactar: info@agroshop.com

---

## 🎉 ¡Listo!

Ahora tienes Agroshop completamente instalado y funcionando.

Próximos pasos:
- [Guía Rápida](INICIO_RAPIDO.md) - Para usar la app
- [Estructura del Proyecto](ESTRUCTURA.md) - Entender el código
- [Funcionalidades](FUNCIONALIDADES.md) - Ver todas las features

---

**Última actualización:** Noviembre 2025
