let inputForm = document.querySelector('[data-display="new-contact"]');
let contactView = document.querySelector('[data-display="contact-view"]');
let btnNewContact = document.getElementById("btnCreateContact");
let btnCancel = document.getElementById("btn-cancel");
let contactDisplay = document.querySelector(".contact-wrapper");
let btnAddContact = document.getElementById("addcontact");
let noContactMsg = document.querySelector('[data-message]');
let allContact = [];
const dName = document.getElementById('displayName');
const dPhno = document.getElementById('displayPhno');
class Person {
    constructor(id, firstName, lastName, phoneNo, description) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNo = phoneNo;
        this.description = description; 
    }
} 

function addContact(contacts) {
    let contactList ="";
    contacts.forEach(element => {
        let contact = ` <div class="contact-container" data-contact="${element.phoneNo}">
        <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&format=svg" alt="">
        <div class="contact-details">
            <p>${element.firstName} ${element.lastName}</p>
            <p>${element.phoneNo}</p>
        </div>
    </div>`
    contactList += contact 
    });  
    return contactList
}

// Display new contact form
btnNewContact.addEventListener('click', () => {
    contactView.classList.replace('main-display','display-hidden');
    inputForm.classList.replace('display-hidden','main-form');
}) 
// cancel New contact
btnCancel.addEventListener('click', () => {
    contactView.classList.replace('display-hidden','main-display');
    inputForm.classList.replace('main-form','display-hidden');
})

document.getElementById('phno').addEventListener('input', (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    e.target.value = numericValue;
})

// Display new contact sidebar
btnAddContact.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 10000);
    let fname = document.getElementById("fName").value; 
    let lname = document.getElementById("lName").value; 
    let phno = document.getElementById("phno").value; 
    let desc = document.getElementById("desc").value;
    const person = new Person(randomNum, fname, lname, phno, desc);
    allContact.push(person);
    const allList = addContact(allContact);
    console.log(allContact);
    contactDisplay.innerHTML = allList; 
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("phno").value = ""; 
    document.getElementById("desc").value = "";
});

// Display contact main
contactDisplay.addEventListener('click', function(event) {
    if (event.target.matches('.contact-container')) {
        const clickedDiv = event.target;
        const contactValue = clickedDiv.getAttribute('data-contact');
        const selectObj = allContact.filter((item) => {
            if(item.phoneNo == contactValue) {
                return item;
            }
        })
    contactView.classList.replace('display-hidden','main-display');
    inputForm.classList.replace('main-form','display-hidden');
    document.getElementById('hiddenId').value = selectObj[0].id;
    document.getElementById('displayName').value = selectObj[0].firstName.concat(" ",selectObj[0].lastName);
    document.getElementById('displayPhno').value = selectObj[0].phoneNo;
    }   
});

// Edit mode active
document.getElementById('edit').addEventListener('click', () => {
    dName.disabled = false;
    dPhno.disabled = false;
    dName.style.borderBottom = '1px solid #ccc'
    dPhno.style.borderBottom = '1px solid #ccc'
    document.getElementById('btnSave').classList.replace("display-hidden", "btnAdd");
    document.getElementById('btnCancel').classList.replace("display-hidden", "btnAdd");
})

// cancel Edit
document.getElementById('btnCancel').addEventListener('click', () => {
    dName.disabled = true;
    dPhno.disabled = true;
    dName.style.borderBottom = 'none'
    dPhno.style.borderBottom = 'none'
    document.getElementById('btnSave').classList.replace("btnAdd", "display-hidden");
    document.getElementById('btnCancel').classList.replace("btnAdd", "display-hidden");
})

document.getElementById('btnSave').addEventListener('click', () => {
const hiddenId =  document.getElementById('hiddenId').value;
 allContact.forEach((element) => {
       if(element.id == hiddenId) {
           element.firstName = dName.value.split(" ")[0];
           element.lastName = dName.value.split(" ")[1];
           element.phoneNo = dPhno.value;
       }
    })
    contactDisplay.innerHTML = addContact(allContact); 
    dName.disabled = true;
    dPhno.disabled = true;
    dName.style.borderBottom = 'none'
    dPhno.style.borderBottom = 'none'
    document.getElementById('btnSave').classList.replace("btnAdd", "display-hidden");
    document.getElementById('btnCancel').classList.replace("btnAdd", "display-hidden");
})

document.getElementById('delete').addEventListener('click', () => {
    console.log("Testing.....");
    const hiddenId =  document.getElementById('hiddenId').value;
    allContact = allContact.filter((element) => element.id != hiddenId);
    contactDisplay.innerHTML = addContact(allContact);
    contactView.classList.replace('main-display','display-hidden'); 
})

document.getElementById('search-input').addEventListener('input', (e) => {
    let searchKey = e.target.value;
    let sidebarList = allContact.filter((element) => element.firstName.includes(searchKey));
    // allContact = sidebarList;
    if (searchKey.length === 0) {
        contactDisplay.innerHTML = addContact(allContact);
    }
    else {
        contactDisplay.innerHTML = addContact(sidebarList);
    }
})