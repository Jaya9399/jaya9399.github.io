/*
 * Jaya Singh Chauhan — Portfolio scripts
 * Based on Start Bootstrap Resume.
 */

window.addEventListener('DOMContentLoaded', () => {
    const sideNav = document.body.querySelector('#sideNav');

    // Bootstrap ScrollSpy for the side navigation.
    if (sideNav && window.bootstrap) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar after a navigation click on mobile.
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (
                navbarToggler &&
                window.getComputedStyle(navbarToggler).display !== 'none'
            ) {
                navbarToggler.click();
            }
        });
    });

    // Project filtering.
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            projectCards.forEach((card) => {
                const categories = (card.dataset.category || '').split(' ');
                const shouldShow = filter === 'all' || categories.includes(filter);

                card.classList.toggle('project-hidden', !shouldShow);
            });
        });
    });

    // Update footer year automatically.
    const yearElement = document.querySelector('#currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Add a subtle shadow to the navbar after scrolling.
    const updateNavState = () => {
        if (sideNav) {
            sideNav.classList.toggle('nav-scrolled', window.scrollY > 20);
        }
    };

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
});
