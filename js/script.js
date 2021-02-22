const buttoNavResponsive = document.querySelector("#button_menu")
const iconNavResponsive = document.querySelector("#icon_menu")
const menuNavResponsive = document.querySelector("#menu_panel")

buttoNavResponsive.addEventListener("click",()=>{
    const navOpen = iconNavResponsive.getAttribute("src")
    if(navOpen==="./images/icon-close.svg"){
        iconNavResponsive.setAttribute("src","./images/icon-hamburger.svg") 
        menuNavResponsive.style.display = "none"
    }else{
        iconNavResponsive.setAttribute("src","./images/icon-close.svg")
        menuNavResponsive.style.display = "block"
    }
})