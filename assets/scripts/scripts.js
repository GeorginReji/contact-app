let inputForm = document.querySelector('[data-display="new-contact"]');
let contactView = document.querySelector('[data-display="contact-view"]');
let btnNewContact = document.getElementById("btnCreateContact");
let btnCancel = document.getElementById("btn-cancel");
let contactDisplay = document.querySelector(".contact-wrapper");
let btnAddContact = document.getElementById("addcontact");
let noContactMsg = document.querySelector('[data-message]');
let singleContact = "";
let allContact = [];
const dName = document.getElementById('displayName');
const dPhno = document.getElementById('displayPhno');
class Person {
    constructor(firstName, lastName, phoneNo, description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNo = phoneNo;
        this.description = description; 
    }
    addContact() {
        noContactMsg.remove();
            let contact = ` <div class="contact-container" data-contact="${this.phoneNo}">
                            <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&format=svg" alt="">
                            <div class="contact-details">
                                <p>${this.firstName} ${this.lastName}</p>
                                <p>${this.phoneNo}</p>
                            </div>
                        </div>`
                        contactDisplay.innerHTML += contact;       
  
    }
}

function displayContact(obj) {
    contactView.classList.replace('display-hidden','main-display');
    inputForm.classList.replace('main-form','display-hidden');
    document.getElementById('displayName').value = obj.firstName.concat(" ",obj.lastName);
    document.getElementById('displayPhno').value = obj.phoneNo;
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
    const person = new Person(fname, lname, phno, desc);
    allContact.push(person);
    person.addContact(person);
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("phno").value = ""; 
    document.getElementById("desc").value = "";
});

contactDisplay.addEventListener('click', function(event) {
    if (event.target.matches('.contact-container')) {
        const clickedDiv = event.target;
        const contactValue = clickedDiv.getAttribute('data-contact');
        const selectObj = allContact.filter((item) => {
            if(item.phoneNo == contactValue) {
                return item;
            }
        })
        displayContact(selectObj[0]);
        console.log(selectObj);
        // console.log('Clicked div:', event,clickedDiv,contactValue);
    }   
});

document.getElementById('edit').addEventListener('click', () => {
    dName.disabled = false;
    dPhno.disabled = false;
    dName.style.borderBottom = '1px solid #ccc'
    dPhno.style.borderBottom = '1px solid #ccc'
    document.getElementById('btnSave').classList.replace("display-hidden", "btnAdd");
    document.getElementById('btnCancel').classList.replace("display-hidden", "btnAdd");
})

document.getElementById('btnCancel').addEventListener('click', () => {
    dName.disabled = true;
    dPhno.disabled = true;
    dName.style.borderBottom = 'none'
    dPhno.style.borderBottom = 'none'
    document.getElementById('btnSave').classList.replace("btnAdd", "display-hidden");
    document.getElementById('btnCancel').classList.replace("btnAdd", "display-hidden");
})

document.getElementById('btnSave').addEventListener('click', () => {
    
})