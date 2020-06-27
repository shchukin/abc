(function($) {

    /*
     * Browser detect
     */

    function getBrowser() {
        if ( navigator.userAgent.indexOf( 'WebKit'  ) + 1 ) {
            $('html').addClass('webkit');
        }
        if ( navigator.userAgent.indexOf( 'Firefox' ) + 1 ) {
            $('html').addClass('moz');
        }
    }

    getBrowser();


    /*
     * Svg for everybody init
     */

    svg4everybody();


    /*
     * Magnific popup init
     */

    $('.mfp-handler').magnificPopup({
        type: 'inline',
        removalDelay: 200,
        showCloseBtn: false
    });


    /*
     * jQuery Countdown init
     */

    var newYear = new Date();
    newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
    $('#new-year').countdown({
        until: newYear,
        format: 'DHM',
        layout: '<div class="countdown__container">' +
                    '{d<}' +
                    '<div class="countdown__section">' +
                        '<span class="countdown__value">' +
                            '<span class="countdown__digit">' +
                                '{d100}' +
                            '</span>' +
                            '<span class="countdown__digit">' +
                                '{d10}' +
                            '</span>' +
                            '<span class="countdown__digit">' +
                                '{d1}' +
                            '</span>' +
                        '</span>' +
                        '<span class="countdown__label">' +
                            '{dl}' +
                        '</span>' +
                    '</div>' +
                    '{d>}' +
                    '{h<}' +
                    '<div class="countdown__section">' +
                        '<span class="countdown__value">' +
                            '<span class="countdown__digit">' +
                                '{h10}' +
                            '</span>' +
                            '<span class="countdown__digit">' +
                                '{h1}' +
                            '</span>' +
                        '</span>' +
                        '<span class="countdown__label">' +
                            '{hl}' +
                        '</span>' +
                    '</div>' +
                    '{h>}' +
                    '{m<}' +
                    '<div class="countdown__section">' +
                        '<span class="countdown__value">' +
                            '<span class="countdown__digit">' +
                                '{m10}' +
                            '</span>' +
                            '<span class="countdown__digit">' +
                                '{m1}' +
                            '</span>' +
                        '</span>' +
                        '<span class="countdown__label">' +
                            '{ml}' +
                        '</span>' +
                    '</div>' +
                    '{m>}' +
                '</div>'
    });


})(jQuery);
