// seller.js - Implements seller dashboard functionality for HandcraftedDomains.io

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard functionality
    initDashboard();
});

// Initialize dashboard functionality
function initDashboard() {
    // Set up navigation
    setupNavigation();
    
    // Set up user dropdown
    setupUserDropdown();
    
    // Set up domain table functionality
    setupDomainTable();
    
    // Set up file upload
    setupFileUpload();
}

// Set up navigation between dashboard sections
function setupNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.dashboard-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID from the href
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the target section
            document.getElementById(targetId).classList.add('active');
            
            // Update active nav link
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            this.parentElement.classList.add('active');
            
            // On mobile, close the sidebar after navigation
            if (window.innerWidth < 1024) {
                // Implementation for mobile sidebar toggle would go here
            }
        });
    });
}

// Set up user dropdown menu
function setupUserDropdown() {
    const userToggle = document.querySelector('.user-dropdown-toggle');
    
    if (userToggle) {
        userToggle.addEventListener('click', function() {
            // Toggle user dropdown menu
            const dropdown = document.querySelector('.user-dropdown');
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            const dropdown = document.querySelector('.user-dropdown');
            if (dropdown && dropdown.classList.contains('active')) {
                if (!e.target.closest('.user-menu')) {
                    dropdown.classList.remove('active');
                }
            }
        });
    }
}

// Set up domain table functionality
function setupDomainTable() {
    // Search functionality
    const searchInput = document.querySelector('.search-filter input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterDomains();
        });
    }
    
    // Category filter
    const categoryFilter = document.querySelector('.category-filter select');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            filterDomains();
        });
    }
    
    // Edit buttons
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const domainRow = this.closest('tr');
            const domainName = domainRow.querySelector('td:first-child').textContent;
            editDomain(domainName);
        });
    });
    
    // Delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const domainRow = this.closest('tr');
            const domainName = domainRow.querySelector('td:first-child').textContent;
            deleteDomain(domainName);
        });
    });
}

// Filter domains based on search and category
function filterDomains() {
    const searchInput = document.querySelector('.search-filter input');
    const categoryFilter = document.querySelector('.category-filter select');
    
    if (!searchInput || !categoryFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    const domainRows = document.querySelectorAll('.domain-table tbody tr');
    
    domainRows.forEach(row => {
        const domainName = row.querySelector('td:first-child').textContent.toLowerCase();
        const domainCategory = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        
        const matchesSearch = domainName.includes(searchTerm);
        const matchesCategory = category === 'all' || domainCategory.includes(category.toLowerCase());
        
        if (matchesSearch && matchesCategory) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Edit domain
function editDomain(domainName) {
    // In a real implementation, this would open a modal or redirect to an edit page
    alert(`Edit domain: ${domainName}`);
}

// Delete domain
function deleteDomain(domainName) {
    // In a real implementation, this would show a confirmation dialog and then delete the domain
    if (confirm(`Are you sure you want to delete ${domainName}?`)) {
        alert(`Domain ${domainName} has been deleted.`);
        // Here you would make an API call to delete the domain
    }
}

// Set up file upload functionality
function setupFileUpload() {
    const csvUpload = document.getElementById('csv-upload');
    
    if (csvUpload) {
        csvUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Check if file is a CSV
                if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
                    // In a real implementation, this would parse the CSV and upload the domains
                    parseCSV(file);
                } else {
                    alert('Please upload a CSV file.');
                }
            }
        });
    }
}

// Parse CSV file
function parseCSV(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const contents = e.target.result;
        const lines = contents.split('\n');
        
        // Check if CSV has headers
        if (lines.length < 2) {
            alert('CSV file is empty or invalid.');
            return;
        }
        
        // Parse headers
        const headers = lines[0].split(',').map(header => header.trim());
        
        // Check required columns
        const requiredColumns = ['Domain_Name', 'Category', 'Price'];
        const missingColumns = requiredColumns.filter(col => !headers.includes(col));
        
        if (missingColumns.length > 0) {
            alert(`CSV is missing required columns: ${missingColumns.join(', ')}`);
            return;
        }
        
        // Parse domains
        const domains = [];
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '') continue;
            
            const values = lines[i].split(',').map(value => value.trim());
            
            if (values.length !== headers.length) {
                alert(`Line ${i + 1} has an invalid number of columns.`);
                continue;
            }
            
            const domain = {};
            headers.forEach((header, index) => {
                domain[header] = values[index];
            });
            
            domains.push(domain);
        }
        
        // In a real implementation, this would upload the domains to the server
        alert(`Successfully parsed ${domains.length} domains from CSV.`);
        console.log(domains);
    };
    
    reader.onerror = function() {
        alert('Error reading CSV file.');
    };
    
    reader.readAsText(file);
}

// Generate analytics charts
function generateCharts() {
    // In a real implementation, this would use a charting library like Chart.js
    // For now, we'll just use placeholder images
    console.log('Generating charts...');
}

// Load domain performance data
function loadPerformanceData() {
    // In a real implementation, this would fetch data from an API
    console.log('Loading performance data...');
}

// Helper function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
