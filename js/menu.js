const menuToggle = document.querySelector("#menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

menuToggle.addEventListener("click", () => {
    const menuAberto =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
        "aria-expanded",
        String(!menuAberto)
    );

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Abrir menu" : "Fechar menu"
    );

    menuPrincipal.classList.toggle("menu-aberto");
});


const linksMenu = menuPrincipal.querySelectorAll(".nav-link");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );

        menuPrincipal.classList.remove("menu-aberto");
    });
});