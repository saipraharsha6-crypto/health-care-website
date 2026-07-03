document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. MOBILE HAMBURGER MENU
  // ==========================================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      
      // Animate hamburger to X
      const spans = hamburger.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // ==========================================
  // 2. TESTIMONIALS SLIDER
  // ==========================================
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.slider-dots');
  
  if (sliderWrapper && slides.length > 0) {
    let currentIndex = 0;
    let autoPlayTimer;

    // Generate Dot indicators
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      
      currentIndex = index;
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots active state
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function startAutoPlay() {
      autoPlayTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000);
    }

    function resetAutoPlay() {
      clearInterval(autoPlayTimer);
      startAutoPlay();
    }

    startAutoPlay();
  }

  // ==========================================
  // 3. FAQ ACCORDION
  // ==========================================
  const faqHeaders = document.querySelectorAll('.faq-header');
  
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.faq-body');
      const isActive = item.classList.contains('active');

      // Close all other open items
      document.querySelectorAll('.faq-item.active').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('active');
          openItem.querySelector('.faq-body').style.maxHeight = null;
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        body.style.maxHeight = null;
      }
    });
  });

  // ==========================================
  // 4. APPOINTMENT FORM VALIDATION & MODAL
  // ==========================================
  const bookingForm = document.getElementById('appointmentForm');
  const modal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      
      // Validate Name
      const nameInput = document.getElementById('fullName');
      if (nameInput) {
        if (nameInput.value.trim().length < 3) {
          showError(nameInput, 'Name must be at least 3 characters long.');
          isValid = false;
        } else {
          clearError(nameInput);
        }
      }

      // Validate Email
      const emailInput = document.getElementById('email');
      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          showError(emailInput, 'Please enter a valid email address.');
          isValid = false;
        } else {
          clearError(emailInput);
        }
      }

      // Validate Phone
      const phoneInput = document.getElementById('phone');
      if (phoneInput) {
        const phoneRegex = /^\+?[0-9]{10,14}$/;
        if (!phoneRegex.test(phoneInput.value.trim().replace(/[\s-()]/g, ''))) {
          showError(phoneInput, 'Please enter a valid phone number (10-14 digits).');
          isValid = false;
        } else {
          clearError(phoneInput);
        }
      }

      // Validate Date
      const dateInput = document.getElementById('appointmentDate');
      if (dateInput) {
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0,0,0,0);
        
        if (!dateInput.value) {
          showError(dateInput, 'Please select an appointment date.');
          isValid = false;
        } else if (selectedDate < today) {
          showError(dateInput, 'Date cannot be in the past.');
          isValid = false;
        } else {
          clearError(dateInput);
        }
      }

      // Validate Department/Doctor Selection
      const doctorSelect = document.getElementById('doctorSelect');
      if (doctorSelect) {
        if (!doctorSelect.value) {
          showError(doctorSelect, 'Please select a specialist department.');
          isValid = false;
        } else {
          clearError(doctorSelect);
        }
      }

      // Show Custom Modal if validation passes
      if (isValid) {
        if (modal) {
          // Display values in modal summary
          const summaryName = document.getElementById('modalSummaryName');
          const summaryDate = document.getElementById('modalSummaryDate');
          const summaryDept = document.getElementById('modalSummaryDept');
          
          if (summaryName) summaryName.textContent = nameInput.value;
          if (summaryDate) summaryDate.textContent = dateInput.value;
          if (summaryDept) summaryDept.textContent = doctorSelect.options[doctorSelect.selectedIndex].text;
          
          modal.classList.add('open');
        }
        bookingForm.reset();
      }
    });

    // Helper: Show validation error
    function showError(inputElement, message) {
      const formGroup = inputElement.closest('.form-group');
      formGroup.classList.add('has-error');
      let errorDiv = formGroup.querySelector('.error-message');
      if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        formGroup.appendChild(errorDiv);
      }
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
    }

    // Helper: Clear validation error
    function clearError(inputElement) {
      const formGroup = inputElement.closest('.form-group');
      formGroup.classList.remove('has-error');
      const errorDiv = formGroup.querySelector('.error-message');
      if (errorDiv) {
        errorDiv.style.display = 'none';
      }
    }
  }

  // Close Success Modal
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
    
    // Close modal when clicking outside contents
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }
});
