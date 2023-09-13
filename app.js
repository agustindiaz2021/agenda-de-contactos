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

function displayContacts(contactList = contacts) {
    const list = document.getElementById('contact-list');
    list.innerHTML = "";
    contactList.forEach((contact, idx) => {
        const originalIndex = contacts.indexOf(contact);
        list.innerHTML += `<li>${contact.name} - ${contact.phone} 
                          <button onclick="editContact(${originalIndex})" class="editar">Editar</button>
                          <button onclick="deleteContact(${originalIndex})" class="delete">Eliminar</button>
                          </li>`;
    });
}

function searchContact() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm));
    displayContacts(filteredContacts);
}


function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    displayContacts();
}

function editContact(index) {
    const newName = prompt("Editar Nombre:", contacts[index].name);
    const newPhone = prompt("Editar Teléfono:", contacts[index].phone);

    if (newName && newPhone) {
        contacts[index] = {name: newName, phone: newPhone};
        localStorage.setItem("contacts", JSON.stringify(contacts));
        displayContacts();
    }
}

function searchContact() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm));
    displaySearchedContacts(filteredContacts);
}

function displaySearchedContacts(filteredContacts) {
    const list = document.getElementById('contact-list');
    list.innerHTML = "";
    filteredContacts.forEach((contact, index) => {
        list.innerHTML += `<li>${contact.name} - ${contact.phone} 
                          <button onclick="editContact(${index})" class="editar">Editar</button>
                          <button onclick="deleteContact(${index})" class="delete">Eliminar</button>
                          </li>`;
    });
}