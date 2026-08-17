const WHATSAPP_NUMBER = '918368555802';

const IMAGES = {
    salon: [
        'IMG_20260816_152809.png',
        'IMG_20260816_152751.png',
        'IMG_20260816_152908.png',
        'IMG_20260816_152837.png'
    ],
    hair: [
        'https://image.qwenlm.ai/public_source/f9668d97-156d-4e70-8eb6-2ad88e7d57c0/1f8ca0873-8ab7-47bd-87bd-4400eefbe8c2.png',
        'https://image.qwenlm.ai/public_source/f9668d97-156d-4e70-8eb6-2ad88e7d57c0/147dda9a8-bf35-4721-b4ec-3be81ca6c9a1.png'
    ],
    beauty: [
        'https://image.qwenlm.ai/public_source/f9668d97-156d-4e70-8eb6-2ad88e7d57c0/19a49a681-2d81-481d-8e2d-c68951bb9565.png'
    ],
    makeup: [
        'https://image.qwenlm.ai/public_source/f9668d97-156d-4e70-8eb6-2ad88e7d57c0/19238ba45-e740-47f1-ac18-a427c11de8c9.png'
    ],
    nails: [
        'https://image.qwenlm.ai/public_source/f9668d97-156d-4e70-8eb6-2ad88e7d57c0/1ade5eabb-fe33-4174-9643-fddace69606c.png',
        'https://image.qwenlm.ai/public_source/f9668d97-156d-4e70-8eb6-2ad88e7d57c0/137927496-3ec8-4300-8353-d39aa6d1a4fa.png'
    ]
};

const SERVICES = {
    hair: [
        { name: 'Straight Cut', price: 199, category: 'Hair Cut', description: 'Classic straight cut for a clean, polished look.' },
        { name: 'U Cut', price: 199, category: 'Hair Cut', description: 'Elegant U-shaped cut for graceful styling.' },
        { name: 'Layer Cut', price: 249, category: 'Hair Cut', description: 'Add volume and movement with layered cuts.' },
        { name: 'Step Cut', price: 249, category: 'Hair Cut', description: 'Defined steps for a bold, structured style.' },
        { name: 'Matrix Head Wash', price: 149, category: 'Head Wash', description: 'Refreshing wash with Matrix products.' },
        { name: "L'Oreal Head Wash", price: 199, category: 'Head Wash', description: 'Premium wash with L\'Oreal products.' },
        { name: 'Highlights Per Sticks', price: 199, category: 'Highlights', description: 'Subtle highlights for a sun-kissed effect.' },
        { name: 'Highlights Fashion Shade Per Sticks', price: 299, category: 'Highlights', description: 'Fashionable shade highlights per stick.' },
        { name: 'Oil Head Massage', price: 349, category: 'Head Massage', description: 'Relaxing oil massage for scalp health.' },
        { name: 'Head Massage With Steam', price: 399, category: 'Head Massage', description: 'Deep conditioning massage with steam therapy.' },
        { name: 'Head Massage With Head Wash', price: 499, category: 'Head Massage', description: 'Complete relaxation with massage and wash.' },
        { name: 'Pressing', price: 299, category: 'Hair Style', description: 'Smooth, sleek finish with professional pressing.' },
        { name: 'Crimping', price: 349, category: 'Hair Style', description: 'Textured crimped style for volume.' },
        { name: 'Simple Bun', price: 499, category: 'Hair Style', description: 'Elegant bun for any occasion.' },
        { name: 'Hair Curls', price: 499, category: 'Hair Style', description: 'Beautiful curls for a glamorous look.' },
        { name: 'Messy Bun', price: 599, category: 'Hair Style', description: 'Trendy messy bun with effortless charm.' },
        { name: 'Streax Root Touch-Up', price: 499, category: 'Root Touch-Up', description: 'Refresh your roots with Streax color.' },
        { name: 'Matrix Root Touch-Up', price: 499, category: 'Root Touch-Up', description: 'Professional root touch-up with Matrix.' },
        { name: "L'Oreal Root Touch-Up", price: 549, category: 'Root Touch-Up', description: 'Premium root coverage with L\'Oreal.' },
        { name: 'Inoa Root Touch-Up', price: 649, category: 'Root Touch-Up', description: 'Ammonia-free root touch-up with Inoa.' },
        { name: 'Matrix Hair Spa', price: 499, category: 'Hair Spa', description: 'Nourishing spa treatment with Matrix.' },
        { name: "L'Oreal Hair Spa", price: 599, category: 'Hair Spa', description: 'Luxury spa experience with L\'Oreal.' },
        { name: 'Keratin Hair Spa', price: 699, category: 'Hair Spa', description: 'Intensive keratin treatment for damaged hair.' },
        { name: 'Turkish Smoothening', price: 1799, category: 'Smoothening', description: 'Traditional Turkish smoothening technique.' },
        { name: 'Streax Smoothening', price: 2499, category: 'Smoothening', description: 'Professional smoothening with Streax.' },
        { name: 'Matrix Smoothening', price: 2999, category: 'Smoothening', description: 'Premium smoothening with Matrix Opti.' },
        { name: "L'Oreal Smoothening", price: 3499, category: 'Smoothening', description: 'Luxury smoothening with L\'Oreal X-Tenso.' },
        { name: 'Streax Global Colour', price: 1999, category: 'Global Hair Colour', description: 'Full head color with Streax.' },
        { name: 'Matrix Global Colour', price: 2499, category: 'Global Hair Colour', description: 'Professional global color with Matrix.' },
        { name: "L'Oreal Global Colour", price: 2999, category: 'Global Hair Colour', description: 'Premium global color with L\'Oreal.' },
        { name: 'Inoa Global Colour', price: 3499, category: 'Global Hair Colour', description: 'Ammonia-free global color with Inoa.' },
        { name: 'Full Balayage Technique', price: 3499, category: 'Balayage', description: 'Hand-painted highlights for natural dimension.' },
        { name: 'Kerafine Keratin', price: 2499, category: 'Keratine', description: 'Professional keratin treatment with Kerafine.' },
        { name: 'GK Keratin', price: 3999, category: 'Keratine', description: 'Premium keratin smoothing with GK.' },
        { name: 'Blush & Rush Botox', price: 2699, category: 'Botox', description: 'Hair botox treatment for deep repair.' }
    ],
    beauty: [
        { name: 'Under Arms Wax - Normal', price: 69, category: 'Waxing', description: 'Standard underarm waxing.' },
        { name: 'Under Arms Wax - Chocolate', price: 79, category: 'Waxing', description: 'Chocolate underarm waxing.' },
        { name: 'Under Arms Wax - Rica', price: 99, category: 'Waxing', description: 'Rica underarm waxing.' },
        { name: 'Full Arms Wax - Normal', price: 149, category: 'Waxing', description: 'Standard wax for full arms.' },
        { name: 'Full Arms Wax - Chocolate', price: 199, category: 'Waxing', description: 'Chocolate wax for smoother results.' },
        { name: 'Fruit Bleach', price: 199, category: 'Bleach', description: 'Gentle fruit-based bleach for fair skin.' },
        { name: 'Raga D-Tan', price: 249, category: 'D-Tan', description: 'Effective de-tanning with Raga products.' },
        { name: 'Gold Bleach', price: 249, category: 'Bleach', description: 'Gold-infused bleach for radiant complexion.' },
        { name: 'Oxy Bleach', price: 249, category: 'Bleach', description: 'Oxygen bleach for fresh, bright skin.' },
        { name: 'Olive Bleach', price: 249, category: 'Bleach', description: 'Olive-based bleach for nourishing care.' },
        { name: 'Sara D-Tan', price: 299, category: 'D-Tan', description: 'Professional de-tanning with Sara.' },
        { name: 'O3 Bleach', price: 349, category: 'Bleach', description: 'Ozone bleach for advanced skin lightening.' },
        { name: 'Full Legs Wax - Normal', price: 349, category: 'Waxing', description: 'Standard full legs waxing.' },
        { name: 'Fruit Clean-up', price: 349, category: 'Clean-up', description: 'Basic fruit clean-up for fresh skin.' },
        { name: 'Full Back Wax - Normal', price: 349, category: 'Waxing', description: 'Standard full back waxing.' },
        { name: 'Full Legs Wax - Chocolate', price: 399, category: 'Waxing', description: 'Chocolate full legs waxing.' },
        { name: 'O3 D-Tan', price: 399, category: 'D-Tan', description: 'Advanced O3 de-tanning treatment.' },
        { name: 'Full Arms Wax - Rica', price: 399, category: 'Waxing', description: 'Premium Rica wax for sensitive skin.' },
        { name: 'Full Back Wax - Chocolate', price: 399, category: 'Waxing', description: 'Chocolate full back waxing.' },
        { name: 'Fruit Facial', price: 499, category: 'Facial', description: 'Refreshing facial care for a clean, revitalized feel.' },
        { name: 'Gold Clean-up', price: 499, category: 'Clean-up', description: 'Luxury gold clean-up for glow.' },
        { name: 'Lotus Clean-up', price: 599, category: 'Clean-up', description: 'Herbal lotus clean-up for purity.' },
        { name: 'Full Back Wax - Rica', price: 599, category: 'Waxing', description: 'Premium Rica full back waxing.' },
        { name: 'Full Legs Wax - Rica', price: 599, category: 'Waxing', description: 'Premium Rica full legs waxing.' },
        { name: 'D-Tan Clean-up', price: 649, category: 'Clean-up', description: 'De-tanning clean-up for even tone.' },
        { name: 'Ozone Clean-up', price: 649, category: 'Clean-up', description: 'Ozone clean-up for deep cleansing.' },
        { name: 'Vedicline Papaya Facial', price: 699, category: 'Facial', description: 'Natural papaya enzymes for gentle exfoliation.' },
        { name: 'Aroma Gold Facial', price: 699, category: 'Facial', description: 'Luxurious gold-infused facial for radiant skin.' },
        { name: 'Vigini Wax - Normal', price: 699, category: 'Waxing', description: 'Standard vigini waxing.' },
        { name: 'Vedicline Clean-up', price: 699, category: 'Clean-up', description: 'Premium Vedicline clean-up.' },
        { name: 'Vigini Wax - Chocolate', price: 799, category: 'Waxing', description: 'Chocolate vigini waxing.' },
        { name: 'O3 Clean-up', price: 899, category: 'Clean-up', description: 'Advanced O3 clean-up treatment.' },
        { name: 'Vedicline Gold Facial', price: 999, category: 'Facial', description: 'Premium gold facial for anti-aging benefits.' },
        { name: 'Vigini Wax - Rica', price: 999, category: 'Waxing', description: 'Premium Rica vigini waxing.' },
        { name: 'Lotus Facial', price: 999, category: 'Facial', description: 'Herbal lotus facial for natural glow.' },
        { name: 'Oxy Facial', price: 999, category: 'Facial', description: 'Oxygen-infused facial for fresh, youthful skin.' },
        { name: 'D-Tan Facial', price: 999, category: 'Facial', description: 'Specialized facial to reduce tan and pigmentation.' },
        { name: 'VLCC Instant Glow Facial', price: 999, category: 'Facial', description: 'Instant radiance with VLCC technology.' },
        { name: 'Ozone Facial', price: 1199, category: 'Facial', description: 'Ozone therapy facial for deep cleansing.' },
        { name: 'Green Tea Facial', price: 1199, category: 'Facial', description: 'Antioxidant-rich green tea facial.' },
        { name: 'Lotus Purl Facial', price: 1199, category: 'Facial', description: 'Premium lotus facial for purification.' },
        { name: 'Full Body Wax - Normal', price: 1199, category: 'Waxing', description: 'Standard full body waxing.' },
        { name: 'Full Body Wax - Chocolate', price: 1499, category: 'Waxing', description: 'Chocolate full body waxing.' },
        { name: 'O3 Facial Vitamin C', price: 1499, category: 'Facial', description: 'Vitamin C enriched O3 facial for brightness.' },
        { name: 'Vedicline Acne Pro', price: 1599, category: 'Facial', description: 'Targeted acne treatment facial.' },
        { name: 'O3 Antiaging', price: 1799, category: 'Facial', description: 'Advanced anti-aging O3 facial treatment.' },
        { name: 'Full Body Wax - Rica', price: 1999, category: 'Waxing', description: 'Premium Rica full body waxing.' },
        { name: 'Casmora Facial', price: 2499, category: 'Facial', description: 'Premium Casmora facial for luxury skincare.' }
    ],
    nails: [
        { name: 'Simple Nail Paint', price: 399, category: 'Nail Paint', description: 'Classic nail paint in your choice of color.' },
        { name: 'Glitter Nail Art', price: 399, category: 'Nail Art', description: 'Sparkling glitter designs for festive looks.' },
        { name: 'Cat Eye Nail Art', price: 499, category: 'Nail Art', description: 'Magnetic cat eye effect for stunning nails.' },
        { name: 'Ombre Nail Art', price: 499, category: 'Nail Art', description: 'Gradient ombre designs for elegant nails.' },
        { name: 'Overlay Nail Paint', price: 499, category: 'Nail Paint', description: 'Durable overlay nail paint application.' },
        { name: 'Overlay Gel Extension', price: 499, category: 'Extensions', description: 'Gel overlay for natural nail enhancement.' },
        { name: 'French Nail Art', price: 599, category: 'Nail Art', description: 'Classic French tip design.' },
        { name: 'Chrome Nail Art', price: 799, category: 'Nail Art', description: 'Metallic chrome finish for bold nails.' },
        { name: 'Gel Extension', price: 999, category: 'Extensions', description: 'Professional gel nail extensions.' },
        { name: 'Acrylic Extension', price: 1199, category: 'Extensions', description: 'Durable acrylic nail extensions.' },
        { name: 'Cat Eye With Extension', price: 1499, category: 'Extensions', description: 'Cat eye effect with full extensions.' }
    ],
    makeup: [
        { name: 'Normal Make-up', price: 1499, category: 'Party Make-up', description: 'Classic party makeup for any occasion.' },
        { name: 'HD Make-up', price: 1999, category: 'Party Make-up', description: 'High-definition makeup for flawless finish.' },
        { name: 'Nude Make-up', price: 2199, category: 'Party Make-up', description: 'Natural nude look with enhanced features.' },
        { name: 'Air Brush', price: 2499, category: 'Party Make-up', description: 'Airbrush makeup for long-lasting wear.' }
    ],
    bridal: [
        { name: 'Normal Bridal Make-Up', price: 4999, category: 'Bridal Make-up', description: 'Traditional bridal makeup for your special day.' },
        { name: 'Bridal Nude HD Make-Up', price: 11999, category: 'Bridal Make-up', description: 'Natural HD bridal makeup with nude tones.' },
        { name: 'Bridal Air Brush Make-Up', price: 14999, category: 'Bridal Make-up', description: 'Premium airbrush bridal makeup.' }
    ]
};

const GALLERY_IMAGES = [
    { src: IMAGES.salon[0], alt: 'Salon Treatment Room', caption: 'Treatment Room' },
    { src: IMAGES.salon[1], alt: 'Salon Styling Area', caption: 'Styling Area' },
    { src: IMAGES.salon[2], alt: 'Salon Interior', caption: 'Salon Interior' },
    { src: IMAGES.salon[3], alt: 'Salon Entrance', caption: 'Salon Entrance' },
    { src: IMAGES.hair[0], alt: 'Hair Styling', caption: 'Hair Services' },
    { src: IMAGES.beauty[0], alt: 'Beauty Treatment', caption: 'Beauty Services' },
    { src: IMAGES.makeup[0], alt: 'Bridal Makeup', caption: 'Bridal Makeup' },
    { src: IMAGES.nails[0], alt: 'Nail Art', caption: 'Nail Art' },
    { src: IMAGES.nails[1], alt: 'Pedicure', caption: 'Pedicure Services' }
];

function formatPrice(price) {
    if (price >= 1000) {
        return '₹' + price.toLocaleString('en-IN');
    }
    return '₹' + price;
}

function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

function createServiceCard(service, category) {
    const card = document.createElement('div');
    card.className = 'service-card fade-in';
    card.dataset.category = category;
    card.dataset.name = service.name.toLowerCase();
    
    const whatsappMessage = `Hello, I would like to book ${service.name} at ${formatPrice(service.price)} at 9 Seasons Hair & Makeup Studio.`;
    
    card.innerHTML = `
        <h4>${service.name}</h4>
        <p class="description">${service.description}</p>
        <div class="price">${formatPrice(service.price)}</div>
        <button class="btn btn-primary" onclick="openWhatsApp('${whatsappMessage.replace(/'/g, "\\'")}')">Book Now</button>
    `;
    
    return card;
}

function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    const allServices = [
        ...SERVICES.hair.map(s => ({...s, type: 'hair'})),
        ...SERVICES.beauty.map(s => ({...s, type: 'beauty'})),
        ...SERVICES.nails.map(s => ({...s, type: 'nails'})),
        ...SERVICES.makeup.map(s => ({...s, type: 'makeup'})),
        ...SERVICES.bridal.map(s => ({...s, type: 'bridal'}))
    ];
    
    allServices.forEach(service => {
        servicesGrid.appendChild(createServiceCard(service, service.type));
    });
    
    const hairGrid = document.getElementById('hairServices');
    let currentCategory = '';
    SERVICES.hair.forEach(service => {
        if (service.category !== currentCategory) {
            currentCategory = service.category;
            const title = document.createElement('div');
            title.className = 'category-title';
            title.textContent = currentCategory;
            hairGrid.appendChild(title);
        }
        hairGrid.appendChild(createServiceCard(service, 'hair'));
    });
    
    const beautyGrid = document.getElementById('beautyServices');
    currentCategory = '';
    SERVICES.beauty.forEach(service => {
        if (service.category !== currentCategory) {
            currentCategory = service.category;
            const title = document.createElement('div');
            title.className = 'category-title';
            title.textContent = currentCategory;
            beautyGrid.appendChild(title);
        }
        beautyGrid.appendChild(createServiceCard(service, 'beauty'));
    });
    
    const nailGrid = document.getElementById('nailServices');
    SERVICES.nails.forEach(service => {
        nailGrid.appendChild(createServiceCard(service, 'nails'));
    });
    
    const makeupGrid = document.getElementById('makeupServices');
    currentCategory = '';
    SERVICES.makeup.forEach(service => {
        if (service.category !== currentCategory) {
            currentCategory = service.category;
            const title = document.createElement('div');
            title.className = 'category-title';
            title.textContent = currentCategory;
            makeupGrid.appendChild(title);
        }
        makeupGrid.appendChild(createServiceCard(service, 'makeup'));
    });
    
    const bridalGrid = document.getElementById('bridalServices');
    SERVICES.bridal.forEach(service => {
        bridalGrid.appendChild(createServiceCard(service, 'bridal'));
    });
}

let currentImageIndex = 0;

function populateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    GALLERY_IMAGES.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => openLightbox(index);
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-overlay">
                <span>${image.caption}</span>
            </div>
        `;
        
        galleryGrid.appendChild(item);
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightboxImg.src = GALLERY_IMAGES[index].src;
    lightboxImg.alt = GALLERY_IMAGES[index].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = GALLERY_IMAGES.length - 1;
    } else if (currentImageIndex >= GALLERY_IMAGES.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = GALLERY_IMAGES[currentImageIndex].src;
    lightboxImg.alt = GALLERY_IMAGES[currentImageIndex].alt;
}

document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeImage(1);
    }
});

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('#servicesGrid .service-card');
    const noResults = document.getElementById('noResults');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            let visibleCount = 0;
            
            serviceCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            if (visibleCount === 0) {
                noResults.classList.add('show');
            } else {
                noResults.classList.remove('show');
            }
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('serviceSearch');
    const serviceCards = document.querySelectorAll('#servicesGrid .service-card');
    const noResults = document.getElementById('noResults');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        let visibleCount = 0;
        
        filterBtns.forEach(b => b.classList.remove('active'));
        filterBtns[0].classList.add('active');
        
        serviceCards.forEach(card => {
            const serviceName = card.dataset.name;
            const serviceDesc = card.querySelector('.description').textContent.toLowerCase();
            
            if (serviceName.includes(searchTerm) || serviceDesc.includes(searchTerm)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (visibleCount === 0 && searchTerm !== '') {
            noResults.classList.add('show');
        } else {
            noResults.classList.remove('show');
        }
    });
}

function setupBookingForm() {
    const form = document.getElementById('bookingForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        if (!name) {
            document.getElementById('name').parentElement.classList.add('error');
            isValid = false;
        }
        
        if (!phone || phone.length < 10) {
            document.getElementById('phone').parentElement.classList.add('error');
            isValid = false;
        }
        
        if (!service) {
            document.getElementById('service').parentElement.classList.add('error');
            isValid = false;
        }
        
        if (!isValid) return;
        
        let whatsappMessage = `Hello 9 Seasons Hair & Makeup Studio,\n\n`;
        whatsappMessage += `I would like to book an appointment.\n\n`;
        whatsappMessage += `Name: ${name}\n`;
        whatsappMessage += `Phone: ${phone}\n`;
        whatsappMessage += `Service: ${service}\n`;
        
        if (date) {
            whatsappMessage += `Preferred Date: ${date}\n`;
        }
        
        if (time) {
            whatsappMessage += `Preferred Time: ${time}\n`;
        }
        
        if (message) {
            whatsappMessage += `Message: ${message}\n`;
        }
        
        openWhatsApp(whatsappMessage);
        form.reset();
    });
}

function setupNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateServices();
    populateGallery();
    setupFilters();
    setupSearch();
    setupBookingForm();
    setupNavbar();
    setupScrollAnimations();
    
    window.dispatchEvent(new Event('scroll'));
});