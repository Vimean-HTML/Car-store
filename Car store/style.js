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
const sections =  document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav-bar a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link') 
        }
    })
}
window.addEventListener('scroll', scrollActive)
