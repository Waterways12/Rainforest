console.log("I'm running");
//Importing Express
// Elements on Document
const formContainer = document.getElementsByClassName('form-container')[0];
const headingContainer = document.getElementsByClassName('heading-container')[0];
const getNotifiedButton = document.getElementById('notifybutton');
const formText = document.getElementById('formtext');
const formInputs = document.getElementById('forminputs');
const formSubmit = document.getElementById('submitbutton');
const formExit = document.getElementById('formexit');

getNotifiedButton.addEventListener('click', () => {
    formContainer.style.display = 'flex';
    getNotifiedButton.style.display = 'none';
});

formExit.addEventListener('click', () => {
    getNotifiedButton.style.display = 'flex';
    formContainer.style.display = 'none';
});

formSubmit.addEventListener('click', () => {
    formText.innerHTML = "Thanks! We'll be in touch soon";
});