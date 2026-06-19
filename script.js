const DEFAULT_AVATAR = "avatar/avatar.png";

// Default Portfolio State
const DEFAULT_STATE = {
  name: "Ekam Wadhwa",
  tagline: "hi, i'm ekam wadhwa, a student constantly upgrading his skills",
  avatar: DEFAULT_AVATAR,
  badges: [
    { text: "founder- nexus", type: "hackclub" },
    { text: "student", type: "default" },
    { text: "hackclub", type: "default" }
  ],
  skillsTitle: "What can I Do?",
  skills: [
    {
      id: "web",
      title: "Web & Cloud Systems",
      subtitle: "HTML CSS JS| LINUX VM's",
      description: "creating responsive website and frontend development and using virtual machines on google cloud",
      tags: ["HTML5/CSS3", "JavaScript", "LINUX", "Cloud Dev"],
      class: "web",
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
    },
    {
      id: "hardware",
      title: "Embedded electronics",
      subtitle: "Hardware & Prototyping",
      description: "Designing physical projects, programming embedded systems,and making custom enclosures and pcb's for diffrent soc's and Single Board Computers",
      tags: ["SBCs", "Embedded C++", "circuit desing", "Electronics"],
      class: "hardware",
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><rect x="6" y="6" width="12" height="12" rx="2" ry="2"></rect><line x1="9" y1="1" x2="9" y2="2"></line><line x1="15" y1="1" x2="15" y2="2"></line><line x1="9" y1="22" x2="9" y2="23"></line><line x1="15" y1="22" x2="15" y2="23"></line><line x1="22" y1="9" x2="23" y2="9"></line><line x1="22" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="2" y2="9"></line><line x1="1" y1="15" x2="2" y2="15"></line></svg>`
    },
    {
      id: "design",
      title: "Graphics & Media",
      subtitle: "Photography & visual design",
      description: "Active graphic designer,photographer, editor videos, and running a small club called nexus",
      tags: ["Photography", "Graphic Design", "Color Grading", "leading"],
      class: "design",
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`
    }
  ],
  links: [
    {
      id: "insta",
      text: "Instagram",
      url: "https://instagram.com/_ekamwadhwa",
      type: "instagram",
      icon: "instagram"
    },
    {
      id: "github",
      text: "GitHub",
      url: "https://github.com/ekam-wadhwa1",
      type: "github",
      icon: "github"
    },
    {
      id: "email",
      text: "Email Me",
      url: "mailto:ekamwadhwa2004@gmail.com?cc=hi&subject=hello%20there&body=i%20saw%20your%20website%20i%20rate%20it%20%20%20%2F10",
      type: "email",
      icon: "email"
    },
    {
      id: "slack",
      text: "Slack Account",
      url: "https://hackclub.slack.com",
      type: "slack",
      icon: "slack"
    }
  ],
  footer: {
    credits: "Available for Projects",
    copyright: "© 2026 Ekam Wadhwa",
    pulseDot: true
  }
};

// Preset SVG library
const PRESET_ICONS = {
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  email: `<svg viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 3.921v-8.086l4.623 4.165zm1.547 1.391l3.83 3.45 3.83-3.45 6.096 5.73h-16.026l6.27-5.73zm5.83-1.391l4.623-4.165v8.086l-4.623-3.921zm-2-1.801l-10-9h20l-10 9z"/></svg>`,
  slack: `<svg viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1-2.52-2.52 2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.522H3.781a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.135 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.522-2.522V3.781a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.781 10.135a2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522zm0-1.262a2.528 2.528 0 0 1-2.522-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

// State manager
let portfolioState = null;

// Get dynamic icon code
function getLinkIcon(link) {
  if (link.customIcon && link.customIcon.startsWith('data:')) {
    return `<img src="${link.customIcon}" style="width: 20px; height: 20px; object-fit: contain; filter: brightness(0) invert(1);" />`;
  }
  if (link.icon && PRESET_ICONS[link.icon.toLowerCase()]) {
    return PRESET_ICONS[link.icon.toLowerCase()];
  }
  return PRESET_ICONS.globe;
}

// Mouse movement effect
const cursorHighlight = document.getElementById('cursorHighlight');
window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  document.documentElement.style.setProperty('--mouse-x', `${x}px`);
  document.documentElement.style.setProperty('--mouse-y', `${y}px`);
});

// Accordion Toggle for Skills
function toggleSkill(card) {
  const allCards = document.querySelectorAll('.skill-card');
  const isAlreadyActive = card.classList.contains('active');

  allCards.forEach(c => {
    c.classList.remove('active');
  });

  if (!isAlreadyActive) {
    card.classList.add('active');
  }
}

// Bind Magnetic Button Hover Physics
function initMagneticPhysics() {
  const magneticLinks = document.querySelectorAll('.social-link');

  magneticLinks.forEach(link => {
    link.addEventListener('mousemove', (e) => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const pullX = x * 0.35;
      const pullY = y * 0.35;
      
      link.style.transform = `translate(${pullX}px, ${pullY}px)`;
      
      const icon = link.querySelector('.social-icon-wrapper');
      if (icon) {
        icon.style.transform = `translate(${pullX * 0.2}px, ${pullY * 0.2}px) scale(1.05)`;
      }
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
      const icon = link.querySelector('.social-icon-wrapper');
      if (icon) {
        icon.style.transform = '';
      }
    });
  });
}

// Render the page from state
function renderPortfolio(state) {
  if (!state.avatar || state.avatar === "avatar.png") {
    state.avatar = DEFAULT_AVATAR;
  }

  // 1. Avatar
  const avatarImg = document.getElementById('avatarImg');
  if (avatarImg) {
    avatarImg.src = state.avatar;
    avatarImg.alt = state.name + " Avatar";
  }

  // 2. Name
  const nameTitle = document.getElementById('nameTitle');
  if (nameTitle) {
    nameTitle.textContent = state.name;
  }

  // 3. Badges
  const badgeRow = document.getElementById('badgeRow');
  if (badgeRow) {
    badgeRow.innerHTML = '';
    state.badges.forEach(badge => {
      const isHackclub = badge.type === 'hackclub' || badge.text.toLowerCase().includes('hackclub') || badge.text.toLowerCase().includes('nexus');
      const badgeSpan = document.createElement('span');
      badgeSpan.className = `badge ${isHackclub ? 'hackclub' : ''}`;
      
      if (isHackclub) {
        badgeSpan.innerHTML = `
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h512v512H0z" fill="none" />
            <path d="M461.3 119.5c-8.7-22.3-25.1-41-47.5-49.7L276.5 13.3c-13.1-5.1-27.9-5.1-41 0L98.2 69.8C75.8 78.5 59.4 97.2 50.7 119.5L1.1 246.6c-4.4 11.2-4.4 23.6 0 34.8l49.6 127.1c8.7 22.3 25.1 41 47.5 49.7l137.3 56.5c13.1 5.1 27.9 5.1 41 0l137.3-56.5c22.3-8.7 38.7-27.4 47.5-49.7l49.6-127.1c4.4-11.2 4.4-23.6 0-34.8L461.3 119.5zM256 128c70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128S185.3 128 256 128z" />
          </svg>
        `;
        badgeSpan.appendChild(document.createTextNode(' ' + badge.text));
      } else {
        badgeSpan.textContent = badge.text;
      }
      
      badgeRow.appendChild(badgeSpan);
    });
  }

  // 4. Tagline
  const taglineText = document.getElementById('taglineText');
  if (taglineText) {
    taglineText.textContent = state.tagline;
  }

  // 5. Skills Grid
  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid && state.skills) {
    skillsGrid.innerHTML = '';
    state.skills.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = `skill-card ${skill.class || 'web'}`;
      skillCard.addEventListener('click', () => toggleSkill(skillCard));
      
      if (skill.color) {
        skillCard.style.setProperty('--skill-color', skill.color);
      }
      
      skillCard.innerHTML = `
        <div class="skill-header">
          <div class="skill-title-block">
            <div class="skill-icon-wrap">
              ${skill.icon || PRESET_ICONS.globe}
            </div>
            <div>
              <div class="skill-title">${skill.title}</div>
              <div class="skill-subtitle">${skill.subtitle}</div>
            </div>
          </div>
          <div class="skill-chevron">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div class="skill-detail">
          <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">
            ${skill.description}
          </p>
          <div class="tech-tags">
            ${(skill.tags || []).map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;
      skillsGrid.appendChild(skillCard);
    });
  }

  // 6. Links
  const linksContainer = document.getElementById('linksContainer');
  if (linksContainer && state.links) {
    linksContainer.innerHTML = '';
    state.links.forEach(link => {
      const linkEl = document.createElement('a');
      linkEl.href = link.url;
      linkEl.target = "_blank";
      linkEl.rel = "noopener noreferrer";
      
      const hasPreset = ['instagram', 'github', 'email', 'slack'].includes(link.type ? link.type.toLowerCase() : '');
      if (hasPreset) {
        linkEl.className = `social-link ${link.type.toLowerCase()}`;
      } else {
        linkEl.className = `social-link dynamic`;
        
        const borderCol = link.borderColor || 'rgba(255, 255, 255, 0.2)';
        const glowCol = link.glowColor || 'rgba(255, 255, 255, 0.15)';
        const bgCol = link.bgColor || 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)';
        const textCol = link.textColor || 'var(--text-primary)';
        
        linkEl.style.setProperty('--dynamic-border', borderCol);
        linkEl.style.setProperty('--dynamic-glow', glowCol);
        linkEl.style.setProperty('--dynamic-bg', bgCol);
        linkEl.style.setProperty('--dynamic-text-color', textCol);
        linkEl.style.color = textCol;
      }
      
      linkEl.innerHTML = `
        <div class="social-left">
          <div class="social-icon-wrapper">
            ${getLinkIcon(link)}
          </div>
          <span>${link.text}</span>
        </div>
        <div class="social-arrow">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      `;
      linksContainer.appendChild(linkEl);
    });
  }

  // 7. Footer
  const portfolioFooter = document.getElementById('portfolioFooter');
  if (portfolioFooter && state.footer) {
    portfolioFooter.innerHTML = '';
    
    if (state.footer.credits) {
      const creditsDiv = document.createElement('div');
      creditsDiv.className = 'footer-credits';
      if (state.footer.pulseDot) {
        creditsDiv.innerHTML = `<span class="pulse-dot" aria-hidden="true"></span>${state.footer.credits}`;
      } else {
        creditsDiv.textContent = state.footer.credits;
      }
      portfolioFooter.appendChild(creditsDiv);
    }
    
    if (state.footer.copyright) {
      const copyDiv = document.createElement('div');
      copyDiv.textContent = state.footer.copyright;
      portfolioFooter.appendChild(copyDiv);
    }
  }

  // Bind hover actions
  initMagneticPhysics();
}

// Setup keyboard shortcut for redirecting to 404
window.addEventListener('keydown', (e) => {
  if (e.altKey && e.ctrlKey && e.shiftKey) {
    e.preventDefault();
    window.location.href = '404.html';
  }
});

// App Loader initialization
window.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('portfolioState');
  if (stored) {
    try {
      portfolioState = JSON.parse(stored);
      if (!portfolioState.avatar || portfolioState.avatar === "avatar.png") {
        portfolioState.avatar = DEFAULT_AVATAR;
        localStorage.setItem('portfolioState', JSON.stringify(portfolioState));
      }
    } catch (err) {
      console.error("Failed to parse portfolioState, using default", err);
      portfolioState = DEFAULT_STATE;
    }
  } else {
    portfolioState = DEFAULT_STATE;
    localStorage.setItem('portfolioState', JSON.stringify(DEFAULT_STATE));
  }

  if (!localStorage.getItem('portfolioPassword')) {
    localStorage.setItem('portfolioPassword', 'nexus2026');
  }

  renderPortfolio(portfolioState);

  setTimeout(() => {
    const skeleton = document.getElementById('skeletonLoader');
    const content = document.getElementById('portfolioContent');
    
    if (skeleton) {
      skeleton.style.display = 'none';
    }
    if (content) {
      content.style.display = 'block';
      setTimeout(() => {
        content.style.opacity = '1';
      }, 50);
    }
    
    console.log('%c Ekam Wadhwa - Personal Portfolio Loaded ', 'background: #ec3750; color: #fff; font-weight: bold; padding: 4px;');
  }, 800);
});
