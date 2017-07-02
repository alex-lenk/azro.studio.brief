$(document).ready(function () {
    $("select").select2({
        minimumResultsForSearch: -1,
        placeholder: "Select section"
    });

    $(document).on("select2-open", "select", function () {
        var el;
        $('.select2-results').each(function () {
            var api = $(this).data('jsp');

            if (api !== undefined) api.destroy();
        });

        $('.select2-results').each(function () {
            if ($(this).parent().css("display") != 'none') el = $(this);

            if (el === undefined) return;

            el.mCustomScrollbar({
                mouseWheel: true,
                advanced: {
                    updateOnContentResize: true
                }
            });
        });
    });


    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 1500,
            max: 25000,
            values: [ 1500, 12500 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );
});
