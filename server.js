// server.js - VERSIÓN CORREGIDA
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// ✅ CONFIGURACIÓN DEL POOL DE POSTGRESQL (FALTABA ESTO)
const pool = new Pool({
    user: 'agroshop_sne',
    host: 'localhost',
    database: 'agroshop',
    password: '632003',
    port: 5432,
});

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp'
};

// Manejar rutas de la API
function handleApiRoutes(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }

    if (req.url === '/api/productos' && req.method === 'GET') {
        getProductos(req, res);
        return true;
    }

    if (req.url === '/api/categorias' && req.method === 'GET') {
        getCategorias(req, res);
        return true;
    }

    if (req.url.startsWith('/api/productos/') && req.method === 'GET') {
        const categoria = req.url.split('/').pop();
        getProductosPorCategoria(req, res, categoria);
        return true;
    }

    return false;
}

// Obtener todos los productos
async function getProductos(req, res) {
    try {
        const result = await pool.query(`
            SELECT p.*, c.nombre as categoria_nombre 
            FROM productos p 
            JOIN categorias c ON p.categoria_id = c.id 
            WHERE p.activo = true
            ORDER BY p.nombre
        `);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.rows));
    } catch (error) {
        console.error('Error obteniendo productos:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Error interno del servidor' }));
    }
}

// Obtener categorías
async function getCategorias(req, res) {
    try {
        const result = await pool.query('SELECT * FROM categorias ORDER BY nombre');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.rows));
    } catch (error) {
        console.error('Error obteniendo categorías:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Error interno del servidor' }));
    }
}

// Obtener productos por categoría
async function getProductosPorCategoria(req, res, categoria) {
    try {
        const result = await pool.query(`
            SELECT p.*, c.nombre as categoria_nombre 
            FROM productos p 
            JOIN categorias c ON p.categoria_id = c.id 
            WHERE c.nombre = $1 AND p.activo = true
            ORDER BY p.nombre
        `, [categoria]);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.rows));
    } catch (error) {
        console.error('Error obteniendo productos por categoría:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Error interno del servidor' }));
    }
}

// Servidor principal
const server = http.createServer(async (req, res) => {
    // Primero verificar si es una ruta de API
    if (handleApiRoutes(req, res)) {
        return;
    }

    // Si no es API, servir archivos estáticos
    let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url);

    // Security: prevent directory traversal
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    // Handle directory requests
    if (filePath.endsWith('/')) {
        filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const mimeType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Try index.html for SPA routing
                const indexPath = path.join(PUBLIC_DIR, 'index.html');
                fs.readFile(indexPath, (error, indexData) => {
                    if (error) {
                        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end('<!DOCTYPE html><html><body><h1>404 - Página no encontrada</h1></body></html>');
                    } else {
                        res.writeHead(200, { 'Content-Type': mimeTypes['.html'] });
                        res.end(indexData);
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Error del servidor: ' + err.message);
            }
        } else {
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(data);
        }
    });
});

// ✅ PROBAR CONEXIÓN AL INICIAR (AGREGADO)
pool.connect((err, client, release) => {
    if (err) {
        console.error('❌ Error conectando a PostgreSQL:', err.message);
    } else {
        console.log('✅ Conectado a PostgreSQL - Base de datos: agroshop');
        release();
    }
});

server.listen(PORT, () => {
    console.log(`🌍 Servidor Agroshop ejecutándose en http://localhost:${PORT}`);
    console.log(`✓ Presiona Ctrl+C para detener el servidor`);
});