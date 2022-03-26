(function($) {

    var $html = $('html');

    /* vowels */

    function display($this) {
        if( $this.is(':checked') ) {
            $html.addClass('display-' + $this.val() );
        } else {
            $html.removeClass('display-' + $this.val() );
        }
    }

    // $(document).ready(display);
    $('.display').on('change', function () {
        display( $(this) );
    });


})(jQuery);
