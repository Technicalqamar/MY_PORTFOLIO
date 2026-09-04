/* ============================================================
   1. PROJECT DATA — edit titles, descriptions, tech, urls,
      and image paths here
   ------------------------------------------------------------
   For each project you can update:
     - title:        project name
     - description:  short summary
     - tech:         array of technologies used
     - categories:   filter categories (react, javascript, htmlcss, firebase)
     - image:        path to the project screenshot in
                     assets/images/projects/  (empty string keeps placeholder)
     - liveUrl:      live demo URL (use YOUR_LIVE_PROJECT_URL as placeholder)
     - githubUrl:    repository URL (use YOUR_GITHUB_URL as placeholder)
   ============================================================ */
const PROJECTS = [
  {
    title: "PlayTube",
    description: "A YouTube-style responsive interface built with React, focusing on reusable components, responsive layouts, routing, and modern UI.",
    tech: ["React", "React Router", "CSS3"],
    categories: ["react", "javascript"],
    image: "./assets/images/projects/playtube.jpg",
    liveUrl: "YOUR_LIVE_PROJECT_URL",
    githubUrl: "YOUR_GITHUB_URL"
  },
  {
    title: "School Management System",
    description: "A modern school management interface with role-based dashboard concepts and responsive admin UI.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    categories: ["react", "firebase"],
    image: "./assets/images/projects/school-management.jpg",
    liveUrl: "YOUR_LIVE_PROJECT_URL",
    githubUrl: "YOUR_GITHUB_URL"
  },
  {
    title: "Training Institute Website",
    description: "A responsive multi-page training institute website built with modern frontend technologies and reusable UI components.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    categories: ["htmlcss", "javascript"],
    image: "./assets/images/projects/training-institute.jpg",
    liveUrl: "https://training-institute-mauve.vercel.app/",
    githubUrl: "https://github.com/Technicalqamar/Training-Institute.git"
  },
  {
    title: "Developer Productivity Suite",
    description: "A developer-focused productivity platform concept involving project generation and developer tooling workflows.",
    tech: ["React", "JavaScript", "REST API"],
    categories: ["react", "javascript"],
    image: "./assets/images/projects/developer-productivity-suite.jpg",
    liveUrl: "YOUR_LIVE_PROJECT_URL",
    githubUrl: "YOUR_GITHUB_URL"
  },
  {
    title: "Asset Management System",
    description: "A web-based asset management system designed to organize, track, and manage assets through a clean and responsive user interface.",
    tech: ["React"],
    categories: ["react"],
    image: "./assets/images/projects/asset-management.jpg",
    liveUrl: "https://hackathonproject-pink.vercel.app/",
    githubUrl: "https://github.com/Technicalqamar/Hackathon.git"
  }
];

/* ============================================================
   2. ASSIGNMENTS DATA — edit freely
   ============================================================ */
const ASSIGNMENTS = [
  {
    title: "Responsive Layout Practice",
    practiced: "Flexbox and Grid layouts across breakpoints",
    tech: ["HTML5", "CSS3"],
    githubUrl: "YOUR_GITHUB_URL"
  },
  {
    title: "React Component Exercise",
    practiced: "Props, state, and component composition",
    tech: ["React"],
    githubUrl: "YOUR_GITHUB_URL"
  },
  {
    title: "Firebase Auth Practice",
    practiced: "Email/password authentication flow",
    tech: ["React", "Firebase"],
    githubUrl: "YOUR_GITHUB_URL"
  },
  {
    title: "REST API Fetch Exercise",
    practiced: "Fetching and rendering external API data",
    tech: ["JavaScript", "REST API"],
    githubUrl: "YOUR_GITHUB_URL"
  },
  {
    title: "Bootstrap Landing Page",
    practiced: "Grid system and utility classes",
    tech: ["Bootstrap", "HTML5"],
    githubUrl: "YOUR_GITHUB_URL"
  },
  {
    title: "React Router Navigation",
    practiced: "Multi-page routing in a single-page app",
    tech: ["React", "React Router"],
    githubUrl: "YOUR_GITHUB_URL"
  }
];

/* ============================================================
   3. RENDER PROJECT CARDS
   ------------------------------------------------------------
   The thumbnail uses the project's local image (assets/images/
   projects/...) when provided, otherwise it falls back to a
   clearly labelled placeholder.
   ============================================================ */
function renderProjects(filter){
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  PROJECTS
    .filter(p => filter === 'all' || p.categories.includes(filter))
    .forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card reveal in-view';
      const thumb = p.image
        ? `<img src="${p.image}" alt="${p.title} project screenshot">`
        : `<span>Add screenshot to assets/images/projects/</span>`;
      card.innerHTML = `
        <div class="project-thumb">${thumb}</div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tech-tags">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
          <div class="project-actions">
            <a href="${p.liveUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Project</a>
            <a href="${p.githubUrl}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
}
renderProjects('all');

document.getElementById('filterBar').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.filter);
});

/* ============================================================
   4. RENDER ASSIGNMENT CARDS
   ============================================================ */
function renderAssignments(){
  const grid = document.getElementById('assignmentGrid');
  grid.innerHTML = ASSIGNMENTS.map(a => `
    <div class="assignment-card">
      <h4>${a.title}</h4>
      <p class="practiced">${a.practiced}</p>
      <div class="assignment-tags">${a.tech.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="assignment-links">
        <a href="${a.githubUrl}" target="_blank" rel="noopener">GitHub →</a>
      </div>
    </div>
  `).join('');
}
renderAssignments();

/* ============================================================
   5. NAVBAR SCROLL STATE
   ============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
  document.getElementById('scrollTopBtn').classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

/* ============================================================
   6. MOBILE MENU
   ============================================================ */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu(){
  hamburgerBtn.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerBtn.classList.toggle('open', isOpen);
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));

/* ============================================================
   7. ACTIVE NAV LINK ON SCROLL
   ============================================================ */
const sections = document.querySelectorAll('main section[id], main[id]');
const navAnchors = document.querySelectorAll('[data-nav]');

function setActiveNav(){
  let current = 'home';
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if(sec.offsetTop <= scrollPos) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

/* ============================================================
   8. SCROLL TO TOP
   ============================================================ */
document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   9. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(!reduceMotion && 'IntersectionObserver' in window){
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
}

/* ============================================================
   10. HERO CODE-WINDOW TYPING EFFECT (single signature animation)
   ============================================================ */
if(!reduceMotion){
  const words = ["React", "JavaScript", "Firebase", "Tailwind CSS"];
  const target = document.getElementById('typing-target');
  let wordIndex = 0, charIndex = words[0].length, deleting = false;

  function tick(){
    const word = words[wordIndex];
    if(!deleting){
      charIndex++;
      if(charIndex > word.length){
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      if(charIndex < 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
      }
    }
    target.textContent = word.slice(0, charIndex);
    setTimeout(tick, deleting ? 40 : 90);
  }
  setTimeout(tick, 1200);
}

/* ============================================================
   11. FOOTER YEAR
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();
