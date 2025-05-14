// escrow.js - Implements escrow functionality for HandcraftedDomains.io

document.addEventListener('DOMContentLoaded', function() {
    // Initialize escrow functionality
    initEscrow();
});

// Initialize escrow functionality
function initEscrow() {
    // Get domain and payment details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const domainParam = urlParams.get('domain');
    const priceParam = urlParams.get('price');
    const paymentType = urlParams.get('payment');
    
    if (domainParam && priceParam) {
        // Load domain and payment details
        loadDetails(domainParam, priceParam, paymentType);
    } else {
        // Redirect to home if no domain specified
        window.location.href = '../index.html';
    }
    
    // Set up event listeners
    setupEventListeners();
}

// Load domain and payment details
function loadDetails(domain, priceParam, paymentType) {
    // Parse price
    const price = parseInt(priceParam.replace(/[^0-9]/g, ''));
    
    // Calculate escrow fee (3% of domain price)
    const escrowFee = Math.round(price * 0.03);
    const total = price + escrowFee;
    
    // Update sidebar summary
    document.getElementById('sidebar-domain').textContent = domain;
    document.getElementById('sidebar-price').textContent = `$${price.toLocaleString()}`;
    document.getElementById('sidebar-fee').textContent = `$${escrowFee.toLocaleString()}`;
    document.getElementById('sidebar-total').textContent = `$${total.toLocaleString()}`;
    
    // Update payment type display
    const paymentTypeDisplay = document.getElementById('payment-type-display');
    if (paymentTypeDisplay) {
        if (paymentType === 'monthly') {
            const monthlyPayment = Math.round(price / 12);
            paymentTypeDisplay.textContent = `Monthly Plan - $${monthlyPayment.toLocaleString()} per month for 12 months`;
        } else {
            paymentTypeDisplay.textContent = 'Full Payment';
        }
    }
}

// Set up event listeners
function setupEventListeners() {
    // Complete purchase button
    const completePurchaseBtn = document.getElementById('complete-purchase-btn');
    if (completePurchaseBtn) {
        completePurchaseBtn.addEventListener('click', function() {
            // Validate form
            if (validateForm()) {
                // In a real implementation, this would submit the form to Escrow.com
                // For now, we'll redirect to the confirmation page
                window.location.href = `confirmation.html?domain=${getUrlParameter('domain')}&price=${getUrlParameter('price')}&payment=${getUrlParameter('payment')}`;
            }
        });
    }
    
    // Terms agreement checkbox
    const termsAgree = document.getElementById('terms-agree');
    if (termsAgree) {
        termsAgree.addEventListener('change', function() {
            completePurchaseBtn.disabled = !this.checked;
            if (this.checked) {
                completePurchaseBtn.classList.remove('button-disabled');
            } else {
                completePurchaseBtn.classList.add('button-disabled');
            }
        });
        
        // Initialize button state
        completePurchaseBtn.disabled = !termsAgree.checked;
        if (!termsAgree.checked) {
            completePurchaseBtn.classList.add('button-disabled');
        }
    }
    
    // PayPal button
    const paypalButton = document.querySelector('.paypal-button');
    if (paypalButton) {
        paypalButton.addEventListener('click', function() {
            // In a real implementation, this would redirect to PayPal
            // For now, we'll show an alert
            alert('Redirecting to PayPal...');
            
            // Then redirect to confirmation page
            setTimeout(function() {
                window.location.href = `confirmation.html?domain=${getUrlParameter('domain')}&price=${getUrlParameter('price')}&payment=${getUrlParameter('payment')}`;
            }, 1000);
        });
    }
}

// Validate form
function validateForm() {
    const requiredFields = [
        'buyer-name',
        'buyer-email',
        'buyer-phone',
        'buyer-address',
        'buyer-city',
        'buyer-state',
        'buyer-zip',
        'buyer-country'
    ];
    
    let isValid = true;
    
    // Check required fields
    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else if (field) {
            field.classList.remove('error');
        }
    }
    
    // Check terms agreement
    const termsAgree = document.getElementById('terms-agree');
    if (termsAgree && !termsAgree.checked) {
        isValid = false;
        alert('Please agree to the Terms of Service to continue.');
    }
    
    // Show error message if form is invalid
    if (!isValid) {
        alert('Please fill in all required fields to continue.');
    }
    
    return isValid;
}

// Helper function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
