//Globals
const lightModeButton = document.querySelector('.bulb-on');
const darkModeButton = document.querySelector('.bulb-off');


//Changing color mode from dark to light.
const lightModeToggle = () => {
    document.querySelector('.landing-page').classList.add('light-mode-one');
    document.querySelector('.landing-page').classList.remove('dark-mode-one');

    document.querySelector('.about-page').classList.add('light-mode-two');
    document.querySelector('.about-page').classList.remove('dark-mode-two');
    document.querySelector('.about-title').classList.add('light-mode-one');
    document.querySelector('.about-title').classList.remove('dark-mode-one');
    document.querySelector('.about-title').classList.add('shadow-light');
    document.querySelector('.about-title').classList.remove('shadow-dark');

    document.querySelector('.portfolio-page').classList.add('light-mode-one');
    document.querySelector('.portfolio-page').classList.remove('dark-mode-one');
    document.querySelector('.portfolio-title').classList.add('light-mode-two');
    document.querySelector('.portfolio-title').classList.remove('dark-mode-two');
    document.querySelector('.portfolio-text').style.color = '';

    document.querySelector('.contact-page').classList.add('light-mode-two');
    document.querySelector('.contact-page').classList.remove('dark-mode-two');
    document.querySelector('.contact-title').classList.add('light-mode-one');
    document.querySelector('.contact-title').classList.remove('dark-mode-one');
    document.querySelector('.contact-title').classList.add('shadow-light');
    document.querySelector('.contact-title').classList.remove('shadow-dark');
    document.querySelector('.form-box').classList.add('light-mode-one');
    document.querySelector('.form-box').classList.remove('dark-mode-one');
    
    // Changing text color for skill cards and  title.
    const textColors = document.getElementsByClassName('text-color');
    for (let i = 0; i < textColors.length; i++) {
        textColors[i].classList.remove('dark-mode-text');
    };

    const skillsBoxes = document.getElementsByClassName('boxes');
    for (let i = 0; i < skillsBoxes.length; i++) {
        skillsBoxes[i].classList.remove('shadow-dark');
    };
}

//Changing color mode from light to dark.
const darkModeToggle = () => {
    document.querySelector('.landing-page').classList.add('dark-mode-one');
    document.querySelector('.landing-page').classList.remove('light-mode-one');

    document.querySelector('.about-page').classList.add('dark-mode-two');
    document.querySelector('.about-page').classList.remove('light-mode-two'); 
    document.querySelector('.about-title').classList.add('dark-mode-one');
    document.querySelector('.about-title').classList.remove('light-mode-one');
    document.querySelector('.about-title').classList.add('shadow-dark');
    document.querySelector('.about-title').classList.remove('shadow-light');

    document.querySelector('.portfolio-page').classList.add('dark-mode-one');
    document.querySelector('.portfolio-page').classList.remove('light-mode-one');
    document.querySelector('.portfolio-title').classList.add('dark-mode-two');
    document.querySelector('.portfolio-title').classList.remove('light-mode-two');
    document.querySelector('.portfolio-text').style.color = 'white';

    document.querySelector('.contact-page').classList.add('dark-mode-two');
    document.querySelector('.contact-page').classList.remove('light-mode-two');
    document.querySelector('.contact-title').classList.add('dark-mode-one');
    document.querySelector('.contact-title').classList.remove('light-mode-one');
    document.querySelector('.contact-title').classList.add('shadow-dark');
    document.querySelector('.contact-title').classList.remove('shadow-light');
    document.querySelector('.form-box').classList.add('dark-mode-one');
    document.querySelector('.form-box').classList.remove('light-mode-one');

    // Changing text color for skill cards and  title.
    const textColors = document.getElementsByClassName('text-color');
    for (let i = 0; i < textColors.length; i++) {
        textColors[i].classList.add('dark-mode-text');
    };

    const skillsBoxes = document.getElementsByClassName('boxes');
    for (let i = 0; i < skillsBoxes.length; i++) {
        skillsBoxes[i].classList.add('shadow-dark');
    };
}


export { lightModeButton, darkModeButton, lightModeToggle, darkModeToggle };