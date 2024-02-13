import React from 'react';
import a4 from './image/a4.jpg';
import camry from './image/camry.jpg';
import golf from './image/golf.png';
import maz from './image/maz.png';
import passport from './image/passport.png';
import pts from './image/pts.png';
import sts from './image/sts.png';

import instagram from './image/instagram.png';
import { Logotype } from './image/svgLogo';
import telegram from './image/telegram.png';
import whatsapp from './image/whatsapp.png';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: <Logotype />,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#Content11_0',
          children: [
            {
              children: <span>Продать автомобиль</span>,
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#Feature7_0',
          children: [
            {
              children: <span>О нас</span>,
              name: 'link',
            },
          ],
        },
      },

      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#comment',
          children: [
            {
              children: <span>Отзывы</span>,
              name: 'text',
            },
          ],
        },
      },

      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '',
          children: [
            {
              children: (
                <a target='_blank' href='https://instagram.com/auto.mersi'>
                  <img width={30} src={instagram} />
                </a>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: '',
          children: [
            {
              children: (
                <a target='_blank' href='https://t.me/auto_mersi'>
                  <img width={30} src={telegram} />
                </a>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>
                ВЫКУП АВТОМОБИЛЕЙ <span>&nbsp;</span>
              </p>
            </span>
          </span>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <span>
              <p>Быстро, Надежно, Профессионально</p>
            </span>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <p>
              Мы покупаем авто любых марок&nbsp;
              <span>и состояний. Получите справедливую&nbsp;</span>
              <span>оценку и оплату в день обращения!&nbsp;</span>
            </p>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#Content11_0',
          className: 'banner5-button',
          type: 'primary',
          children: (
            <span>
              <span>
                <p>Продать автомобиль</p>
              </span>
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner5-image lnef0r3p7yo-editor_css',
    children:
      'https://www.kindpng.com/picc/m/33-337318_selling-car-icon-car-sell-png-transparent-png.png',
  },
};
export const Content00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper lneimap509t-editor_css',
  },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Документы необходимые для продажи ТС</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'content',
              className: 'content0-block-icon',
              children: <img src={passport} />,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Паспорт владельца</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>документ удостоверяющий личность</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'content',
              className: 'content0-block-icon',
              children: <img src={pts} />,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>ПТС</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>паспорт транспортного средства</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'content',
              className: 'content0-block-icon',
              children: <img src={sts} />,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>СТС (если есть)</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>свидетельство транспортного средства</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature70DataSource = {
  wrapper: {
    className: 'home-page-wrapper feature7-wrapper lnejw5gnns7-editor_css',
  },
  page: { className: 'home-page feature7' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature7-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature7-title-h1',
        children: (
          <span>
            <p>8 Причин Выбрать Наш Сервис по Выкупу Авто</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature7-title-content',
        children: (
          <span>
            <p>
              Доверьте нам продажу вашего автомобиля и получите максимум выгоды с минимумом хлопот.
              Мы ценим ваше время и предлагаем честные условия!
            </p>
          </span>
        ),
      },
    ],
  },
  blockWrapper: {
    className: 'feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: 'block0',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            { name: 'image', className: 'feature7-block-image', children: '' },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>Честные и справедливые оценки</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>
                    Мы предлагаем справедливые оценки, основанные на рыночной стоимости автомобиля,
                    состоянии и других релевантных факторах
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block1',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            { name: 'image', className: 'feature7-block-image', children: '' },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>Быстрый и прозрачный процесс</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>
                    Процедура выкупа у нас максимально прозрачна и эффективна. Мы ценим ваше время и
                    с уважением относимся к каждой сделке.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block2',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            { name: 'image', className: 'feature7-block-image', children: '' },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Оплата в день обращения:</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        Мы предлагаем мгновенную оплату за ваш автомобиль, что позволяет вам
                        получить деньги уже в день сделки.
                      </p>
                      <p>
                        <br />
                      </p>
                      <p>
                        <br />
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block3',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            { name: 'image', className: 'feature7-block-image', children: '' },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>Мы выкупаем авто всех марок и моделей</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        Независимо от марки, года выпуска или состояния автомобиля - мы готовы
                        рассмотреть любое предложение.
                      </p>
                      <p>
                        <br />
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block4',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            { name: 'image', className: 'feature7-block-image', children: '' },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>Бесплатная консультация и оценка</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>
                    Мы предоставляем бесплатную оценку вашего автомобиля и консультацию по всем
                    вопросам, связанным с выкупом.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block5',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            { name: 'image', className: 'feature7-block-image', children: '' },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>Сбор и подготовка всех необходимых документов</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>
                    Мы берем на себя оформление всех документов, связанных с продажей автомобиля,
                    чтобы вы могли избежать лишних хлопот
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block6',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            { name: 'image', className: 'feature7-block-image', children: '' },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>Гарантия безопасности и надежности сделки</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>
                    Мы гарантируем безопасность и надежность каждой сделки, обеспечивая ваш покой и
                    доверие.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block7',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            { name: 'image', className: 'feature7-block-image', children: '' },
            {
              name: 'title',
              className: 'feature7-block-title lnejy39cqob-editor_css',
              children: (
                <span>
                  <p>Полная конфиденциальность и защита данных</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>
                    Все ваши данные и информация об автомобиле хранятся конфиденциально и не
                    передаются третьим лицам.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Pricing10DataSource = {
  wrapper: { className: 'home-page-wrapper pricing1-wrapper' },
  page: { className: 'home-page pricing1' },
  OverPack: { playScale: 0.3, className: 'pricing1-content-wrapper' },
  titleWrapper: {
    className: 'pricing1-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Крайние сделки</p>
          </span>
        ),
        className: 'pricing1-title-h1',
      },
    ],
  },
  block: {
    className: 'pricing1-block-wrapper',
    children: [],
  },
};
export const Feature11DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: maz,
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>Mazda CX-5 </p>
        <p>2019 год</p>
        <p> пробег 25 000 км</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          Очень довольна продажей моей Mazda CX-5 через эту компанию. Профессионализм сотрудников и
          внимание к деталям поразили меня. Сделка прошла гладко и оперативно
        </p>
      </span>
    ),
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: golf,
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>Volkswagen Golf</p>
        <p>2015 год</p>
        <p>пробег 80 000 км</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <span>
          <p>
            Благодаря этой компании продала свой Volkswagen Golf. Оценка была честной, а продажа
            прошла гладко. Очень довольна сервисом!
            <br />
          </p>
        </span>
      </span>
    ),
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: camry,
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>Toyota Camry</p>
        <p>2016 год</p>
        <p>пробег 60.000 км&nbsp;&nbsp;</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          Продал свой Toyota Camry через эту компанию. Получил справедливую цену за авто. Процесс
          оценки и продажи был легким и прозрачным. Рекомендую!
        </p>
      </span>
    ),
  },
};
export const Feature21DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: a4,
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>Ford Focus </p>
        <p>2015 год</p>
        <p> пробег 75 000 км</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          Продал свою Ford Focus через эту компанию. Оперативный процесс выкупа и приемлемая цена
          приятно удивили. Весь процесс был четким и профессиональным.
        </p>
      </span>
    ),
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper lner9h7ves7-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children: '',
        className: 'title-image',
      },
      {
        name: 'title',
        children: 'Оставьте заявку на выкуп авто прямо сейчас!',
        className: 'title-h1',
      },
      {
        name: 'content',
        children: 'Заполните форму ниже, и наши эксперты свяжутся с вами в кратчайшие сроки',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button',
        href: '#Content11_0',
        children: (
          <span>
            <p>Продать автомобиль</p>
          </span>
        ),
      },
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: <Logotype />,
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>Быстро, Надежно, Профессионально</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Разделы</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#Feature7_0',
              children: (
                <span>
                  <p>о нас</p>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#Content0_0',
              children: (
                <span>
                  <span>
                    <p>Необходимы документы</p>
                  </span>
                </span>
              ),
            },

            {
              name: 'link3',
              href: '#comment',
              children: (
                <span>
                  <p>отызывы клиентов</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Соц сети</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: 'https://instagram.com/auto.mersi',
              name: 'link0',
              children: (
                <span>
                  <img src={instagram} />
                </span>
              ),
            },
            {
              href: 'https://t.me/auto_mersi',
              name: 'link1',
              children: (
                <span>
                  <img src={telegram} />
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <img src={whatsapp} />
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Контакты</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>+7 (903) 747-41-56</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>Москва, Московская область</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>©2023 by Flareon team. All Rights Reserved</span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
