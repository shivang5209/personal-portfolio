const portfolio = {
  profile: {
    name: "Your Name",
    logo: "YN",
    intro: "Hey, I'm Your Name.",
    headline: "Product, UI/UX & Web Development",
    bio:
      "I craft polished interfaces, thoughtful brand systems, and fast web experiences that help digital products feel clear, useful, and memorable.",
    location: "Available worldwide",
    email: "hello@example.com",
    experience: "5+",
    socials: [
      { label: "GitHub", href: "https://github.com", icon: "GH" },
      { label: "LinkedIn", href: "https://linkedin.com", icon: "IN" },
      { label: "Email", href: "mailto:hello@example.com", icon: "@" }
    ]
  },
  nav: ["About", "Services", "Works", "Contact"],
  services: [
    {
      title: "Brand Identity",
      description: "Strategic visual systems built for clarity, recall, and growth.",
      icon: "*",
      variant: "chips",
      chips: ["Messaging", "Tone", "Visuals", "Launch", "Guidelines"]
    },
    {
      title: "UI/UX Design",
      description: "Interfaces that balance business goals with elegant user flows.",
      icon: "UI",
      variant: "mockup"
    },
    {
      title: "Web Experience",
      description: "Responsive websites with clean structure and immersive interactions.",
      icon: "WX",
      variant: "gallery"
    },
    {
      title: "Development",
      description: "Front-end builds with reusable components and precise details.",
      icon: "</>",
      variant: "orbit"
    }
  ],
  projects: [
    {
      title: "StudioFlow",
      category: "SaaS Dashboard",
      description: "A calm analytics dashboard for creative teams tracking work, revenue, and launches.",
      stack: ["React", "Design System", "Motion"],
      live: "#",
      source: "#"
    },
    {
      title: "NovaPay",
      category: "Fintech App",
      description: "A mobile-first payment experience with simplified onboarding and trust-led visuals.",
      stack: ["UX", "Prototype", "Brand"],
      live: "#",
      source: "#"
    },
    {
      title: "Orbit Labs",
      category: "Agency Website",
      description: "A high-conversion portfolio site with expressive case studies and fast loading.",
      stack: ["Vite", "CSS", "SEO"],
      live: "#",
      source: "#"
    }
  ],
  skills: [
    { name: "Figma", icon: "Fi" },
    { name: "React", icon: "Re" },
    { name: "UI Systems", icon: "UI" },
    { name: "Brand", icon: "Br" },
    { name: "Motion", icon: "Mo" },
    { name: "Frontend", icon: "FE" }
  ]
};

function slugify(label) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

function icon(value) {
  return `<span class="text-icon" aria-hidden="true">${value}</span>`;
}

function renderHeader() {
  return `
    <header class="nav-panel reveal">
      <a class="brand" href="#home" aria-label="Home">
        <span>${portfolio.profile.logo}</span>
        ${portfolio.profile.name}
      </a>
      <nav aria-label="Main navigation">
        ${portfolio.nav.map((item) => `<a href="#${slugify(item)}">${item}</a>`).join("")}
      </nav>
      <a class="nav-cta" href="#contact">
        <span>Get In Touch</span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </header>
  `;
}

function renderHero() {
  return `
    <section class="hero section-panel" id="home">
      <div class="hero-word" aria-hidden="true">DESIGNER</div>
      <div class="hero-copy reveal">
        <p class="eyebrow">${portfolio.profile.intro}</p>
        <h1>${portfolio.profile.headline}</h1>
        <p class="hero-text">${portfolio.profile.bio}</p>
        <div class="hero-actions">
          <a class="button primary" href="#works">View Work <span aria-hidden="true">&rarr;</span></a>
          <a class="button secondary" href="#contact">Start a Project</a>
        </div>
      </div>
      <div class="portrait-wrap reveal">
        <span class="floating-tag tag-one">Web design</span>
        <span class="floating-tag tag-two">UI systems</span>
        <div class="portrait">
          <img src="./assets/hero-cutout.png?v=6" alt="${portfolio.profile.name} portrait" />
          <div class="portrait-glow"></div>
        </div>
      </div>
      <div class="experience-card reveal">
        <span>Years Crafting Digital Products</span>
        <strong>${portfolio.profile.experience}</strong>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="about split-section reveal" id="about">
      <div>
        <p class="section-kicker">About</p>
        <h2>Design taste, development discipline, and a sharp eye for product clarity.</h2>
      </div>
      <div class="about-card">
        ${icon("OK")}
        <p>I move from idea to interface to production-ready front end, keeping the experience beautiful, responsive, and easy to maintain.</p>
        <span>${portfolio.profile.location}</span>
      </div>
    </section>
  `;
}

function renderServiceVisual(service) {
  if (service.variant === "chips") {
    return `<div class="chips-visual">${service.chips.map((chip) => `<span>${chip}</span>`).join("")}</div>`;
  }

  if (service.variant === "mockup") {
    return `
      <div class="mockup-visual">
        <div class="phone-card">
          ${icon("*")}
          <span>Launch-ready interface</span>
        </div>
      </div>
    `;
  }

  if (service.variant === "gallery") {
    return `<div class="gallery-visual"><span></span><span></span><span></span></div>`;
  }

  return `
    <div class="orbit-visual">
      ${portfolio.skills.slice(0, 4).map((skill) => `<span>${skill.icon}</span>`).join("")}
    </div>
  `;
}

function renderServices() {
  return `
    <section class="services" id="services">
      ${renderHeading("Services", "Focused ways I can help shape a digital product.")}
      <div class="service-grid">
        ${portfolio.services
          .map(
            (service, index) => `
              <article class="service-card ${service.variant} reveal">
                <div class="card-topline">
                  ${icon(service.icon)}
                  <span>0${index + 1}</span>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                ${renderServiceVisual(service)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderProjects() {
  return `
    <section class="projects" id="works">
      ${renderHeading("Works", "Selected project concepts ready to replace with your real work.")}
      <div class="project-grid">
        ${portfolio.projects
          .map(
            (project, index) => `
              <article class="project-card reveal">
                <div class="project-art art-${index + 1}">
                  <span>${project.category}</span>
                </div>
                <div class="project-body">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                  <div class="stack-list">
                    ${project.stack.map((item) => `<span>${item}</span>`).join("")}
                  </div>
                  <div class="project-links">
                    <a href="${project.live}">Live</a>
                    <a href="${project.source}">Source</a>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="contact section-panel reveal" id="contact">
      <div class="trusted-pill">${icon("Z")} Trusted by future collaborators</div>
      <h2>Let's create meaningful digital impact.</h2>
      <p>Replace the placeholder email and links with your real details, then use this section as the conversion point for clients, recruiters, or collaborators.</p>
      <a class="button primary contact-button" href="mailto:${portfolio.profile.email}">
        Start a Project <span aria-hidden="true">&rarr;</span>
      </a>
      <div class="social-row">
        ${portfolio.profile.socials
          .map(
            (social) => `
              <a href="${social.href}" aria-label="${social.label}">
                ${icon(social.icon)}
                <span>${social.label}</span>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderHeading(kicker, title) {
  return `
    <div class="section-heading reveal">
      <p class="section-kicker">${kicker}</p>
      <h2>${title}</h2>
    </div>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="footer reveal">
      <div class="footer-brand">
        <a class="brand" href="#home" aria-label="Back to top">
          <span>${portfolio.profile.logo}</span>
          ${portfolio.profile.name}
        </a>
        <p>Designer + Developer creating polished interfaces, brand systems, and fast web experiences.</p>
      </div>
      <div class="footer-links" aria-label="Footer navigation">
        ${portfolio.nav.map((item) => `<a href="#${slugify(item)}">${item}</a>`).join("")}
      </div>
      <div class="footer-meta">
        <a href="mailto:${portfolio.profile.email}">${portfolio.profile.email}</a>
        <span>&copy; ${year} ${portfolio.profile.name}. All rights reserved.</span>
      </div>
    </footer>
  `;
}

function mount() {
  document.getElementById("root").innerHTML = `
    <main class="site-shell">
      ${renderHeader()}
      ${renderHero()}
      ${renderAbout()}
      ${renderServices()}
      ${renderProjects()}
      ${renderContact()}
      ${renderFooter()}
    </main>
  `;
}

function animateReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

mount();
animateReveals();
