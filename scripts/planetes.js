const hamburger = document.querySelector(".js_hamburger")
const menu_hamburger = document.querySelector(".js_menu_hamburger")
const croix = document.querySelector(".js_croix")
console.log(croix)

hamburger.addEventListener("click", ()=> {
  menu_hamburger.style.opacity = "1"
  menu_hamburger.style.zIndex = "5"
  hamburger.style.opacity = "0"
  hamburger.style.zIndex = "2"
  croix.style.opacity = "1"
  croix.style.zIndex = "6"
})
croix.addEventListener("click", ()=> {
  menu_hamburger.style.opacity = "0"
  menu_hamburger.style.zIndex = "1"
  hamburger.style.opacity = "1"
  hamburger.style.zIndex = "6"
  croix.style.opacity = "0"
  croix.style.zIndex = "2"
})
