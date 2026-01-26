document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = (show) => {
        if (show) {
            mobileMenu.classList.remove('translate-x-full', 'pointer-events-none');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('translate-x-full', 'pointer-events-none');
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
        closeMenuBtn.addEventListener('click', () => toggleMenu(false));

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => toggleMenu(false));
        });
    }

    // Trust Badges Marquee for Mobile
    const marqueeContainer = document.querySelector('.trust-badges-marquee');
    if (marqueeContainer) {
        // Clone for seamless loop if needed (usually for mobile marquee)
        const cloneContent = () => {
            if (window.innerWidth < 1024 && !marqueeContainer.dataset.cloned) {
                const content = marqueeContainer.innerHTML;
                marqueeContainer.innerHTML = content + content;
                marqueeContainer.dataset.cloned = 'true';
            }
        };

        cloneContent();
        window.addEventListener('resize', cloneContent);
    }
});
