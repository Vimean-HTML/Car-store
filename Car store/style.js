const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener('click', () => { const items = document.querySelectorAll('.container2');
    document.querySelector('.container1').appendChild(items[0]);
},);
$preve.addEventListener('click', () => { const items = document.querySelectorAll('.container2');
    document.querySelector('.container1').prepend(items[items.length - 1]);
},);

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navbar = document.querySelector(".nav-bar")
    navbar.classList.toggle("active")
}
