import React from 'react';
import Navigation from '../../components/Navigation';
import { BuyMeInfo } from '../../data/main';
import LinkIcon from '../../assets/PageBuyMe/link_icon.png';
import ShopIcon from '../../assets/PageBuyMe/shop_icon.png';
import GlobeIcon from '../../assets/PageBuyMe/globe_icon.png';
import Arrow from '../../assets/PageBuyMe/arrow.png';
import TodoForm from '../../components/TodoForm';

const BuyMe: React.FC = () => {
    return (
        <>
            <div className='container'>
                <div className='mb-4'>
                    <Navigation path={location.pathname} />
                </div>
                <h1 className='xl:text-5xl lg:text-4xl text-2xl font-bold font-gilroy700 px-4 sm:px-0'>
                    ORYX осуществит покупку вместо Вас
                </h1>
                <div className='flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-10 sm:gap-5 my-14 px-2'>
                    <div className='flex flex-col gap-2 items-center text-center max-w-[200px]'>
                        <div className='lg:w-[90px] lg:h-[90px] p-4 flex items-center justify-center rounded-full relative
                        after:content-["1"] after:absolute after:left-0 after:top-0 lg:after:w-[22px] lg:after:h-[22px]
                        after:flex after:items-center after:justify-center 
                        after:w-[18px] after:h-[18px] after:bg-green-600
                        after:rounded-full text-white lg:text-md text-sm
                         bg-ownGray'>
                            <img src={LinkIcon} alt="" className='lg:w-[50px] w-[35px]' />
                        </div>
                        <p>
                            Отправьте нам ссылку
                        </p>
                    </div>
                    <img src={Arrow} alt="" className='hidden sm:block sm:max-w-[120px] lg:max-w-[200px] w-full' />
                    <div className='flex flex-col gap-2 items-center text-center max-w-[200px]'>
                        <div className='lg:w-[90px] lg:h-[90px] p-4 flex items-center justify-center rounded-full relative
                        after:content-["2"] after:absolute after:left-0 after:top-0 lg:after:w-[22px] lg:after:h-[22px]
                        after:flex after:items-center after:justify-center 
                        after:w-[18px] after:h-[18px] after:bg-green-600
                        after:rounded-full text-white lg:text-md text-sm
                         bg-ownGray'>
                            <img src={ShopIcon} alt="" className='lg:w-[50px] w-[35px]' />
                        </div>
                        <p>
                            Мы осуществим покупку.
                        </p>
                    </div>
                    <img src={Arrow} alt="" className='hidden sm:block sm:max-w-[120px] lg:max-w-[200px] w-full' />
                    <div className='flex flex-col gap-2 items-center text-center max-w-[200px]'>
                        <div className='lg:w-[90px] lg:h-[90px] p-4 flex items-center justify-center rounded-full relative
                        after:content-["3"] after:absolute after:left-0 after:top-0 lg:after:w-[22px] lg:after:h-[22px]
                        after:flex after:items-center after:justify-center 
                        after:w-[18px] after:h-[18px] after:bg-green-600
                        after:rounded-full text-white lg:text-md text-sm
                         bg-ownGray'>
                            <img src={GlobeIcon} alt="" className='lg:w-[50px] w-[35px]' />
                        </div>
                        <p>
                            Получи посылку в
                            Казахстане
                        </p>
                    </div>


                </div>
                <section className='mb-10'>
                    <TodoForm />
                </section>
                <section className='flex flex-col gap-6 mb-10 px-4'>
                    {BuyMeInfo[1].map(el => (
                        <div
                            key={el.id}
                            className=''>
                            <div className='flex lg:items-center justify-between flex-col lg:flex-row gap-5'>
                                <div className='flex items-center gap-4'>
                                    <img src={el.img} alt={el.title} />
                                    <h2 className='font-gilroy700 text-lg'>
                                        {el.title}
                                    </h2>
                                </div>
                                <div className='max-w-[550px] xl:max-w-[850px] sm:text-md text-sm'>
                                    <p>
                                        {el.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <section className='py-8 px-6 flex flex-col items-start justify-between bg-ownGray rounded mb-10
                lg:flex-nowrap flex-wrap gap-6 sm:flex-row'>
                    {BuyMeInfo[2].map(el => (
                        <div key={el.id} className='mx-auto flex flex-col items-center text-center gap-2 max-w-[300px]'>
                            <img src={el.img} alt={el.title} />
                            <h2 className='font-gilroy700 sm:text-lg'>
                                {el.title}
                            </h2>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
};

export default BuyMe;