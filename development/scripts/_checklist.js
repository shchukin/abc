(function ($) {

    /* Немного адаптированный вот этот сэмпл:
     * https://codepen.io/chriscoyier/pen/JYyXjX
     * (в некоторых местах удвоенны .parent() и .children()
     */

    $('.checklist .choice__widget').change(function (e) {

        var checked = $(this).prop("checked"),
            $checklistItem = $(this).parent().parent(),
            $checkilistItemSiblings = $checklistItem.siblings();

        $checklistItem.find('.choice__widget').prop({
            indeterminate: false,
            checked: checked
        });


        function checkSiblings(el) {

            var parent = el.parent().parent(),
                all = true;

            el.siblings().each(function () {
                let returnValue = all = ($(this).children().children('input[type="checkbox"]').prop("checked") === checked);
                return returnValue;
            });

            if (all && checked) {

                parent.children().children('input[type="checkbox"]').prop({
                    indeterminate: false,
                    checked: checked
                });

                checkSiblings(parent);

            } else if (all && !checked) {

                parent.children().children('input[type="checkbox"]').prop("checked", checked);
                parent.children().children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
                checkSiblings(parent);

            } else {

                el.parents(".checklist__item").children().children('.choice__widget').prop({
                    indeterminate: true,
                    checked: false
                });

            }

        }

        checkSiblings($checklistItem);
    });

})(jQuery);
