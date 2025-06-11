// Animación al hacer scroll usando IntersectionObserver
const elementosAnimados = document.querySelectorAll(".card, .venta, .contacto");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

elementosAnimados.forEach(el => observer.observe(el));

// Modal de confirmación al enviar el formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío real

  const modal = new bootstrap.Modal(document.getElementById("mensajeModal"));
  modal.show();

  // Opcional: resetear formulario
  this.reset();
});
