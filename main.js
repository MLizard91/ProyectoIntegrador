// Navbar scroll effect
const navbarScrollEffect = () => {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
};

// Smooth scrolling for anchor links
const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Cerrar el menú móvil si está abierto
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });
};

// Activar elemento activo en navbar al hacer scroll
const activeNavLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 100) {
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
};

// Animaciones al hacer scroll
const scrollAnimations = () => {
  const animateOnScroll = (elements, animation) => {
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add(animation);
      }
    });
  };
  
  const animatedElements = document.querySelectorAll('.fade-in');
  window.addEventListener('scroll', () => {
    animateOnScroll(animatedElements, 'fade-in');
  });
  
  // Ejecutar una vez al cargar la página
  animateOnScroll(animatedElements, 'fade-in');
};

// Galería de proyectos interactiva
const initProjectGallery = () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.overlay').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.overlay').style.opacity = '0';
    });
    
    // Para dispositivos táctiles
    card.addEventListener('click', () => {
      card.querySelector('.overlay').style.opacity = 
        card.querySelector('.overlay').style.opacity === '1' ? '0' : '1';
    });
  });
};

// Formulario de contacto
const contactForm = () => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    try {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      
      // Aquí iría la lógica para enviar el formulario
      // Por ejemplo, usando Fetch API
      /*
      const response = await fetch('tu-endpoint', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) throw new Error('Error en el envío');
      */
      
      // Simulación de envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mostrar mensaje de éxito
      const successMsg = document.createElement('div');
      successMsg.className = 'alert alert-success mt-3';
      successMsg.textContent = 'Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.';
      form.appendChild(successMsg);
      
      // Resetear formulario
      form.reset();
      
      // Desplazarse al mensaje de éxito
      setTimeout(() => {
        successMsg.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
    } catch (error) {
      console.error('Error:', error);
      const errorMsg = document.createElement('div');
      errorMsg.className = 'alert alert-danger mt-3';
      errorMsg.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
      form.appendChild(errorMsg);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
};

// Inicializar todas las funciones
document.addEventListener('DOMContentLoaded', () => {
  navbarScrollEffect();
  smoothScroll();
  activeNavLink();
  scrollAnimations();
  initProjectGallery();
  contactForm();
  
  // Inicializar tooltips de Bootstrap
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});