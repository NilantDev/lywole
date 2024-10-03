function getInfoData() {
    return [
        {
            'title': 'Первое правило книжного клуба',
            'content': [
                'Прочитайте цитату, затем выберите из списка книгу, из которой, по вашему мнению, она взята, и нажмите "Выбрать".',
                'Если ваше предположение неверно, поле станет красным. Если ваша догадка неверна, но автор прав, квадратик станет желтым.',
                'Каждая догадка откроет еще одну цитату из книги. Ответьте, сделав как можно меньше попыток, а затем поделитесь своим результатом!',
            ],
            'zIndex': 1,
            'type': 'list',
            'top': '0',
        },
        {
            'title': 'Подсказки',
            'content': [
                'После открытия второй карточки появится год написания, переводчик и язык перевода.',
                'После открытия третьей карточки станет доступна карточка "Жанрово-тематический классификатор".',
                'После открытия четвертой карточки станет доступна карточка "Похожие произведения и экранизации".',
                'После открытия пятой карточки вы можете выбрать либо карточку "Начало", либо "Конец".',
                'После открытия шестой карточки станет доступна оставшееся карточка.',
            ],
            'zIndex': 2,
            'type': 'list',
            'top': '245px',
        },
        {
            'title': 'Глоссарий',
            'content': [
                'ЖТК (Жанрово-тематический классификатор) - карточка содержит следующие данные о произведении "Жанры / поджанры", "Общие хар-ки", "Место действия", "Время действия", "Сюжетные ходы", "Линейность сюжета", "Возраст читателя",',
                'ПП&Э (Похожие произведения и экранизации) - карточка содержит максимум три похожих произведения и (если есть) экранизации. Если название экранизации совподает с названием произведения, то оно будет скрыто.',
                'Начало - первая фраза произведения.',
                'Конец - последняя фраза произведения.',
            ],
            'zIndex': 3,
            'type': 'list',
            'top': '545px',
        },
        {
            'title': 'FAQ',
            'content': [
                '<span class="question">Когда доступно новое задание?</span><span class="answer">Задание доступно раз в неделю, с понедельника</span>',
                '<span class="question">А можно чаще?</span><span class="answer">Нет, но вы можете выбрать задание из Архива или из Спецфонда?</span>',
                '<span class="question">Мне доступен Архив/Спецфонд, но я не могу сыграть. Почему?</span><span class="answer">Максисмум доступно одно задание в день.</span>',
                '<span class="question">Что такое Спецфонд?</span><span class="answer">В основном задании представлены широко известные книги. А Спецфонде книги из конкретной категории.</span>',
            ],
            'zIndex': 4,
            'type': 'faq',
            'top': '900px',
        },
    ]
}

