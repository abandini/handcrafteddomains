// main.js

// Domain Categories Structure
const categories = {
    "ai-tech": {
        name: "AI & Technology",
        icon: "robot",
        description: "Future-proof domains for the AI revolution",
        subcategories: {
            "ai-core": "Core AI",
            "machine-learning": "Machine Learning",
            "ai-health": "AI Health Tech"
        }
    },
    "health": {
        name: "Health & Wellness",
        icon: "heartbeat",
        description: "Domains for health innovation",
        subcategories: {
            "aging": "Aging & Longevity",
            "biotech": "Biotech & Research",
            "mental-health": "Mental Health"
        }
    },
    "cannabis": {
        name: "Cannabis & CBD",
        icon: "leaf",
        description: "Premium cannabis industry domains",
        subcategories: {
            "lifestyle": "Lifestyle & Culture",
            "products": "Products & Retail"
        }
    },
    "food": {
        name: "Food & Beverage",
        icon: "utensils",
        description: "Culinary and beverage domains",
        subcategories: {
            "spicy": "Hot Sauce & Spice",
            "brewing": "Beer & Brewing"
        }
    },
    "future-tech": {
        name: "Future Tech",
        icon: "microchip",
        description: "Next-generation technology domains",
        subcategories: {
            "quantum": "Quantum Technology",
            "robotics": "Robotics & Automation"
        }
    }
};

// Domain Details Database
const domainDetails = {
    // AI & Technology
    '40hz.ai': {
        category: "ai-tech",
        subcategory: "ai-health",
        story: "At the intersection of neuroscience and artificial intelligence lies the future of cognitive health. 40hz.ai represents groundbreaking technology that harnesses specific brain frequencies to enhance cognitive function and combat neurological decline.",
        targetList: [
            "Neurotechnology startups",
            "Brain health companies",
            "Cognitive enhancement platforms",
            "Medical device manufacturers"
        ],
        features: [
            "Memorable and scientifically relevant name",
            "Growing market in brain health technology",
            "Premium .ai domain extension",
            "Perfect for health tech branding"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Health & Wellness
    'agingundone.com': {
        category: "health",
        subcategory: "aging",
        story: "Rewriting the story of time. agingundone.com represents a revolutionary approach to longevity and vitality, perfect for companies at the forefront of anti-aging research and wellness.",
        targetList: [
            "Anti-aging clinics",
            "Longevity research companies",
            "Wellness brands",
            "Health technology startups"
        ],
        features: [
            "Powerful, memorable branding",
            "Growing anti-aging market",
            "Perfect for wellness industry",
            "Strong commercial appeal"
        ],
        premium: true,
        price_tier: 2
    },
    
    // Cannabis
    'blazinboomers.com': {
        category: "cannabis",
        subcategory: "lifestyle",
        story: "Reimagining senior wellness through cannabis education and community. A perfect blend of humor and purpose for the growing senior cannabis market.",
        targetList: [
            "Senior cannabis education",
            "Wellness communities",
            "CBD brands",
            "Cannabis lifestyle companies"
        ],
        features: [
            "Memorable and engaging name",
            "Growing demographic market",
            "Perfect for community building",
            "Strong brand potential"
        ],
        premium: true,
        price_tier: 2
    },

    // Food & Beverage
    'jawmelter.com': {
        category: "food",
        subcategory: "spicy",
        story: "More than just hot sauce – it's an experience. jawmelter.com represents the perfect blend of humor and heat, ideal for artisanal hot sauce makers and specialty food brands looking to make a lasting impression in the competitive food market.",
        targetList: [
            "Hot sauce manufacturers",
            "Specialty food brands",
            "Spice enthusiasts",
            "Food experience companies"
        ],
        features: [
            "Memorable and engaging name",
            "Perfect for food industry",
            "Strong brand potential",
            "Built-in marketing appeal"
        ],
        premium: true,
        price_tier: 2
    },

    'CLEVELANDKOLSCH.COM': {
        category: "food",
        subcategory: "brewing",
        story: "Where city pride meets brewing tradition. CLEVELANDKOLSCH.COM represents the perfect fusion of local identity and craft beer culture, ideal for breweries looking to capture the spirit of Cleveland.",
        targetList: [
            "Craft breweries",
            "Local beverage brands",
            "Hospitality groups",
            "Beer enthusiasts"
        ],
        features: [
            "Strong local branding",
            "Perfect for craft beer market",
            "Geographic specificity",
            "Ready-made audience"
        ],
        premium: true,
        price_tier: 2
    },

    // Future Tech
    'quantumsensors.io': {
        category: "future-tech",
        subcategory: "quantum",
        story: "At the quantum frontier of detection technology. quantumsensors.io represents the cutting edge of measurement and sensing technology, perfect for companies pushing the boundaries of quantum technology.",
        targetList: [
            "Quantum technology companies",
            "Sensor manufacturers",
            "Research institutions",
            "Precision instrument makers"
        ],
        features: [
            "Technical and professional",
            "Premium .io extension",
            "Future-focused branding",
            "Perfect for deep tech"
        ],
        premium: true,
        price_tier: 3
    }
};

// Initialize modal functionality
window.showDomainDetails = function(domainName) {
    const modal = document.getElementById('domainModal');
    const modalDomainName = document.getElementById('modalDomainName');
    const modalContent = document.getElementById('modalContent');
    
    const details = domainDetails[domainName] || {
        story: "Domain details coming soon.",
        targetList: [],
        features: []
    };

    modalDomainName.textContent = domainName;
    modalContent.innerHTML = `
        <div class="space-y-4">
            <p class="text-lg">${details.story}</p>
            ${details.targetList.length ? `
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Perfect For:</h4>
                    <ul class="list-disc list-inside">
                        ${details.targetList.map(target => `<li>${target}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${details.features.length ? `
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Key Features:</h4>
                    <ul class="list-none">
                        ${details.features.map(feature => `
                            <li class="flex items-start gap-2 mb-2">
                                <i class="fas fa-check text-blue-500 mt-1"></i>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            ${details.price_tier ? `
                <div class="mt-4 text-right">
                    <span class="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full">
                        Price Tier: ${details.price_tier}
                    </span>
                </div>
            ` : ''}
        </div>
    `;

    modal.style.display = 'flex';
};

window.closeDomainModal = function() {
    const modal = document.getElementById('domainModal');
    modal.style.display = 'none';
};

// Function to handle domain offers
window.makeOffer = function(domainName) {
    // Set the hidden field value
    document.getElementById('domain_interest').value = domainName;
    
    // Also set the visible domain field value for user reference
    document.getElementById('domain').value = domainName;
    
    // Scroll to the contact form
    const contactForm = document.querySelector('.contact-form-container');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        
        // Add a visual highlight to the form to draw attention
        contactForm.classList.add('highlight-form');
        setTimeout(() => {
            contactForm.classList.remove('highlight-form');
        }, 1500);
    }
};

// Initialize all functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-button');
    const domainCards = document.querySelectorAll('.domain-card');

    // Initialize all cards as visible
    domainCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const selectedCategory = this.dataset.category;
            
            // Filter domains
            domainCards.forEach(card => {
                if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close modal on outside click
    const modal = document.getElementById('domainModal');
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeDomainModal();
        }
    });

    // Prevent modal content clicks from closing the modal
    const modalContent = modal.querySelector('.modal-content');
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});