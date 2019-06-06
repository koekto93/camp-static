import _ from 'lodash';
const path = './../html/includes/';

const captionWithIcon = _.template(
  require(`./../html/includes/caption-with-icon.html`).default,
);

const newsItem = _.template(
  require('./../html/includes/news-item.html').default,
);

const newsBlock = _.template(
  require('./../html/includes/news-block.html').default,
);

const verticalNewsBlock = _.template(
  require('./../html/includes/vertical-news-block.html').default,
);

const arrivalItem = _.template(
  require('./../html/includes/arrival-item.html').default,
);

//Вставка блока с новостями
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

//Вставка блока с вертикальными новостями и картинкой
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

//результат
//const result = newsBlockContent;

const content = document.body.querySelector('.content-container');

//content.innerHTML = result;

content.appendChild(newsContainer);

content.appendChild(verticalNewsContainer);
