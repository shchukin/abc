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
        'hint-with-colon': {
            'english': 'Hint:',
            'russian': 'Подсказка:',
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
                + '<p>'
                    + 'Although the writing is identical to the two of <span class="thai">เ</span>,<br>'
                    + 'it is still a separate key on the keyboard: <span class="thai">แ</span>.'
                + '</p>'
                + '<p>'
                    + 'Despite the fact that visually the result looks<br>'
                    + 'the same, correct character should still be used,<br>'
                    + 'so that the typing is validly read by apps such as<br>'
                    + 'autocomplition, translation, search and so on.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Несмотря на то, что запись идентична двум <span class="thai">เ</span>,<br>'
                    + 'на клавиатуре это отдельный символ <span class="thai">แ</span>.'
                + '</p>'
                + '<p>'
                    + 'Хотя внешне результат и выглядит одинаково,<br>'
                    + 'всё же следует использовать именно этот символ,<br>'
                    + 'чтобы букву правильно считывали приложения<br>'
                    + 'для перевода, автодополнение, поиск и так далее.'
                + '</p>'
            ,
        },
        'finals-hint': {
            'english': ''
                + '<p>'
                    + 'These are still long letters and,<br>'
                    + 'the reading rules are based on<br>'
                    + 'the right column. But the sound<br>'
                    + 'is short as if they were in<br>'
                    + 'the left column.'
                + '</p>'
                + '<p>'
                    + 'These letter can only be found<br>'
                    + 'in open syllables. They always<br>'
                    + 'ends syllable. In other words,<br>'
                    + 'there can\'t be a consonant<br>'
                    + ' after.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Это по прежнему долгие буквы,<br>'
                    + 'и правила чтения по правой колонке.<br>'
                    + 'Но звук краткий как если бы буква<br>'
                    + 'была в левой колонке.'
                + '</p>'
                + '<p>'
                    + 'Наблюдение: встречаются только<br>'
                    + 'в открытых слогах. Всегда завершают<br>'
                    + 'слог. Другими словами согласной<br>'
                    + 'после быть не может.'
                + '</p>'
            ,
        },
        'short-doesnt-exist': {
            'english': 'Short variant<br> does not exist',
            'russian': 'Краткий вариант<br> не существует',
        },
        'long-doesnt-exist': {
            'english': 'Long variant<br> does not exist',
            'russian': 'Долгий вариант<br> не существует',
        },
        'long-letter-short-sound': {
            'english': 'The letter is long and reading<br> rules are based on right column.<br> The sound is short.',
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
        'diphthongs-note': {
            'english': ''
                + '<p>'
                    + 'Two vowel sounds merge. When<br>'
                    + 'pronouncing, one smoothly turns<br>'
                    + 'into the other.'
                + '</p>'
                + '<p>'
                    + 'It does not affect the reading<br>'
                    + 'rules though. You can think about<br>'
                    + 'diphthongs as ordinary vowels.<br>'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Сливаются два гласных звука.<br>'
                    + 'При произношении один<br>'
                    + 'плавно переходит в другой.'
                + '</p>'
                + '<p>'
                    + 'На правила чтения это никак<br>'
                    + 'не влияет. Воспринимать<br>'
                    + 'и изучать дифтонги можно<br>'
                    + 'как обычные гласные.'
                + '</p>'
            ,
        },
        'ia-reading-hint': {
            'english': ''
                + 'Example: <span class="thai">เรียน</span> — learn<br>'
                + 'Supposed to be <span class="script" data-notation="ri:an¯">ri:an¯</span>,<br>'
                + 'but reads as <span class="script" data-notation="ri:ən¯">ri:ən¯</span>.'
            ,
            'russian': ''
                + 'Пример: <span class="thai">เรียน</span> — учиться<br>'
                + 'Должно читаться <span class="script" data-notation="ri:an¯">ri:an¯</span>,<br>'
                + 'но читается <span class="script" data-notation="ri:ən¯">ri:ən¯</span>.'
            ,
        },
        'pristine-white-example': {
            'english': 'Example: <span class="thai">ขาวจั๊วะ</span> — pristine white',
            'russian': 'Пример: <span class="thai">ขาวจั๊วะ</span> — кипенно-белый',
        },
        'ua-difton-same-consonant': {
            'english': ''
                + 'Not to be confused with <span class="thai">ว</span> consonant.<br>'
                + 'That one is just <span class="script" data-notation="w">w</span> or <span class="script" data-notation="u">u</span> if at the end<br>'
                + 'of a syllable. And this one is the <span class="script" data-notation="u:a">u:a</span><br>'
                + 'diphthong in between two consonants.<br>'
                + 'Example: <span class="thai">สวน</span> <span class="script" data-notation="su:anˇ">su:anˇ</span> — park.'
            ,
            'russian': ''
                + 'Не путать с согласной <span class="thai">ว</span> — там<br>'
                + 'просто <span class="script" data-notation="w">w</span>, или <span class="script" data-notation="u">u</span> если в конце слога.<br>'
                + 'А здесь именно дифтонг <span class="script" data-notation="u:a">u:a</span> между<br>'
                + 'двумя согласными.<br>'
                + 'Пример: <span class="thai">สวน</span> <span class="script" data-notation="su:anˇ">su:anˇ</span> — парк.'
            ,
        },
        'quasi-heading-hing': {
            'english': 'These set up<br> whole syllable.',
            'russian': 'По-сути обозначают<br> сразу целый слог.'
        },
        'quasi-ri-details': {
            'english': ''
                + '<p>'
                    + 'Can be taken as an abbreviation<br>'
                    + 'for <span class="thai">รึ</span> <span class="script" data-notation="rɯ´">rɯ´</span> or <span class="thai">ริ</span> <span class="script" data-notation="ri´">ri´</span>. Which one<br>'
                    + 'exactly depends on the word.'
                + '</p>'
                + '<p>'
                    + '• Examples with <span class="thai">รึ</span> <span class="script" data-notation="rɯ´">rɯ´</span>:<br>'
                    + '<span class="thai">ฤดู</span> <span class="script" data-notation="rɯ´du:¯">rɯ´du:¯</span> — season,<br>'
                    + '<span class="thai">พฤกษา</span> <span class="script" data-notation="phrɯk´sa:ˇ">phrɯk´sa:ˇ</span> — flora.'
                + '</p>'
                + '<p>'
                    + '• Examples with <span class="thai">ริ</span> <span class="script" data-notation="ri´">ri´</span>:<br>'
                    + '<span class="thai">อังกฤษ</span> <span class="script" data-notation="ang¯krit">ang¯krit`</span> — England,<br>'
                    + '<span class="thai">ฤทธิ์</span> <span class="script" data-notation="rit´">rit´</span> — might.'
                + '</p>'
                + '<p>'
                    + 'There is one more case that<br> stands out from the scheme<br>'
                    + 'but uses the same glyph:<br> a long sound <span class="thai">เรอ</span> <span class="script" data-notation="rə:¯">rə:¯</span>.'
                + '</p>'
                + '<p>'
                    + '• Example with <span class="thai">เรอ</span> <span class="script" data-notation="rə:¯">rə:¯</span>:<br>'
                    + '<span class="thai">ฤกษ์</span> <span class="script" data-notation="rə:¯">rə:kˆ</span> — occasion.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Можно воспринимать как<br>'
                    + 'сокращенную запись <span class="thai">รึ</span> <span class="script" data-notation="rɯ´">rɯ´</span> или <span class="thai">ริ</span> <span class="script" data-notation="ri´">ri´</span>.<br>'
                    + 'Какую из — зависит от слова.'
                + '</p>'
                + '<p>'
                    + '• Примеры с <span class="thai">รึ</span> <span class="script" data-notation="rɯ´">rɯ´</span>:<br>'
                    + '<span class="thai">ฤดู</span> <span class="script" data-notation="rɯ´du:¯">rɯ´du:¯</span> — время года,<br>'
                    + '<span class="thai">พฤกษา</span> <span class="script" data-notation="phrɯk´sa:ˇ">phrɯk´sa:ˇ</span> — Флора.'
                + '</p>'
                + '<p>'
                    + '• Примеры с <span class="thai">ริ</span> <span class="script" data-notation="ri´">ri´</span>:<br>'
                    + '<span class="thai">อังกฤษ</span>	<span class="script" data-notation="ang¯krit">ang¯krit`</span> — Англия,<br>'
                    + '<span class="thai">ฤทธิ์</span>	<span class="script" data-notation="rit´">rit´</span> — доблесть.'
                + '</p>'
                + '<p>'
                    + 'Ещё один вариант, выбивающийся<br>'
                    + 'из общей схемы, но использующий <br>'
                    + 'этот же значок — долгий звук <span class="thai">เรอ</span> <span class="script" data-notation="rə:¯">rə:¯</span>.'
                + '</p>'
                + '<p>'
                    + '• Пример с <span class="thai">เรอ</span> <span class="script" data-notation="rə:¯">rə:¯</span>:<br>'
                    + '<span class="thai">ฤกษ์</span> <span class="script" data-notation="rə:¯">rə:kˆ</span> — повод, обстоятельство.'
                + '</p>'
            ,
        },
        'quasi-ri-long-details': {
            english: 'Can be taken as an<br> abbreviation for <span class="thai">รือ</span>',
            russian: 'Можно воспринимать как<br> сокращенную запись <span class="thai">รือ</span>',
        },
        'ri-tones-hint': {
            'english': 'The high tone is because of<br> the reading rules of <span class="thai">รึ</span> / <span class="thai">ริ</span>',
            'russian': 'Высокий тон получается<br> из правил чтения <span class="thai">รึ</span> / <span class="thai">ริ</span>',
        },
        'rohan-about': {
            'english': ''
                + '<p>'
                    + 'The sound is identical to <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัน</span>.<br>'
                    + 'Example: <span class="thai">กรรไกร</span> <span class="script" data-notation="kan¯kray¯">kan¯kray¯</span> — scissors'
                + '</p>'
                + '<p>'
                    + 'The glyph is identical to the consonant <span class="thai">ร</span>.<br>'
                + '</p>'
                + '<p>'
                    + 'Not to be confused with abbreviations:<br>'
                    + '<span class="thai">ร.ร.</span> = โรงเรียน <span class="script">ro:ng¯ri:ən¯</span> — school,<br>'
                    + '<span class="thai">รร.</span> = โรงแรม <span class="script">ro:ng¯rɛ:m¯</span> — hotel.'
                + '</p>',
            'russian': ''
                + '<p>'
                    + 'Звучание идентично <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัน</span>. Пример:<br>'
                    + '<span class="thai">กรรไกร</span> <span class="script" data-notation="kan¯kray¯">kan¯kray¯</span> — ножницы'
                + '</p>'
                + '<p>'
                    + 'Значок идентичен согласной <span class="thai">ร</span>.<br>'
                + '</p>'
                + '<p>'
                    + 'Не путать с аббревиатурами:<br>'
                    + '<span class="thai">ร.ร.</span> = โรงเรียน <span class="script">ro:ng¯ri:ən¯</span> — школа,<br>'
                    + '<span class="thai">รร.</span> = โรงแรม <span class="script">ro:ng¯rɛ:m¯</span> — отель.'
                + '</p>',
        },
        'rohan-examples': {
            'english': 'Examples:<br> <span class="thai">กรรม</span> <span class="script" data-notation="kam¯">kam¯</span> — karma,<br> วรรค <span class="script" data-notation="wak´">wak´</span> — paragraph.',
            'russian': 'Примеры:<br> <span class="thai">กรรม</span> <span class="script" data-notation="kam¯">kam¯</span> — карма,<br> วรรค <span class="script" data-notation="wak´">wak´</span> — абзац.'
        },
        'word-khai': {
            'english': 'egg',
            'russian': 'яйцо',
        },
        'word-ching': {
            'english': '“cymbals”  —<br> mus. instrument',
            'russian': '«кастаньеты» —<br> муз. инструмент',
        },
        'word-sia': {
            'english': 'tiger',
            'russian': 'тигр',
        },
        'word-risi': {
            'english': 'hermit',
            'russian': 'отшельник',
        },
        'word-sala': {
            'english': 'pavilion',
            'russian': 'беседка',
        },
        'word-thung': {
            'english': 'sack, bag',
            'russian': 'мешок, пакет',
        },
        'word-than': {
            'english': 'base, pedestal',
            'russian': 'основание,<br> пьедестал',
        },
        'word-phing': {
            'english': 'bee',
            'russian': 'пчела',
        },
        'word-fa': {
            'english': 'lid',
            'russian': 'крышка',
        },
        'word-hip': {
            'english': 'chest, box',
            'russian': 'сундук',
        },
        'word-kai': {
            'english': 'chicken',
            'russian': 'курица',
        },
        'word-jan': {
            'english': 'plate',
            'russian': 'тарелка',
        },
        'word-dek': {
            'english': 'child',
            'russian': 'ребенок',
        },
        'word-chada': {
            'english': '“Chada” —<br> headdress',
            'russian': '«чада» —<br> головной убор',
        },
        'word-tau': {
            'english': 'turtle',
            'russian': 'черепаха',
        },
        'word-patak': {
            'english': 'goad, javelin',
            'russian': 'палка погонщика<br> с острым концом',
        },
        'word-baimai': {
            'english': 'leaf',
            'russian': 'листок',
        },
        'word-pla': {
            'english': 'fish',
            'russian': 'рыба',
        },
        'word-ang': {
            'english': 'basin, bowl,<br> bathtub, sink',
            'russian': 'бадья, большая<br> ёмкость для воды',
        },
        'word-nu': {
            'english': 'mouse',
            'russian': 'мышь',
        },
        'word-nen': {
            'english': '“Samanera” —<br> noviciate',
            'russian': '«Шраманера» —<br> послушник',
        },
        'word-ngu': {
            'english': 'snake',
            'russian': 'змея',
        },
        'word-ma': {
            'english': 'horse',
            'russian': 'лошадь',
        },
        'word-yak': {
            'english': '“Yaksha” — myth.<br> character, giant',
            'russian': 'Як — миф.<br> персонаж,<br> великан',
        },
        'word-ying': {
            'english': 'woman',
            'russian': 'женщина',
        },
        'word-weng': {
            'english': 'ring',
            'russian': 'кольцо',
        },
        'word-ling': {
            'english': 'monkey',
            'russian': 'обезьяна',
        },
        'word-jula': {
            'english': 'kite',
            'russian': 'воздушный<br> змей',
        },
        'word-ria': {
            'english': 'boat',
            'russian': 'лодка',
        },
        'word-khwai': {
            'english': 'buffalo',
            'russian': 'буйвол',
        },
        'word-rakhang': {
            'english': 'bell',
            'russian': 'колокол',
        },
        'word-chang': {
            'english': 'elephant',
            'russian': 'слон',
        },
        'word-cho': {
            'english': '“Cho” tree',
            'russian': 'дерево «Че»',
        },
        'word-so': {
            'english': 'chain',
            'russian': 'цепь',
        },
        'word-thahan': {
            'english': 'soldier',
            'russian': 'солдат',
        },
        'word-thong': {
            'english': 'flag',
            'russian': 'флаг',
        },
        'word-montho': {
            'english': 'Montho — <br> name of myth.<br> heroines',
            'russian': 'Монтхо — имя<br> миф. героини',
        },
        'word-phuthau': {
            'english': 'elder',
            'russian': 'старик',
        },
        'word-phan': {
            'english': '“Phan” — offering<br> bowl or tray<br>with pedestal',
            'russian': '«Пхан» —<br> чаша, основание<br> для подношений',
        },
        'word-samphau': {
            'english': 'ship',
            'russian': 'корабль',
        },
        'word-fan': {
            'english': 'teeth',
            'russian': 'зуб',
        },
        'word-nokhu': {
            'english': 'owl',
            'russian': 'филин',
        },
        'ch-aspiration': {
            'english': ''
                + 'Technically <span class="thai">ฉ</span> read aspirated and the sound,<br>'
                + 'should be written as <span class="script" data-notation="chh">chh</span>. But english <span class="script" data-notation="ch">ch</span><br>'
                + 'already sounds soft, and when read <span class="thai">ฉ</span> it is<br>'
                + 'not necessary to add an aspiration. So in<br>'
                + 'transcription we don\'t add second <span class="script" data-notation="h">h</span>.'
            ,
            'russian': ''
                + 'Технически <span class="thai">ฉ</span> читается с придыханием как,<br>'
                + 'и остальные буквы высокого класса, и звук бы<br>'
                + 'должен записываться как <span class="script" data-notation="chh">chh</span>. Но русский <span class="script" data-notation="ch">ch</span><br>'
                + 'и так звучит мягко, и при чтении <span class="thai">ฉ</span> дополнительно<br>'
                + 'добавлять предыхание не нужно. Соответственно<br>'
                + '<span class="script" data-notation="h">h</span> в транскрипцию не записываем.'
            ,
        },
        'dont-exist-end': {
            'english': 'Does not occur at the<br> end of a syllable',
            'russian': 'В конце слога<br> не встречается',
        },
        'ho-hip-as-mark': {
            'english': ''
                + 'It can also work as a glyph that moves the<br>'
                + 'following consonant into a high class.<br> '
                + 'Example: <span class="thai">หมอ</span> <span class="script" data-notation="mɔ:ˇ">mɔ:ˇ</span> — doctor. In this<br>'
                + 'example the high class reading rules<br> apply to the <span class="thai">ม</span>.'
            ,
            'russian': ''
                + 'Так же может выступать в роли значка<br>'
                + 'для перевода последующей согласной <br>'
                + 'в высокий класс. Пример: <span class="thai">หมอ</span> <span class="script" data-notation="mɔ:ˇ">mɔ:ˇ</span><br> ' +
                '— доктор. Здесь к <span class="thai">ม</span> применяются<br> правила чтения высокого класса.'
            ,
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
