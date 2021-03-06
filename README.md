Статья [https://habr.com/post/350886/](https://habr.com/post/350886/).

yarn start dev должна сделать сборку без минификации

- Лучшие предложения месяца и пагинацию внизу
- Акции со знаком фаера
- Лучший детский отдых
- Блок с отфильтрованными поездками
- ничего не найдено
- контент в хедер трансфера
- блок синего цвета акции и предложения
- лучший детский отдых
- блок селекторов из family
- контент в хедере family

Составляющие страницы main:

- header(летний отдых, зеленая картинка)
- ~~горизонтальный блок новостей без картинки и тайтла (l-news)~~
- ~~Составной блок (l-main-first-composite-block l-flex-row)~~
  - Важная информация (l-important-information-block)
  - Информация о заездах сегодня (l-arrivals)
- ~~Составной блок (l-main-second-composite-block l-flex-row)~~
  - Блок вертикальной новости с картинкой (l-news l-news_vertical l-news_img l-news_title l-news_button)
  - (l-main-second-composite-block\_\_right-side l-flex-column) --start
    - Блок видеоотзыва (l-video-reviews)
    - Блок лучших предложений (l-top-offers)
  - (l-main-second-composite-block\_\_right-side l-flex-column) --end
- ~~О мосгортуре (l-info-about-company)~~
- ~~Какой-то блок с предложениями (l-block-with-offers)~~
- ~~Блок подписки на рассылку (l-mailing-block)~~
- ~~Блок "вожатым" (l-info-for-leaders)~~
- ~~Составной блок (l-main-third-composite-block l-flex-row)~~
  - Экскурсии (l-tours)
  - Мы в соц сетях (l-social-network ???)
- Корпоративные услуги (l-corporate-services)
- Наши лагеря (l-our-camps)
- подвал

Составляющие страницы social-vacation:

- header(летний отдых, зеленая картинка)
- составной блок (l-social-vacation-first-composite-block l-flex-row)
  - Важная информация (l-important-information-block)
  - карточка бронирования доп мест и услуг
- горизонтальный блок новостей без картинки (l-news l-news_horizontal l-news_title l-news_button)
- блок заявочной компании (l-request-company-block)
- ~~блок полезные ссылки (usefulLinksLayerTemplate)~~
- ~~блок распределение квот (l-quota-allocation)~~
- блок "что делать после получения путевки" (l-after-receiving-the-voucher)
- ~~Блок "ответы на частые вопросы" (frequentlyQuestionsLayerTemplate)~~
- ~~Блок рекомендации (l-recommendations)~~
- подвал

Составляющие страницы transfers:

- header с оранжевым фоном и блоком информации о заезде с инпутами
- Блок информации о заездах (l-arrival-information l-arrival-information_searched l-arrival-information_empty) //\_empty Ничего не найдено //\_searched - вывели результаты после поиска
- Блок ранее просмотреных предложений (l-previously-viewed-offers)
- подвал

Составляющие страницы tours:

- Шапка с меньшей высотой и с разными вариациями инпутов
- Блок с акциями и сезонными предложениями 2-х видов
- Блок фильров/табов.
- смешанный блок
  - Блок лечших предложений месяца
  - Блок лучшего детского отдыха
- блок пагинации
- блок подписки на рассылку
- блок инфы с картинками
- Блок ранее просмотреных предложений (l-previously-viewed-offers)

Выносим в отдельные компоненты:

- логотипы???
- блок с навигацией из шапки
- собранный блок из шапки с логотипами, навигацие и т.д
- ~~блок новостей всех видов. Сделано в 2 вариациях: vertical-news-block и news-block~~
- ~~тайтл блоков c картинкой( row, column )~~
- ~~блок с затемнением~~
- ~~карточка важной информации. сделать вариацию с hover~~
- ~~карточка информации о заезде из main~~
- кнопка rounded и обычная
- блок картинки
- ~~блок svg иконки(уже сделан, прокидывать туда переменные)~~
- блок предложения(альпака) с 3-мя состояниями
- кастомный чекбокс из "подписаться на рассылку"
- Карточка вожатого с главной страницы
- Карточка услуги из корпоративных услуг главной страницы
- карусель для блока наши лагеря из главной страницы
- ~~инпут, как у материала~~
- инпут со страницы transfers
- селектор со страницы transfers
- дейт пикер со страницы transfers
- ~~карточка бронирования доп мест и услуг из social-vacation~~
- карточка из этапа заявочной компании social-vacation (с-request-card с-request-card_double)
- ~~стиль обычной рамки~~
- ~~стиль рамки с тенью~~
- ~~двойная карточка из "Ответы на часты вопросы" из social-vacation~~
- карточка рекомендации из social-vacation
- таблица информации о заездах из transfers
  - thead
  - строчка информации заезда
- Блок подписки на рассылку (l-mailing-block)
- Блок фильтров для страницы tours
- Блок табов для страницы tours

Виды блока новостей:

- ~~горизонтальный блок новостей без тайтла и без картинки~~
- ~~горизонтальный блок новостей с тайтлом и без картинки~~
- ~~вертикальный блок новостей с тайтлом и без картинки~~

Шрифты:

- ~~PTSans-Regular на 12px 14px 15px~~

- ~~PTSans-Bold на 13px 14px~~

- ~~Intro 12px 13px 15px 28px~~

Стили для текста:

- ~~стиль ссылки или просто оранжевого текста~~

Правила flex:

- ~~Два блока row~~

Что нужно потребовать от дизайнера:

- иконка волны из блока "Вожатым"
- иконца инсты
- кусок фона у блока "Акции/сезонные предложения/многодневные экскурсии"

Посмотреть текстовые формы:

- инпут https://www.howtomake.com.ua/front/stilizaciya-vsex-elementov-form-s-pomoshhyu-css-i-jquery.html
- select https://ru.stackoverflow.com/questions/417507/%D0%A1%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-select-%D0%B8-option

- select https://codepen.io/Eliseenko/pen/bdarGM
