'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');


const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');



function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);




const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);



document.addEventListener("DOMContentLoaded", function () {
  // Selecciona los elementos del DOM
  const genreSelect = document.getElementById("genre");
  const yearSelect = document.getElementById("year");
  const moviesGrid = document.querySelector(".movies-grid");

  // Agrega un evento de cambio a los selectores
  genreSelect.addEventListener("change", updateMovies);
  yearSelect.addEventListener("change", updateMovies);

  // Función para actualizar las películas según los filtros
  function updateMovies() {
    const selectedGenre = genreSelect.value;
    const selectedYear = yearSelect.value;

    // Itera sobre todas las tarjetas de películas y muestra/oculta según los filtros
    const movieCards = moviesGrid.querySelectorAll(".movie-card");
    movieCards.forEach((card) => {
      const cardGenre = card.querySelector(".genre").innerText.toLowerCase();
      const cardYear = card.querySelector(".year").innerText;

      const genreMatch = selectedGenre === "all" || cardGenre === selectedGenre.toLowerCase();
      const yearMatch = selectedYear === "all" || cardYear === selectedYear;

      if (genreMatch && yearMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});

  
