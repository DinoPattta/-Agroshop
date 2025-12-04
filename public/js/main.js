// main.js 
class ProductCard extends HTMLElement {
    connectedCallback() {
        const id = this.getAttribute('data-id');
        const name = this.getAttribute('name') || 'Producto';
        const price = this.getAttribute('price') || '$0.00';
        const image = this.getAttribute('image') || `https://via.placeholder.com/300x200?text=${encodeURIComponent(name)}`;
        
        this.innerHTML = `
            <div class="product-card-simple">
                <img src="${image}" alt="${name}" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(name)}'">
                <h3>${name}</h3>
                <p class="price">$${price}</p>
                <button class="add-btn" data-id="${id}" data-name="${name}" data-price="${price}" data-image="${image}">Añadir al Carrito</button>
            </div>
        `;
        
        // Agregar event listener al botón
        this.querySelector('.add-btn').addEventListener('click', (e) => {
            const button = e.target;
            const productData = {
                id: button.getAttribute('data-id'),
                name: button.getAttribute('data-name'),
                price: button.getAttribute('data-price'),
                image: button.getAttribute('data-image')
            };
            addToCart(productData);
        });
    }
}

customElements.define('product-card', ProductCard);

let cartItems = [];
let currentSection = 'inicio';

// ===== FUNCIONES PARA CONSUMIR LA API =====
async function fetchProductos() {
    try {
        const response = await fetch('/api/productos');
        if (!response.ok) throw new Error('Error al obtener productos');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

async function fetchProductosPorCategoria(categoria) {
    try {
        const response = await fetch(`/api/productos/${categoria}`);
        if (!response.ok) throw new Error('Error al obtener productos');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// ===== FUNCIONES DEL CARRITO =====
function addToCart(product) {
    // Convertir precio de string a número para cálculos
    const priceNumber = parseFloat(product.price);
    
    cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        priceNumber: priceNumber,
        image: product.image
    });
    
    updateCart();
    showNotification('✓ ' + product.name + ' añadido al carrito!');
}

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCounter = document.querySelector('.cart-counter');
    
    if (cartContainer) {
        cartContainer.innerHTML = '';
        let total = 0;
        
        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p style="text-align: center; padding: 20px; color: #999;">Tu carrito está vacío</p>';
        } else {
            cartItems.forEach((item, idx) => {
                total += item.priceNumber;
                
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80'">
                    <div class="item-details">
                        <p><strong>${item.name}</strong></p>
                        <p>$${item.price}</p>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${idx})" style="background: #ef4444; color: white; border: none; border-radius: 5px; padding: 0.5rem 0.75rem; cursor: pointer; font-size: 0.8rem; font-weight: 600;">Eliminar</button>
                `;
                cartContainer.appendChild(div);
            });
        }
        
        if (cartTotal) {
            cartTotal.textContent = '$' + total.toFixed(2);
        }
        
        if (cartCounter) {
            cartCounter.textContent = cartItems.length;
            cartCounter.style.display = cartItems.length > 0 ? 'flex' : 'none';
        }
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function clearCart() {
    if (cartItems.length === 0) {
        alert('El carrito ya está vacío');
        return;
    }
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        cartItems = [];
        updateCart();
    }
}

function showNotification(msg) {
    // Eliminar notificación anterior si existe
    const existingNotif = document.querySelector('.add-to-cart-confirmation');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    const notif = document.createElement('div');
    notif.className = 'add-to-cart-confirmation';
    notif.textContent = msg;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.style.opacity = '1', 10);
    setTimeout(() => {
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

// ===== NAVEGACIÓN Y MOSTRAR PRODUCTOS =====
function goToSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        if (sectionId === 'tienda') {
            displayProducts('all');
            setupCategoryFilters();
        } else if (sectionId === 'inicio') {
            displayFeaturedProducts();
        }
        
        window.scrollTo(0, 0);
    }
}

// Mostrar productos destacados en inicio
async function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    container.innerHTML = '<p>Cargando productos...</p>';
    
    try {
        const productos = await fetchProductos();
        const featured = productos.slice(0, 7); // Primeros 7 productos
        
        container.innerHTML = '';
        
        if (featured.length === 0) {
            container.innerHTML = '<p>No hay productos disponibles</p>';
            return;
        }
        
        featured.forEach(product => {
            const card = document.createElement('product-card');
            card.setAttribute('data-id', product.id);
            card.setAttribute('name', product.nombre);
            card.setAttribute('price', product.precio);
            card.setAttribute('image', product.imagen_url);
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = '<p>Error cargando productos</p>';
    }
}

// Mostrar productos en tienda
async function displayProducts(category) {
    const container = document.getElementById('product-container');
    if (!container) return;
    
    container.innerHTML = '<p>Cargando productos...</p>';
    
    try {
        const productos = category === 'all' 
            ? await fetchProductos()
            : await fetchProductosPorCategoria(category);
        
        container.innerHTML = '';
        
        if (productos.length === 0) {
            container.innerHTML = '<p>No hay productos en esta categoría</p>';
            return;
        }
        
        productos.forEach(product => {
            const card = document.createElement('product-card');
            card.setAttribute('data-id', product.id);
            card.setAttribute('name', product.nombre);
            card.setAttribute('price', product.precio);
            card.setAttribute('image', product.imagen_url);
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = '<p>Error cargando productos</p>';
    }
}

function setupCategoryFilters() {
    const categoryLinks = document.querySelectorAll('.category-sidebar a');
    categoryLinks.forEach(link => {
        link.removeEventListener('click', categoryClickHandler);
        link.addEventListener('click', categoryClickHandler);
    });
}

function categoryClickHandler(e) {
    e.preventDefault();
    const category = this.dataset.category;
    
    const categoryLinks = document.querySelectorAll('.category-sidebar a');
    categoryLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    displayProducts(category);
}

function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    showNotification('✓ Mensaje enviado! Nos pondremos en contacto pronto.');
    event.target.reset();
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar sección inicio
    displayFeaturedProducts();
    
    // Setup carrito
    const cartIcon = document.querySelector('.cart');
    const cartModal = document.querySelector('.shopping-cart-modal');
    const closeBtn = document.getElementById('close-cart');
    const clearBtn = document.getElementById('clear-cart-btn');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            if (cartModal) cartModal.style.display = 'block';
            updateCart();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (cartModal) cartModal.style.display = 'none';
        });
    }
    
    if (cartModal) {
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) cartModal.style.display = 'none';
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearCart);
    }
    
    // ESC para cerrar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartModal && cartModal.style.display === 'block') {
            cartModal.style.display = 'none';
        }
    });
    
    // Inicializar carrito
    updateCart();
});

// Función para el menú hamburguesa
function toggleMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    
    hamburgerMenu.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    
    hamburgerMenu.classList.remove('active');
    mainNav.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const mainNav = document.getElementById('main-nav');
        
        if (mainNav && mainNav.classList.contains('active') && 
            !hamburgerMenu.contains(event.target) && 
            !mainNav.contains(event.target)) {
            closeMobileMenu();
        }
    });
    
    // Cerrar menú al redimensionar la ventana (si se vuelve a desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});

// Hacer funciones globales para los event listeners HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.goToSection = goToSection;
window.handleContactForm = handleContactForm;