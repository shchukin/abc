(function($) {

    $('.bubble-handler').on('click', function () {
        $(this).parents('.bubble-context').find('.bubble').toggleClass('bubble--visible');
    });



    /* hide bubble by overlay click ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.bubble, .bubble-handler').length) {
            $('.bubble--visible').removeClass('bubble--visible');
        }
    });


    /* hide popup by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.bubble--visible').removeClass('bubble--visible');
        }
    });


})(jQuery);
