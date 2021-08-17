//Navigation functionality
async function menu(clicked, clickedPage) {
    if (active === clicked) return;
    
    active.style.color = 'purple';
    active.style.backgroundColor = 'yellow';
    activePage.style.display = 'none';

    clicked.style.color = 'yellow';
    clicked.style.backgroundColor = 'purple';
    clickedPage.style.display = 'flex';

    active = clicked;
    activePage = clickedPage;

    return;
}

async function mouseHover(opt) {
    opt.addEventListener('mouseover', () => {
        opt.style.color = 'white';
        opt.style.backgroundColor = 'black';
        opt.style.boxShadow = '2px 2px 2px 2px white, -2px -2px 2px 2px white';
    })

    opt.addEventListener('mouseout', () => {
        if(active != opt) {
            opt.style.color = 'purple';
            opt.style.backgroundColor = 'yellow';
            opt.style.boxShadow = 'inset 2px 2px 2px 2px black, inset -2px -2px 2px 2px black';
        }
        else {
            opt.style.color = 'yellow';
            opt.style.backgroundColor = 'purple';
            opt.style.boxShadow = '2px 2px 2px 2px black, -2px -2px 2px 2px black';
        }
    })
    return;
}

//NavBar options
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const certificates = document.querySelector('.certificates');
const contacts = document.querySelector('.contacts');

//Article pages
const aboutPage = document.querySelector('.about-page');
const skillsPage = document.querySelector('.skills-page');
const certificatesPage = document.querySelector('.certificates-page');
const contactsPage = document.querySelector('.contacts-page');

//Non-active pages
aboutPage.style.display = 'none';
skillsPage.style.display = 'none';
certificatesPage.style.display = 'none';
contactsPage.style.display = 'none';

//Default Active Page
let active = about;
active.style.color = 'yellow';
active.style.backgroundColor = 'purple';
let activePage = aboutPage;
activePage.style.display = 'flex';

//Event listeners
about.addEventListener('click', () => menu(about, aboutPage));
skills.addEventListener('click', () => menu(skills, skillsPage));
certificates.addEventListener('click', () => menu(certificates, certificatesPage));
contacts.addEventListener('click', () => menu(contacts, contactsPage));

mouseHover(about);
mouseHover(skills);
mouseHover(certificates);
mouseHover(contacts);