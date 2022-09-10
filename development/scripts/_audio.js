(function($) {

    $('[data-audio]').on('click', function (event) {
        document.getElementById($(this).data('audio')).play();

        /* If there is a parent that also has an audio, don't let it be plaid together: */
        if( $(this).parents('[data-audio]').length ) {
            event.stopPropagation();
        }
    });


})(jQuery);
