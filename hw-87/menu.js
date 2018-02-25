/*global $*/
(function () {
    "use strict";
    var roast = $("#roast");
    var friedRice = $("#friedRice");
    var steamedVegetables = $("#steamedVegetables");
    var displayForMenu = $("#displayForMenu");
    var valu = $('input');
    var menus = [];
    var clickedval = '';

    function getMenu() {
        $.getJSON("json.js", function (loadedData) {
            loadedData.forEach(displayMenu);
        }).fail(function (xhr, statusCode, statusText) {
            alert("error: " + statusText);
            console.log(xhr, statusCode, statusText);
        });

    }
    // let clickedval = '';
    valu.click(function (event) {
        clickedval = ($(this).val());
        getMenu();
    });



    function displayMenu(menu) {
        menus.push(menu);
        if (menu.name === clickedval) {
            displayForMenu.empty();

            displayForMenu.append(

                '<h1>' + menu.name + '</h1>' +
                '<h2>' + menu.ingredients + '</h2>' +
                '<img src="' + menu.image + '">'

            );
        }
    }


    function hideAddContactForm() {
        addContactForm.slideUp();
        addContactForm[0].reset();
    }
})();