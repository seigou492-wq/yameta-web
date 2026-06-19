const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.getElementById("currentYear").textContent = new Date().getFullYear();

// Frosted header once the user scrolls past the hero top.
const siteHeader = document.querySelector(".site-header");
if (siteHeader) {
  const syncHeader = () => siteHeader.classList.toggle("scrolled", window.scrollY > 40);
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}
