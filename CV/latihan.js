// 1. Fitur Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
    hamburger.innerHTML = navMenu.classList.contains("active") ? "&#10005;" : "&#9776;";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.innerHTML = "&#9776;";
    });
  });
}

// 2. Fitur Tumpukan Foto Geser Saat Diklik
const fotoStack = document.getElementById("foto-stack");
const fotoItems = document.querySelectorAll(".foto-item");
let currentIndex = 0;

if (fotoStack && fotoItems.length > 0) {
  fotoStack.addEventListener("click", () => {
    const currentFoto = fotoItems[currentIndex];
    currentFoto.classList.add("keluar");
    currentFoto.classList.remove("active");

    currentIndex = (currentIndex + 1) % fotoItems.length;
    const nextIndex = (currentIndex + 1) % fotoItems.length;

    setTimeout(() => {
      fotoItems.forEach((foto) => {
        foto.classList.remove("active", "next", "keluar");
      });

      fotoItems[currentIndex].classList.add("active");
      fotoItems[nextIndex].classList.add("next");
    }, 250);
  });
}
