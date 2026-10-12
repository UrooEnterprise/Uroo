const appContainer = document.getElementById('app-container');
const searchInput = document.getElementById('searchInput');

// Business Contact Details
const WHATSAPP_NUMBER = "919016406623"; 
const INSTAGRAM_URL = "https://www.instagram.com/urooenterprise/";
const FACEBOOK_URL = "https://www.facebook.com/people/Uroo-Enterprise/61577735529706/";
const SUPPORT_EMAIL = "UrooEnterprise@gmail.com";

const categories = [
    { id: 'zodiac', name: 'Zodiac / Rashi Bracelets', image: 'https://images.unsplash.com/photo-1611591475583-8a3bc2e93542?w=400' },
    { id: 'bracelets', name: 'Crystal Bracelets', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' },
    { id: 'vastu', name: 'Spiritual / Vastu Items', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400' },
    { id: 'jewellery', name: 'Imitation Jewellery', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400' }
];

const products = [
    {
        id: 1,
        category: 'zodiac',
        name: 'Aries (Mesha) Zodiac Bracelet – Carnelian & Tiger Eye',
        price: 299,
        originalPrice: 699,
        customizable: true,
        images: [
            'https://images.unsplash.com/photo-1611591475583-8a3bc2e93542?w=600',
            'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600'
        ],
        description: 'Specially energized natural stone bracelet designed for Aries (Mesha Rashi) natives. Combines Carnelian for drive and Tiger Eye for confidence and protection.',
        meeshoLink: 'https://meesho.com',
        amazonLink: 'https://amazon.in',
        whatsappMessage: 'Hello Uroo Enterprise, I want to buy Aries Mesha Zodiac Bracelet.'
    },
    {
        id: 2,
        category: 'bracelets',
        name: 'Original Citrine Abundance & Wealth Bracelet',
        price: 349,
        originalPrice: 799,
        customizable: true,
        images: [
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600'
        ],
        description: 'Natural Citrine crystal bracelet known as the Merchant Stone for attracting financial success, business growth, and positive energy.',
        meeshoLink: 'https://meesho.com',
        amazonLink: 'https://amazon.in',
        whatsappMessage: 'Hello Uroo Enterprise, I want to buy Citrine Abundance Bracelet.'
    },
    {
        id: 3,
        category: 'vastu',
        name: 'Pyrite 7 Horse Vastu Frame & Tortoise Set',
        price: 599,
        originalPrice: 1299,
        customizable: false,
        images: [
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600'
        ],
        description: 'Powerful Vastu remedy featuring running horses and original Pyrite stones to accelerate career progress, wealth flow, and positive energy.',
        meeshoLink: 'https://meesho.com',
        amazonLink: 'https://amazon.in',
        whatsappMessage: 'Hello Uroo Enterprise, I want to buy Pyrite Vastu Frame.'
    },
    {
        id: 4,
        category: 'jewellery',
        name: 'Evil Eye Heart Pendant with Golden Chain',
        price: 249,
        originalPrice: 599,
        customizable: false,
        images: [
            'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600'
        ],
        description: 'Stylish heart-shaped evil eye pendant on a durable golden finish chain, combining daily fashion with powerful protective symbolism.',
        meeshoLink: 'https://meesho.com',
        amazonLink: 'https://amazon.in',
        whatsappMessage: 'Hello Uroo Enterprise, I want to buy Evil Eye Heart Pendant.'
    }
];

function showHome() {
    let html = `
        <div class="home-banner">
            <h2>Uroo Enterprise</h2>
            <p>Certified Crystals, Vastu & Spiritual Collection</p>
            <div class="banner-marketplace-tag">🛒 Officially available on Meesho & Amazon</div>
        </div>

        <div class="section-title">Explore Categories</div>
        <div class="category-grid">
    `;

    categories.forEach(cat => {
        html += `
            <div class="category-card" onclick="showCategory('${cat.id}')">
                <img src="${cat.image}" alt="${cat.name}">
                <h3>${cat.name}</h3>
            </div>
        `;
    });

    html += `</div><div class="section-title">Featured Collections</div><div class="product-grid">`;

    products.slice(0, 4).forEach(p => {
        html += createProductCardHTML(p);
    });

    html += `</div>`;

    // About Us & Trust Section
    html += `
        <div class="about-section">
            <h3>About Uroo Enterprise</h3>
            <p>Welcome to Uroo Enterprise! We specialize in premium quality natural crystal bracelets, zodiac rashi items, authentic Vastu remedies, and spiritual accessories. Every piece is carefully curated and energized to bring positivity, protection, and prosperity into your life.</p>
            <p style="margin-top: 10px;">🛍️ <strong>Trusted Marketplace Seller:</strong> You can shop with 100% confidence from us directly here or find our official storefronts on <strong>Meesho</strong> and <strong>Amazon</strong>.</p>
            
            <div class="social-connect-box">
                <p>Connect With Us:</p>
                <div class="social-icons-row">
                    <a href="${INSTAGRAM_URL}" target="_blank" class="social-btn insta"><i class="fa-brands fa-instagram"></i> Instagram</a>
                    <a href="${FACEBOOK_URL}" target="_blank" class="social-btn fb"><i class="fa-brands fa-facebook"></i> Facebook</a>
                    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Uroo%20Enterprise" target="_blank" class="social-btn wa"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
                </div>
                <p class="email-text"><i class="fa-solid fa-envelope"></i> ${SUPPORT_EMAIL}</p>
            </div>
        </div>
    `;

    appContainer.innerHTML = html;
    window.scrollTo(0, 0);
}

function showCategory(catId) {
    const cat = categories.find(c => c.id === catId);
    const catProducts = products.filter(p => p.category === catId);

    let html = `
        <div class="section-title" style="margin-top:16px;">${cat ? cat.name : 'Products'} (${catProducts.length})</div>
        <div class="product-grid">
    `;

    if(catProducts.length === 0) {
        html += `<p style="padding:16px; font-size:13px;">No products added in this category yet. Check back soon or chat on WhatsApp!</p>`;
    } else {
        catProducts.forEach(p => {
            html += createProductCardHTML(p);
        });
    }

    html += `</div>`;
    appContainer.innerHTML = html;
    window.scrollTo(0, 0);
}

function createProductCardHTML(p) {
    return `
        <div class="product-card" onclick="showProductDetail(${p.id})">
            ${p.customizable ? '<span class="customization-badge">Customizable</span>' : ''}
            <img src="${p.images[0]}" alt="${p.name}">
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div>
                    <span class="product-price">Rs. ${p.price}</span>
                    <span class="product-original-price">Rs. ${p.originalPrice}</span>
                </div>
            </div>
        </div>
    `;
}

function showProductDetail(productId) {
    const p = products.find(item => item.id === productId);
    if (!p) return;

    let thumbHTML = '';
    p.images.forEach((img, idx) => {
        thumbHTML += `<img src="${img}" class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')">`;
    });

    let recommendedHTML = '';
    const related = products.filter(item => item.id !== productId).slice(0, 3);
    related.forEach(rel => {
        recommendedHTML += createProductCardHTML(rel);
    });

    let customizationBoxHTML = '';
    if (p.customizable) {
        const customMsg = encodeURIComponent(`Hello Uroo Enterprise, I want custom wrist size / stone combination for: ${p.name}`);
        customizationBoxHTML = `
            <div class="custom-notice-box">
                <p>✨ <strong>Customization Available!</strong> Want a specific wrist size or stone mix?</p>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${customMsg}" target="_blank" class="btn-custom-wa">
                    <i class="fa-brands fa-whatsapp"></i> Chat for Customization
                </a>
            </div>
        `;
    }

    let html = `
        <div class="detail-container">
            <div class="image-gallery">
                <img src="${p.images[0]}" id="mainImageDisplay" class="main-img-view" alt="${p.name}">
            </div>
            <div class="thumbnail-strip">
                ${thumbHTML}
            </div>
            <div class="detail-content">
                <h2 class="detail-title">${p.name}</h2>
                <div class="detail-price-box">
                    <span class="detail-price">Rs. ${p.price}</span>
                    <span class="product-original-price" style="font-size:14px;">Rs. ${p.originalPrice}</span>
                </div>

                ${customizationBoxHTML}

                <div class="detail-desc">
                    <p>${p.description}</p>
                </div>
                
                <div class="legal-disclaimer">
                    ⚠️ <strong>Disclaimer:</strong> Images are for illustration purposes only. Actual color or size may vary slightly due to natural stone variations.
                </div>

                <div class="recommendations-section">
                    <h3>You Might Also Like</h3>
                    <div class="product-grid" style="padding:0;">
                        ${recommendedHTML}
                    </div>
                </div>
            </div>

            <!-- Fixed Bottom Buying Buttons -->
            <div class="action-bar">
                <a href="${p.meeshoLink}" target="_blank" class="btn-meesho"><i class="fa-solid fa-bag-shopping"></i> Meesho</a>
                <a href="${p.amazonLink}" target="_blank" class="btn-amazon"><i class="fa-brands fa-amazon"></i> Amazon</a>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(p.whatsappMessage)}" target="_blank" class="btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
            </div>
        </div>
    `;

    appContainer.innerHTML = html;
    window.scrollTo(0, 0);
}

function changeMainImage(element, src) {
    document.getElementById('mainImageDisplay').src = src;
    document.querySelectorAll('.thumb-img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if(query === '') {
        showHome();
        return;
    }

    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));

    let html = `
        <div class="section-title" style="margin-top:16px;">Search Results (${filtered.length})</div>
        <div class="product-grid">
    `;

    if(filtered.length === 0) {
        html += `<p style="padding:16px; font-size:13px;">No products found matching "${query}".</p>`;
    } else {
        filtered.forEach(p => {
            html += createProductCardHTML(p);
        });
    }

    html += `</div>`;
    appContainer.innerHTML = html;
}

// Initialize on load
showHome();
