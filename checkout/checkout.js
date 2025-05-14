// checkout.js - Implements checkout functionality for HandcraftedDomains.io

document.addEventListener('DOMContentLoaded', function() {
    // Initialize checkout functionality
    initCheckout();
});

// Initialize checkout functionality
function initCheckout() {
    // Get domain from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const domainParam = urlParams.get('domain');
    
    if (domainParam) {
        // Load domain details
        loadDomainDetails(domainParam);
    } else {
        // Redirect to home if no domain specified
        window.location.href = '../index.html';
    }
    
    // Set up event listeners
    setupEventListeners();
}

// Load domain details
function loadDomainDetails(domain) {
    // In a real implementation, this would fetch domain details from an API
    // For now, we'll use the domain details from the main.js file or simulate it
    
    // Get domain price from URL parameters or use default
    const urlParams = new URLSearchParams(window.location.search);
    const priceParam = urlParams.get('price');
    const price = priceParam ? parseInt(priceParam.replace(/[^0-9]/g, '')) : 20000;
    
    // Calculate escrow fee (3% of domain price)
    const escrowFee = Math.round(price * 0.03);
    const total = price + escrowFee;
    
    // Calculate monthly payment (domain price / 12)
    const monthlyPayment = Math.round(price / 12);
    
    // Update cart item
    const domainItem = document.getElementById('domain-item');
    if (domainItem) {
        domainItem.innerHTML = `
            <div class="cart-item-image">
                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#f0f9ff"/>
                    <text x="50" y="50" font-family="'Titillium Web', sans-serif" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${domain}</text>
                    <path d="M20,70 C20,55 80,55 80,70" stroke="#2563eb" stroke-width="1" fill="none"/>
                </svg>
            </div>
            <div class="cart-item-details">
                <h3>${domain}</h3>
                <p>Premium domain name</p>
                <p>Includes free domain transfer assistance</p>
            </div>
            <div class="cart-item-price">$${price.toLocaleString()}</div>
        `;
    }
    
    // Update cart summary
    document.getElementById('domain-price').textContent = `$${price.toLocaleString()}`;
    document.getElementById('escrow-fee').textContent = `$${escrowFee.toLocaleString()}`;
    document.getElementById('total-price').textContent = `$${total.toLocaleString()}`;
    
    // Update sidebar summary
    document.getElementById('sidebar-domain').textContent = domain;
    document.getElementById('sidebar-price').textContent = `$${price.toLocaleString()}`;
    document.getElementById('sidebar-fee').textContent = `$${escrowFee.toLocaleString()}`;
    document.getElementById('sidebar-total').textContent = `$${total.toLocaleString()}`;
    
    // Update monthly payment details
    document.getElementById('monthly-amount').textContent = `$${monthlyPayment.toLocaleString()}`;
    
    // Update JSON-LD Product Schema
    updateProductSchema(domain, price);
}

// Update Product Schema for SEO
function updateProductSchema(domain, price) {
    const schema = document.getElementById('product-schema');
    if (schema) {
        const schemaData = JSON.parse(schema.textContent);
        schemaData.name = domain;
        schemaData.description = `Premium domain name: ${domain}`;
        schemaData.offers.price = price;
        schemaData.offers.url = window.location.href;
        schema.textContent = JSON.stringify(schemaData, null, 2);
    }
}

// Set up event listeners
function setupEventListeners() {
    // Payment option toggle
    const fullPayment = document.getElementById('full-payment');
    const monthlyPayment = document.getElementById('monthly-payment');
    const monthlyDetails = document.getElementById('monthly-details');
    
    if (fullPayment && monthlyPayment && monthlyDetails) {
        fullPayment.addEventListener('change', function() {
            if (this.checked) {
                monthlyDetails.style.display = 'none';
            }
        });
        
        monthlyPayment.addEventListener('change', function() {
            if (this.checked) {
                monthlyDetails.style.display = 'block';
            }
        });
        
        // Initialize display
        monthlyDetails.style.display = fullPayment.checked ? 'none' : 'block';
    }
    
    // Proceed to Escrow button
    const proceedBtn = document.getElementById('proceed-btn');
    if (proceedBtn) {
        proceedBtn.addEventListener('click', function() {
            // Get payment type
            const paymentType = document.querySelector('input[name="payment-type"]:checked').value;
            
            // In a real implementation, this would redirect to Escrow.com or load the iframe
            // For now, we'll redirect to the next step
            window.location.href = `escrow.html?domain=${getUrlParameter('domain')}&price=${getUrlParameter('price')}&payment=${paymentType}`;
        });
    }
}

// Helper function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
