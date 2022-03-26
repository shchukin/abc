(function ($) {

    /* Немного адаптированный вот этот сэмпл:
     * https://codepen.io/chriscoyier/pen/JYyXjX
     * (в некоторых местах удвоенны .parent() и .children()
     */

    $('.checklist .choice__widget').change(function (e) {

        var isChecked = $(this).prop("checked");
        var $checklistItem = $(this).parent('.choice').parent('.checklist__item');

        /* Сразу чекаем всех потомков (ну или анчекаем, в общем переводим их все в тот же статус, как чекбокс на который только что кликнули) */
        $checklistItem.find('.choice__widget').prop({
            indeterminate: false,
            checked: isChecked
        });


        function checkSiblings(el) {

            var parent = el.parent().parent(),
                all = true;

            el.siblings().each(function () {
                let returnValue = all = ($(this).children().children('input[type="checkbox"]').prop("checked") === isChecked);
                return returnValue;
            });

            if (all && isChecked) {

                parent.children().children('input[type="checkbox"]').prop({
                    indeterminate: false,
                    checked: isChecked
                });

                checkSiblings(parent);

            } else if (all && !isChecked) {

                parent.children().children('input[type="checkbox"]').prop("checked", isChecked);
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
