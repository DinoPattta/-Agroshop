# 🔐 Sistema de Autenticación - Agroshop

## 📋 Descripción General

Sistema de autenticación para gestionar usuarios, login y registro en Agroshop.

**Estado Actual:** UI Completada | Backend Próximamente

---

## 🔑 Componentes Principales

### 1. Login
**Archivo:** `web/public/auth/login.html`

```html
<form>
  <input type="email" placeholder="Email" required>
  <input type="password" placeholder="Contraseña" required>
  <button type="submit">Iniciar Sesión</button>
  <a href="register.html">¿No tienes cuenta? Regístrate</a>
</form>
```

**Campos:**
- Email (validado)
- Contraseña (mínimo 6 caracteres, recomendado)

**Validación:**
- ✅ Email válido (formato)
- ✅ Contraseña no vacía
- ✅ HTML5 validation

---

### 2. Registro
**Archivo:** `web/public/auth/register.html`

```html
<form>
  <input type="text" placeholder="Nombre Completo" required>
  <input type="email" placeholder="Email" required>
  <input type="password" placeholder="Contraseña" required>
  <input type="password" placeholder="Confirmar Contraseña" required>
  <button type="submit">Registrarse</button>
  <a href="login.html">¿Ya tienes cuenta? Inicia Sesión</a>
</form>
```

**Campos:**
- Nombre Completo
- Email
- Contraseña
- Confirmar Contraseña

**Validación:**
- ✅ Nombre no vacío
- ✅ Email válido
- ✅ Contraseña ≥ 6 caracteres (recomendado)
- ✅ Contraseñas coinciden

---

## 🔄 Flujo de Autenticación (Actual)

### Registro
```
Usuario rellena formulario
         ↓
   Validación HTML5
         ↓
    Formulario enviado
         ↓
  (Actualmente no persiste)
```

### Login
```
Usuario rellena email y contraseña
             ↓
       Validación HTML5
             ↓
   (Actualmente no valida contra BD)
             ↓
  (Próximamente: JWT Token)
```

---

## 🛡️ Seguridad (Roadmap)

### Implementación Próxima

**Fase 1: Backend**
```javascript
// Hash de contraseña
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);

// Verificar contraseña
const match = await bcrypt.compare(password, hashedPassword);
```

**Fase 2: JWT Token**
```javascript
// Generar token
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);

// Verificar token
jwt.verify(token, process.env.JWT_SECRET);
```

**Fase 3: Sesiones**
```javascript
// Almacenar sesión
req.session.userId = user.id;

// Recuperar sesión
req.session.userId
```

---

## 📱 Acceso a Páginas de Autenticación

### Método 1: Desde Navegación Principal
```
[Agroshop Header]
         ↓
    [👤 Icon] (arriba a la derecha)
         ↓
  → Redirige a /auth/login.html
```

### Método 2: URL Directa
```
http://localhost:3000/auth/login.html
http://localhost:3000/auth/register.html
```

### Método 3: Links Internos
```
En Login → "¿No tienes cuenta?" → Register
En Register → "¿Ya tienes cuenta?" → Login
```

---

## 🎨 Diseño de Autenticación

### Características Visuales

**Login & Register:**
- ✅ Gradient background (morado a azul)
- ✅ Tarjeta centrada con shadow
- ✅ Entrada suave (fadeInUp animation)
- ✅ Hover effects en inputs
- ✅ Focus states claros
- ✅ Responsive (mobile friendly)

**Paleta de Colores:**
```css
Background: linear-gradient(135deg, #667eea, #764ba2)
Card: white
Focus: rgba(16, 185, 129, 0.1) shadow
Borders: #e5e7eb
Text: #1f2937
```

**Tipografía:**
```css
Title: Merriweather (serif, 2.5rem)
Labels: Poppins (500)
Inputs: Poppins (400)
Links: Poppins (500, color azul)
```

---

## 🔐 Mejores Prácticas (A Implementar)

### Contraseñas

**Requisitos:**
```
✅ Mínimo 8 caracteres (NIST)
✅ Mayúscula y minúscula
✅ Número
✅ Carácter especial (!@#$%^&*)
✅ No ser contraseña común (top 10,000)
✅ No contener nombre de usuario
```

**Hash & Salting:**
```javascript
// Nunca almacenar contraseña en texto plano
// Usar bcrypt con salt > 10
const saltRounds = 12;
const hash = bcrypt.hashSync(password, saltRounds);
```

---

### Tokens JWT

**Estructura:**
```
Header.Payload.Signature

Header: { alg: "HS256", typ: "JWT" }
Payload: { userId, email, iat, exp }
Signature: HMACSHA256(header.payload, secret)
```

**Ejemplo:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Tiempo de Expiración:**
```javascript
// Recomendado: 24 horas
expiresIn: '24h'

// Refresh token: 7 días
refreshExpiresIn: '7d'
```

---

### Session Management

**Cookies Seguras:**
```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,        // HTTPS only
    httpOnly: true,      // No JS access
    sameSite: 'strict',  // CSRF protection
    maxAge: 24 * 60 * 60 * 1000  // 24 horas
  }
}));
```

---

## 📊 Base de Datos (Estructura)

### Tabla: users

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  address VARCHAR(255),
  city VARCHAR(100),
  country VARCHAR(100),
  avatar_url VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  last_login TIMESTAMP NULL
);
```

### Tabla: sessions

```sql
CREATE TABLE sessions (
  id VARCHAR(255) PRIMARY KEY,
  user_id INT NOT NULL,
  token VARCHAR(500) NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## 🚀 Implementación Paso a Paso

### Paso 1: Backend API

```javascript
// server/routes/auth.js
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  // Validar
  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña requeridos' });
  }
  
  // Hash password
  const hash = await bcrypt.hash(password, 12);
  
  // Guardar en BD
  const user = await User.create({
    name, email, password: hash
  });
  
  // Generar token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  
  res.status(201).json({ token, user });
});
```

### Paso 2: Middleware de Autenticación

```javascript
// server/middleware/auth.js
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No autenticado' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = verifyToken;
```

### Paso 3: Frontend - Guardar Token

```javascript
// web/public/js/auth.js
async function login(email, password) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  
  const data = await response.json();
  
  if (data.token) {
    // Guardar token
    localStorage.setItem('authToken', data.token);
    
    // Guardar usuario
    localStorage.setItem('user', JSON.stringify(data.user));
    
    // Redirigir
    window.location.href = '/';
  }
}
```

### Paso 4: Frontend - Usar Token

```javascript
// En cada request
const token = localStorage.getItem('authToken');

fetch('/api/user', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

---

## 🧪 Testing

### Test de Registro

```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "Test@1234"
  }'
```

### Test de Login

```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test@1234"
  }'
```

---

## 🐛 Troubleshooting

### "Email ya registrado"
- El email ya existe en BD
- Usar otro email o hacer login

### "Contraseña incorrecta"
- Contraseña no coincide
- Verificar mayúsculas/minúsculas

### "Token expirado"
- Usar refresh token para obtener nuevo
- O hacer login nuevamente

### "No autenticado"
- Token no presente o inválido
- Hacer login primero

---

## 🔮 Próximos Pasos

1. **Fase 1:** Implementar backend con BD
2. **Fase 2:** Agregar JWT + refresh tokens
3. **Fase 3:** 2FA (Two-Factor Authentication)
4. **Fase 4:** OAuth (Google, Facebook)
5. **Fase 5:** Recuperación de contraseña

---

**Última actualización:** Noviembre 2025 | **Status:** Diseño Completado, Backend en Progreso
