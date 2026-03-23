const Nav = document.querySelector(".NavBar");
const NavBtn = document.querySelectorAll(".NavBtn");
const SlideBtn = document.querySelectorAll(".SlideBtn");
const ThemeToggle = document.querySelector(".ThemeToggle");
const root = document.documentElement;
const sections = document.querySelectorAll("section");
const ExperienceBlock = document.querySelectorAll(".experienceBlock");
const SlideBar = document.querySelector(".SlideBar");
const Overlay = document.querySelector(".overlay");
const CloseBtn = document.querySelector(".Close");
const MenueToggle = document.querySelector(".MenueToggle");

let isScrollingManually = false;
const THEME_KEY = "Theme-Data"

ExperienceBlock.forEach((block) => {
    block.addEventListener("click", () => {
        block.style.height = block.style.height == "3.3rem" ? "auto" : "3.3rem";
    });
});

NavBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        NavBtn.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        isScrollingManually = true;
        setTimeout(() => {
            isScrollingManually = false;
        }, 600)
    });
});

SlideBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        ShowHideSlideBar("hide");
    });
});

MenueToggle.addEventListener("click", () => {
    ShowHideSlideBar("show");
});

Overlay.addEventListener("click", () => {
    ShowHideSlideBar("hide");
});

CloseBtn.addEventListener("click", () => {
    ShowHideSlideBar("hide");
});

function ShowHideSlideBar(Value)
{
    SlideBar.style.display = Value == "show" ? "block" : "none";  
    Overlay.style.display = Value == "show" ? "block" : "none";
}

window.addEventListener("scroll", () => {
    window.scrollY > 50 ? Nav.classList.add("scrolled") : Nav.classList.remove("scrolled");
    lastScrollY = window.scrollY;
});

ThemeToggle.addEventListener("click", () => {
    applyTheme(localStorage.getItem(THEME_KEY) == "dark" ? "light" : "dark");
});

function applyTheme(Theme)
{
    localStorage.setItem(THEME_KEY, Theme);
    root.setAttribute("data-theme", Theme);
    ThemeToggle.innerText = Theme == "dark" ? "Light Mode" : "Dark Mode";
}

const SectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(isScrollingManually)
            return;

        if (entry.isIntersecting){
            id = entry.target.id;

            NavBtn.forEach((btn) => {
                id == btn.getAttribute("href").substring(1) ? btn.classList.add("active") : btn.classList.remove("active");
            });
        }
    });
}, {threshold: 1});

sections.forEach((section) => {
    SectionsObserver.observe(section);
});

applyTheme(localStorage.getItem(THEME_KEY) || "light");