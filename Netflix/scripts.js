
const elements = {
    blurDiv: document.getElementsByClassName('general-overlay')[0],
    loginForm: document.getElementsByClassName('log-in-form')[0],
    loginFormBtn: document.getElementsByClassName('sign-btn')[0],
    closeBtn: document.getElementsByClassName('close-form-btn')[0],
}

elements.loginFormBtn.addEventListener("click", signInHandler);
window.addEventListener('click', closeFormHandler);
elements.closeBtn.addEventListener('click', closeFormHandler);


function signInHandler(event) {
    event.stopPropagation();
    elements.blurDiv.style.display = 'block'
    elements.loginForm.style.display = 'flex'
}

function closeFormHandler(event) {
    let current_event = event.target;

    if (current_event == elements.closeBtn) {
        event.preventDefault();
        closeForm();
        return;
    }

    if (current_event == elements.loginForm || current_event.parentNode == elements.loginForm) {
        return;

    } else {
        closeForm();
    }

}


function closeForm() {
    if (elements.blurDiv.style.display == "block") {
        elements.blurDiv.style.display = "none"
        elements.loginForm.style.display = 'none'
    }
}