// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Service Modal Handling
let servicesData = {};
const serviceModal = document.getElementById('serviceModal');
const serviceModalBody = document.getElementById('serviceModalBody');
const serviceModalClose = document.querySelector('.service-modal-close');

// Load services content from JSON file
async function loadServicesContent() {
    try {
        const response = await fetch('services-content.json');
        servicesData = await response.json();
    } catch (error) {
        console.error('Error loading services content:', error);
        // Fallback: create basic content structure
        servicesData = {};
    }
}

// Email configuration - using FormSubmit (free, no signup required)
// Alternative: You can use EmailJS, Formspree, or any other email service

// Service Card Click Handler
document.addEventListener('DOMContentLoaded', () => {
    loadServicesContent();
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.getAttribute('data-service');
            if (serviceId && servicesData[serviceId]) {
                showServiceModal(servicesData[serviceId]);
            } else {
                // Fallback: show basic info
                const title = card.querySelector('h3').textContent;
                const description = card.querySelector('p').textContent;
                showServiceModal({
                    title: title,
                    fullContent: `<h2>${title}</h2><p>${description}</p><p><em>Detailed content will be available after updating the services-content.json file.</em></p>`
                });
            }
        });
    });
});

// Show Service Modal
function showServiceModal(service) {
    serviceModalBody.innerHTML = service.fullContent || `<h2>${service.title}</h2><p>${service.shortDescription}</p>`;
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Service Modal
if (serviceModalClose) {
    serviceModalClose.addEventListener('click', () => {
        closeServiceModal();
    });
}

serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        closeServiceModal();
    }
});

function closeServiceModal() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
        closeServiceModal();
    }
});

// Form Handling with FormSubmit (free email service)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const company = formData.get('company') || '';
        const industry = formData.get('industry') || '';
        const message = formData.get('message') || '';
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        formMessage.style.display = 'none';
        
        try {
            // Using FormSubmit - free service that sends emails directly
            // No signup required, works immediately
            const formSubmitURL = 'https://formsubmit.co/ajax/aramudhin@gmail.com';
            
            // Prepare email data
            const emailData = {
                name: name,
                email: email,
                company: company || 'Not provided',
                industry: industry || 'Not provided',
                message: message,
                _subject: 'Inquiry from Blue Sail Solutions Website',
                _captcha: false, // Disable captcha for better UX
                _template: 'table' // Use table template for better formatting
            };
            
            // Send email using FormSubmit
            const response = await fetch(formSubmitURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(emailData)
            });
            
            if (response.ok) {
                // Show success message
                formMessage.textContent = 'Thank you! Your inquiry has been sent successfully. We will get back to you soon.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            
            // Fallback: Try alternative method or show error
            formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or contact us directly at aramudhin@gmail.com';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            
            // Hide message after 10 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 10000);
        }
    });
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and project cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .project-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

