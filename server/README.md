# ⚙️ Servidor Backend - Agroshop

## 📋 Descripción

Servidores para ejecutar la aplicación Agroshop. Hay dos opciones disponibles:
- **Node.js** (Recomendado)
- **Python** (Alternativa)

---

## 🚀 Inicio Rápido

### Node.js (Recomendado)

```bash
# En la raíz del proyecto
node server/server.js

# Debería mostrar:
# Server running at http://localhost:3000/
```

### Python

```bash
# En la raíz del proyecto
python server/server.py

# Debería mostrar:
# Server running at http://localhost:3000/
```

---

## 📦 server.js (Node.js)

### Requisitos

```bash
# Node.js v14+ (verificar)
node --version

# NPM (verificar)
npm --version
```

### Instalar Dependencias

```bash
npm install
```

### Ejecutar

```bash
# Modo desarrollo
node server/server.js

# Con nodemon (auto-reload)
npm install -D nodemon
npx nodemon server/server.js

# Especificar puerto
PORT=3001 node server/server.js
```

### Características

```javascript
// ✅ Servidor HTTP nativo (sin Express aún)
const http = require('http');
const fs = require('fs');
const path = require('path');

// ✅ Servir archivos estáticos
server.on('request', (req, res) => {
  // Servir desde web/public/
  // index.html en raíz
  // Extensiones: .html, .css, .js, .json, .jpg, .png, etc
});

// ✅ CORS habilitado
res.setHeader('Access-Control-Allow-Origin', '*');

// ✅ Content-Type automático
const contentTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json'
};
```

### Rutas Disponibles

| Ruta | Método | Descripción |
|------|--------|-------------|
| `/` | GET | index.html |
| `/index.html` | GET | Página principal |
| `/auth/login.html` | GET | Login page |
| `/auth/register.html` | GET | Register page |
| `/css/*.css` | GET | Hojas de estilo |
| `/js/*.js` | GET | JavaScript |
| `/*` | GET | Archivos estáticos |

### Logs

```
Servidor iniciado:
  → Puerto: 3000
  → Host: localhost
  → URL: http://localhost:3000/

Solicitudes:
GET / 200 (index.html)
GET /css/style.css 200 (3.2 KB)
GET /js/main.js 200 (12.5 KB)
GET /api/products 404 (no implementado aún)
```

---

## 🐍 server.py (Python)

### Requisitos

```bash
# Python 3.8+ (verificar)
python --version

# O en algunos sistemas
python3 --version
```

### Ejecutar

```bash
# Ejecución simple
python server/server.py

# Con archivo de configuración
python server/server.py --config config.ini

# Especificar puerto
python server/server.py --port 3001

# Modo debug
python server/server.py --debug
```

### Características

```python
# ✅ Servidor HTTP nativo (http.server)
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

# ✅ Servir archivos estáticos
class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Servir desde web/public/

# ✅ CORS habilitado
self.send_header('Access-Control-Allow-Origin', '*')

# ✅ Content-Type automático
content_types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
}
```

### Logs

```
Servidor iniciado:
  → Puerto: 3000
  → Host: localhost
  → URL: http://localhost:3000/

Solicitudes:
GET / 200 OK (index.html)
GET /css/style.css 200 OK
GET /js/main.js 200 OK
```

---

## 🔧 Configuración

### Variables de Entorno

Crear archivo `config/.env`:

```env
# Modo
NODE_ENV=development

# Puerto
PORT=3000

# Host
HOST=localhost

# URLs
API_URL=http://localhost:3000
CORS_ORIGIN=*

# Base de datos (próximo)
# DB_HOST=localhost
# DB_PORT=27017
# DB_NAME=agroshop
# DB_USER=admin
# DB_PASS=password
```

### Cargar Variables

**Node.js:**
```javascript
require('dotenv').config();
const PORT = process.env.PORT || 3000;
```

**Python:**
```python
import os
from dotenv import load_dotenv

load_dotenv()
PORT = os.getenv('PORT', 3000)
```

---

## 🚨 Solución de Problemas

### Puerto ya en uso

```bash
# Node.js - Usar otro puerto
PORT=3001 node server/server.js

# Python - Usar otro puerto
python server/server.py --port 3001
```

**En Windows (liberar puerto):**
```bash
# Ver qué usa el puerto 3000
netstat -ano | findstr :3000

# Matar proceso (reemplazar PID)
taskkill /PID <PID> /F
```

### CORS errors

Si ves errores de CORS:
1. Headers CORS ya están configurados
2. Verificar que navegador no tiene extensión bloqueando
3. Abrir DevTools (F12) para ver error específico

### Archivos no se sirven

```bash
# Verificar que archivos existen
ls web/public/index.html
ls web/public/css/style.css
ls web/public/js/main.js

# En Windows usar 'dir' en lugar de 'ls'
```

### Servidor no inicia

```bash
# Verificar Node.js está instalado
node --version

# Verificar Python está instalado
python --version

# Verificar archivo server.js/py existe
ls server/server.js
ls server/server.py
```

---

## 📊 Monitoreo

### Logs en Tiempo Real

**Node.js:**
```javascript
console.log(`[${new Date().toISOString()}] ${method} ${url}`);
```

**Python:**
```python
print(f"[{datetime.now()}] {method} {path}")
```

### Estadísticas

```
Total de requests: 1,234
Requests por segundo: 12.3
Tamaño promedio respuesta: 42 KB
Tiempo promedio respuesta: 120 ms
```

---

## 🔮 Próximas Mejoras

### Backend

- [ ] Implementar Express.js (Node.js)
- [ ] Implementar Flask (Python)
- [ ] Base de datos
- [ ] Endpoints API REST
- [ ] Autenticación JWT
- [ ] Middleware de validación
- [ ] Logging mejorado
- [ ] Compresión gzip

### Testing

- [ ] Unit tests
- [ ] Integration tests
- [ ] Load testing
- [ ] E2E testing

### Deployment

- [ ] Docker container
- [ ] Deploy en Heroku
- [ ] Deploy en AWS
- [ ] CI/CD pipeline

---

## 📚 Documentación Relacionada

- [Endpoints API](../docs/api/ENDPOINTS.md)
- [Autenticación](../docs/api/AUTENTICACION.md)
- [Instalación](../docs/guias/INSTALACION.md)
- [Estructura](../docs/guias/ESTRUCTURA.md)

---

## 💡 Tips

1. **Desarrollo**: Usar `nodemon` para auto-reload
```bash
npm install -D nodemon
npx nodemon server/server.js
```

2. **Testing**: Usar `curl` o Postman
```bash
curl http://localhost:3000/
```

3. **Debug**: Abrir DevTools en navegador (F12)

4. **Logs**: Redirigir a archivo
```bash
node server/server.js > server.log 2>&1
```

---

## 📞 Soporte

Si tienes problemas:
1. Revisar sección "Solución de Problemas"
2. Verificar DevTools (F12) en navegador
3. Revisar logs del servidor
4. Contactar: info@agroshop.com

---

**Última actualización:** Noviembre 2025 | **Versión:** 1.0.0
