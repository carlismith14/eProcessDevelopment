const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav_li')

navToggle.addEventListener('click', function(){
    nav.classList.toggle('active');
});




const removeActive = function(){
    nav.classList.remove('active');
}

navLink.forEach(link => link.addEventListener('click', function(){
    
    setTimeout(removeActive, 500);
    
}));