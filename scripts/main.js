const earth = document.querySelector(".js_trait_earth")
const mars = document.querySelector(".js_trait_mars")
const space = document.querySelector(".js_trait_space")
const tittle_earth = document.querySelector(".js_tittle_earth")
const tittle_mars = document.querySelector(".js_tittle_mars")
const tittle_space = document.querySelector(".js_tittle_space")
const text_earth = document.querySelector(".js_text_earth")
const text_space = document.querySelector(".js_text_space")
const text_mars = document.querySelector(".js_text_mars")
const circle_mars = document.querySelector(".js_circle_mars")
const circle_space = document.querySelector(".js_circle_space")
const circle_earth = document.querySelector(".js_circle_earth")


circle_earth.addEventListener("mouseover", ()=> {
  earth.style.opacity = "1"
  tittle_space.style.opacity = "1"
  text_earth.style.opacity = "1"
})

circle_earth.addEventListener("mouseout", ()=> {
  earth.style.opacity = "0"
  tittle_space.style.opacity = "0"
  text_earth.style.opacity = "0"
})

circle_mars.addEventListener("mouseover", ()=> {
  mars.style.opacity = "1"
  tittle_mars.style.opacity = "1"
  text_mars.style.opacity = "1"
})

circle_mars.addEventListener("mouseout", ()=> {
  mars.style.opacity = "0"
  tittle_mars.style.opacity = "0"
  text_mars.style.opacity = "0"
})

circle_space.addEventListener("mouseover", ()=> {
  space.style.opacity = "1"
  tittle_earth.style.opacity = "1"
  text_space.style.opacity = "1"
})

circle_space.addEventListener("mouseout", ()=> {
  space.style.opacity = "0"
  tittle_earth.style.opacity = "0"
  text_space.style.opacity = "0"
})

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