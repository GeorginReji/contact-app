let inputForm = document.querySelector('[data-display="new-contact"]');
let contactView = document.querySelector('[data-display="contact-view"]');
let btnNewContact = document.getElementById("btnCreateContact");
let btnCancel = document.getElementById("btn-cancel");
let contactDisplay = document.querySelector(".contact-wrapper");
let btnAddContact = document.getElementById("addcontact");
let noContactMsg = document.querySelector('[data-message]');

class Person {
    constructor(firstName, lastName, phoneNo, description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNo = phoneNo;
        this.description = description; 
    }
    showContact() {
        noContactMsg.remove();
        let contact = ` <div class="contact-container">
                            <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&format=svg" alt="">
                            <div class="contact-details">
                                <p>${this.firstName} ${this.lastName}</p>
                                <p>${this.phoneNo}</p>
                            </div>
                        </div>`
        contactDisplay.innerHTML += contact;
    }
    // viewContact() {
    //     let contactDis = ``
    // }
}
// Display new contact form
btnNewContact.addEventListener('click', (e) => {
    contactView.classList.replace('main-display','display-hidden');
    inputForm.classList.replace('display-hidden','main-form');
})
// cancel New contact
btnCancel.addEventListener('click', (e) => {
    contactView.classList.replace('display-hidden','main-display');
    inputForm.classList.replace('main-form','display-hidden');
})

document.getElementById('phno').addEventListener('input', (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    e.target.value = numericValue;
})

// Display new contact
btnAddContact.addEventListener('click', () => {
    let fname = document.getElementById("fName").value; 
    let lname = document.getElementById("lName").value; 
    let phno = document.getElementById("phno").value; 
    let desc = document.getElementById("desc").value;
    console.log(fname, lname, phno, desc); 
    const person = new Person(fname, lname, phno, desc);
    person.showContact();
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("phno").value = ""; 
    document.getElementById("desc").value = "";
})