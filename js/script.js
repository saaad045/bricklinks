  let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('slide-active'));
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('slide-active');
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Scroll animations
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animated');
                }
            });
        }
        
        // Initialize on load
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
        
        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 1)';
                navbar.style.padding = '20px 0';
                navbar.style.boxShadow = 'none';
            }
        });


        // Project data
    // Enhanced reveal effect when scrolling
    const items = document.querySelectorAll(".masonry-item");
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        items.forEach((item, index) => {
            const boxTop = item.getBoundingClientRect().top;
            
            if (boxTop < triggerBottom) {
                // Stagger the animation with a delay based on index
                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";
                }, 150 * index);
            }
        });
    };

    // Initial hidden state
    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });

    // Run on load and scroll
    window.addEventListener("load", revealOnScroll);
    window.addEventListener("scroll", revealOnScroll);
    
    // Additional effect for hexagon pattern on scroll
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const hexPattern = document.querySelector('.masonry-section::after');
        const rate = scrolled * -0.2;
        
        // Apply parallax effect to hexagon pattern
        document.querySelector('.masonry-section').style.backgroundPosition = `center ${rate}px`;
    });

      // Enhanced navbar scroll effect
        const navbar = document.getElementById("mainNavbar");
        
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
        
        // Add smooth scrolling for navigation links
        document.querySelectorAll('a.nav-link, a.btn').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    
                    const target = document.querySelector(href);
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        //Testimonial section home page
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            function checkScroll() {
                animatedElements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.classList.add('animated');
                    }
                });
            }
            
            // Check on load
            checkScroll();
            
            // Check on scroll
            window.addEventListener('scroll', checkScroll);
        });

        //about us page 
         function animateOnScroll() {
         // Animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
            
            // Navbar scroll effect
            const navbar = document.getElementById('mainNavbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        });
     }
