var main = function () {
    'use strict';

    var allTheThings = ["XBX", "PKA", "EP", "XCD", "ON", "PM"];

    $("#showThingsButton").click(
        function () {

            var s = "";
            for (var thing of allTheThings) {
                s += thing + ", ";
            }

            $(".panel-body p").text(s);

        });



}


$(document).ready(main);