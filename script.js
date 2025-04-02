// Script pour l'animation des articles dans la section "Actualités"
document.querySelectorAll('.news-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

const dropdowns = document.querySelectorAll('.dropdown');
const dropdown = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', () => {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        }
        else {
            menu.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        if (navMenu.style.display === "none" || navMenu.style.display === "") {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    });
});

document.querySelectorAll(".grid-item").forEach(div => {
    div.addEventListener("click", function () {
        window.location.href = this.getAttribute("data-url");
    });
});
