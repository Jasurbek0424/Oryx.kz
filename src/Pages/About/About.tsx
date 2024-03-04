// import React from 'react'
import AboutImg from '../../assets/PageAbout/PageAboutImg.png';
import Navigation from '../../components/Navigation';

import Sklad1 from '../../assets/PageAbout/AboutSklad1.png';
import Sklad2 from '../../assets/PageAbout/AboutSklad2.png';
import Sklad3 from '../../assets/PageAbout/AboutSklad3.png';
import Sklad4 from '../../assets/PageAbout/AboutSklad4.png';

function About() {


    return (
        <>
            <div className='container'>
                <div className='mb-4'>
                    <Navigation path={location.pathname} />
                </div>
                <div className='flex flex-wrap md:flex-nowrap gap-5 justify-around items-center mb-8 md:mb-16 px-4'>
                    <div className='sm:flex-shrink-0 flex justify-center'>
                        <img src={AboutImg} alt="" className='max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]' />
                    </div>
                    <div className='max-w-[450px] '>
                        <h1 className='font-gilroy700 text-xl sm:text-2xl md:text-4xl mb-4'>
                            О компании Oryx
                        </h1>
                        <p className='text-justify text-md lg:text-lg'>
                            ORYX – это надежный мейлфорвардер, имеющий
                            собственный автоматизированный склад в
                            безналоговом штате Америки. Покупка и доставка
                            из США любых товаров – наша основная
                            деятельность. Мы сотрудничаем с лучшими
                            перевозчиками долго и плодотворно благодаря
                            этому готовы предложить доступную стоимость
                            доставки.
                        </p>
                    </div>
                </div>
                <div className='mb-14 px-4'>
                    <h2 className='font-gilroy700 text-xl sm:text-2xl md:text-4xl md:mb-8'>
                        Наш склад в США
                    </h2>
                    <div className='flex flex-wrap md:flex-nowrap gap-6 md:gap-4 lg:gap-8 py-6 '>
                        <div className=''>
                            <div className='flex justify-around md:justify-center  gap-1 lg:gap-4 sklad'>
                                <img className='h-[250px] sm:h-[280px] md:h-[220px] lg:h-[280px] xl:h-[330px]' src={Sklad1} alt="" />
                                <img className='h-[250px] sm:h-[280px] md:h-[220px] lg:h-[280px] xl:h-[330px]' src={Sklad2} alt="" />
                            </div>
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-gilroy700 mb-4'>
                                Получение заказов на склад и консолидация
                            </h3>
                            <p className='text-justify text-sm sm:text-md lg:text-lg'>
                                Независимо от магазина, количества товаров и веса, входящие
                                посылки принимаются на нашем складе бесплатно.
                                <br />
                                Мы бесплатно объединим любое количество входящих посылок
                                из одного или нескольких магазинов в одну общую посылку для
                                вашей экономии на доставке (по сравнению с прямой отправкой
                                из магазинов экономия может составлять до 80%).
                            </p>
                        </div>
                        <div className=''>
                            <div className='flex justify-around md:justify-center gap-1 lg:gap-4 sklad'>
                                <img className='h-[250px] sm:h-[280px] md:h-[220px] lg:h-[280px] xl:h-[330px]' src={Sklad3} alt="" />
                                <img className='h-[250px] sm:h-[280px] md:h-[220px] lg:h-[280px] xl:h-[330px]' src={Sklad4} alt="" />
                            </div>
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-gilroy700 mb-4'>
                                Получение заказов на склад и консолидация
                            </h3>
                            <p className='text-justify text-sm sm:text-md lg:text-lg'>
                                Качественная упаковка, подходящая для международных
                                отправлений всех Ваших покупок, и их переупаковка для
                                уменьшения веса отправления. Стоимость упаковки зависит от
                                размера посылки и формы товаров и составляет от 3 до 8$.
                                <br />
                                Хранение всех Ваших покупок осуществляется абсолютно
                                бесплатно до 14 дней
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About