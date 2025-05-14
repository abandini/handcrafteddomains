// confirmation.js - Implements confirmation functionality for HandcraftedDomains.io

document.addEventListener('DOMContentLoaded', function() {
    // Initialize confirmation functionality
    initConfirmation();
});

// Initialize confirmation functionality
function initConfirmation() {
    // Get domain and payment details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const domainParam = urlParams.get('domain');
    const priceParam = urlParams.get('price');
    const paymentType = urlParams.get('payment');
    
    if (domainParam && priceParam) {
        // Load order details
        loadOrderDetails(domainParam, priceParam, paymentType);
        
        // Update analytics
        updateAnalytics(domainParam, priceParam);
    } else {
        // Redirect to home if no domain specified
        window.location.href = '../index.html';
    }
}

// Load order details
function loadOrderDetails(domain, priceParam, paymentType) {
    // Parse price
    const price = parseInt(priceParam.replace(/[^0-9]/g, ''));
    
    // Calculate escrow fee (3% of domain price)
    const escrowFee = Math.round(price * 0.03);
    const total = price + escrowFee;
    
    // Generate order number
    const orderNumber = 'HD-' + Math.floor(100000 + Math.random() * 900000);
    
    // Get current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    
    // Update order details
    document.getElementById('order-number').textContent = orderNumber;
    document.getElementById('order-date').textContent = formattedDate;
    document.getElementById('order-domain').textContent = domain;
    document.getElementById('domain-price').textContent = `$${price.toLocaleString()}`;
    document.getElementById('escrow-fee').textContent = `$${escrowFee.toLocaleString()}`;
    document.getElementById('total-price').textContent = `$${total.toLocaleString()}`;
    
    // Update payment type
    const paymentTypeElement = document.getElementById('payment-type');
    if (paymentTypeElement) {
        if (paymentType === 'monthly') {
            const monthlyPayment = Math.round(price / 12);
            paymentTypeElement.textContent = `Monthly Plan - $${monthlyPayment.toLocaleString()} per month for 12 months`;
        } else {
            paymentTypeElement.textContent = 'Full Payment';
        }
    }
}

// Update analytics
function updateAnalytics(domain, priceParam) {
    // Parse price
    const price = parseInt(priceParam.replace(/[^0-9]/g, ''));
    
    // Update Facebook Pixel purchase event
    if (typeof fbq === 'function') {
        fbq('track', 'Purchase', {
            value: price,
            currency: 'USD',
            content_name: domain,
            content_type: 'product',
            content_ids: [domain]
        });
    }
    
    // Update Google Analytics purchase event
    if (typeof gtag === 'function') {
        gtag('event', 'purchase', {
            transaction_id: document.getElementById('order-number').textContent,
            value: price,
            currency: 'USD',
            items: [{
                id: domain,
                name: domain,
                category: 'Domain',
                quantity: 1,
                price: price
            }]
        });
        
        // Update Google Ads conversion tracking
        gtag('event', 'conversion', {
            'send_to': 'AW-123456789/abcDEF123456',
            'value': price,
            'currency': 'USD',
            'transaction_id': document.getElementById('order-number').textContent
        });
    }
}
