// blog.js - Implements blog functionality for HandcraftedDomains.io

document.addEventListener('DOMContentLoaded', function() {
    // Initialize blog functionality
    initBlog();
});

// Initialize blog functionality
function initBlog() {
    // Set up search functionality
    setupSearch();
    
    // Set up newsletter subscription
    setupNewsletter();
    
    // Initialize sharing functionality if on a blog post page
    if (document.querySelector('.blog-post-share')) {
        setupSharing();
    }
    
    // Initialize glossary functionality if on the glossary page
    if (document.querySelector('.glossary-alphabet')) {
        setupGlossary();
    }
}

// Set up search functionality
function setupSearch() {
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchInput = this.querySelector('input');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm.length > 0) {
                // In a real implementation, this would redirect to a search results page
                // For now, we'll just alert the search term
                alert(`Searching for: ${searchTerm}`);
                
                // Track search in analytics
                if (typeof gtag === 'function') {
                    gtag('event', 'search', {
                        search_term: searchTerm
                    });
                }
            }
        });
    }
}

// Set up newsletter subscription
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email.length > 0) {
                // In a real implementation, this would submit the email to a newsletter service
                // For now, we'll just alert the email
                alert(`Thank you for subscribing with: ${email}`);
                
                // Reset the form
                this.reset();
                
                // Track subscription in analytics
                if (typeof gtag === 'function') {
                    gtag('event', 'newsletter_subscription', {
                        email: email
                    });
                }
            }
        });
    }
}

// Set up sharing functionality
function setupSharing() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.getAttribute('data-platform');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl = '';
            
            switch (platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
                
                // Track share in analytics
                if (typeof gtag === 'function') {
                    gtag('event', 'share', {
                        method: platform,
                        content_type: 'blog_post',
                        item_id: window.location.pathname
                    });
                }
            }
        });
    });
}

// Set up glossary functionality
function setupGlossary() {
    const glossaryLetters = document.querySelectorAll('.glossary-letter');
    
    glossaryLetters.forEach(letter => {
        letter.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetLetter = this.textContent;
            const targetSection = document.getElementById(`glossary-${targetLetter.toLowerCase()}`);
            
            if (targetSection) {
                // Scroll to the section
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update active letter
                glossaryLetters.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Helper function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

// Helper function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Track page view for blog posts
function trackPageView() {
    if (typeof gtag === 'function') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
    
    if (typeof fbq === 'function') {
        fbq('track', 'ViewContent', {
            content_name: document.title,
            content_type: 'blog_post',
            content_ids: [window.location.pathname]
        });
    }
}

// Track when user reaches the end of a blog post
function trackReadCompletion() {
    const blogPostContent = document.querySelector('.blog-post-content');
    
    if (blogPostContent) {
        // Create an intersection observer to detect when the user reaches the end of the post
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // User has reached the end of the post
                    if (typeof gtag === 'function') {
                        gtag('event', 'read_completion', {
                            content_type: 'blog_post',
                            item_id: window.location.pathname
                        });
                    }
                    
                    // Disconnect the observer after tracking once
                    observer.disconnect();
                }
            });
        }, { threshold: 0.9 });
        
        // Observe the last paragraph of the blog post
        const lastParagraph = blogPostContent.querySelector('p:last-of-type');
        if (lastParagraph) {
            observer.observe(lastParagraph);
        }
    }
}

// Initialize tracking
trackPageView();
if (document.querySelector('.blog-post-content')) {
    trackReadCompletion();
}
