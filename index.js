const menubarIcon = document.getElementById("menubar_icon");
const menuIcon = document.getElementById("menu-icon");

menubarIcon?.addEventListener("click", () => {
    if (menuIcon?.className === "hidden") {
        menuIcon.classList.remove("hidden");
    }
    else{
        menuIcon.classList.add("hidden");
    }
});