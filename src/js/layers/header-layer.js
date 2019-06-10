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
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Продолжительность',
        },
        {
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Аудитория',
        },
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Регион' },
        {
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Стоимость',
        },
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Акции' },
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
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Тип' },
        {
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Направление',
        },
        {
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Месяц заезда',
        },
        { arrow: '_white-arrow', className: '_white _sm', textLabel: 'Кол-во' },
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
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Тип' },
        {
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Направление',
        },
        {
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Месяц заезда',
        },
        { arrow: '_white-arrow', className: '_white _sm', textLabel: 'Кол-во' },
      ],
      secondSelectorData: [
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Лагерь' },
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Смена' },
        {
          arrow: '_white-arrow',
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
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Страна' },
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Регион' },
        { arrow: '_white-arrow', className: '_white _lg', textLabel: 'Отель' },
        {
          arrow: '_white-arrow',
          className: '_white _sm',
          textLabel: 'Дата въезда',
        },
        {
          arrow: '_white-arrow',
          className: '_white _sm',
          textLabel: 'Дата выезда',
        },
      ],
      secondSelectorData: [
        {
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Отдыхающих',
        },
        {
          arrow: '_white-arrow',
          className: '_white _lg',
          textLabel: 'Питание',
        },
        {
          arrow: '_white-arrow',
          className: '_white _sm',
          textLabel: 'Цена от',
        },
        {
          arrow: '_white-arrow',
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
