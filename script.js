const yearEls = document.querySelectorAll("#year");
yearEls.forEach(el => el.textContent = new Date().getFullYear());

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
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
    <section class="project-hero" style="background-image:url('${p.hero}')">
      <div class="hero-overlay"></div>
      <div class="wrap project-hero-content">
        <p class="kicker">${p.kicker || ""}</p>
        <h1 class="project-title">${p.title}</h1>
        <p class="project-intro">${p.intro || ""}</p>
        <div class="tags" style="margin-top:14px;">${tags}</div>
      </div>
    </section>

    <section class="project-content">
      <div class="wrap">
        <div class="block">
          <h2>What, how, results</h2>
          <div class="triad">
            <div class="mini">
              <h3>What</h3>
              <ul>${(p.what || []).map(x => `<li>${x}</li>`).join("")}</ul>
            </div>
            <div class="mini">
              <h3>How</h3>
              <ul>${(p.how || []).map(x => `<li>${x}</li>`).join("")}</ul>
            </div>
            <div class="mini">
              <h3>Results</h3>
              <ul>${(p.results || []).map(x => `<li>${x}</li>`).join("")}</ul>
            </div>
          </div>
        </div>

        ${(p.sections || []).map(s => `
          <div class="block">
            <h2>${s.title}</h2>
            ${(s.paragraphs || []).map(par => `<p>${par}</p>`).join("")}
          </div>
        `).join("")}
      </div>
    </section>

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
  `;
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
