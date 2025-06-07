// ----- FORM POPUP FUNCTIONS -----
function openForm(){
    const formPopup = document.getElementById("myForm");
    const formBox = formPopup.querySelector('.form-box');
    formPopup.classList.add('is-active');
    document.body.classList.add('no-scroll');
    setTimeout(() => {
        if (formBox){
        formBox.classList.remove('transform-out');
        formBox.classList.add('transform-in');
        }
    }, 50);
}

function closeForm(){
    const formPopup = document.getElementById("myForm");
    const formBox = formPopup.querySelector('.form-box');
    if (formBox) {
        formBox.classList.remove('transform-in');
        formBox.classList.add('transform-out');
    }
    setTimeout(() => {
        formPopup.classList.remove('is-active');
        document.body.classList.remove('no-scroll');
    }, 700);
}

// ----- HAMBURGER MENU FUNCTIONS -----
document.addEventListener('DOMContentLoaded', (event) =>{
    const hamburg = document.getElementById('hamburg');
    const cancel = document.getElementById('cancel');
    const hamburgerPanel = document.getElementById('hamburgerPanel');
    const menuOverlay = document.getElementById('menuOverlay');
    const panelLinks = document.querySelectorAll('.panel-link');
    const emailContactForm = document.getElementById('emailContactForm');
    const exitIcon = document.getElementById('exit');
    function openHamburgerMenu() {
        hamburgerPanel.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    function closeHamburgerMenu() {
        hamburgerPanel.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    if (hamburg) {
        hamburg.addEventListener('click', openHamburgerMenu);
    }
    if (cancel) {
        cancel.addEventListener('click', closeHamburgerMenu);
    }
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeHamburgerMenu);
    }

    panelLinks.forEach(link => {
        link.addEventListener('click', closeHamburgerMenu);
    });

    if (exitIcon) {
        exitIcon.addEventListener('click', closeForm);
    }

    if (emailContactForm) {
        emailContactForm.addEventListener('submit', function(event) {
            if (!this.checkValidity()) {
                event.preventDefault();
                console.error('Please fill in all required fields.');
            }
        });
    }
});
