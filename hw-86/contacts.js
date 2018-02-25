/*global $*/
(function () {
    "use strict";
    var addJson;
    var objectAgain;
    var contacts = [];
    var contactTable = $("#contactTable tbody");
    var firstNameInput = $("#first");
    var lastNameInput = $("#last");
    var emailInput = $("#email");
    var phoneInput = $("#phone");
    var addContactForm = $("#addContactForm");
    var load = $("#load");
    var theRow;


    function addWjson() {
        // $.get("json.js", function (loadedData) {
        //     console.log(loadedData);
        //     objectAgain = JSON.parse(loadedData);
        //     console.log(objectAgain);//see in console;
        //     objectAgain.forEach(addContact);
        // })
        $.getJSON("json.js", function (loadedData) {
            console.log(objectAgain);//see in console;
            loadedData.forEach(addContact);
        }).fail(function (xhr, statusCode, statusText) {
            alert("error: " + statusText);
            console.log(xhr, statusCode, statusText);
        });

        // return this;
    }
    function addContact(contact) {
        contacts.push(contact);

        if (contacts.length === 1) {
            contactTable.empty();
        }

        theRow = $('<tr>' +
            '<td>' + contact.firstName + '</td>' +
            '<td>' + contact.lastName + '</td>' +
            '<td>' + contact.email + '</td>' +
            '<td>' + contact.phone + '</td>' +
            '<td><button>delete</button></td>' +
            '</tr>'
        ).appendTo(contactTable);


        theRow.find('button').click(function () {
            $.post('http://localhost:808/pcs/javascript/HomeWorkJS/hw-86/deleteContact.php', { id: contact.id }, function () {
                // $.post('deleteContact.php', { id: contact.id }, function () {
                theRow.remove();
            }).fail(function (jqxhr) {
                pcs.messagebox.show("Error: " + jqxhr.responseText);
            });
        });
    }


    function hideAddContactForm() {
        addContactForm.slideUp();
        addContactForm[0].reset();
    }

    addContactForm.on("submit", function (event) {
        var newContact = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            email: emailInput.val(),
            phone: phoneInput.val()
        };
        $.post('http://localhost:808/pcs/javascript/HomeWorkJS/hw-86/addContact.php', newContact, function () {
            // $.post('addContact.php', newContact, function () {
            addContact(newContact);
            hideAddContactForm();
        });

        event.preventDefault();
    });

    $("#cancel").click(hideAddContactForm);

    $("#add").click(function () {
        addContactForm.slideDown();
    });
    $("#addJsonContacts").click(addWjson);
    load.click(function () {
        $.get('http://localhost:808/pcs/javascript/HomeWorkJS/hw-86/getContacts.php', function (loadedContacts) {
            // $.get('getContacts.php', function (loadedContacts) {
            console.log(loadedContacts);
            objectAgain = JSON.parse(loadedContacts);
            objectAgain.forEach(addContact);
        });
    });
}());