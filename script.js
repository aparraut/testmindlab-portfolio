/* =====================================================
   SCRIPT PRINCIPAL — TestMindLab Premium 2025
   - Animaciones suaves
   - Observer para fade-in
   - Hero con efecto sutil
===================================================== */

/* ========= 1. Fade-in con IntersectionObserver ========= */

document.addEventListener("DOMContentLoaded", () => {

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document.querySelectorAll(".fade-section").forEach(section => {
    observer.observe(section);
  });

});

/* ========= 2. Efecto sutil en el HERO (sin lag) ========= */

// El hero usa variables CSS para performance óptima.
const hero = document.getElementById("hero");

hero.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  // Actualizamos variables CSS — no recalcula estilos globales
  hero.style.setProperty("--mouse-x", `${x}%`);
  hero.style.setProperty("--mouse-y", `${y}%`);
});
