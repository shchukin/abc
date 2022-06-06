(function ($) {

    var $html = $('html');
    var $dispay = $('.display'); /* Все чекбоксы страницы */


    /* 0. При открытии приложения нужно актуализировать все чекбоксы из Local Storage */

    var appState = localStorage.getItem('display');
    if( appState ) {
        appState.replace('display-', '');

        $dispay.each(function () {
            $(this).prop("checked", appState.indexOf( $(this).val() ) > -1);
        });

        /* Триггерим обновление строк в notation  */
        changeTonesNotation();
    }



    /* 1. Жонглирование классами видимости в зависимости от чекнутости чекбоксов */

    function display($this) {
        /* Отображаем в <html> */
        if ($this.is(':checked') || $this.is(':indeterminate')) {
            $html.addClass('display-' + $this.val());
        } else {
            $html.removeClass('display-' + $this.val());
        }

        /* Сохраняем в Local Storage */
        localStorage.setItem('display', $html.attr('class').replace(' settings-expanded', '').replace('settings-expanded', ''));

        /* Триггерим обновление строк в notation */
        if( $this.attr('name') === 'tones' ) {
            changeTonesNotation();
        }
    }

    /* Клик по чекбоксу */
    $dispay.on('change', function () {
        display($(this));
    });


    /* Функция для перепроверки всех чекбоксов и актуализации соответствующих классов.
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
        displayAll();

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
                displayAll();

                /* возвращаемся к алгоритму */
                if ( parent.children().children('.choice__widget').length ) {
                    checkSiblings(parent);
                }

            } else if (all && !isChecked) {

                parent.children('.choice').children('.choice__widget').prop("checked", isChecked);
                parent.children('.choice').children('.choice__widget').prop("indeterminate", (parent.find('.choice__widget:checked').length > 0));

                /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
                displayAll();

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
                displayAll();

            }

        }

        checkSiblings($checklistItem);
    });



    /* Notation -- опции, которые не подхватываются стилями, а которые надо обновлять скриптом внутри DOM */

    function changeTonesNotation() {
        $('[data-notation]').each(function() {

            /* Берём оригинальный текст (нотация thai.su и тоны символами): */
            var notation = $(this).data('notation');

            /* И опция за опцией реплейсим в нём символы: */

            if( $html.hasClass('display-letters-by-russian') ) {
                notation = notation.split('kh').join('кх')
                    .split('th').join('тх')
                    .split('ph').join('пх')
                    .split('ch').join('ч')
                    .split('ng').join('нг')
                    .split('j').join('ть')
                    .split('k').join('к')
                    .split('t').join('т')
                    .split('p').join('п')
                    .split('b').join('б')
                    .split('w').join('в')
                    .split('s').join('с')
                    .split('f').join('ф')
                    .split('h').join('х')
                    .split('d').join('д')
                    .split('r').join('р')
                    .split('l').join('л')
                    .split('m').join('м')
                    .split('n').join('н')
                    .split('y').join('й')
                    .split('a').join('а')
                    .split('i').join('и')
                    .split('u').join('у')
                    .split('ɯ').join('ы')
                    .split('e').join('е')
                    .split('ɛ').join('э')
                    .split('o').join('о')
                    .split('ɔ').join('ɔ')
                    .split('ə').join('ə')
            }

            /* default for letters:
            if( $html.hasClass('display-letters-by-thai.su') ) {
                notation = notation;
            }
            */

            if( $html.hasClass('display-tones-by-digits') ) {
                notation = notation.split('¯').join('⁰')
                        .split('`').join('¹')
                        .split('ˆ').join('²')
                        .split('´').join('³')
                        .split('ˇ').join('⁴')
            }

            if( $html.hasClass('display-tones-by-letters') ) {

                notation = notation.split('¯').join('<sup>M</sup>')
                        .split('`').join('<sup>L</sup>')
                        .split('ˆ').join('<sup>F</sup>')
                        .split('´').join('<sup>H</sup>')
                        .split('ˇ').join('<sup>R</sup>')
            }

            /* default for tones:

            if( $html.hasClass('display-tones-by-marks') ) {
                notation = notation;
            }
            */

        /* Сформированную строку выводим в DOM */
        $(this).html(notation);

    });


}

})(jQuery);
