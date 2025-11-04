// hamburger menu

let menuOpenButton = document.querySelector("header div> ul button");

menuOpenButton.addEventListener("click", openMenu)

function openMenu() {
  let deNav = document.querySelector("header div nav:last-of-type");
  deNav.classList.add("is-open");
}

let menuSluitButton = document.querySelector("header div nav:last-of-type button")

menuSluitButton.addEventListener("click", sluitMenu)

function sluitMenu() {
  
  let deNav = document.querySelector("header div nav:last-of-type")
  deNav.classList.remove("is-open")
}

// intersection observer header

const div = document.querySelector("div");
const FirstSection = document.querySelector("main section:nth-of-type(1)");

const observer = new IntersectionObserver(

  (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
            div.classList.add("transparent");
            
        } else {
            div.classList.remove("transparent");
        }
    },
    {
    }
);

observer.observe(FirstSection);