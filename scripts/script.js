

let menuOpenButton = document.querySelector("header > ul button");

menuOpenButton.addEventListener("click", openMenu)

function openMenu() {
  let deNav = document.querySelector("header nav:last-of-type");
  deNav.classList.add("is-open");
}

let menuSluitButton = document.querySelector("header nav:last-of-type button")

menuSluitButton.addEventListener("click", sluitMenu)

function sluitMenu() {
  
  let deNav = document.querySelector("header nav:last-of-type")
  deNav.classList.remove("is-open")
}