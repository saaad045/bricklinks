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
  