// search.js - Implements search functionality for HandcraftedDomains.io

document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    initSearch();
    
    // Initialize featured domains slider
    initFeaturedSlider();
    
    // Initialize advanced filters modal
    initAdvancedFilters();
    
    // Initialize live chat (placeholder for Crisp integration)
    initLiveChat();
});

// Search functionality
function initSearch() {
    const searchForm = document.getElementById('domain-search-form');
    const searchInput = document.getElementById('domain-search');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                searchDomains(query);
            }
        });
    }
}

function searchDomains(query) {
    // Get all domain cards
    const domainCards = document.querySelectorAll('.domain-card');
    const domainGrid = document.querySelector('.domain-grid');
    let resultsFound = false;
    
    // Show the domains section
    document.getElementById('domains').scrollIntoView({ behavior: 'smooth' });
    
    // Filter domains based on the search query
    domainCards.forEach(card => {
        const domainName = card.querySelector('.domain-name').textContent.toLowerCase();
        const domainHook = card.querySelector('.domain-hook')?.textContent.toLowerCase() || '';
        
        if (domainName.includes(query.toLowerCase()) || domainHook.includes(query.toLowerCase())) {
            card.style.display = 'grid';
            resultsFound = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show message if no results found
    if (!resultsFound) {
        // Remove existing no results message if it exists
        const existingMessage = document.getElementById('no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create and append no results message
        const noResultsMessage = document.createElement('div');
        noResultsMessage.id = 'no-results-message';
        noResultsMessage.className = 'no-results-message';
        noResultsMessage.innerHTML = `
            <h3>No domains found matching "${query}"</h3>
            <p>Try adjusting your search or <a href="#" id="reset-search">view all domains</a>.</p>
        `;
        domainGrid.appendChild(noResultsMessage);
        
        // Add event listener to reset search link
        document.getElementById('reset-search').addEventListener('click', function(e) {
            e.preventDefault();
            resetSearch();
        });
    } else {
        // Remove no results message if it exists
        const existingMessage = document.getElementById('no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
}

function resetSearch() {
    // Clear search input
    document.getElementById('domain-search').value = '';
    
    // Show all domain cards
    const domainCards = document.querySelectorAll('.domain-card');
    domainCards.forEach(card => {
        card.style.display = 'grid';
    });
    
    // Remove no results message if it exists
    const existingMessage = document.getElementById('no-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

// Featured domains slider functionality
function initFeaturedSlider() {
    const slider = document.querySelector('.featured-slider');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    
    if (slider && prevButton && nextButton) {
        const slideWidth = 300 + 32; // Card width + gap
        
        prevButton.addEventListener('click', function() {
            slider.scrollBy({
                left: -slideWidth,
                behavior: 'smooth'
            });
        });
        
        nextButton.addEventListener('click', function() {
            slider.scrollBy({
                left: slideWidth,
                behavior: 'smooth'
            });
        });
        
        // Auto-scroll the slider every 5 seconds
        let autoScrollInterval;
        
        function startAutoScroll() {
            autoScrollInterval = setInterval(function() {
                const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;
                
                if (isAtEnd) {
                    // If at the end, scroll back to the beginning
                    slider.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Otherwise, scroll to the next slide
                    slider.scrollBy({
                        left: slideWidth,
                        behavior: 'smooth'
                    });
                }
            }, 5000);
        }
        
        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }
        
        // Start auto-scroll when the page loads
        startAutoScroll();
        
        // Pause auto-scroll when the user interacts with the slider
        slider.addEventListener('mouseenter', stopAutoScroll);
        prevButton.addEventListener('mouseenter', stopAutoScroll);
        nextButton.addEventListener('mouseenter', stopAutoScroll);
        
        // Resume auto-scroll when the user stops interacting
        slider.addEventListener('mouseleave', startAutoScroll);
        prevButton.addEventListener('mouseleave', startAutoScroll);
        nextButton.addEventListener('mouseleave', startAutoScroll);
    }
}

// Advanced filters modal functionality
function initAdvancedFilters() {
    const advancedFiltersBtn = document.getElementById('advanced-filters-btn');
    const filtersModal = document.getElementById('advanced-filters-modal');
    const closeFiltersModal = document.getElementById('close-filters-modal');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const priceRange = document.getElementById('price-range');
    const currentPrice = document.getElementById('current-price');
    
    if (advancedFiltersBtn && filtersModal) {
        // Open modal when advanced filters button is clicked
        advancedFiltersBtn.addEventListener('click', function() {
            filtersModal.style.display = 'block';
        });
        
        // Close modal when close button is clicked
        if (closeFiltersModal) {
            closeFiltersModal.addEventListener('click', function() {
                filtersModal.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside the modal content
        window.addEventListener('click', function(e) {
            if (e.target === filtersModal) {
                filtersModal.style.display = 'none';
            }
        });
        
        // Update price display when slider is moved
        if (priceRange && currentPrice) {
            priceRange.addEventListener('input', function() {
                currentPrice.textContent = '$' + parseInt(priceRange.value).toLocaleString();
            });
        }
        
        // Apply filters when apply button is clicked
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', function() {
                applyFilters();
                filtersModal.style.display = 'none';
            });
        }
        
        // Reset filters when reset button is clicked
        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', function() {
                resetFilters();
            });
        }
    }
}

function applyFilters() {
    // Get filter values
    const tldFilter = getSelectedOptions('tld-filter');
    const priceRange = document.getElementById('price-range').value;
    const lengthFilter = document.getElementById('length-filter').value;
    const industryFilter = document.getElementById('industry-filter').value;
    
    // Get all domain cards
    const domainCards = document.querySelectorAll('.domain-card');
    const domainGrid = document.querySelector('.domain-grid');
    let resultsFound = false;
    
    // Show the domains section
    document.getElementById('domains').scrollIntoView({ behavior: 'smooth' });
    
    // Filter domains based on the selected filters
    domainCards.forEach(card => {
        const domainName = card.querySelector('.domain-name').textContent.toLowerCase();
        const domainPrice = parseInt(card.querySelector('.domain-price').textContent.replace(/[^0-9]/g, ''));
        const domainCategory = card.getAttribute('data-category');
        
        // Check if domain matches all selected filters
        const matchesTLD = tldFilter.length === 0 || tldFilter.some(tld => domainName.endsWith(tld));
        const matchesPrice = domainPrice <= parseInt(priceRange);
        const matchesLength = lengthFilter === 'any' || 
                             (lengthFilter === 'short' && domainName.length <= 10) ||
                             (lengthFilter === 'medium' && domainName.length > 10 && domainName.length <= 15) ||
                             (lengthFilter === 'long' && domainName.length > 15);
        const matchesIndustry = industryFilter === 'all' || domainCategory.includes(industryFilter);
        
        if (matchesTLD && matchesPrice && matchesLength && matchesIndustry) {
            card.style.display = 'grid';
            resultsFound = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show message if no results found
    if (!resultsFound) {
        // Remove existing no results message if it exists
        const existingMessage = document.getElementById('no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create and append no results message
        const noResultsMessage = document.createElement('div');
        noResultsMessage.id = 'no-results-message';
        noResultsMessage.className = 'no-results-message';
        noResultsMessage.innerHTML = `
            <h3>No domains found matching your filters</h3>
            <p>Try adjusting your filters or <a href="#" id="reset-search">view all domains</a>.</p>
        `;
        domainGrid.appendChild(noResultsMessage);
        
        // Add event listener to reset search link
        document.getElementById('reset-search').addEventListener('click', function(e) {
            e.preventDefault();
            resetFilters();
            resetSearch();
        });
    } else {
        // Remove no results message if it exists
        const existingMessage = document.getElementById('no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
}

function resetFilters() {
    // Reset TLD filter
    const tldFilter = document.getElementById('tld-filter');
    if (tldFilter) {
        Array.from(tldFilter.options).forEach(option => {
            option.selected = option.value === '.com';
        });
    }
    
    // Reset price range
    const priceRange = document.getElementById('price-range');
    const currentPrice = document.getElementById('current-price');
    if (priceRange && currentPrice) {
        priceRange.value = 25000;
        currentPrice.textContent = '$25,000';
    }
    
    // Reset length filter
    const lengthFilter = document.getElementById('length-filter');
    if (lengthFilter) {
        lengthFilter.value = 'any';
    }
    
    // Reset industry filter
    const industryFilter = document.getElementById('industry-filter');
    if (industryFilter) {
        industryFilter.value = 'all';
    }
}

function getSelectedOptions(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return [];
    
    return Array.from(select.selectedOptions).map(option => option.value);
}

// Live chat functionality (placeholder for Crisp integration)
function initLiveChat() {
    // This would normally be replaced with the actual Crisp.chat integration code
    console.log('Live chat initialized');
    
    // Placeholder for Crisp.chat integration
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID";
    
    // Simulate Crisp chat widget
    setTimeout(function() {
        createChatWidget();
    }, 3000);
}

function createChatWidget() {
    // Create a simulated chat widget
    const chatWidget = document.createElement('div');
    chatWidget.className = 'chat-widget';
    chatWidget.innerHTML = `
        <div class="chat-button">
            <i class="fas fa-comments"></i>
        </div>
        <div class="chat-popup">
            <div class="chat-header">
                <h4>Live Chat</h4>
                <button class="close-chat"><i class="fas fa-times"></i></button>
            </div>
            <div class="chat-messages">
                <div class="chat-message operator">
                    <p>👋 Need help picking a domain?</p>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" placeholder="Type your message...">
                <button><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    
    document.body.appendChild(chatWidget);
    
    // Add event listeners for chat widget
    const chatButton = chatWidget.querySelector('.chat-button');
    const chatPopup = chatWidget.querySelector('.chat-popup');
    const closeChat = chatWidget.querySelector('.close-chat');
    
    chatButton.addEventListener('click', function() {
        chatPopup.style.display = 'block';
        chatButton.style.display = 'none';
    });
    
    closeChat.addEventListener('click', function() {
        chatPopup.style.display = 'none';
        chatButton.style.display = 'flex';
    });
}

// Helper function to generate brand hooks
function generateBrandHook(domainName) {
    // In a real implementation, this would call the OpenAI API
    // For now, we'll use some predefined hooks based on domain categories
    
    const domainLower = domainName.toLowerCase();
    
    if (domainLower.includes('ai') || domainLower.includes('tech')) {
        return "Powering the future with intelligent technology solutions";
    } else if (domainLower.includes('health') || domainLower.includes('wellness')) {
        return "Transforming lives through innovative health and wellness solutions";
    } else if (domainLower.includes('food') || domainLower.includes('kitchen')) {
        return "Elevating culinary experiences with passion and flavor";
    } else if (domainLower.includes('cannabis') || domainLower.includes('cbd')) {
        return "Redefining wellness through natural plant-based solutions";
    } else if (domainLower.includes('mindful') || domainLower.includes('awe')) {
        return "Inspiring transformative experiences through mindful practices";
    } else {
        return "Building a distinctive brand presence in the digital landscape";
    }
}

// Helper function to format price for monthly payment
function calculateMonthlyPayment(price) {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    return '$' + Math.round(numericPrice / 12).toLocaleString();
}
