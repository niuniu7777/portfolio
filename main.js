const revealTargets = document.querySelectorAll(".section, .work-card, .capability-card, .experience-item, .metric-wall article, .education-panel, .skills-panel, .contact-grid a");

revealTargets.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  },
);

revealTargets.forEach((element) => observer.observe(element));
