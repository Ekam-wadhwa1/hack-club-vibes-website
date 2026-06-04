// Dynamic cursor glow highlight tracking
const cursorHighlight = document.getElementById('cursorHighlight');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  // Set custom properties for smooth CSS tracking
  document.documentElement.style.setProperty('--mouse-x', `${x}px`);
  document.documentElement.style.setProperty('--mouse-y', `${y}px`);
});

// Accordion Toggle for Skills
function toggleSkill(card) {
  const allCards = document.querySelectorAll('.skill-card');
  const isAlreadyActive = card.classList.contains('active');

  // Close all other skill cards first
  allCards.forEach(c => {
    c.classList.remove('active');
  });

  // Toggle current card
  if (!isAlreadyActive) {
    card.classList.add('active');
  }
}

// Magnetic Button Hover Physics
const magneticLinks = document.querySelectorAll('.social-link');

magneticLinks.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Magnetic pull strength (closer to 0 is weaker, 0.5 is moderate)
    const pullX = x * 0.35;
    const pullY = y * 0.35;
    
    // Smoothly shift link towards mouse
    link.style.transform = `translate(${pullX}px, ${pullY}px)`;
    
    // Shift icon slightly more for parallax depth
    const icon = link.querySelector('.social-icon-wrapper');
    if (icon) {
      icon.style.transform = `translate(${pullX * 0.2}px, ${pullY * 0.2}px) scale(1.05)`;
    }
  });
  
  link.addEventListener('mouseleave', () => {
    // Reset positions smoothly when mouse leaves
    link.style.transform = '';
    const icon = link.querySelector('.social-icon-wrapper');
    if (icon) {
      icon.style.transform = '';
    }
  });
});

// Log welcome info
console.log('%c Ekam Wadhwa - Personal Portfolio Loaded ', 'background: #ec3750; color: #fff; font-weight: bold; padding: 4px;');
