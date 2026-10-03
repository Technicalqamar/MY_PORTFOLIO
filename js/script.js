/* ============================================================
   1. PROJECT DATA
   ------------------------------------------------------------
   Editable fields per project:
     - title        project name
     - description  what was actually built (keep it truthful)
     - tech         technologies genuinely used
     - layers       which parts of the stack it covers.
                    Valid keys: fe (frontend), be (backend),
                                 db (database), auth (authentication)
     - categories   filter tags: fullstack, frontend, backend, react
     - kind         'fullstack' | 'frontend' | 'backend' — drives the card badge
     - status       optional, e.g. 'In progress'
     - image        path to a screenshot in assets/images/projects/
                    (leave "" to show the labelled placeholder)
     - liveUrl      deployed URL, or "" while it isn't public
     - githubUrl    repository URL, or "" while it isn't public
   ============================================================ */
const PROJECTS = [
  {
    title: "Training Institute Website",
    description: "A responsive multi-page website for a training institute, built with HTML5, CSS3 and JavaScript, using Bootstrap for its grid and utility classes.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    layers: ["fe"],
    categories: ["frontend"],
    kind: "frontend",
    image: "./assets/images/projects/training-institute.jpg",
    liveUrl: "https://training-institute-mauve.vercel.app/",
    githubUrl: "https://github.com/Technicalqamar/Training-Institute.git"
  },
  {
    title: "Asset Management System",
    description: "A web-based system for organising, tracking and managing assets through a clean, responsive interface.",
    tech: ["React"],
    layers: ["fe"],
    categories: ["frontend", "react"],
    kind: "frontend",
    image: "./assets/images/projects/asset-management.jpg",
    liveUrl: "https://hackathonproject-pink.vercel.app/",
    githubUrl: "https://github.com/Technicalqamar/Hackathon.git"
  },
  {
    title: "PlayTube",
    description: "A YouTube-style video interface built in React, focused on reusable components, routing between views, and a layout that stays readable from a phone up to a wide desktop.",
    tech: ["React", "React Router", "CSS3"],
    layers: ["fe"],
    categories: ["frontend", "react"],
    kind: "frontend",
    image: "./assets/images/projects/playtube.jpg",
    liveUrl: "https://play-tube-orcin.vercel.app/",
    githubUrl: ""
  },
  {
    title: "School Management System",
    description: "A school management interface built around role-based dashboards in React and styled with Tailwind CSS. Firebase provides the authentication and the hosted data layer sitting behind it.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    layers: ["fe", "be", "db", "auth"],
    categories: ["fullstack", "frontend", "backend", "react"],
    kind: "fullstack",
    image: "./assets/images/projects/school-management.jpg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "Developer Productivity Suite",
    description: "A developer-focused productivity platform built in React, covering project generation and developer tooling workflows, with data brought in through a REST API.",
    tech: ["React", "JavaScript", "REST API"],
    layers: ["fe", "be"],
    categories: ["fullstack", "react"],
    kind: "fullstack",
    image: "./assets/images/projects/developer-productivity-suite.jpg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "React To-Do App",
    description: "A task manager built in React, covering component state, reusable inputs and list rendering as tasks are added, marked complete and removed.",
    tech: ["React"],
    layers: ["fe"],
    categories: ["frontend", "react"],
    kind: "frontend",
    image: "./assets/images/projects/react-todo-app.svg",
    liveUrl: "https://react-todo-app-topaz-nu.vercel.app/",
    githubUrl: ""
  },
  {
    title: "CRUD & Authentication API",
    description: "A backend-only REST API handling full CRUD operations alongside user authentication: registration and login with bcrypt-hashed passwords, JWT token generation, and middleware guarding protected routes.",
    tech: ["Node.js", "Express.js", "bcrypt", "JWT"],
    layers: ["be", "auth"],
    categories: ["backend"],
    kind: "backend",
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/Technicalqamar/CRUD-LOGIN.git"
  }
];

/* ============================================================
   2. ASSIGNMENTS DATA
   ------------------------------------------------------------
   Smaller exercises used to practise specific concepts.
   githubUrl may be "" or a "YOUR_GITHUB_URL" placeholder — either
   renders as plain text instead of a dead link.
   ============================================================ */
const ASSIGNMENTS = [
  {
    title: "Express REST CRUD",
    practiced: "Create, read, update and delete routes with request middleware",
    tech: ["Node.js", "Express.js", "REST APIs"],
    githubUrl: ""
  },
  {
    title: "Mongoose Data Modelling",
    practiced: "Defining MongoDB schemas, validation and queries with Mongoose",
    tech: ["MongoDB", "Mongoose"],
    githubUrl: ""
  },
  {
    title: "JWT Authentication Flow",
    practiced: "Login, token issue and protected routes behind auth middleware",
    tech: ["Node.js", "Express.js", "JWT"],
    githubUrl: ""
  },
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
   3. SHARED RENDER HELPERS
   ============================================================ */

/* Layer pills. Colour maps to the same palette used by the skills
   categories, so a project card and a skill chip read as the same layer. */
const LAYERS = {
  fe:   { label: 'Frontend', cls: 'layer-pill--fe' },
  be:   { label: 'Backend',  cls: 'layer-pill--be' },
  db:   { label: 'Database', cls: 'layer-pill--db' },
  auth: { label: 'Auth',     cls: 'layer-pill--db' }
};

const KIND_LABELS = { fullstack: 'Full-Stack', frontend: 'Frontend', backend: 'Backend' };

/* A link is only rendered when it is a real, absolute http(s) URL.
   This keeps placeholder and empty values from becoming dead anchors. */
function isUsableUrl(url){
  if(typeof url !== 'string') return false;
  const value = url.trim();
  return value !== '' && !value.includes('YOUR_') && /^https?:\/\//i.test(value);
}

function escapeHtml(value){
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(value).replace(/[&<>"']/g, char => entities[char]);
}

function renderLayerPills(layers){
  return (layers || [])
    .map(key => LAYERS[key])
    .filter(Boolean)
    .map(layer => `<span class="layer-pill ${layer.cls}">${layer.label}</span>`)
    .join('');
}

/* ============================================================
   4. RENDER PROJECT CARDS
   ------------------------------------------------------------
   The thumbnail uses the project's local image
   (assets/images/projects/...) when one is provided, otherwise it
   falls back to a clearly labelled placeholder.
   ============================================================ */
function renderProjects(filter){
  const grid = document.getElementById('projectGrid');
  const visible = PROJECTS.filter(p => filter === 'all' || p.categories.includes(filter));

  grid.innerHTML = '';

  if(visible.length === 0){
    grid.innerHTML = '<p class="project-empty">No projects in this category yet.</p>';
    return;
  }

  visible.forEach(project => {
    const isFullStack = project.kind === 'fullstack';
    const card = document.createElement('article');
    card.className = 'project-card reveal in-view' + (isFullStack ? ' is-fullstack' : '');

    const thumb = project.image
      ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project screenshot">`
      : `<span>Add screenshot to assets/images/projects/</span>`;

    const actions = [];
    if(isUsableUrl(project.liveUrl)){
      actions.push(
        `<a href="${escapeHtml(project.liveUrl)}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Project</a>`
      );
    }
    if(isUsableUrl(project.githubUrl)){
      actions.push(
        `<a href="${escapeHtml(project.githubUrl)}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub</a>`
      );
    }

    const actionsMarkup = actions.length
      ? `<div class="project-actions">${actions.join('')}</div>`
      : `<div class="project-note">Public links coming soon</div>`;

    const statusMarkup = project.status
      ? ` <span class="project-status">${escapeHtml(project.status)}</span>`
      : '';

    card.innerHTML = `
      <div class="project-thumb">
        <span class="project-kind">${escapeHtml(KIND_LABELS[project.kind] || 'Project')}</span>
        ${thumb}
      </div>
      <div class="project-body">
        <h3>${escapeHtml(project.title)}${statusMarkup}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="layer-pills">${renderLayerPills(project.layers)}</div>
        <div class="tech-tags">${project.tech.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}</div>
        ${actionsMarkup}
      </div>
    `;

    grid.appendChild(card);
  });
}
renderProjects('all');

document.getElementById('filterBar').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;

  document.querySelectorAll('.filter-btn').forEach(b => {
    const isActive = b === btn;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', String(isActive));
  });

  renderProjects(btn.dataset.filter);
});

/* Set the initial pressed state on the default filter. */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));
});

/* ============================================================
   5. RENDER ASSIGNMENT CARDS
   ============================================================ */
function renderAssignments(){
  const grid = document.getElementById('assignmentGrid');

  grid.innerHTML = ASSIGNMENTS.map(item => {
    const link = isUsableUrl(item.githubUrl)
      ? `<a href="${escapeHtml(item.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub →</a>`
      : `<span class="pending">Link coming soon</span>`;

    return `
      <div class="assignment-card">
        <h4>${escapeHtml(item.title)}</h4>
        <p class="practiced">${escapeHtml(item.practiced)}</p>
        <div class="assignment-tags">${item.tech.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
        <div class="assignment-links">${link}</div>
      </div>
    `;
  }).join('');
}
renderAssignments();

/* ============================================================
   6. NAVBAR SCROLL STATE
   ============================================================ */
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

/* ============================================================
   7. MOBILE MENU
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
   8. ACTIVE NAV LINK ON SCROLL
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
    const isActive = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', isActive);
    if(isActive){
      a.setAttribute('aria-current', 'true');
    } else {
      a.removeAttribute('aria-current');
    }
  });
}
window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

/* ============================================================
   9. SCROLL TO TOP
   ============================================================ */
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   10. SCROLL REVEAL (IntersectionObserver)
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
   11. HERO CODE-WINDOW TYPING EFFECT (single signature animation)
   ------------------------------------------------------------
   The target sits on the `frontend:` line, so only front-end
   technologies are cycled here.
   ============================================================ */
if(!reduceMotion){
  const words = ["React", "Next.js", "JavaScript"];
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
   12. FOOTER YEAR
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();
