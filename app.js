// Objeto de datos
let contacts = [];

// Carga datos del localStorage al iniciar
if (localStorage.getItem("contacts")) {
    contacts = JSON.parse(localStorage.getItem("contacts"));
    displayContacts();
}

function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    contacts.push({name, phone});
    localStorage.setItem("contacts", JSON.stringify(contacts));
    displayContacts();
}

function displayContacts() {
    const list = document.getElementById('contact-list');
    list.innerHTML = "";
    JSON.parse(localStorage.getItem("contacts")).forEach((contact, index) => {
        list.innerHTML += `<li>${contact.name} - ${contact.phone} <button onclick="deleteContact(${index})" class="delete">Eliminar</button></li>`;
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    displayContacts();
}