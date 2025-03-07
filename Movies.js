// Navbar background change on scroll
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Movie card hover effect
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.zIndex = '1';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.zIndex = '0';
        });

        card.addEventListener('click', () => {
            // Simulate opening a movie
            const movieTitle = card.querySelector('h3').textContent;
            alert(`Playing: ${movieTitle}`);
        });
    });

    // Mobile menu button
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', () => {
        alert('Search functionality coming soon!');
    });

    // User button functionality
    const userBtn = document.querySelector('.user-btn');
    
    userBtn.addEventListener('click', () => {
        alert('User profile coming soon!');
    });
});