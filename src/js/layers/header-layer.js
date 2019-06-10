import _ from 'lodash';

import {
  headerLayer,
  contentHeaderMain,
  contentHeaderTours,
  contentHeaderToursBig,
  contentHeaderTransfers,
  contentHeaderKids,
  contentHeaderKidsBig,
  contentHeaderFamily,
  contentHeaderFamilyBig,
  customInput,
  customDatepicker,
  captionWithIcon,
  customSelector,
} from '../common.js';

const data = {
  main: {
    className: '_main',
    contentItem: contentHeaderMain,
    contentItemData: {
      className: '_main _border-bottom',
    },
  },
  social: {
    className: '_main',
    contentItem: contentHeaderMain,
    contentItemData: {
      className: '_main _border-bottom',
    },
  },
  tours: {
    className: '_tours',
    contentItem: contentHeaderTours,
    contentItemData: {
      className: '_tours',
      customInput,
      customInputData: {
        className: '',
        labelText: '',
        placeholderText: 'Поиск услуги',
      },
    },
  },
  toursBig: {
    className: '_tours-big',
    contentItem: contentHeaderToursBig,
    contentItemData: {
      className: '_tours-big',
      customSelector,
      customSelectorData: [
        {
          className: '_white _lg',
          textLabel: 'Продолжительность',
        },
        {
          className: '_white _lg',
          textLabel: 'Аудитория',
        },
        {
          className: '_white _lg',
          textLabel: 'Регион',
        },
        {
          className: '_white _lg',
          textLabel: 'Стоимость',
        },
        {
          className: '_white _lg',
          textLabel: 'Акции',
        },
      ],
      customInput,
      customInputData: {
        className: '',
        labelText: '',
        placeholderText: 'Поиск услуги',
      },
    },
  },
  transfers: {
    className: '_transfers',
    contentItem: contentHeaderTransfers,
    contentItemData: {
      className: '_transfers',
      customSelector,
      customSelectorData: {
        className: '_white _md',
        textLabel: 'Продолжительность',
      },
      customInput,
      customInputData: {
        className: '_label',
        labelText: 'Название лагеря',
        placeholderText: 'Все лагеря',
      },
      customDatepicker,
      customDatepickerData: {
        labelText: 'Даты',
      },
    },
  },
  kids: {
    className: '_kids',
    contentItem: contentHeaderKids,
    contentItemData: {
      className: '_kids',
      customSelector,
      customSelectorData: [
        {
          className: '_white _lg',
          textLabel: 'Тип',
        },
        {
          className: '_white _lg',
          textLabel: 'Направление',
        },
        {
          className: '_white _lg',
          textLabel: 'Месяц заезда',
        },
        {
          className: '_white _sm',
          textLabel: 'Кол-во',
        },
      ],
    },
  },
  kidsBig: {
    className: '_kids-big',
    contentItem: contentHeaderKidsBig,
    contentItemData: {
      className: '_kids-big',
      customSelector,
      firstSelectorData: [
        {
          className: '_white _lg',
          textLabel: 'Тип',
        },
        {
          className: '_white _lg',
          textLabel: 'Направление',
        },
        {
          className: '_white _lg',
          textLabel: 'Месяц заезда',
        },
        {
          className: '_white _sm',
          textLabel: 'Кол-во',
        },
      ],
      secondSelectorData: [
        {
          className: '_white _lg',
          textLabel: 'Лагерь',
        },
        {
          className: '_white _lg',
          textLabel: 'Смена',
        },
        {
          className: '_white _lg',
          textLabel: 'Тематика',
        },
      ],
    },
  },
  familyBig: {
    className: '_family-big',
    contentItem: contentHeaderFamilyBig,
    contentItemData: {
      className: '_family-big',
      customSelector,
      firstSelectorData: [
        {
          className: '_white _lg',
          textLabel: 'Страна',
        },
        {
          className: '_white _lg',
          textLabel: 'Регион',
        },
        {
          className: '_white _lg',
          textLabel: 'Отель',
        },
        {
          className: '_white _sm',
          textLabel: 'Дата въезда',
        },
        {
          className: '_white _sm',
          textLabel: 'Дата выезда',
        },
      ],
      secondSelectorData: [
        {
          className: '_white _lg',
          textLabel: 'Отдыхающих',
        },
        {
          className: '_white _lg',
          textLabel: 'Питание',
        },
        {
          className: '_white _sm',
          textLabel: 'Цена от',
        },
        {
          className: '_white _sm',
          textLabel: 'Цена до',
        },
      ],
    },
  },
  family: {
    className: '_family',
    contentItem: contentHeaderFamily,
    contentItemData: {
      className: '_family',
    },
  },
};

//передать можно
//main, tours, toursBig, social, transfers, kids, kidsBig, familyBig, family
const getTemplate = name => {
  const { contentItem, contentItemData, className } = data[name];
  return headerLayer(data[name]);
};

export default getTemplate;