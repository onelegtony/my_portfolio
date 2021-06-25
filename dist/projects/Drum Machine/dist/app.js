/*
$buttons = $('.button');

$buttons.each(function() {
    $(this).on('click', function() {
        $data = $(this).attr('data-key');
        $sound = $(`audio[data-key='${$data}']`);
        $sound[0].pause();
        $sound[0].currentTime = 0;
        $sound[0].play();
        console.log($data);
        console.log($sound[0]);
    })
})
*/


// Select all buttons from the DOM.
const buttons = document.querySelectorAll('.button');

// Mouse and touch events for the buttons.
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = document.querySelector(`audio[data-key="${button.dataset.key}"]`);
        sound.currentTime = 0; // Reset timer before playing.
        sound.play();
        button.classList.add('button-press'); // Button animations.
        button.addEventListener('transitionend', () => {
            button.classList.remove('button-press');
        });

        const stripe = document.querySelector(`.stripes[data-key="${button.dataset.key}"]`); // Stripes animations.
        stripe.style.height = '100vh';
        stripe.addEventListener('transitionend', () => {
            stripe.style.height = '10px';
        });
    });
})


window.addEventListener('keydown', e => {
    const sound = document.querySelector(`audio[data-key="${e.code}"]`);
    sound.currentTime = 0;
    sound.play();
    boxPress(e); // Animations.
});

// Function that handles animations when the keyboard buttons are pressed.
const boxPress = e => {
    const buttonBox = document.querySelector(`.button[data-key="${e.code}"]`);
    buttonBox.classList.add('button-press'); // Button animations.
    buttonBox.addEventListener('transitionend', () => {
        buttonBox.classList.remove('button-press');
    });

    const stripe = document.querySelector(`.stripes[data-key="${e.code}"]`); // Stripes animations.
    stripe.style.height = '100vh';
    stripe.addEventListener('transitionend', () => {
        stripe.style.height = '10px';
    });
}

