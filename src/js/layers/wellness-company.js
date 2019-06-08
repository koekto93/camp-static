import _ from 'lodash';

import {
  wellnessСompanyLayer,
  infoDoubleCard,
  innerElementOfInfoCard,
  captionWithIcon,
  infoListCard,
} from '../common.js';

const wellnessСompanyData = {
  stages: [
    {
      captionText: 'Первый этап заявочной кампании',
      infoDoubleCard,
      cardItems: [
        {
          className: '_card-border',
          innerElementOfInfoCard,
          innerElementData: [
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'empty-calendar',
                text: 'С 2 ноября по 10 декабря 2018 г.',
              },
              description: true,
              descriptionText:
                'Прием заявлений на предоставление услуги — бесплатной путевки в лагерь или сертификат на компенсацию.',
            },
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'done',
                text: 'Что нужно сделать',
              },
              description: true,
              descriptionText:
                'Родитель или законный представитель ребенка оформляет заявку на услугу на портале mos.ru в личном кабинете. <span class="link-color">Смотрите видеоинструкцию</span>, как это сделать.',
            },
          ],
          backSide: false, //включает и выключает обратную сторону карточки при наведении
        },
        {
          className: '_card-border',
          innerElementOfInfoCard,
          innerElementData: [
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'empty-calendar',
                text: 'С 5 ноября по 24 декабря 2019 г.',
              },
              description: true,
              descriptionText: 'Проверка сведений в документах.',
            },
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'done',
                text: 'Что нужно сделать',
              },
              description: true,
              descriptionText:
                'При получении уведомления в личном кабинете необходимо записаться на прием в офис МОСГОРТУРа и принести недостающие документы.',
            },
          ],
          backSide: false, //включает и выключает обратную сторону карточки при наведении
        },
        {
          className: '_card-border',
          innerElementOfInfoCard,
          innerElementData: [
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'empty-calendar',
                text: 'С 25 декабря по 17 января 2019 г.',
              },
              description: true,
              descriptionText:
                'Формирование предварительного реестра получателей.',
            },
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'done',
                text: 'Что нужно сделать',
              },
              description: true,
              descriptionText:
                'Ожидать уведомление в личном кабинете о получении услуги.',
            },
          ],
          backSide: false, //включает и выключает обратную сторону карточки при наведении
        },
      ],
    },
    {
      captionText: 'Второй этап заявочной кампании',
      infoDoubleCard,
      cardItems: [
        {
          className: '_card-border',
          innerElementOfInfoCard,
          innerElementData: [
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'empty-calendar',
                text: 'С 7 по 21 февраля 2019 г.',
              },
              description: true,
              descriptionText:
                'Выбор конкретного места отдыха или замена первоначального выбора отдыха на сертификат.',
            },
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'done',
                text: 'Что нужно сделать',
              },
              description: true,
              descriptionText:
                'В личном кабинете на мос.ру выбрать из предложенных мест отдыха или, если ни одно из мест не подходит, выбрать сертификат на самостоятельную организацию отдыха.',
            },
          ],
          backSide: false, //включает и выключает обратную сторону карточки при наведении
        },
        {
          className: '_card-border',
          innerElementOfInfoCard,
          innerElementData: [
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'empty-calendar',
                text: 'С 7 по 22 февраля 2019 г.',
              },
              description: true,
              descriptionText:
                'Направление уведомлений о предоставлении путевок или сертификатов.',
            },
            {
              caption: true,
              captionWithIcon,
              captionWithIconData: {
                className: '_column _a-center',
                imgName: 'done',
                text: 'Что нужно сделать',
              },
              description: true,
              descriptionText:
                'В личном кабинете на мос.ру выбрать Ожидать уведомления в ЛК на мос.ру о предоставлении путевки или обоснованный отказ. Если вы получатель сертификата, то вы получите компенсационные выплаты в периодд с 18 января по 18 марта.',
            },
          ],
          backSide: false, //включает и выключает обратную сторону карточки при наведении
        },
      ],
      //последняя карточка отличается
      listCard: true,
      infoListCard,
      listCardData: {
        innerElementOfInfoCard,
        innerElementData: {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center',
            imgName: 'alarm',
            text: '',
          },
          description: false,
        },
        backSide: false, //включает и выключает обратную сторону карточки при наведении
      },
    },
  ],
};

const wellnessСompanyLayerTemplate = wellnessСompanyLayer(wellnessСompanyData);

export default wellnessСompanyLayerTemplate;
