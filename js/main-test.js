// main.js - Simplified Version

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded'); // Debug message

    // Get all the buttons and cards
    const categoryButtons = document.querySelectorAll('.category-button');
    const domainCards = document.querySelectorAll('.domain-card');

    console.log('Found buttons:', categoryButtons.length); // Debug message
    console.log('Found cards:', domainCards.length); // Debug message

    // Add click event to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.dataset.category); // Debug message

            // Remove active class from all buttons
            categoryButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Get selected category
            const selectedCategory = this.dataset.category;

            // Show/hide cards based on category
            domainCards.forEach(card => {
                if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('domainModal');
    
    // Show modal function
    window.showDomainDetails = function(domainName) {
        console.log('Showing modal for:', domainName); // Debug message
        const modal = document.getElementById('domainModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    };

    // Close modal function
    window.closeDomainModal = function() {
        console.log('Closing modal'); // Debug message
        const modal = document.getElementById('domainModal');
        if (modal) {
            modal.style.display = 'none';
        }
    };

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeDomainModal();
            }
        });
    }
});