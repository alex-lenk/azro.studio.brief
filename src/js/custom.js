$(document).ready(function () {
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 1500,
            max: 25000,
            values: [1500, 12500],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });

    $('.custom-scroll_container').customScroll();

    $(".ui-select-field").click(function () {
        $(".select-list-wrap").toggleClass("ui-select-field-open");
    });
    $(".select-list li").click(function () {
        $(this).toggleClass("select-item-open");
    });
});

//= init/animated-gradient.js
