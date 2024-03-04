import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaExclamation } from "react-icons/fa6";
import UserImg from '../../assets/user.png';

const ParcelDetails: React.FC = () => {
    return (
        <div className='bg-ownGray py-10'>
            <div className='container sm:px-2 px-4'>
                <div className='flex items-center justify-between flex-wrap sm:gap-4'>
                    <div>
                        <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold font-gilroy700'>
                            Ваша посылка
                        </h1>
                        <p className='lg:text-lg my-2 max-w-[750px] w-full'>
                            Введите этот адрес как адрес доставки при совершении онлайн покупок из магазинов США.
                        </p>
                    </div>
                    <div>
                        <Link to={'/profile/parcels/create'} className='flex gap-2 items-center font-gilroy700 text-sm sm:text-md 
                        md:text-lg lg:text-xl py-1 sm:py-2 px-4 rounded-full sm:rounded-md bg-primary
                        hover:bg-red-600 transition-all text-white'>
                            <FaPlus className='hidden sm:block' /> Добавить посылку
                        </Link>
                    </div>
                    <div className='flex justify-evenly w-full mt-5'>
                        <Link to={'/profile/parcels'} className='flex gap-2 items-center font-gilroy700 text-sm sm:text-md 
                        md:text-lg lg:text-xl py-2 px-4 border-b border-gray-600 rounded-md sm:rounded-md bg-white
                        hover:bg-red-600 transition-all sm:hidden hover:text-white'>
                            Мои посылки
                        </Link>
                        <Link to={'/profile/addresses'} className='flex gap-2 items-center font-gilroy700 text-sm sm:text-md 
                        md:text-lg lg:text-xl py-2 px-4 border-b border-gray-600 rounded-md sm:rounded-md bg-white
                        hover:bg-red-600 transition-all sm:hidden hover:text-white'>
                            Мои адреса
                        </Link>
                    </div>
                </div>
                <form className='max-w-[700px] flex flex-col gap-2 mx-auto mb-6'>
                    <label htmlFor="searchparcels" className='font-gilroy600'>
                        Поиск по трек-номеру
                    </label>
                    <div className='w-full rounded-full
                    flex items-center justify-between pr-3 border bg-white border-gray-400 font-inter400'>
                        <input
                            type="search"
                            id='searchparcels'
                            placeholder='Поиск по треку'
                            className='py-1 md:py-2 sm:px-4 px-2  outline-none w-full rounded-full'
                        />
                        <button type='submit'>
                            <IoSearch className='md:text-2xl text-xl text-primary' />
                        </button>
                    </div>
                </form>
                <div className='max-w-[700px] w-full py-4 mx-auto bg-white rounded-lg'>
                    <h2 className='font-gilroy600 px-4 py-2'>
                        Трек-номер
                    </h2>
                    <div className='py-2 border-t border-b px-4'>
                        <Link to={'/profile/parcels'} className='flex items-center justify-between text-sm md:text-md'>
                            <FaAngleLeft />
                            1Z4399R3YW54310597
                            <span className='p-1 border border-gray-500 rounded-full'>
                                <FaExclamation />
                            </span>
                        </Link>
                    </div>
                    <div className='px-4 flex flex-col mt-6 gap-4'>
                        <div className='flex flex-col gap-2 items-center'>
                            <label htmlFor='added' className='font-gilroy600 text-gray-700 sm:text-lg'>
                                Статус
                            </label>
                            <input
                                type="text"
                                id='added'
                                value="Добавлено"
                                readOnly
                                className='w-full py-2 border border-gray-300 px-4 rounded-md font-gilroy600 text-gray-500 outline-none'
                            />
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <label htmlFor='recipient' className='font-gilroy600 text-gray-700 sm:text-lg'>
                                Получатель
                            </label>
                            <input
                                type="text"
                                id='recipient'
                                value="Ф.И.О"
                                readOnly
                                className='w-full py-2 border border-gray-300 px-4 rounded-md font-gilroy600 text-gray-500 outline-none'
                            />
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <label htmlFor='declaration' className='font-gilroy600 text-gray-700 sm:text-lg'>
                                Декларация
                            </label>
                            <input
                                type="text"
                                id='declaration'
                                value="Код"
                                readOnly
                                className='w-full py-2 border border-gray-300 px-4 rounded-md font-gilroy600 text-gray-500 outline-none'
                            />
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <label htmlFor='weight' className='font-gilroy600 text-gray-700 sm:text-lg'>
                                Вес
                            </label>
                            <input
                                type="text"
                                id='weight'
                                value="Кг"
                                readOnly
                                className='w-full py-2 border border-gray-300 px-4 rounded-md font-gilroy600 text-gray-500 outline-none'
                            />
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <label htmlFor='pricedelivery' className='font-gilroy600 text-gray-700 sm:text-lg'>
                                Стоимость доставки
                            </label>
                            <input
                                type="text"
                                id='pricedelivery'
                                value="0"
                                readOnly
                                className='w-full py-2 border border-gray-300 px-4 rounded-md font-gilroy600 text-gray-500 outline-none'
                            />
                        </div>
                    </div>
                    <form className='my-6 px-4 flex justify-between font-gilroy400'>
                        <legend className='font-gilroy700 text-xl'>Оплачен:</legend>
                        <fieldset>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="yes" className='cursor-pointer'>Да</label>
                                <input type="radio" className='cursor-pointer' id="yes" name="contact" value="email" />

                                <label htmlFor="no" className='cursor-pointer'>Нет</label>
                                <input type="radio" className='cursor-pointer' id="no" name="contact" value="phone" />
                            </div>
                        </fieldset>
                    </form>
                    <div className='px-4 clear-start flex items-center gap-4 mb-6 flex-wrap'>
                        <h3 className='font-gilroy700 text-xl'>
                            Товары:
                        </h3>
                        <p >
                            Сумки и рюкзаки, одежда <span>
                                4000$
                            </span>
                        </p>
                    </div>
                </div>
                <img src={UserImg} className='mt-6 block sm:hidden mx-auto' />
            </div>
        </div>
    );
};

export default ParcelDetails;