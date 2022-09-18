(function ($) {

    var translations = {
        'site-title': {
            'english': 'Thai Alphabet',
            'russian': 'Тайский Алфавит',
        },
        'vowels': {
            'english': 'Vowels',
            'russian': 'Гласные',
        },
        'short-vowels': {
            'english': 'Short',
            'russian': 'Краткие',
        },
        'long-vowels': {
            'english': 'Long',
            'russian': 'Долгие',
        },
        'basic-vowels': {
            'english': 'Basic vowels',
            'russian': 'Базовые гласные',
        },
        'complex-vowels': {
            'english': 'Complex vowels',
            'russian': 'Составные',
        },
        'finals': {
            'english': 'Finals',
            'russian': 'Финали',
        },
        'diphthongs': {
            'english': 'Diphthongs',
            'russian': 'Дифтонги',
        },
        'quasi-letters': {
            'english': 'Quasi-letters',
            'russian': 'Квазибуквы',
        },
        'consonants': {
            'english': 'Consonants',
            'russian': 'Согласные',
        },
        'high-class-consonants': {
            'english': 'High class consonants',
            'russian': 'Согласные высокого класса',
        },
        'middle-class-consonants': {
            'english': 'Middle class consonants',
            'russian': 'Согласные среднего класса',
        },
        'low-class-consonants': {
            'english': 'Low class consonants',
            'russian': 'Согласные низкого класса',
        },
        'sonorant-consonants': {
            'english': 'Sonorant',
            'russian': 'Сонорные',
        },
        'voiceless-consonants': {
            'english': 'Voiceless',
            'russian': 'Глухие',
        },
        'marks': {
            'english': 'Marks',
            'russian': 'Значки',
        },
        'digits': {
            'english': 'Digits',
            'russian': 'Цифры',
        },
        'tones': {
            'english': 'Tones',
            'russian': 'Тоны',
        },
        'other': {
            'english': 'Voiceless',
            'russian': 'Разное',
        },




        'dead-syllable-lowercase': {
            'english': 'dead syllable',
            'russian': 'мёртвый слог',
        },
        'live-syllable-lowercase': {
            'english': 'live syllable',
            'russian': 'живой слог',
        },
        'in-closed-syllable': {
            'english': 'in closed<br> syllable',
            'russian': 'в закрытом<br> слоге',
        },
        'in-closed-syllable-with-yo-yak': {
            'english': 'in closed syllable<br> ending with <span class="thai">ย</span>',
            'russian': 'в закрытом<br> оканчив-ся на <span class="thai">ย</span>',
        },
        'in-closed-syllable-not-ro-ria': {
            'english': 'invisible in a<br> closed syllable<br> ending with<br>anything except <span class="thai">ร</span>',
            'russian': 'невидима<br> в закрытом слоге<br> оканчивающимся<br> не на <span class="thai">ร</span>',
        },
        'milk-example': {
            'english': 'Example: <span class="thai">นม</span> <span class="script" data-notation="nom¯">nom¯</span> — milk',
            'russian': 'Пример: <span class="thai">นม</span> <span class="script" data-notation="nom¯">nom¯</span> — молоко',
        },
        'in-closed-syllable-with-ro-ria': {
            'english': 'invisible in a<br> closed syllable<br> ending with <span class="thai">ร</span>',
            'russian': 'невидима<br> в закрытом слоге<br> оканчивающимся<br> не на <span class="thai">ร</span>',
        },
        'tv-series-example': {
            'english': 'Example: <span class="thai">ละคร</span> <span class="script" data-notation="la´khɔ:n¯">la´khɔ:n¯</span> — TV series',
            'russian': 'Пример: <span class="thai">ละคร</span> <span class="script" data-notation="la´khɔ:n¯">la´khɔ:n¯</span> — сериал',
        },
        'ae-sound-keyboard-hint': {
            'english': ''
                + 'Although the writing is identical to the two of <span class="thai">เ</span>,<br>'
                + 'it is still a separate key on the keyboard: <span class="thai">แ</span>.<br>'
                + '<br>'
                + 'Despite the fact that visually the result looks<br>'
                + 'the same, correct character should still be used,<br>'
                + 'so that the typing is validly read by apps such as<br>'
                + 'autocomplition, translation, search and so on.',
            'russian': ''
                + 'Несмотря на то, что запись идентична двум <span class="thai">เ</span>,<br>'
                + 'на клавиатуре это отдельный символ <span class="thai">แ</span>.<br>'
                + '<br>'
                + 'Хотя внешне результат и выглядит одинаково,<br>'
                + 'всё же следует использовать именно этот символ,<br>'
                + 'чтобы букву правильно считывали приложения<br>'
                + 'для перевода, автодополнение, поиск и так далее.'
        },
        'finals-hint': {
            'english': ''
                + 'It\'s still long letters,<br>'
                + 'and the reading rules.<br>'
                + 'Но звук краткий как если бы буква<br>'
                + 'была в левой колонке.<br>'
                + '<br>'
                + 'Наблюдение: встречаются только<br>'
                + 'в открытых слогах. Всегда завершают<br>'
                + 'слог. Другими словами согласной<br>'
                + 'после быть не может.',
            'russian': '' +
                + 'Это по прежнему долгие буквы,<br>'
                + 'и правила чтения по правой колонке.<br>'
                + 'Но звук краткий как если бы буква<br>'
                + 'была в левой колонке.<br>'
                + '<br>'
                + 'Наблюдение: встречаются только<br>'
                + 'в открытых слогах. Всегда завершают<br>'
                + 'слог. Другими словами согласной<br>'
                + 'после быть не может.',
        },
        'short-doesnt-exist': {
            'english': 'Short variant<br> does not exist',
            'russian': 'Краткий вариант<br> не существует',
        },
        'long-letter-short-sound': {
            'english': 'The letter and reading rules are long.<br> The sound is short.',
            'russian': 'Буква и правила чтения — долгие.<br> Звук — короткий.',
        },
        'called-may-malay': {
            'english': 'Called<br> “May Malay”',
            'russian': 'Называется<br> «май малай»',
        },
        'called-may-muan': {
            'english': 'Called<br> “May Muan”',
            'russian': 'Называется<br> «май муан»',
        },
        'consonant-egg': {
            'english': 'egg',
            'russian': 'яйцо',
        },
        'consonant-cymbals': {
            'english': '«cymbals  —<br> musical instrument',
            'russian': '«кастаньеты» —<br> муз. инструмент',
        },



        'hint-with-colon': {
            'english': 'Hint:',
            'russian': 'Подсказка:',
        },



    }

    var $html = $('html');
    var $dispay = $('.display'); /* Все чекбоксы страницы */


    /* 0. При открытии приложения нужно актуализировать все чекбоксы из Local Storage */

    var appState = localStorage.getItem('display');
    if( appState ) {
        appState.replace('display-', '');

        $dispay.each(function () {
            $(this).prop("checked", appState.indexOf( $(this).val() ) > -1);
        });

        /* Обновляем DOM: язык, нотация */
        changeLanguage();
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

        /* Обновляем DOM: язык, нотация */
        if( $this.attr('name') === 'language' ) { changeLanguage(); }
        if( $this.attr('name') === 'tones' )    { changeTonesNotation(); }
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




    function changeLanguage() {
        $('[data-i18n]').each(function () {

            /* Берём оригинальный текст (английский): */
            var i18n = $(this).data('i18n');

            var currentLanguage;

            if ($html.hasClass('display-language-english')) {
                currentLanguage = 'english';
            } else if ($html.hasClass('display-language-russian')) {
                currentLanguage = 'russian';
            }

            /* Сформированную строку выводим в DOM */
            $(this).html(translations[i18n][currentLanguage]);

        });

        /* По-идее здесь же надо перезапустить смену нотации поскольку в переводах все нотации дефолтны. */
        /* Но смена нотации и так запускается с каждым display() */
        // changeTonesNotation();
    }


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
            } else if( $html.hasClass('display-letters-by-pro-language') ) {
                notation = notation.split('kh').join('кх')
                    .split('th').join('th')
                    .split('ph').join('ph')
                    .split('ch').join('ch')
                    .split('ng').join('ng')
                    .split('j').join('j')
                    .split('k').join('k')
                    .split('t').join('t')
                    .split('p').join('p')
                    .split('b').join('b')
                    .split('w').join('w')
                    .split('s').join('s')
                    .split('f').join('f')
                    .split('h').join('h')
                    .split('d').join('d')
                    .split('r').join('r')
                    .split('l').join('l')
                    .split('m').join('m')
                    .split('n').join('n')
                    .split('y').join('y')
                    .split('a').join('a')
                    .split('i').join('i')
                    .split('u').join('u')
                    .split('ɯ').join('<u>u</u>')
                    .split('e').join('e')
                    .split('ɛ').join('<u>a</u>')
                    .split('o').join('о')
                    .split('ɔ').join('<u>о</u>')
                    .split('ə').join('<u>e</u>')
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
