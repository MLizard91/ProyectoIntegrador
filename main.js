document.addEventListener('DOMContentLoaded', function() {
  
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      }
    });
  });

  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      this.classList.add('was-validated');
    }, false);
  }

  
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.addEventListener('touchstart', function() {
      this.classList.add('hover');
    });
    
    item.addEventListener('touchend', function() {
      this.classList.remove('hover');
    });
  });

 
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
function initMap() {
  const exactLocation = { 
    lat: 21.186935, 
    lng: -102.885587 
  };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: exactLocation,
    mapId: "YOUR_MAP_ID" 
  });

  new google.maps.Marker({
    position: exactLocation,
    map: map,
    title: "Akuun Arquitectos",
    icon: "./imagenes/marker.png" 
  });
}


<script async defer src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap&language=es®ion=MX"></script>
});