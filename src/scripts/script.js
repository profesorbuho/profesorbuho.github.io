/**
 * Mobile Menu Controller - Profesor Búho Website
 * Handles mobile menu functionality with accessibility and performance optimizations
 */

(function() {
    'use strict';

    // Cache DOM elements
    const body = document.querySelector('body');
    const navbar = document.querySelector('#navbar');
    const openMenuBtn = document.querySelector('#open-menu');
    const closeMenuBtn = document.querySelector('#close-menu');
    const navlinks = document.querySelectorAll('.navlink');

    // State management
    let isMenuOpen = false;

    // CSS class for body scroll lock
    const BODY_SCROLL_LOCK_CLASS = 'body-scroll-locked';
    const NAVBAR_VISIBLE_CLASS = 'visible';

    /**
     * Initialize mobile menu functionality
     */
    function initMobileMenu() {
        // Early return if elements don't exist
        if (!body || !navbar || !openMenuBtn || !closeMenuBtn) {
            console.warn('Mobile menu elements not found - functionality disabled');
            return;
        }

        // Add ARIA attributes for accessibility
        setupAccessibilityAttributes();

        // Add event listeners
        addEventListeners();

        // Add keyboard navigation support
        addKeyboardNavigation();
    }

    /**
     * Setup ARIA attributes for better accessibility
     */
    function setupAccessibilityAttributes() {
        navbar.setAttribute('aria-hidden', 'true');
        navbar.setAttribute('aria-label', 'Menú de navegación principal');
        
        openMenuBtn.setAttribute('aria-label', 'Abrir menú de navegación');
        openMenuBtn.setAttribute('aria-expanded', 'false');
        
        closeMenuBtn.setAttribute('aria-label', 'Cerrar menú de navegación');
        closeMenuBtn.setAttribute('aria-expanded', 'true');
    }

    /**
     * Add event listeners with proper error handling
     */
    function addEventListeners() {
        try {
            openMenuBtn.addEventListener('click', handleOpenMenu);
            closeMenuBtn.addEventListener('click', handleCloseMenu);
            
            // Handle escape key
            document.addEventListener('keydown', handleEscapeKey);
            
            // Handle navigation links
            navlinks.forEach(link => {
                if (link) {
                    link.addEventListener('click', handleNavLinkClick);
                }
            });

            // Handle window resize
            window.addEventListener('resize', handleWindowResize);
        } catch (error) {
            console.error('Error setting up event listeners:', error);
        }
    }

    /**
     * Handle opening the mobile menu
     */
    function handleOpenMenu() {
        if (isMenuOpen) return;
        
        try {
            navbar.classList.add(NAVBAR_VISIBLE_CLASS);
            body.classList.add(BODY_SCROLL_LOCK_CLASS);
            isMenuOpen = true;
            
            // Update ARIA attributes
            navbar.setAttribute('aria-hidden', 'false');
            openMenuBtn.setAttribute('aria-expanded', 'true');
            
            // Focus management
            setTimeout(() => {
                closeMenuBtn.focus();
            }, 100);
            
        } catch (error) {
            console.error('Error opening menu:', error);
        }
    }

    /**
     * Handle closing the mobile menu
     */
    function handleCloseMenu() {
        if (!isMenuOpen) return;
        
        try {
            navbar.classList.remove(NAVBAR_VISIBLE_CLASS);
            body.classList.remove(BODY_SCROLL_LOCK_CLASS);
            isMenuOpen = false;
            
            // Update ARIA attributes
            navbar.setAttribute('aria-hidden', 'true');
            openMenuBtn.setAttribute('aria-expanded', 'false');
            
            // Focus management
            setTimeout(() => {
                openMenuBtn.focus();
            }, 100);
            
        } catch (error) {
            console.error('Error closing menu:', error);
        }
    }

    /**
     * Handle navigation link clicks
     */
    function handleNavLinkClick(event) {
        // Close menu when navigation link is clicked
        handleCloseMenu();
        
        // Allow default navigation behavior
    }

    /**
     * Handle escape key for accessibility
     */
    function handleEscapeKey(event) {
        if (event.key === 'Escape' && isMenuOpen) {
            handleCloseMenu();
        }
    }

    /**
     * Handle window resize - auto-close on desktop
     */
    function handleWindowResize() {
        const DESKTOP_BREAKPOINT = 1024;
        
        if (window.innerWidth >= DESKTOP_BREAKPOINT && isMenuOpen) {
            handleCloseMenu();
        }
    }

    /**
     * Add keyboard navigation support
     */
    function addKeyboardNavigation() {
        navlinks.forEach((link, index) => {
            if (link) {
                link.addEventListener('keydown', (event) => {
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                        event.preventDefault();
                        const nextLink = navlinks[index + 1];
                        if (nextLink) nextLink.focus();
                    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                        event.preventDefault();
                        const prevLink = navlinks[index - 1];
                        if (prevLink) prevLink.focus();
                    }
                });
            }
        });
    }

    /**
     * Initialize when DOM is ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }

})();
