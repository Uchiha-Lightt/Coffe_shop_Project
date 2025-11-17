const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenubtn = document.querySelector(".submenu__btn");
const submenu = document.querySelector(".submenu");
const navopenbtn = document.querySelector(".nav-icon");
const navclosebtn = document.querySelector(".close-icon");
const menu = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

const shopmenu = document.querySelector(".shop-menu");
const shopiconclosebtn = document.querySelector(".shop-close-icon");
const shopiconopenbtn = document.querySelector(".shop-icon");


toggleThemeBtns.forEach(btn =>{
    btn.addEventListener("click",function(){
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

submenubtn.addEventListener("click" , (e)=>{

    e.currentTarget.parentElement.classList.toggle("text-orange-300");

    submenu.classList.toggle("submenu--open");
})



function closeNav() {
    menu.classList.remove("right-0");
    menu.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
}
function closeCart() {
    shopmenu.classList.remove("left-0");
    shopmenu.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
}


navopenbtn.addEventListener("click",() => {
    menu.classList.remove("-right-64");
    menu.classList.add("right-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeNav)
})
shopiconopenbtn.addEventListener("click",() => {
    shopmenu.classList.remove("-left-64");
    shopmenu.classList.add("left-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeCart)
})

navclosebtn.addEventListener("click", closeNav);
shopiconclosebtn.addEventListener("click", closeCart);