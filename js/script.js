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
window.addEventListener('scroll', function () {
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

//dropdown service navbar
document.querySelectorAll('.nav-item.dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        window.location.href = this.getAttribute('href'); // go to services.html
    });
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
document.addEventListener('DOMContentLoaded', function () {
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
    document.addEventListener('DOMContentLoaded', function () {
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
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    });
}

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get filter value
        const filterValue = button.getAttribute('data-filter');

        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

//=========================COntact Page JS=========================//
 // Form validation and submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();

                // Basic validation
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();

                if (!name || !email || !message) {
                    alert('Please fill in all required fields');
                    return;
                }

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address');
                    return;
                }

                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });



        //=========================Creative Service pAge JS=========================//
        document.addEventListener('DOMContentLoaded', function () {
            // Portfolio filtering
            const filterButtons = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filterValue = button.getAttribute('data-filter');
                    
                    portfolioItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });


        //=========================Marketing and communication page JS=========================//
          document.addEventListener('DOMContentLoaded', function () {
            // Channel tabs functionality
            const channelTabs = document.querySelectorAll('.channel-tab');
            const channelContents = document.querySelectorAll('.channel-content');
            
            channelTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const channel = tab.getAttribute('data-channel');
                    
                    // Update tabs
                    channelTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Update contents
                    channelContents.forEach(content => content.classList.remove('active'));
                    document.getElementById(`${channel}-content`).classList.add('active');
                });
            });
        });


//=========================MEdia Stratgies and Buying========================//
  document.addEventListener('DOMContentLoaded', function () {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');

                        // If you add charts inside these sections, this will animate them
                        const bars = entry.target.querySelectorAll('.chart-bar');
                        bars.forEach(bar => {
                            const height = bar.getAttribute('data-height');
                            setTimeout(() => {
                                bar.style.height = height + 'px';
                            }, 200);
                        });
                    }
                });
            }, { threshold: 0.1 });

            animatedElements.forEach(el => observer.observe(el));

            // Channel tabs functionality
            const channelTabs = document.querySelectorAll('.channel-tab');
            const channelContents = document.querySelectorAll('.channel-content');

            channelTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const channel = tab.getAttribute('data-channel');

                    // Update tabs
                    channelTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');

                    // Update contents
                    channelContents.forEach(content => content.classList.remove('active'));
                    document.getElementById(`${channel}-content`).classList.add('active');
                });
            });
        });




//=========================Web And APP Development========================//
 const deviceImage = document.getElementById("deviceImage");

    document.querySelectorAll(".device-card").forEach(card => {
        card.addEventListener("click", () => {
            const deviceType = card.getAttribute("data-device");

            // Reset transform
            deviceImage.style.transform = "scale(1)";

            if (deviceType === "desktop") {
                deviceImage.style.transform = "scale(1)"; // Normal size
            } else if (deviceType === "tablet") {
                deviceImage.style.transform = "scale(0.7)"; // Smaller
            } else if (deviceType === "mobile") {
                deviceImage.style.transform = "scale(0.4)"; // Smallest
            }

            // Active state
            document.querySelectorAll(".device-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });