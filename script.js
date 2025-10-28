document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            
            // Toggle menu when hamburger is clicked
            hamburger.addEventListener('click', function() {
                // Toggle active class on hamburger
                this.classList.toggle('active');
                
                // Toggle display of mobile menu
                mobileMenu.classList.toggle('show');
            });
            
            // Close mobile menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('show');
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = event.target.closest('nav');
                
                if (!isClickInsideNav && mobileMenu.classList.contains('show')) {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('show');
                }
            });
        });