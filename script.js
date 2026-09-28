const progress = document.getElementById("progress");
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / h) * 100}%`;
});

menu.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.animate(
        [{opacity:0, transform:"translateY(18px)"}, {opacity:1, transform:"translateY(0)"}],
        {duration:600, easing:"cubic-bezier(.2,.7,.2,1)", fill:"forwards"}
      );
      reveal.unobserve(e.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll(".card,.project-feature,.timeline-item,.fact,.skill-group,.edu-card").forEach(el => {
  el.style.opacity = "0";
  reveal.observe(el);
});
