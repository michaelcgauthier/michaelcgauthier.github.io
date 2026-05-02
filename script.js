const yearEls = document.querySelectorAll("#year");
yearEls.forEach(el => el.textContent = new Date().getFullYear());

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
}

function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function parallaxUpdate(){
  const els = document.querySelectorAll("[data-parallax='true']");
  const y = window.scrollY || 0;
  els.forEach(el => {
    const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0.18");
    const offset = Math.round(y * speed);
    el.style.backgroundPosition = `center calc(50% + ${offset}px)`;
  });
}

const isMobile = window.matchMedia("(max-width: 720px)").matches;
if (!isMobile) {
  window.addEventListener("scroll", parallaxUpdate, { passive: true });
  window.addEventListener("load", parallaxUpdate);
}

const grid = document.getElementById("projectsGrid");
if (grid && window.PROJECTS) {
  grid.innerHTML = window.PROJECTS.map(p => {
    const tags = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
    return `
      <a class="project-card" href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="project-thumb" style="background-image:url('${p.cover}')"></div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.preview}</p>
          <div class="tags">${tags}</div>
          <span class="readmore">Read more</span>
        </div>
      </a>
    `;
  }).join("");
}

const root = document.getElementById("projectRoot");
if (root && window.PROJECTS) {
  const id = getParam("id");
  const p = window.PROJECTS.find(x => x.id === id) || window.PROJECTS[0];

  document.title = `${p.title} | Michael Gauthier`;
  const tags = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");

  root.innerHTML = `
    <section class="hero thin" data-parallax="true" data-parallax-speed="0.18" style="background-image:url('${p.hero}');">
      <div class="hero-overlay"></div>
      <div class="wrap hero-content">
        <div class="hero-center">
          <h1>${p.title}</h1>
          <p>${p.intro || ""}</p>
          <div class="tags" style="justify-content:center; margin-top:16px;">${tags}</div>
        </div>
      </div>
    </section>

    <section class="light">
      <div class="wrap section">
        ${(p.sections || []).map(s => `
          <div class="bullet" style="margin-bottom:14px;">
            <div class="b-title">${s.title}</div>
            ${(s.paragraphs || []).map(par => `<div class="b-text" style="margin-top:8px;">${par}</div>`).join("")}
          </div>
        `).join("")}
      </div>

      <section class="footer">
        <div class="wrap footer-inner">
          <div>
            <div class="footer-name">Michael Gauthier</div>
            <div class="footer-links">
              <a href="mailto:gauthier.mi@northeastern.edu">gauthier.mi@northeastern.edu</a>
              <span class="sep">|</span>
              <a href="https://www.linkedin.com/in/mgauthier1" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
          <div class="muted">© <span id="year"></span></div>
        </div>
      </section>
    </section>
  `;
  if (!isMobile) parallaxUpdate();
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const msg = document.getElementById("cMessage").value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
    window.location.href = `mailto:gauthier.mi@northeastern.edu?subject=${subject}&body=${body}`;
  });
}
