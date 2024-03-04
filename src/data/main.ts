import Icon1 from "../assets/icons/icon1.png"
import Icon2 from "../assets/icons/icon2.png"
import Icon3 from "../assets/icons/icon3.png"

import Brand1 from "../assets/brands/brand1.png"
import Brand2 from "../assets/brands/brand2.png"
import Brand3 from "../assets/brands/brand3.png"
import Brand4 from "../assets/brands/brand4.png"
import Brand5 from "../assets/brands/brand5.png"
import Brand6 from "../assets/brands/brand6.png"

import FaqIcon1 from "../assets/icons/faqIcon1.png"
import FaqIcon2 from "../assets/icons/faqIcon2.png"
import FaqIcon3 from "../assets/icons/faqIcon3.png"
import FaqIcon4 from "../assets/icons/faqIcon4.png"

import Product1 from "../assets/Products/Product1.png";
import Product2 from "../assets/Products/Product2.png";
import Product3 from "../assets/Products/Product3.png";
import Product4 from "../assets/Products/Product4.png";
import Product5 from "../assets/Products/Product5.png";
import Product6 from "../assets/Products/Product6.png";
import Product7 from "../assets/Products/Product7.png";
import Product8 from "../assets/Products/Product8.png";

import BuyMe1 from '../assets/PageBuyMe/options.png';
import BuyMe2 from '../assets/PageBuyMe/price.png';
import BuyMe3 from '../assets/PageBuyMe/special_shop.png';
import BuyMe4 from '../assets/PageBuyMe/card_icon.png';
import BuyMe5 from '../assets/PageBuyMe/time_icon.png';
import BuyMe6 from '../assets/PageBuyMe/special_card_icon.png';


import Status from '../assets/status.png';


interface RoadMapProps {
    id: number
    img: string
    title: string
    context: string
}
interface BrandsProps {
    id?: number
    img?: string
    title?: string
}

interface FaqProps {
    id?: number
    title: string
    context: string
    context2?: string
}

interface ExampleProduct {
    title: string,
    img: string
}

interface Transactions {
    id: number,
    payId: number
    bankKod?: string,
    user: number,
    track?: number,
    date: string,
    summa: string
}

export const roadMap: RoadMapProps[] = [
    {
        id: 1,
        img: Icon1,
        title: 'Зарегистрируйтесь',
        context: 'Получите адрес для доставки посылок в США'
    },
    {
        id: 2,
        img: Icon2,
        title: 'Покупайте',
        context: 'Заказывайте онлайн и отправляйте посылки на наш склад'
    },
    {
        id: 3,
        img: Icon3,
        title: 'Получайте ',
        context: 'Ваши посылки доставят в течении 7-14 дней'
    },
]

export const Brands: BrandsProps[] = [
    { id: 1, img: Brand1 },
    { id: 2, img: Brand2 },
    { id: 3, img: Brand3 },
    { id: 4, img: Brand4 },
    { id: 5, img: Brand5 },
    { id: 6, img: Brand6 },
]

export const Counties: BrandsProps[] = [
    { title: 'США' },
    { title: 'Канада' },
    { title: 'Россия' },
    { title: 'Турция' },
    { title: 'Великобритания' },
    { title: 'Швецария' },
    { title: 'Китай' },
    { title: 'Япония' },
]

export const Faq: FaqProps[] = [
    {
        title: 'Сколько времени занимает доставка?',
        context: 'Доставка в Казахстан в среднем занимает 7-10 дней с момента отправки посылки с нашего склада в США. Иногда из-за задержек рейсов, праздничных дней в США, загруженности курьерских служб в дни крупных распродаж в США срок может увеличиться.',
        context2: 'При любых изменениях сроков мы пришлем уведомление с объяснением причины. Задержки случаются редко, тем не менее рекомендуем позаботиться о временном запасе, если нужно получить посылку к определенному дню. Постарайтесь просто сделать заказ немного раньше.'

    },
    {
        title: 'Как мне оплатить доставку?',
        context: 'Оплатить доставку из США нужно банковской картой или наличными после прибытия посылки в Казахстан.',
        context2: 'Обратите внимание, что нам оплачивается только доставка от нашего склада в США до Казахстана. Если магазин включает в покупку стоимость доставки до нашего склада в США, то она оплачивается вами самостоятельно вместе с самим товаром.'
    },
    {
        title: 'В каких магазинах США можно делать покупки?',
        context: 'Покупать можно в любых магазинах, которые делают доставку в США. Полный список проверенных магазинов доступен на сайте в разделе «Популярные магазины в США».',
    },
    {
        title: 'Как рассчитать стоимость доставки?',
        context: 'Стоимость доставки из США в Казахстан зависит от веса посылки - 13 долларов за килограмм с округлением до 100 грамм. Например, если вес посылки составляет 200 грамм, то стоимость доставки составит 2,6 доллара (0,2 кг × 13).',
        context2: 'Точную стоимость доставки вы узнаете после прибытия посылки в Казахстан. Рассчитать примерную стоимость можно с помощью калькулятора на сайте. Обратите внимание, что стоимость доставки может быть рассчитана по объемному весу, если он превышает фактический. Объемный вес рассчитывается по формуле: Длина (см) × Ширина (см) × Высота (см) / 6000. Стоимость доставки одного смартфона рассчитывается по факту количества купленных смартфонов и составляет 35 долларов за один смартфон'
    },
    {
        title: 'Какие товары нельзя заказывать?',
        context: 'Мы не сможем привезти товары, которые законодательно выведены из товарооборота. Например, огнестрельное или пневматическое оружие, взрывчатые вещества боевого назначения, ядохимикаты, наркотические вещества, деньги, животных, продукцию с воспламеняющимися или взрывчатыми веществами и жидкостями, автомобильное масло, баллоны под давлением.',
        context2: 'Если нужно привезти специфический товар, то лучше свяжитесь с нами перед заказом на его доставку.'
    },
    {
        title: 'Как вернуть приобретенный товар?',
        context: 'Возврат товара осуществляется на условиях магазина, у которого был приобретен товар. Мы можем помочь с возвратом посылки до момента ее отправления из США в Казахстан.',
    },
    {
        title: 'Что делать, если неправильно указал адрес доставки?',
        context: 'Если вы указали неверный адрес или допустили ошибку при указании адреса нашего склада в США, то вы можете самостоятельно связаться с магазином для изменения данных или обратиться за помощью к нам.',
        context2: 'Если после изменения данных на верные потребуется платная пересылка вашего заказа, то эти расходы оплачиваются вами самостоятельно.'
    },
    {
        title: 'Буду ли я оплачивать налог при покупке?',
        context: 'Клиенты ORIX не платят американский налог с продаж – аналог нашего НДС, так как у нас есть склад, который расположен в безналоговом штате. Для освобождения от налога, вам нужно выбрать в кабинете адрес в штате Делавер (DE). С нами вы экономите дополнительные 5-9% от стоимости каждой покупки.',
        context2: ''
    },
    {
        title: 'Какие таможенные лимиты?',
        context: 'При покупке товаров за рубежом, необходимо помнить о таможенной пошлине. С 1 января 2020 года были сняты ограничение по ввозу товаров для личного пользования в адрес одного физлица. При каждом отправлении можно будет ввозить без уплаты таможенных пошлин товары, стоимость которых не превышает 1000 евро и/или вес которых не превышает 31 кг, лимит продлен до 1 октября 2023 года. При превышении установленных норм необходимо будет уплатить таможенный платеж по ставке 15% от превышенной стоимости,например, сумма заказа составляет 1400 евро, таможенная пошлина будет считать на разницу, т.е. от 400 евро.',
        context2: 'Очевидно, что выгоднее заказывать товары по отдельности, чем делать большой заказ и переплачивать на таможне.'
    },
]

export const faqItems: RoadMapProps[] = [
    { id: 1, title: 'Экономно', img: FaqIcon1, context: 'Наши клиенты не платят налог с продаж' },
    { id: 2, title: 'Надежно', img: FaqIcon2, context: 'Гарантируем сохранность товаров' },
    { id: 3, title: 'Быстро', img: FaqIcon3, context: 'Из США в Казахстан от 7 дней' },
    { id: 4, title: 'Просто', img: FaqIcon4, context: 'Покупка в США в 3 простых шага' },
]

export const ExampleProduct = [
    { id: 1, title: 'Marc jacobs', img: Product1 },
    { id: 2, title: 'Watch', img: Product2 },
    { id: 3, title: 'NIKE HYPERSHIFT', img: Product3 },
    { id: 4, title: 'Headphones', img: Product4 },
    { id: 5, title: 'Michael-Kors', img: Product5 },
    { id: 6, title: 'Apple Watch Series 3', img: Product6 },
    { id: 7, title: 'ASUS TUF Gaming F15', img: Product7 },
    { id: 8, title: 'Apple Air Pods', img: Product8 },
]

export const BuyMeInfo = {
    1: [
        {
            id: 1,
            img: BuyMe1,
            title: 'Условия сервиса',
            content: 'Скопируйте ссылку на товар из интернет-магазина и вставьте его на нашей странице «Купи вместо меня».Затем необходимо указать детали заказа(количество, цвет, размер и т.д.) и оплатить покупку.Мы попытаемся совершить покупку в течение 1 раб.дня.Для декларирования посылки основанием послужит инвойс, который выдает магазин.После совершения покупки, декларированная цена товара не подлежит изменению.В случае возникновения вопросов звоните пн - пт 11: 30 - 15: 30.'
        },
        {
            id: 2,
            img: BuyMe2,
            title: 'Стоимость услуги',
            content: 'Стоимость услуги составляет 7% от общей стоимости заказа (мин. 7$). В случае специальных магазинов, дополнительно 7% (мин. 7$) взимается за каждую ссылку.'
        },
        {
            id: 3,
            img: BuyMe3,
            title: 'Специальные магазины',
            content: 'Есть ряд магазинов, которые не доставляют на адреса складов. Для покупки из данных магазинов необходимо воспользоваться услугой транспортировки от нашего партнера.'
        },
    ],
    2: [
        {
            id: 1,
            img: BuyMe4,
            title: 'Покупки при отсутствии банковской карты'
        },
        {
            id: 2,
            img: BuyMe5,
            title: 'Экономия времени'
        },
        {
            id: 3,
            img: BuyMe6,
            title: 'Покупки в специальных магазинах через американскую карту'
        },
    ]
}

export const PanelTransactions: Transactions[] = [
    { id: 1, payId: 1, bankKod: '', user: 16555, track: 222, date: '13.04.2023', summa: '30.00' },
    { id: 2, payId: 1, bankKod: '33f9e924-2425-74f3-9bd2-98500d41dc2b', user: 16399, date: '26.01.2022', summa: '5.00' },
    { id: 3, payId: 1, bankKod: 'db7d71c1-4673-75d2-b47e-53f80d41dc2b', user: 16402, date: '13.01.2022', summa: '	15.00' },
    { id: 4, payId: 1, bankKod: '2db29777-b961-73b0-bfe3-15e10d41dc2b', user: 16393, date: '	12.01.2022', summa: '5.00' },
]

export const LaterShablon = [
    {
        id: 1,
        title: 'Ваша посылка зарегистрирована',
        context: 'Уважаемый(ая) {fio},\r\nМы зарегистрировали трек- номер { track } \r\n Вашей посылки Как только она прибудет на наш международный склад, \r\nмы с Вами свяжемся.\r\nС уважением',
        status: 'Активно',
        checked: false
    },
    {
        id: 2,
        title: 'На складе',
        context: 'Уважаемый(ая) {fio},\r\nТрек-номер: {track}\r\nВес: {weight}\r\nОписание:\r\nВаша посылка прибыла на наш склад и готова к отправке в Казахстан.\r\nВо избежание препятствий, убедитесь, что Ваш статус получателя подтвержден, а товар задекларирован.\r\nС уважением',
        status: 'Активно',
        checked: false
    },
    {
        id: 3,
        title: 'Вы зарегистрированы на сайте',
        context: 'Поздравляем! Регистрация успешно завершена! ',
        status: 'Активно',
        checked: false
    },
    {
        id: 4,
        title: 'Получатель подтвержден',
        context: 'Уважаемый(ая) {fio},\r\nВаш статус получателя "Подтверждён"!\r\nТеперь Вы можете забирать посылки  из наших филиалов или заказывать доставку в города Казахстана.\r\nС уважением',
        status: 'Активно',
        checked: false
    },
    {
        id: 5,
        title: 'В пути',
        context: 'Уважаемый(ая) {fio},\r\nТрек-номер: {track}\r\nВес: {weight}\r\nОписание:\r\nВаша посылка отправлена в Казахстан. Ожидайте её прибытие в течение 5-10 рабочих дней.\r\nС уважением',
        status: 'Активно',
        checked: false
    },
]


export const CountryDelivery = [
    {
        id: 1,
        title: 'Казахстан',
        context: 'Астана Алматы Актау Актобе Атырау Караганда Кокшетау Костанай Кызылорда Павлодар Петропавловск Семей Талдыкорган Тараз Туркестан Уральск Усть-Каменогорск.',
        status: 'Активно',
        checked: false
    },
]

export const CountryExport = [
    {
        id: 1,
        title: 'США',
        context: 'Adress 1//City/State/Zip code/USA/Ваш номер телефона',
        status: 'Активно',
        checked: false
    },
    {
        id: 1,
        title: 'Европа',
        context: 'Adress 1/test/City/State/Zip code/Country/Ваш номер телефона',
        status: 'Неактивно',
        checked: false
    }
]


export const Tarifs = [
    {
        id: 1,
        title: 'По-умолчанию',
        context: 'США : 13\r\nЕвропа: 11',
        status: 'Активно',
        checked: false
    },
]


export const Users = [
    {
        id: 1,
        title: 'Имяржанов Рамиль Сухратжанович',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 2,
        title: 'Amanbekova Lyazzat',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 3,
        title: 'Жаксылык Асель',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 4,
        title: 'Тантаева Аягуль',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 5,
        title: 'Myrzaly Aibek',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 6,
        title: 'Sabyr Maira',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 7,
        title: '',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 8,
        title: 'Адилкаирова Амина Галиматовна',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 9,
        title: '',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 10,
        title: 'Жетес Нурай',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 11,
        title: 'Arupova Nailyam',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 12,
        title: 'Medbayeva zarina',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 13,
        title: 'Ibraimova Diana',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 14,
        title: 'Nuriddinov Ulugbek',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 15,
        title: 'Күндебек Алуа Амангельдіқызы',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
    {
        id: 16,
        title: 'Аскаров Батырхан',
        email: 'ramil_03_01@mail.ru',
        tel: '+7 (708) 241-58-27',
        status: 'По-умолчанию',
        checked: false
    },
]


export const Recipients = [
    {
        id: 1,
        title: 'Имяржанов Рамиль Сухратжанович',
        date: '04.03.2024 / 09:34',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 2,
        title: 'Amanbekova Lyazzat',
        date: '27.02.2024 / 16:26',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 3,
        title: 'Жаксылык Асель',
        date: '26.02.2024 / 10:13',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 4,
        title: 'Тантаева Аягуль',
        date: '24.02.2024 / 15:59',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 5,
        title: 'Myrzaly Aibek',
        date: '20.02.2024 / 15:41',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 6,
        title: 'Sabyr Maira',
        date: '13.02.2024 / 20:29',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 7,
        title: 'Adambekova Aidana',
        date: '07.02.2024 / 20:29',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 8,
        title: 'Адилкаирова Амина Галиматовна',
        date: '06.02.2024 / 10:40',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 9,
        title: 'Потапов Алексей',
        date: '06.02.2024 / 10:40',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 10,
        title: 'Жетес Нурай',
        date: '05.02.2024 / 13:57',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 11,
        title: 'Arupova Nailyam',
        date: '05.02.2024 / 13:57',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 12,
        title: 'Medbayeva zarina',
        date: '05.02.2024 / 13:04',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 13,
        title: 'Ibraimova Diana',
        date: '05.02.2024 / 13:00',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 14,
        title: 'Nuriddinov Ulugbek',
        date: '05.02.2024 / 13:00',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 15,
        title: 'Күндебек Алуа Амангельдіқызы',
        date: '04.02.2024 / 21:18',
        status: 'Подтвержен',
        checked: false
    },
    {
        id: 16,
        title: 'Аскаров Батырхан',
        date: '04.02.2024 / 16:08',
        status: 'Подтвержен',
        checked: false
    },
]



export const AddedInfo = [
    {
        id: 1,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 2,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 3,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 4,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 5,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 6,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 7,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 8,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 9,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
    {
        id: 10,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
]


export const inSkladInfo = [
    {
        id: 1,
        payment: 'Не оплачена',
        uid: '16803',
        track: '1Z37W9X60302894380SA',
        date: '04.03.2024',
        recipient: '#261 Астана',
        country: 'Астана',
        img: Status,
        checked: false
    },
]
export const ReadyInfo = [
    {
        id: 1,
        payment: '',
        uid: '',
        track: '',
        date: '',
        recipient: '',
        country: '',
        img: '',
        checked: false
    },
]