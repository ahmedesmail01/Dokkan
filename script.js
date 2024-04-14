const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/* show menu */

navToggle.addEventListener("click", () => {
	navMenu.classList.add("show_menu");
});

navClose.addEventListener("click", () => {
	navMenu.classList.remove("show_menu");
});

/* show search */
const search = document.getElementById("search"),
	searchButton = document.getElementById("search-btn"),
	searchClose = document.getElementById("search-close");

searchButton.addEventListener("click", () => {
	search.classList.add("show_search");
});

searchClose.addEventListener("click", () => {
	search.classList.remove("show_search");
});

/* show login form */

const login = document.getElementById("login"),
	loginButton = document.getElementById("login-btn"),
	loginClose = document.getElementById("login-close");

loginButton.addEventListener("click", () => {
	login.classList.add("show_login");
});

loginClose.addEventListener("click", () => {
	login.classList.remove("show_login");
});
