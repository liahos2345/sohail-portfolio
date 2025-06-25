/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


/*qualification*/

const tabs = document.querySelectorAll('[data-target]'),
    tabssContents = document.querySelectorAll('[data-content]')

tabs.forEach(tabs =>{
    tabs.addEventListener('click', () =>{
        const target = document.querySelector(tabs.dataset.target)

        tabssContents.forEach(tabssContents =>{ 
            tabssContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tabs.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*typing*/
const texts = ['Curious', 'IT Passionate', 'Helpful'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText =texts[count];
    letter = currentText.slice(0, ++index);


    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;

    }
    setTimeout(type,400);
}());


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
});

// Skills Accordion
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});


window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



for (var i = 0; i < 100; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('body').append(star);
}

// THUNDER EFFECT FOR DARK MODE

function createThunderBolt() {
    if (!document.body.classList.contains('dark-theme')) return;
    const boltsContainer = document.querySelector('.thunder-bolts');
    let bolt;
    if (Math.random() > 0.5) {
        // SVG zigzag bolt
        bolt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        bolt.setAttribute("width", "32");
        bolt.setAttribute("height", "80");
        bolt.setAttribute("viewBox", "0 0 32 80");
        bolt.style.position = "absolute";
        bolt.style.left = Math.random() * 90 + 'vw';
        bolt.style.top = (Math.random() * 80 + 5) + 'vh';
        bolt.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        bolt.style.opacity = "0.92";
        bolt.style.filter = "drop-shadow(0 0 16px #fff) drop-shadow(0 0 32px #6ec6ff)";
        bolt.style.zIndex = "9999";
        bolt.innerHTML = `<polyline points="16,0 10,30 22,40 12,60 20,80"
            style="fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:0.92;stroke-dasharray:6,2;filter: drop-shadow(0 0 8px #6ec6ff);" />`;
    } else {
        // Simple straight bolt
        bolt = document.createElement('div');
        bolt.className = 'thunder-bolt';
        bolt.style.left = Math.random() * 90 + 'vw';
        bolt.style.top = (Math.random() * 80 + 5) + 'vh';
        bolt.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
    }
    boltsContainer.appendChild(bolt);
    setTimeout(() => {
        bolt.remove();
    }, 700);
}

// Thunder loop: only in dark mode
let thunderInterval = null;
function startThunder() {
    if (thunderInterval) return;
    thunderInterval = setInterval(() => {
        if (Math.random() > 0.6) {
            createThunderBolt();
        }
    }, 400);
}
function stopThunder() {
    clearInterval(thunderInterval);
    thunderInterval = null;
    document.querySelectorAll('.thunder-bolt, .thunder-bolts svg').forEach(b => b.remove());
}

// Listen for dark mode toggle
function checkThunderMode() {
    if (document.body.classList.contains('dark-theme')) {
        startThunder();
    } else {
        stopThunder();
    }
}
checkThunderMode();
const observer = new MutationObserver(checkThunderMode);
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });


