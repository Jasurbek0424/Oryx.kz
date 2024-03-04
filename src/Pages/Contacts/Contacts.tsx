import React from 'react';
import Navigation from '../../components/Navigation';
import MapImg from '../../assets/PageBuyMe/map.png';

const Contacts: React.FC = () => {
    return (
        <>
            <div className='container'>
                <div className='mb-4'>
                    <Navigation path={location.pathname} />
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='md:w-1/2 flex flex-col gap-4 mb-10 flex-shrink-0 px-4'>
                        <h1 className='xl:text-5xl lg:text-4xl text-2xl font-bold font-gilroy700'>
                            Контакты
                        </h1>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-primary font-bold lg:text-lg'>
                                Адрес:
                            </h3>
                            <p className='font-gilroy600'>
                                Республика Казахстан, г.Алматы, ул.Макатаева,
                                д.125, офис 5, вход в здание с торца
                            </p>
                        </div>
                        <div className='flex flex-wrap justify-between gap-4'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-primary font-bold lg:text-lg'>
                                    Телефон:
                                </h3>
                                <a href='tel:+7 700 323 22 22' className='font-gilroy600'>
                                    +7 700 323 22 22
                                </a>
                            </div> 
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-primary font-bold lg:text-lg'>
                                    Email:
                                </h3>
                                <a href='mailto:ofis@orix.kz' className='font-gilroy600'>
                                    ofis@orix.kz
                                </a>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-primary font-bold lg:text-lg'>
                                    Whatsapp:
                                </h3>
                                <a href="https://wa.me/+77475155613" className='font-gilroy600'>
                                    +7 747 515 5613
                                </a>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-primary font-bold lg:text-lg'>
                                    Instagram:
                                </h3>
                                <a
                                    href="https://www.instagram.com/oryx.usa.kz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    className='font-gilroy600'>
                                    @oryx.usa.kz
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-lg font-bold font-gilroy700'>
                                Руководитель компании:
                            </p>
                            <h2 className='font-gilroy700 text-2xl text-gray-800'>
                                Бейсембаев Бауыржан
                            </h2>
                            <a className='font-gilroy600 text-gray-700' href="mailto:b.beysembaev@oryx.kz">b.beysembaev@oryx.kz</a>
                            <a className='font-gilroy600 text-gray-700' href="tel:+7 702 591 73 55">+7 702 591 73 55</a>
                        </div>
                    </div>
                    <div className='mb-10'>
                        <img src={MapImg} alt="Map" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;