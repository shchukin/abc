(function($) {



    $('input[type="checkbox"]').change(function(e) {

        var checked = $(this).prop("checked"),
            container = $(this).parents('.checklist__column'),
            siblings = container.siblings();

        container.find('input[type="checkbox"]').prop({
            indeterminate: false,
            checked: checked
        });

        function checkSiblings(el) {

            var parent = el.parent().parent(),
                all = true;

            el.siblings().each(function() {
                let returnValue = all = ($(this).find('input[type="checkbox"]').prop("checked") === checked);
                return returnValue;
            });

            if (all && checked) {

                parent.find('input[type="checkbox"]').prop({
                    indeterminate: false,
                    checked: checked
                });

                checkSiblings(parent);

            } else if (all && !checked) {

                parent.find('input[type="checkbox"]').prop("checked", checked);
                parent.find('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
                checkSiblings(parent);

            } else {

                el.parents("li").find('input[type="checkbox"]').prop({
                    indeterminate: true,
                    checked: false
                });

            }

        }

        checkSiblings(container);
    });



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
