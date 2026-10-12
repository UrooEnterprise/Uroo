const appContainer = document.getElementById('app-container');
const searchInput = document.getElementById('searchInput');

// Business Contact Details
const WHATSAPP_NUMBER = "919016406623"; 
const INSTAGRAM_URL = "https://www.instagram.com/urooenterprise/";
const FACEBOOK_URL = "https://www.facebook.com/people/Uroo-Enterprise/61577735529706/";
const SUPPORT_EMAIL = "UrooEnterprise@gmail.com";

// Current Language State (Default is English)
let currentLang = 'en';

// Translations Dictionary
const translations = {
    en: {
        ticker: "⚠️ Note: Images are for illustration purposes only. Actual color or size may vary slightly due to natural gemstone properties.",
        subtitle: "Certified Crystals & Vastu",
        chatNow: "Chat Now",
        searchPlaceholder: "Search bracelets, rashi, pyrite...",
        bannerTitle: "Uroo Enterprise",
        bannerDesc: "Certified Crystals, Vastu & Spiritual Collection",
        marketplaceTag: "🛒 Officially available on Meesho & Amazon",
        exploreCategories: "Explore Categories",
        featuredColl: "Featured Collections",
        aboutTitle: "About Uroo Enterprise",
        aboutDesc: "Welcome to Uroo Enterprise! We specialize in premium quality natural crystal bracelets, zodiac rashi items, authentic Vastu remedies, and spiritual accessories. Every piece is carefully curated and energized to bring positivity, protection, and prosperity into your life.",
        aboutMarketplace: "🛍️ Trusted Marketplace Seller: You can shop with 100% confidence from us directly here or find our official storefronts on Meesho and Amazon.",
        connectWithUs: "Connect With Us:",
        instagram: "Instagram",
        facebook: "Facebook",
        whatsapp: "WhatsApp",
        viewOnMeesho: "Meesho",
        viewOnAmazon: "Amazon",
        chatWhatsApp: "WhatsApp",
        customizableBadge: "Customizable",
        customNotice: "✨ Customization Available! Want a specific wrist size or stone mix?",
        chatCustom: "Chat for Customization",
        youMightLike: "You Might Also Like",
        footerText: "Official Marketplace Seller on Meesho & Amazon",
        rights: "© 2026 Uroo Enterprise. All rights reserved.",
        naturalDisclaimer: "Natural stones vary in texture and shade. All remedies are traditional."
    },
    hi: {
        ticker: "⚠️ नोट: छवियां केवल चित्रण के उद्देश्य से हैं। प्राकृतिक रत्न गुणों के कारण वास्तविक रंग या आकार थोड़ा भिन्न हो सकता है।",
        subtitle: "प्रमाणित क्रिस्टल और वास्तु",
        chatNow: "चैट करें",
        searchPlaceholder: "ब्रेसलेट, राशि, पाइराइट खोजें...",
        bannerTitle: "उरू एंटरप्राइज (Uroo Enterprise)",
        bannerDesc: "प्रमाणित क्रिस्टल, वास्तु और आध्यात्मिक संग्रह",
        marketplaceTag: "🛒 मीशो और अमेज़न पर आधिकारिक रूप से उपलब्ध",
        exploreCategories: "श्रेणियां देखें",
        featuredColl: "विशेष संग्रह",
        aboutTitle: "उरू एंटरप्राइज के बारे में",
        aboutDesc: "उरू एंटरप्राइज में आपका स्वागत है! हम प्रीमियम गुणवत्ता वाले प्राकृतिक क्रिस्टल ब्रेसलेट, राशि उत्पाद, प्रामाणिक वास्तु उपाय और आध्यात्मिक सामान प्रदान करते हैं। प्रत्येक उत्पाद को आपके जीवन में सकारात्मकता, सुरक्षा और समृद्धि लाने के लिए विशेष रूप से तैयार किया जाता है।",
        aboutMarketplace: "🛍️ विश्वसनीय विक्रेता: आप सीधे हमसे या मीशो और अमेज़न पर हमारे आधिकारिक स्टोर से खरीदारी कर सकते हैं।",
        connectWithUs: "हमसे जुड़ें:",
        instagram: "इंस्टाग्राम",
        facebook: "फेसबुक",
        whatsapp: "व्हाट्सएप",
        viewOnMeesho: "मीशो",
        viewOnAmazon: "अमेज़न",
        chatWhatsApp: "व्हाट्सएप",
        customizableBadge: "कस्टमाइज़ेबल",
        customNotice: "✨ कस्टमाइज़ेशन उपलब्ध! अपनी कलाई का आकार या पत्थरों का मिश्रण बनवाना चाहते हैं?",
        chatCustom: "कस्टमाइज़ेशन के लिए चैट करें",
        youMightLike: "आपको यह भी पसंद आ सकता है",
        footerText: "मीशो और अमेज़न पर आधिकारिक विक्रेता",
        rights: "© 2026 उरू एंटरप्राइज। सर्वाधिकार सुरक्षित।",
        naturalDisclaimer: "प्राकृतिक पत्थरों के रंग और बनावट में भिन्नता हो सकती है।"
    },
    ta: {
        ticker: "⚠️ குறிப்பு: படங்கள் விளக்கத்திற்காக மட்டுமே. இயற்கையான கற்களின் தன்மையால் நிறம் அல்லது அளவு சிறிது மாறுபடலாம்.",
        subtitle: "சான்றளிக்கப்பட்ட படிகங்கள் & வாஸ்து",
        chatNow: "உரையாட",
        searchPlaceholder: "பிரேஸ்லெட்டுகள், ராசி, பைரைட் தேടவும்...",
        bannerTitle: "உரூ என்டர்பிரைஸ் (Uroo Enterprise)",
        bannerDesc: "சான்றளிக்கப்பட்ட படிகங்கள், வாஸ்து & ஆன்மீக சேகரிப்பு",
        marketplaceTag: "🛒 மீஷோ மற்றும் அமேசானில் அதிகாரப்பூர்வமாக கிடைக்கின்றன",
        exploreCategories: "வகைகளைக் காண்க",
        featuredColl: "சிறப்பு சேகரிப்புகள்",
        aboutTitle: "உரூ என்டர்பிரைஸ் பற்றி",
        aboutDesc: "உரூ என்டர்பிரைஸுக்கு உங்களை வரவேற்கிறோம்! நாங்கள் உயர்ந்த தரமான இயற்கை படிக பிரேஸ்லெட்டுகள், ராசி பொருட்கள், வாஸ்து பரிகாரங்கள் மற்றும் ஆன்மீக אביசரிகளில் நிபுணத்துவம் பெற்றவர்கள். உங்கள் வாழ்வில் நேர்மறை ஆற்றலையும் செழிப்பையும் கொண்டுவர ஒவ்வொரு பொருளும் கவனமாக தேர்ந்தெடுக்கப்படுகிறது.",
        aboutMarketplace: "🛍️ நம்பகமான விற்பனையாளர்: எங்களை நேரடியாகவோ அல்லது மீஷோ மற்றும் அமேசானில் எங்கள் அதிகாரப்பூர்வ கடைகள் மூலமாகவோ வாங்கலாம்.",
        connectWithUs: "எங்களை தொடர்பு கொள்ள:",
        instagram: "இன்ஸ்டாகிராம்",
        facebook: "பேஸ்புக்",
        whatsapp: "வாட்ஸ்அப்",
        viewOnMeesho: "மீஷோ",
        viewOnAmazon: "அமேசான்",
        chatWhatsApp: "வாட்ஸ்அப்",
        customizableBadge: "விருப்பப்படி மாற்றலாம்",
        customNotice: "✨ விருப்பத்தேர்வு உண்டு! குறிப்பிட்ட மணிக்கட்டு அளவு அல்லது கல் கலவை வேண்டுமா?",
        chatCustom: "விருப்பத்தேர்வுக்கு வாட்ஸ்அப்பில் பேசുക",
        youMightLike: "உங்களுக்கு இதுவும் பிடிக்கலாம்",
        footerText: "மீஷோ மற்றும் அமேசானில் அதிகாரப்பூர்வ விற்பனையாளர்",
        rights: "© 2026 உரூ என்டர்பிரைஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        naturalDisclaimer: "இயற்கை கற்களின் அமைப்பு மற்றும் நிழலில் சிறிய வேறுபாடுகள் இருக்கலாம்."
    }
};

const categories = [
    { id: 'zodiac', name: { en: 'Zodiac / Rashi Bracelets', hi: 'राशि ब्रेसलेट', ta: 'ராசி பிரேஸ்லெட்டுகள்' }, image: 'https://images.unsplash.com/photo-1611591475583-8a3bc2e93542?w=400' },
    { id: 'bracelets', name: { en: 'Crystal Bracelets', hi: 'क्रिस्टल ब्रेसलेट', ta: 'கிரிஸ்டல் பிரேஸ்லெட்டுகள்' }, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' },
    { id: 'vastu', name: { en: 'Spiritual / Vastu Items', hi: 'आध्यात्मिक / वास्तु वस्तुएं', ta: 'ஆன்மீக / வாஸ்து பொருட்கள்' }, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400' },
    { id: 'jewellery', name: { en: 'Imitation Jewellery', hi: 'इमीिटेशन ज्वैलरी', ta: 'imitations நகைகள்' }, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400' }
];

const products = [
    {
        id: 1,
        category: 'zodiac',
        name: {
            en: 'Aries (Mesha) Zodiac Bracelet – Carnelian & Tiger Eye',
            hi: 'मेष राशि ब्रेसलेट – कार्नेलियन और टाइगर आई',
            ta: 'மேஷ ராசி பிரேஸ்லெட் – கார்னிலியன் & டைகர் ஐ'
        },
        price: 299,
        originalPrice: 699,
        customizable: true,
        images: [
            'https://images.unsplash.com/photo-1611591475583-8a3bc2e93542?w=600',
            'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600'
        ],
        description: {
            en: 'Specially energized natural stone bracelet designed for Aries (Mesha Rashi) natives. Combines Carnelian for drive and Tiger Eye for confidence and protection.',
            hi: 'मेष राशि के जातकों के लिए विशेष रूप से ऊर्जावान प्राकृतिक पत्थर का ब्रेसलेट। इसमें ऊर्जा के लिए कार्नेलियन और आत्मविश्वास के लिए टाइगर आई का संयोजन है।',
            ta: 'மேஷ ராசிக்காரர்களுக்காக பிரத்யேகமாக ஆற்றல் ஊட்டப்பட்ட இயற்கை கல் பிரேஸ்லெட். உத்வேகத்திற்கு கார்னிலியனும், பாதுகாப்பிற்கு டைகர் ஐயும் இணைக்கப்பட்டுள்ளது.'
        },
        meeshoLink: 'https://meesho.com',
        amazonLink: 'https://amazon.in',
        whatsappMessage: 'Hello Uroo Enterprise, I want to buy Aries Mesha Zodiac Bracelet.'
    },
    {
        id: 2,
        category: 'bracelets',
        name: {
            en: 'Original Citrine Abundance & Wealth Bracelet',
            hi: 'ओरिजिनल सिट्रीन धन और समृद्धि ब्रेसलेट',
            ta: 'ஒரிஜினல் சிட்ரின் செல்வம் & செழிப்பு பிரேஸ்லெட்'
        },
        price: 349,
        originalPrice: 799,
        customizable: true,
        images: [
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600'
        ],
        description: {
            en: 'Natural Citrine crystal bracelet known as the Merchant Stone for attracting financial success, business growth, and positive energy.',
            hi: 'प्राकृतिक सिट्रीन क्रिस्टल ब्रेसलेट जिसे वित्तीय सफलता, व्यावसायिक विकास और सकारात्मक ऊर्जा आकर्षित करने के लिए मर्चेंट स्टोन के रूप में जाना जाता है।',
            ta: 'நிதி வெற்றி, வணிக வளர்ச்சி மற்றும் நேர்மறை ஆற்றலை ஈர்க்கும் வணிக கல் என்று அழைக்கப்படும் இயற்கை சிட்ரின் படிக பிரேஸ்லெட்.'
        },
        meeshoLink: 'https://meesho.com',
        amazonLink: 'https://amazon.in',
        whatsappMessage: 'Hello Uroo Enterprise, I want to buy Citrine Abundance Bracelet.'
    },
    {
        id: 3,
        category: 'vastu',
        name: {
            en: 'Pyrite 7 Horse Vastu Frame & Tortoise Set',
            hi: 'पाइराइट 7 हॉर्स वास्तु फ्रेम और कछुआ सेट',
            ta: 'பைரைட் 7 குதிரை வாஸ்து பிரேம் & ஆமை தொகுப்பு'
        },
        price: 599,
        originalPrice: 1299,
        customizable: false,
        images: [
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600'
        ],
        description: {
            en: 'Powerful Vastu remedy featuring running horses and original Pyrite stones to accelerate career progress, wealth flow, and positive energy.',
            hi: 'करियर की प्रगति, धन के प्रवाह और सकारात्मक ऊर्जा को तेज करने के लिए दौड़ते घोड़ों और मूल पाइराइट पत्थरों वाला शक्तिशाली वास्तु उपाय।',
            ta: 'தொழில் முன்னேற்றம், பண வரவு மற்றும் நேர்மறை ஆற்றலை அதிகரிக்க ஓடும் குதிரைகள் மற்றும் ஒரிஜினல் பைரைட் கற்கள் கொண்ட சக்திவாய்ந்த வாஸ்து தீர்வு.'
        },
        meeshoLink: 'https://meesho.com',
        amazonLink: 'https://amazon.in',
        whatsappMessage: 'Hello Uroo Enterprise, I want to buy Pyrite Vastu Frame.'
    },
    {
        id: 4,
        category: 'jewellery',
        name: {
            en: 'Evil Eye Heart Pendant with Golden Chain',
            hi: 'गोल्डन चेन के साथ इविल आई हार्ट पेंडेंट',
            ta: 'கோல்டன் செயனுடன் ஈவில் ஐ ஹார்ட் லாக்கெட்டு'
        },
        price: 249,
        originalPrice: 599,
        customizable: false,
        images: [
            'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600'
        ],
        description: {
            en: 'Stylish heart-shaped evil eye pendant on a durable golden finish chain, combining daily fashion with powerful protective symbolism.',
            hi: 'टिकाऊ गोल्डन फिनिश चेन पर स्टाइलिश दिल के आकार का इविल आई पेंडेंट, जो दैनिक फैशन और शक्तिशाली सुरक्षात्मक प्रतीकवाद को जोड़ता है।',
            ta: 'நீடித்த தங்க நிற செயினில் ஸ்டைலான இதய வடிவிலான ஈவில் ஐ லாக்கெட், அன்றாட ஃபேஷன் மற்றும் பாதுகாப்பை வழங்குகிறது.'
        },
        meeshoLink: 'https://meesho.com',
        amazonLink: 'https://amazon.in',
        whatsappMessage: 'Hello Uroo Enterprise, I want to buy Evil Eye Heart Pendant.'
    }
];

function changeLanguage(lang) {
    currentLang = lang;
    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Refresh current view
    showHome();
}

function showHome() {
    const t = translations[currentLang];

    let html = `
        <div class="home-banner">
            <h2>${t.bannerTitle}</h2>
            <p>${t.bannerDesc}</p>
            <div class="banner-marketplace-tag">${t.marketplaceTag}</div>
        </div>

        <div class="section-title">${t.exploreCategories}</div>
        <div class="category-grid">
    `;

    categories.forEach(cat => {
        html += `
            <div class="category-card" onclick="showCategory('${cat.id}')">
                <img src="${cat.image}" alt="${cat.name[currentLang]}">
                <h3>${cat.name[currentLang]}</h3>
            </div>
        `;
    });

    html += `</div><div class="section-title">${t.featuredColl}</div><div class="product-grid">`;

    products.slice(0, 4).forEach(p => {
        html += createProductCardHTML(p);
    });

    html += `</div>`;

    // About Us & Trust Section
    html += `
        <div class="about-section">
            <h3>${t.aboutTitle}</h3>
            <p>${t.aboutDesc}</p>
            <p style="margin-top: 10px;">${t.aboutMarketplace}</p>
            
            <div class="social-connect-box">
                <p>${t.connectWithUs}</p>
                <div class="social-icons-row">
                    <a href="${INSTAGRAM_URL}" target="_blank" class="social-btn insta"><i class="fa-brands fa-instagram"></i> ${t.instagram}</a>
                    <a href="${FACEBOOK_URL}" target="_blank" class="social-btn fb"><i class="fa-brands fa-facebook"></i> ${t.facebook}</a>
                    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Uroo%20Enterprise" target="_blank" class="social-btn wa"><i class="fa-brands fa-whatsapp"></i> ${t.whatsapp}</a>
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
    const t = translations[currentLang];

    let html = `
        <div class="section-title" style="margin-top:16px;">${cat ? cat.name[currentLang] : 'Products'} (${catProducts.length})</div>
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
    const t = translations[currentLang];
    return `
        <div class="product-card" onclick="showProductDetail(${p.id})">
            ${p.customizable ? `<span class="customization-badge">${t.customizableBadge}</span>` : ''}
            <img src="${p.images[0]}" alt="${p.name[currentLang]}">
            <div class="product-info">
                <div class="product-name">${p.name[currentLang]}</div>
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
    const t = translations[currentLang];

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
        const customMsg = encodeURIComponent(`Hello Uroo Enterprise, I want custom wrist size / stone combination for: ${p.name.en}`);
        customizationBoxHTML = `
            <div class="custom-notice-box">
                <p>${t.customNotice}</p>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${customMsg}" target="_blank" class="btn-custom-wa">
                    <i class="fa-brands fa-whatsapp"></i> ${t.chatCustom}
                </a>
            </div>
        `;
    }

    let html = `
        <div class="detail-container">
            <div class="image-gallery">
                <img src="${p.images[0]}" id="mainImageDisplay" class="main-img-view" alt="${p.name[currentLang]}">
            </div>
            <div class="thumbnail-strip">
                ${thumbHTML}
            </div>
            <div class="detail-content">
                <h2 class="detail-title">${p.name[currentLang]}</h2>
                <div class="detail-price-box">
                    <span class="detail-price">Rs. ${p.price}</span>
                    <span class="product-original-price" style="font-size:14px;">Rs. ${p.originalPrice}</span>
                </div>

                ${customizationBoxHTML}

                <div class="detail-desc">
                    <p>${p.description[currentLang]}</p>
                </div>
                
                <div class="legal-disclaimer">
                    ⚠️ <strong>Disclaimer:</strong> ${t.ticker}
                </div>

                <div class="recommendations-section">
                    <h3>${t.youMightLike}</h3>
                    <div class="product-grid" style="padding:0;">
                        ${recommendedHTML}
                    </div>
                </div>
            </div>

            <!-- Fixed Bottom Buying Buttons -->
            <div class="action-bar">
                <a href="${p.meeshoLink}" target="_blank" class="btn-meesho"><i class="fa-solid fa-bag-shopping"></i> ${t.viewOnMeesho}</a>
                <a href="${p.amazonLink}" target="_blank" class="btn-amazon"><i class="fa-brands fa-amazon"></i> ${t.viewOnAmazon}</a>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(p.whatsappMessage)}" target="_blank" class="btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> ${t.chatWhatsApp}</a>
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

    const filtered = products.filter(p => p.name[currentLang].toLowerCase().includes(query) || p.description[currentLang].toLowerCase().includes(query));
    const t = translations[currentLang];

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
