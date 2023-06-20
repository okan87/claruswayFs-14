const menuBtn = document.querySelector(".fa-bars");
const menuLinks = document.querySelector(".header__links");

menuBtn.addEventListener("click",()=>{
    menuLinks.classList.toggle("show");// toggle metodu varsa siler yoksa ekler. media-sm ekranlarda show classına css özellikleri yazdık.
})