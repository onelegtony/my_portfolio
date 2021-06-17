// Imports from modules.
import { socialsToggle, modesToggle, closeSocials, closeModes, openSocialsFunction, closeSocialsFunction, openModesFunction, closeModesFunction } from './modules/menus.js';
import { lightModeButton, darkModeButton, lightModeToggle, darkModeToggle } from './modules/color_modes.js'


// Opening menu with socials.
socialsToggle.addEventListener('click', openSocialsFunction);
// Closing menu with socials.
closeSocials.addEventListener('click', closeSocialsFunction);

// Opening menu with site modes.
modesToggle.addEventListener('click', openModesFunction);
// Closing menu with site modes.
closeModes.addEventListener('click', closeModesFunction);


// Changing color modes.
lightModeButton.addEventListener('click', lightModeToggle); // Switch to light.
darkModeButton.addEventListener('click', darkModeToggle); // Switch to dark.

// Automatically change color mode depending on time of the day.
const dateNow = new Date();
const hourNow = dateNow.getHours();

if (hourNow >= 8 && hourNow < 20) {
    lightModeToggle();
} else if (hourNow >= 20 || hourNow < 8) {
    darkModeToggle();
}




const projectBoxes = document.querySelectorAll('.projects');
const projectImage = document.querySelectorAll('.portfolio-img-ctr');

projectBoxes.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        box.firstElementChild.style.opacity = 1;
        setTimeout(() => { // This prevents the invisible buttons with links to be clicked by accident on mobile devices.
            box.firstElementChild.style.display = 'flex';
        }, 100);
        projectImage[index].style.transform = 'scale(1.2)';
    })
    box.addEventListener('mouseout', () => {
        box.firstElementChild.style.opacity = 0;
        setTimeout(() => {
            box.firstElementChild.style.display = 'none';
        }, 100);
        projectImage[index].style.transform = 'scale(1)';
    })
})


// Form submission script.
const form = document.querySelector('#my-form');

const handleSubmit = async(event) => {
    event.preventDefault();
    const statusSuccess = document.querySelector('.message-sent');
    const statusError = document.querySelector('.message-sent');
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => { //Try working with response as well, don't just leave it unused.
        statusSuccess.classList.remove('hidden');
        setTimeout(() => {
            statusSuccess.classList.add('hidden');
        }, 2000);
        form.reset();
    }).catch(error => { //Try working with error as well
        statusError.classList.remove('hidden');
        setTimeout(() => {
            statusError.classList.add('hidden');
        }, 2000);
    });
}

form.addEventListener('submit', handleSubmit);







