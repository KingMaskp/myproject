
const nav = document.querySelector(".nav"),
    openmenu = document.querySelector(".OpenMenu"),
    closemenu = document.querySelector(".CloseMenu");
    openmenu.addEventListener('click', () => {
        nav.classList.add("openNav");
    });
    closemenu.addEventListener('click', () => {
        nav.classList.remove("openNav");
});

let up = document.querySelector(".up-to-page");
    window.onscroll = ()=>{
        this.scrollY >= 100 ? up.classList.add("show") : up.classList.remove("show"); 
};

up.onclick = ()=>{
    window.scrollTo({
       top:0,
       behavior:"smooth" 
    });
};