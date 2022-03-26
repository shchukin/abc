(function($) {


    /* vowels */

    function vowels() {
        if( $('.vowels-handler').is(':checked') ) {
            $('html').addClass('vowels-shown');
        } else {
            $('html').removeClass('vowels-shown');
        }
    }

    $(document).ready(vowels);
    $('.vowels-handler').on('change', vowels);




    /* headings */

    function headings() {
        if( $('.headings-handler').is(':checked') ) {
            $('html').addClass('headings-shown');
        } else {
            $('html').removeClass('headings-shown');
        }
    }

    $(document).ready(headings);
    $('.headings-handler').on('change', headings);



    /* subheadings */

    function subheadings() {
        if( $('.subheadings-handler').is(':checked') ) {
            $('html').addClass('subheadings-shown');
        } else {
            $('html').removeClass('subheadings-shown');
        }
    }

    $(document).ready(subheadings);
    $('.subheadings-handler').on('change', subheadings);



    /* comments */

    function comments() {
        if( $('.comments-handler').is(':checked') ) {
            $('html').addClass('comments-shown');
        } else {
            $('html').removeClass('comments-shown');
        }
    }

    $(document).ready(comments);
    $('.comments-handler').on('change', comments);

})(jQuery);
