var pcs = pcs || {};

pcs.messagebox = (function () {
    "use strict";

    var textmessage = get("textmessage");
    var checkmessage = get("checkmessage");
    var textmessagebutton = get("textmessagebutton");
    var msg = "please enter text";
    var bool = false;
    var zIncrement = 1;
    var modal;
    var offset = 40;
    var left = -200;
    var top = -50;

    textmessagebutton.innerHTML = "enter";
    textmessagebutton.addEventListener("click", function () {
        if (checkmessage.checked) {
            bool = true;
            modal = createElement("div");
            modal.style.display = 'inline-block';
            modal.style.position = "fixed";
            modal.style.top = '0px';
            modal.style.left = '0px';
            modal.style.height = '100%';
            modal.style.width = '100%';
            modal.style.opacity = ".5";
            modal.style.backgroundColor = "lightgray";
            modal.style.zIndex = '5000';
            document.body.appendChild(modal);
        }
        zIncrement++;
        msg = textmessage.value;
        show(msg, bool);
    });

    function createElement(type) {
        return document.createElement(type);
    }

    function get(id) {
        return document.getElementById(id);
    }

    function textMessage() {

    }

    function show(msg, bool) {
        var div = createElement("div");
        var span = createElement("span");
        var buttonDiv = createElement("div");
        var okButton = createElement("button");

        span.innerHTML = msg;
        div.appendChild(span);
        okButton.innerHTML = "OK";
        buttonDiv.appendChild(okButton);
        div.appendChild(buttonDiv);
        document.body.appendChild(div);

        div.style.backgroundColor = 'lightblue';
        div.style.padding = '20px';
        div.style.width = '400px';
        div.style.height = '100px';
        div.style.border = '1px solid blue';
        div.style.position = 'absolute';
        div.style.left = '50%';
        div.style.top = '50%';
        div.style.marginLeft = left + 'px';
        div.style.marginTop = top + 'px';
        div.style.boxSizing = 'border-box';
        div.style.display = 'inline-block';
        if (bool) {
            div.style.zIndex = '5001';
        } else {
            div.style.zIndex = zIncrement;
            left += offset;
            top += offset;
            if (parseInt(getComputedStyle.right) - offset < 0) {
                offset = window.innerWidth / 2;
            };
            if (parseInt(getComputedStyle.bottom) - offset < 0) {
                offset = window.innerHeight / 2;
            }
        };

        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '6px';
        buttonDiv.style.textAlign = 'center';
        buttonDiv.style.width = '100%';
        buttonDiv.style.marginLeft = '-20px';

        okButton.addEventListener("click", function () {
            document.body.removeChild(div);
            if (bool) {
                document.body.removeChild(modal);
            }
        });
    }

    return {
        show: show
    };
}());