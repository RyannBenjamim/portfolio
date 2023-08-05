// ----------- MENU MOBILE ----------- //
const menu = document.querySelector('header nav ul');
const mobileBtn = document.querySelector('header nav .menu-mobile');
const mobileBtnImg = document.querySelector('header nav .menu-mobile i');

mobileBtn.addEventListener('click', function() {
    if (mobileBtnImg.getAttribute("class") == "fa-solid fa-bars") {
        mobileBtnImg.setAttribute("class", "fa-solid fa-circle-xmark");
    } else {
        mobileBtnImg.setAttribute("class", "fa-solid fa-bars")
    }
    
    menu.classList.toggle('active');
});