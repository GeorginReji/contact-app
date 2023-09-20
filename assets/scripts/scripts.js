let inputForm = document.querySelector('[data-display="new-contact"]');
let contactView = document.querySelector('[data-display="contact-view"]');
let btnNewContact = document.getElementById("btnCreateContact");
let btnCancel = document.getElementById("btn-cancel");

btnNewContact.addEventListener('click', (e) => {
    contactView.classList.replace('main-display','display-hidden');
    inputForm.classList.replace('display-hidden','main-form');
})

btnCancel.addEventListener('click', (e) => {
    contactView.classList.replace('display-hidden','main-display');
    inputForm.classList.replace('main-form','display-hidden');
})