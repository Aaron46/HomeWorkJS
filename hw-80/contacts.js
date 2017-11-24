(function () {
    "use strict";

    var contactTable = get("contactTable"),
        contacts = [];
    var add = get("add");
    var form = get("theForm");
    var first = get("firstName");
    var last = get("lastName");
    var email = get("inputEmail");
    var phone = get("phone");

    function get(id) {
        return document.getElementById(id);
    }

    function addContact() {
        var contact = {
            firstName: first.value,
            lastName: last.value,
            email: email.value,
            phone: phone.value
        };

        contacts.push(contact);

        if (contacts.length === 1) {
            contactTable.deleteRow(1);
        }

        var row = contactTable.insertRow();
        var firstNameCell = row.insertCell();
        var lastNameCell = row.insertCell();
        var emailCell = row.insertCell();
        var phoneCell = row.insertCell();

        firstNameCell.innerHTML = contact.firstName;//first.value;
        lastNameCell.innerHTML = contact.lastName;//last.value;
        emailCell.innerHTML = contact.email;//email.value;
        phoneCell.innerHTML = contact.phone;//phone.value;
    }
    add.addEventListener("click", addContact);
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });
})()