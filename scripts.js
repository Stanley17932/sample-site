document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu on mobile
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('showing');
    });

    // Modal functionality
    const modal = document.getElementById('offer-modal');
    const closeModal = document.querySelector('.close-btn');

    document.querySelector('.hero button').addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scroll to sections
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          
          // Check if the link points to a different HTML file
          if (href.endsWith('.html')) {
            e.preventDefault();
            window.location.href = href; // Navigate to the linked HTML file
          } else {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
      
    // Form validation (example)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const emailField = form.querySelector('input[type="email"]');
            const emailValue = emailField.value;

            if (!validateEmail(emailValue)) {
                event.preventDefault();
                alert('Please enter a valid email address.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Dynamic date in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Show/hide chatbox (example)
    const chatbox = document.querySelector('.chatbox');
    const chatToggleBtn = document.querySelector('.chat-toggle-btn');

    if (chatToggleBtn) {
        chatToggleBtn.addEventListener('click', function() {
            chatbox.classList.toggle('active');
        });
    }

    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    showSlides();

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
            slide.style.opacity = 0;
        });

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].style.opacity = 20;
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }
});
