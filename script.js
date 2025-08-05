// Datos de productos
const products = [
    // Películas y Series
    {
        id: 1,
        category: 'peliculas',
        name: 'Netflix Premium',
        price: '32 Bs',
        icon: '🎬',
        description: 'Cuenta premium de Netflix'
    },
    {
        id: 2,
        category: 'peliculas',
        name: 'Disney ESPN star+',
        price: '21 Bs',
        icon: '🌀',
        description: 'Acceso completo a Disney, ESPN y Star+'
    },
    {
        id: 3,
        category: 'peliculas',
        name: 'Hbo Max',
        options: [
            { duration: '1 mes', price: '13 Bs' },
            { duration: '3 meses', price: '39 Bs' }
        ],
        icon: '🔮',
        description: 'Cuenta premium de HBO Max'
    },
    {
        id: 4,
        category: 'peliculas',
        name: 'Crunchyroll',
        options: [
            { duration: '1 mes', price: '10 Bs' },
            { duration: '3 meses', price: '30 Bs' },
            { duration: '1 año', price: '98 Bs' }
        ],
        icon: '📺',
        description: 'Suscripción premium para anime'
    },
    {
        id: 5,
        category: 'peliculas',
        name: 'Prime Video',
        price: '15 Bs',
        icon: '💎',
        description: 'Cuenta premium de Amazon Prime Video'
    },
    {
        id: 6,
        category: 'peliculas',
        name: 'VIX+',
        price: '10 Bs',
        icon: '🎥',
        description: 'Plataforma de streaming en español'
    },
    {
        id: 7,
        category: 'peliculas',
        name: 'Paramount+',
        price: '14 Bs',
        icon: '⏰',
        description: 'Cuenta premium de Paramount+'
    },
    {
        id: 8,
        category: 'peliculas',
        name: 'Flujo TV',
        price: '19 Bs',
        icon: '📺',
        description: 'TV en vivo y contenido premium'
    },
    {
        id: 9,
        category: 'peliculas',
        name: 'MasTV',
        price: '29 Bs',
        icon: '📺',
        description: 'Plataforma de TV en vivo'
    },
    {
        id: 10,
        category: 'peliculas',
        name: 'IPTV Smarters Pro',
        price: '19 Bs',
        icon: '📺',
        description: 'Aplicación para TV en vivo'
    },
    
    // Música
    {
        id: 11,
        category: 'musica',
        name: 'Deezer',
        price: '18 Bs',
        icon: '🎶',
        description: 'Suscripción premium de Deezer'
    },
    {
        id: 12,
        category: 'musica',
        name: 'Apple Music',
        price: '19 Bs',
        icon: '⏯️',
        description: 'Cuenta premium de Apple Music'
    },
    {
        id: 13,
        category: 'musica',
        name: 'Tidal Premium',
        price: '18 Bs',
        icon: '🎵',
        description: 'Suscripción premium de Tidal'
    },
    {
        id: 14,
        category: 'musica',
        name: 'YouTube Premium & Music',
        price: '25 Bs',
        icon: '📩',
        description: 'Cuenta premium de YouTube'
    },
    {
        id: 15,
        category: 'musica',
        name: 'Spotify Premium',
        price: '25 Bs',
        icon: '🛍️',
        description: 'Cuenta premium de Spotify'
    },
    
    // Diseño Gráfico
    {
        id: 16,
        category: 'diseno',
        name: 'Canva Pro',
        options: [
            { duration: '1 mes', price: '15 Bs' },
            { duration: '3 meses', price: '39 Bs' },
            { duration: '6 meses', price: '78 Bs' },
            { duration: '12 meses', price: '125 Bs' }
        ],
        icon: '🖌️',
        description: 'Cuenta premium de Canva Pro'
    },
    {
        id: 17,
        category: 'diseno',
        name: 'Canva Edu',
        options: [
            { duration: '1 mes', price: '10 Bs' },
            { duration: '3 meses', price: '25 Bs' },
            { duration: '6 meses', price: '45 Bs' },
            { duration: '12 meses', price: '75 Bs' }
        ],
        icon: '✒️',
        description: 'Cuenta premium de Canva Edu'
    },
    
    // Otros
    {
        id: 18,
        category: 'otros',
        name: 'ChatGPT Plus',
        price: '45 Bs',
        icon: '🤖',
        description: 'Cuenta premium de ChatGPT Plus'
    },
    {
        id: 19,
        category: 'otros',
        name: 'Gemini IA Pro',
        price: '35 Bs',
        icon: '🌟',
        description: 'Cuenta premium de Gemini IA Pro'
    },
    {
        id: 20,
        category: 'otros',
        name: 'Apple TV',
        price: '25 Bs',
        icon: '🍏',
        description: 'Suscripción de Apple TV+'
    },
    {
        id: 21,
        category: 'otros',
        name: 'Drama Box',
        price: '45 Bs',
        icon: '⛩️',
        description: 'Plataforma de dramas asiáticos'
    },
    {
        id: 22,
        category: 'otros',
        name: 'CapCut Pro',
        price: '45 Bs',
        icon: '✨',
        description: 'Suscripción premium de CapCut'
    },
    {
        id: 23,
        category: 'otros',
        name: 'Super Duolingo',
        price: '18 Bs',
        icon: '🇺🇸',
        description: 'Suscripción premium de Duolingo'
    },
    {
        id: 24,
        category: 'otros',
        name: 'Viki Rakuten',
        price: '19 Bs',
        icon: '🎌',
        description: 'Plataforma de dramas asiáticos'
    },
    {
        id: 25,
        category: 'otros',
        name: 'Hi Tv',
        price: '18 Bs',
        icon: '🇰🇷',
        description: 'TV en vivo y contenido premium'
    },
    {
        id: 26,
        category: 'otros',
        name: 'Google One (100GB)',
        price: '18 Bs',
        icon: '💽',
        description: 'Almacenamiento en la nube de Google'
    },
    {
        id: 27,
        category: 'otros',
        name: 'TikTok Monedas',
        price: '10 Bs',
        icon: '🪙',
        description: 'Monedas para TikTok'
    },
    
    // Recargas de Juegos
    {
        id: 28,
        category: 'recargas',
        name: 'Free Fire',
        icon: '🎮',
        description: 'Recargas de diamantes para Free Fire',
        isGame: true
    },
    {
        id: 29,
        category: 'recargas',
        name: 'Mobile Legends',
        icon: '🎮',
        description: 'Recargas de diamantes para Mobile Legends',
        isGame: true
    },
    {
        id: 30,
        category: 'recargas',
        name: 'Roblox',
        icon: '🎮',
        description: 'Recargas de Robux para Roblox',
        isGame: true
    },
    {
        id: 31,
        category: 'recargas',
        name: 'PUBG Mobile',
        icon: '🎮',
        description: 'Recargas de UC para PUBG Mobile',
        isGame: true
    },
    {
        id: 32,
        category: 'recargas',
        name: 'Call of Duty Mobile',
        icon: '🎮',
        description: 'Recargas de CP para COD Mobile',
        isGame: true
    },
    {
        id: 33,
        category: 'recargas',
        name: 'Arena Breackout',
        icon: '🎮',
        description: 'Recargas de Koens para Arena Breackout',
        isGame: true
    },
    {
        id: 34,
        category: 'recargas',
        name: 'Pubg Mobile',
        icon: '🎮',
        description: 'Recargas de monedas para Pubg Mobile',
        isGame: true
    },
];

// Función para renderizar productos
function renderProducts(category = 'inicio') {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    const filteredProducts = category === 'inicio' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Generar opciones de precio si existen
        let priceOptionsHTML = '';
        if (product.options) {
            product.options.forEach((option, index) => {
                priceOptionsHTML += `
                    <div class="price-option ${index === 0 ? 'active' : ''}" 
                         data-price="${option.price}"
                         data-duration="${option.duration}">
                        ${option.duration}
                        <span>${option.price}</span>
                    </div>
                `;
            });
        }
        
        productCard.innerHTML = `
            <div class="product-icon">
                <span style="font-size: 3.5rem;">${product.icon}</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                ${product.description ? `<p style="color: #aaa; margin-bottom: 1rem;">${product.description}</p>` : ''}
                
                ${product.options ? `
                    <div class="price-options">
                        ${priceOptionsHTML}
                    </div>
                    <div class="price-display">${product.options[0].price}</div>
                ` : `
                    <div class="price-display">${product.price}</div>
                `}
                
                <button class="buy-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Adquirir
                </button>
            </div>
        `;
        
        container.appendChild(productCard);
        
        // Si el producto tiene opciones, agregar eventos
        if (product.options) {
            const options = productCard.querySelectorAll('.price-option');
            const priceDisplay = productCard.querySelector('.price-display');
            
            options.forEach(option => {
                option.addEventListener('click', () => {
                    // Remover clase active de todas las opciones
                    options.forEach(opt => opt.classList.remove('active'));
                    // Agregar clase active a la opción seleccionada
                    option.classList.add('active');
                    // Actualizar el precio
                    priceDisplay.textContent = option.getAttribute('data-price');
                });
            });
        }
    });
    
    // Agregar eventos a los botones de compra
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            
            let message = `¡Hola! Quiero adquirir ${product.name}`;
            
            if (product.options) {
                const activeOption = this.closest('.product-card').querySelector('.price-option.active');
                const duration = activeOption.getAttribute('data-duration');
                const price = activeOption.getAttribute('data-price');
                message += ` (${duration}) por ${price}`;
            } else {
                message += ` por ${product.price}`;
            }
            
            message += '. ¿Cómo puedo realizar la compra?';
            
            // Enlace de WhatsApp (reemplazar con tu número)
            const whatsappUrl = `https://wa.me/59161541084?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
}

// Animación de texto deslizante
function initSlidingText() {
    const texts = ['rápido', 'seguro', 'Soporte confiable'];
    const textElement = document.getElementById('sliding-text');
    let currentIndex = 0;
    
    function slideText() {
        // Animación de salida
        textElement.style.animation = 'slideOut 0.7s forwards';
        
        setTimeout(() => {
            // Cambiar texto
            currentIndex = (currentIndex + 1) % texts.length;
            textElement.textContent = texts[currentIndex];
            
            // Animación de entrada
            textElement.style.animation = 'none';
            setTimeout(() => {
                textElement.style.animation = 'slideIn 0.7s forwards';
            }, 10);
        }, 700);
    }
    
    // Iniciar animación cada 3 segundos
    setInterval(slideText, 3000);
}

// Toggle sidebar
function initSidebar() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
    });
    
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
    });
    
    // Cerrar sidebar al hacer clic en un enlace
    document.querySelectorAll('#sidebar a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            renderProducts(category);
            
            setTimeout(() => {
                sidebar.classList.remove('open');
                overlay.style.display = 'none';
            }, 300);
        });
    });
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    initSlidingText();
    initSidebar();
    renderProducts(); // Renderizar todos los productos inicialmente
});