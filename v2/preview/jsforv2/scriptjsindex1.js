const openWebmenuBtn = document.getElementById("openModal");
const closeWebmenuBtn = document.getElementById("closeWebmenu");
const webmenu = document.getElementById("nav-menu-popup");

openWebmenuBtn.addEventListener("click", () => {
    webmenu.classList.add("open");
});

closeWebmenuBtn.addEventListener("click", () => {
    webmenu.classList.remove("open");
});