(function ($) {

    var $html = $('html');
    var $dispay = $('.display'); /* Все чекбоксы страницы */


    /* При открытии приложения нужно актуализировать все чекбоксы из Local Storage */

    var appState = localStorage.getItem('display').replace('display-', '');

    $dispay.each(function () {
        $(this).prop("checked", appState.indexOf( $(this).val() ) > -1);
    });


    /* 1. Жонглирование классами видимости в зависимости от чекнутости чекбоксов */

    function saveDisplay() {
        localStorage.setItem('display', $html.attr('class').replace(' settings-expanded', '').replace('settings-expanded', ''));
    }

    function display($this) {
        if ($this.is(':checked') || $this.is(':indeterminate')) {
            $html.addClass('display-' + $this.val());
        } else {
            $html.removeClass('display-' + $this.val());
        }
        saveDisplay();
    }

    $dispay.on('change', function () {
        display($(this));
    });


    /* Перепроверяем все чекбоксы и актуализируем соответствующие классы.
     * Это нужно делать при document.ready и при работе с куки.
     * Ещё это нужно делать когда чекбоксы чекаются жаба-скриптом,
     * поскольку .prop() не вызывает событие onChange.
     */
    function displayAll() {
        $dispay.each(function () {
            display($(this));
        });
    }


    /* 2. Непосредственно сам чеклист */

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

        /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
        displayAll()

        /* возвращаемся к алгоритму */
        function checkSiblings($checklistItem) {

            var parent = $checklistItem.parent('.checklist').parent('.checklist__item'),
                all = true;

            $checklistItem.siblings().each(function () {
                let returnValue = all = ($(this).children().children('.choice__widget').prop("checked") === isChecked);
                return returnValue;
            });

            if (all && isChecked) {

                parent.children().children('.choice__widget').prop({
                    indeterminate: false,
                    checked: isChecked
                });

                /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
                displayAll()

                /* возвращаемся к алгоритму */
                if ( parent.children().children('.choice__widget').length ) {
                    checkSiblings(parent);
                }

            } else if (all && !isChecked) {

                parent.children('.choice').children('.choice__widget').prop("checked", isChecked);
                parent.children('.choice').children('.choice__widget').prop("indeterminate", (parent.find('.choice__widget:checked').length > 0));

                /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
                displayAll()

                /* возвращаемся к алгоритму */
                if ( parent.children().children('.choice__widget').length ) {
                    checkSiblings(parent);
                }

            } else {

                $checklistItem.parents(".checklist__item").children('.choice').children('.choice__widget').prop({
                    indeterminate: true,
                    checked: false
                });

                /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
                displayAll()

            }

        }

        checkSiblings($checklistItem);
    });

})(jQuery);
