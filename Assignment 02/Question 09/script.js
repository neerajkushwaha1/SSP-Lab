document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Form Validation for Booking Form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = bookingForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Add error message if it doesn't exist
                    let errorMessage = field.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'This field is required';
                        field.parentElement.appendChild(errorMessage);
                    }
                } else {
                    field.classList.remove('error');
                    const errorMessage = field.parentElement.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }
            });
            
            // Email validation for email field
            const emailField = bookingForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                    
                    let errorMessage = emailField.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'Please enter a valid email address';
                        emailField.parentElement.appendChild(errorMessage);
                    } else {
                        errorMessage.textContent = 'Please enter a valid email address';
                    }
                }
            }
            
            // Date validation for check-in and check-out
            const checkInField = document.getElementById('checkIn');
            const checkOutField = document.getElementById('checkOut');
            
            if (checkInField && checkOutField && checkInField.value && checkOutField.value) {
                const checkInDate = new Date(checkInField.value);
                const checkOutDate = new Date(checkOutField.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (checkInDate < today) {
                    isValid = false;
                    checkInField.classList.add('error');
                    
                    let errorMessage = checkInField.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'Check-in date cannot be in the past';
                        checkInField.parentElement.appendChild(errorMessage);
                    } else {
                        errorMessage.textContent = 'Check-in date cannot be in the past';
                    }
                }
                
                if (checkOutDate <= checkInDate) {
                    isValid = false;
                    checkOutField.classList.add('error');
                    
                    let errorMessage = checkOutField.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'Check-out date must be after check-in date';
                        checkOutField.parentElement.appendChild(errorMessage);
                    } else {
                        errorMessage.textContent = 'Check-out date must be after check-in date';
                    }
                }
            }
            
            if (isValid) {
                // Form is valid, show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Your booking request has been submitted successfully! We will contact you shortly to confirm your reservation.';
                
                // Insert success message after form
                bookingForm.parentElement.insertBefore(successMessage, bookingForm.nextSibling);
                
                // Reset form
                bookingForm.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
        
        // Remove error styling on input
        bookingForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                const errorMessage = this.parentElement.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
        });
    }
    
    // Gallery Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Gallery Lightbox
    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    if (galleryImages.length > 0 && lightbox && lightboxImg && closeLightbox) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                
                // Get caption if available
                const caption = this.parentElement.querySelector('.gallery-caption');
                if (caption && lightboxCaption) {
                    const captionTitle = caption.querySelector('h3');
                    const captionText = caption.querySelector('p');
                    
                    let captionContent = '';
                    if (captionTitle) captionContent += captionTitle.textContent;
                    if (captionText) captionContent += captionTitle ? ' - ' + captionText.textContent : captionText.textContent;
                    
                    lightboxCaption.textContent = captionContent;
                }
            });
        });
        
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
    
    // Add CSS class for form validation styling
    const style = document.createElement('style');
    style.textContent = `
        .error {
            border-color: #dc3545 !important;
        }
        
        .error-message {
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 5px;
        }
        
        .success-message {
            background-color: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
});