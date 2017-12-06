/*global $*/
(function () {
    "use strict";
    var addJson;
    var objectAgain;
    var contactTable = $("#contactTable");
    var contacts = [];
    var firstNameInput = $("#first");
    var lastNameInput = $("#last");
    var emailInput = $("#email");
    var phoneInput = $("#phone");
    var addContactForm = $("#addContactForm");


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

        return this;
    }
    function addContact(contact) {
        contacts.push(contact);


        if (contacts.length === 1) {
            contactTable.empty();
        }

        contactTable.append(
            '<tr>' +
            '<td>' + contact.firstName + '</td>' +
            '<td>' + contact.lastName + '</td>' +
            '<td>' + contact.email + '</td>' +
            '<td>' + contact.phone + '</td>' +
            '</tr>'

        );
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
        addContact(newContact);
        hideAddContactForm();
        event.preventDefault();
    });

    $("#cancel").click(hideAddContactForm);

    $("#add").click(function () {
        addContactForm.slideDown();
    });
    $("#addJsonContacts").click(addWjson);
}());