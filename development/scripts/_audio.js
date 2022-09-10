(function ($) {

    var isPlaying = false;

    $('[data-audio]').on('click', function (event) {
        event.stopPropagation(); /* Если кликнули на data-audio внутри data-audio: */
        if (!isPlaying) { /* Чтобы не запустить проигрывание звуков оновременно */
            isPlaying = true;
            const audio = new Audio($(this).data('audio'));
            audio.play();
            audio.onended = function () {
                isPlaying = false;
            };
        }
        /* delete object? */
    });


    $(window).on('load', function () {

        var playlist = [];

        $('[data-audio]').each(function () {
            if (!playlist.includes($(this).data('audio'))) {
                playlist.push($(this).data('audio'));
            }
        });

        console.log('Downloading media:\n');

        playlist.forEach(function (item) {
            fetch('http://thai-alphabet.com/' + item)
                .then((response) => {
                    console.log(response.url, response.statusText)
                });

        });

    });


})(jQuery);
