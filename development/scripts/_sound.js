(function ($) {

    var isPlaying = false;

    $('[data-audio]').on('click', function (event) {
        event.stopPropagation(); /* Если кликнули на data-audio внутри data-audio: */
        if( ! isPlaying ) { /* Чтобы не запустить проигрывание звуков оновременно */
            isPlaying = true;
            const audio = new Audio($(this).data('audio'));
            audio.play();
            audio.onended = function() {
                isPlaying = false;
            };
        }
        /* delete object? */
    });


})(jQuery);
