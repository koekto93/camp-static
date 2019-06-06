import _ from 'lodash';
const path = './../html/includes/';

const captionWithIcon = _.template(
  require(`./../html/elements/caption-with-icon.html`).default,
);

const newsItem = _.template(
  require('./../html/elements/news-item.html').default,
);

const newsBlock = _.template(
  require('./../html/blocks/news-block.html').default,
);

const verticalNewsBlock = _.template(
  require('./../html/blocks/vertical-news-block.html').default,
);

const arrivalItem = _.template(
  require('./../html/elements/arrival-item.html').default,
);

const arrivalsBlock = _.template(
  require('./../html/blocks/arrivals-block.html').default,
);

const arrivalsContainer = _.template(
  require('./../html/blocks/arrivals-container.html').default,
);

//-------- Вставка блока с новостями
const newsBlockData = {
  className: '_with-caption _button', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '23px',
    height: '15px',
    imgName: 'news',
    text: 'Важная информация',
  },
  //newsItem
  newsItem,
  newsItemData: [
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
  ],
};

const newsContainer = document.createElement('div');
newsContainer.innerHTML = newsBlock(newsBlockData);

//const newsBlockContent = newsBlock(newsBlockData);

//-------- Вставка блока с вертикальными новостями и картинкой
const verticalNewsBlockData = {
  className: '_with-caption', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //img
  img: true,
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '23px',
    height: '15px',
    imgName: 'news',
    text: 'Важная информация',
  },
  //newsItem
  newsItem,
  newsItemData: [
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
  ],
};
const verticalNewsContainer = document.createElement('div');
verticalNewsContainer.innerHTML = verticalNewsBlock(verticalNewsBlockData);
//const verticalNewsBlockContent = verticalNewsBlock(verticalNewsBlockData);

//-------- Вставка блока с заездами
const arrivalsContainerData = {
  className: '', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '32px',
    height: '16px',
    imgName: 'car',
    text: 'информация о заездах сегодня',
  },

  //arrivalsBlock
  arrivalsBlock,
  arrivalsBlockData: [
    {
      caption: 'ЗАЕЗДЫ —20–27 ИЮНЯ 2019',
      arrivalItem,
      arrivalItems: [
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
      ],
    },
    {
      caption: 'ВЫЕЗДЫ —20–27 ИЮНЯ 2019',
      arrivalItem,
      arrivalItems: [
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
      ],
    },
  ],
};

const arrivalsWrapper = document.createElement('div');
arrivalsWrapper.innerHTML = arrivalsContainer(arrivalsContainerData);

//

//результат
//const result = newsBlockContent;

const content = document.body.querySelector('.content-container');

//content.innerHTML = result;

content.appendChild(newsContainer);

content.appendChild(verticalNewsContainer);

content.appendChild(arrivalsWrapper);
