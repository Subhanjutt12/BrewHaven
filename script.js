document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu Category Switching
    const menuCategories = document.querySelectorAll('.menu-category');
    const coffeeItems = document.getElementById('coffee-items');
    const teaItems = document.getElementById('tea-items');
    const pastriesItems = document.getElementById('pastries-items');
    
    menuCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            menuCategories.forEach(cat => cat.classList.remove('active'));
            // Add active class to clicked category
            category.classList.add('active');

            // Get the selected category and show the corresponding items
            const selectedCategory = category.getAttribute('data-category');
            console.log(`Selected category: ${selectedCategory}`);
            
            // Hide all menu items first
            coffeeItems.style.display = 'none';
            teaItems.style.display = 'none';
            pastriesItems.style.display = 'none';
            
            // Show the selected category items
            if (selectedCategory === 'coffee') {
                coffeeItems.style.display = 'grid';
            } else if (selectedCategory === 'tea') {
                teaItems.style.display = 'grid';
            } else if (selectedCategory === 'pastries') {
                pastriesItems.style.display = 'grid';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});