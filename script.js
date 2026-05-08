const yearEls = document.querySelectorAll("#year");
yearEls.forEach(el => el.textContent = new Date().getFullYear());

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function parallaxUpdate(){
  const els = document.querySelectorAll("[data-parallax='true']");
  const y = window.scrollY || 0;
  els.forEach(el => {
    const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0.10");
    const offset = Math.round(y * speed);
    el.style.backgroundPosition = `center calc(50% + ${offset}px)`;
  });
  el.style.transform = `translate3d(0,0,0) scale(1.03)`;
}

const isMobile = window.matchMedia("(max-width: 720px)").matches;
if (!isMobile) {
  window.addEventListener("scroll", parallaxUpdate, { passive: true });
  window.addEventListener("load", parallaxUpdate);
}

const grid = document.getElementById("projectsGrid");
if (grid && window.PROJECTS) {
  const tag = getParam("tag");
  const list = tag
    ? window.PROJECTS.filter(p => (p.tags || []).some(t => t.toLowerCase() === tag.toLowerCase()))
    : window.PROJECTS;

  grid.innerHTML = list.map(p => {
    const pills = (p.tags || []).slice(0,4).map(t => `<span class="pill">${t}</span>`).join("");
    return `
      <a class="project-card" href="project.html?slug=${encodeURIComponent(p.slug)}">
        <div class="project-thumb" style="background-image:url('${p.thumb}')"></div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.preview}</p>
          <div class="pills">${pills}</div>
          <span class="readmore">Read more</span>
        </div>
      </a>
    `;
  }).join("");
}

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const heroes = Array.from(document.querySelectorAll('[data-parallax="true"]'));

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;

    heroes.forEach(hero => {
      const speed = parseFloat(hero.getAttribute('data-parallax-speed') || '0.12');

      const rect = hero.getBoundingClientRect();
      const heroTop = rect.top + y;
      const offset = (y - heroTop) * speed;

      hero.style.backgroundPosition = `center calc(35% + ${offset}px)`;

      const center = hero.querySelector('.hero-center');
      if (center) {
        const textOffset = (y - heroTop) * (speed * 1.9);
        center.style.transform = `translate3d(0, ${textOffset}px, 0)`;
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();

const root = document.getElementById("projectRoot");
if (root && window.PROJECTS) {
  const slug = getParam("slug");
  const p = window.PROJECTS.find(x => x.slug === slug) || window.PROJECTS[0];

  document.title = `${p.title} | Michael Gauthier`;

  const pills = (p.tags || []).map(t => `<span class="pill">${t}</span>`).join("");

  root.innerHTML = `
    <section class="hero thin" data-parallax="true" data-parallax-speed="0.10" style="background-image:url('${p.hero}'); background-position:center 35%;">
      <div class="hero-overlay"></div>
      <div class="wrap hero-content">
        <div class="hero-center">
          <h1 class="hero-title">${p.title}</h1>
          <p class="hero-sub">${p.intro || ""}</p>
          <div class="pills" style="justify-content:center;">${pills}</div>
        </div>
      </div>
    </section>

    <section class="surface">
      <div class="wrap section">
        ${(p.sections || []).map(s => `
          <div class="card" style="padding:18px; margin-bottom:14px;">
            <div style="font-weight:900; font-size:16px;">${s.title}</div>
            ${(s.paragraphs || []).map(par => `<div class="p-muted" style="margin-top:8px;">${par}</div>`).join("")}
          </div>
        `).join("")}

        <section class="footer">
          <div class="wrap footer-inner footer-3">
            <div class="footer-left">
              <a href="mailto:gauthier.mi@northeastern.edu">gauthier.mi@northeastern.edu</a>
              <span class="sep">|</span>
              <a href="https://www.linkedin.com/in/mgauthier1" target="_blank" rel="noopener">LinkedIn</a>
            </div>
            <div class="footer-center">Michael Gauthier Engineering Portfolio</div>
            <div class="footer-right">© <span id="year"></span></div>
          </div>
        </section>
      </div>
    </section>
  `;

  if (!isMobile) parallaxUpdate();
}

(function(){
  function buildTimelineYears(){
    const alt = document.querySelector(".timeline-alt");
    if(!alt) return;

    const rail = alt.querySelector(".timeline-years");
    if(!rail) return;

    rail.innerHTML = "";

    const rows = Array.from(alt.querySelectorAll(".timeline-row[data-year]"));
    if(!rows.length) return;

    const seen = new Set();

    rows.forEach(row => {
      const y = row.getAttribute("data-year");
      if(!y || seen.has(y)) return;
      seen.add(y);

      const r = row.getBoundingClientRect();
      const a = alt.getBoundingClientRect();
      const top = (r.top - a.top) + (r.height * 0.5);

      const el = document.createElement("div");
      el.className = "timeline-year-label";
      el.style.top = `${top}px`;
      el.textContent = y === "Present" ? "Present" : y;
      rail.appendChild(el);
    });
  }

  window.addEventListener("load", buildTimelineYears);
  window.addEventListener("resize", buildTimelineYears);
})();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const msg = document.getElementById("cMessage").value.trim();
    const subject = encodeURIComponent(`Message From Michael's Engineering Portfolio`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
    window.location.href = `mailto:gauthier.mi@northeastern.edu?subject=${subject}&body=${body}`;
  });
}
