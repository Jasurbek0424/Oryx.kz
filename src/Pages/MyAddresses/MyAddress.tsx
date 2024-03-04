import React, { useState } from 'react';
import Plane from '../../assets/plane.png';
import CopyInput from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import UserImg from '../../assets/user.png';

const MyAddress: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string>('deliver');

    const handleClick = (buttonId: string) => {
        setActiveButton(buttonId);
    };
    return (
        <div className='bg-ownGray py-10'>
            <div className='container sm:px-0 px-2'>
                <div className='flex flex-wrap gap-4 justify-end mb-5 sm:hidden'>
                    <Link to={'/profile/parcels/create'} className='flex gap-2 items-center font-gilroy700 text-sm sm:text-md 
                        md:text-lg lg:text-xl py-1 sm:py-2 px-4 rounded-full sm:rounded-md bg-primary
                        hover:bg-red-600 transition-all text-white'>
                        <FaPlus className='hidden sm:block' /> Добавить посылку
                    </Link>
                    <div className='flex justify-evenly w-full'>
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
                <div className='py-6 bg-white rounded-2xl'>
                    <div className='flex items-center gap-4 mb-4'>
                        <img src={Plane} alt="Plane" />
                        <h1 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold font-gilroy700'>
                            Ваши персональные адреса
                        </h1>
                    </div>
                    <div className='w-full h-0.5 bg-gray-400'></div>

                    <div className='mt-10'>
                        <div className='flex gap-4 w-full'>
                            <button
                                className={`p-2 border-b border-gray-400 w-1/2 text-start font-gilroy600 sm:text-md text-sm
                        ${activeButton === 'deliver' ? 'border-gray-600' : ''}`}
                                onClick={() => handleClick('deliver')}
                            >
                                Адрес в Делавэр
                            </button>
                            <button
                                className={`py-2 pl-1 border-b border-gray-400 w-1/2 text-start font-gilroy600 sm:text-md text-sm
                                ${activeButton === 'address' ? 'border-gray-600' : ''}`}
                                onClick={() => handleClick('address')}
                            >
                                Адрес в Нью-Йорке
                            </button>
                        </div>
                        {activeButton === 'deliver' &&
                            <div className='sm:w-1/2 px-4 font-gilroy400 sm:font-inter400 text-gray-700 
                            mt-5 flex flex-col gap-2 sm:gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Address 1:
                                    </p>
                                    <CopyInput id='address1' defaultValue='3047 Emmons Avenue Brooklyn' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Address 2:
                                    </p>
                                    <CopyInput id='address2' defaultValue='ORX15730' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        City:
                                    </p>
                                    <CopyInput id='city' defaultValue='New York' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        State:
                                    </p>
                                    <CopyInput id='state' defaultValue='New York (NY)' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Zip code:
                                    </p>
                                    <CopyInput id='zip' defaultValue='11235' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Country:
                                    </p>
                                    <CopyInput name='country' id='country' defaultValue='USA (United States of America)' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Phone:
                                    </p>
                                    <CopyInput name='phone' id='phone' defaultValue='+19176057707' />
                                </div>

                            </div>
                        }
                        {activeButton === 'address' &&
                            <div className='sm:w-1/2 px-4 font-gilroy400 sm:font-inter400 text-gray-700 
                            mt-5 flex flex-col gap-2 sm:gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Address 1:
                                    </p>
                                    <CopyInput id='addressNew' defaultValue='3047 Address in New-York' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Address 2:
                                    </p>
                                    <CopyInput id='addressNew2' defaultValue='ORX15730 in New-York' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        City:
                                    </p>
                                    <CopyInput id='cityNew' defaultValue='New York' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        State:
                                    </p>
                                    <CopyInput id='stateNew' defaultValue='New York (NY)' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Zip code:
                                    </p>
                                    <CopyInput id='zipNew' defaultValue='11235' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Country:
                                    </p>
                                    <CopyInput name='country' id='countryNew' defaultValue='USA (United States of America)' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>
                                        Phone:
                                    </p>
                                    <CopyInput name='phone' id='phoneNew' defaultValue='+19176057707' />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='mt-6 block sm:hidden'>
                    <div className='py-4 px-4 border border-gray-400 rounded-xl'>
                        <p className='md:text-lg text-justify'>
                            Важно знать
                            <br />
                            *Необходимо полностью заполнить ваши имя и фамилию (латиницей).
                            <br />
                            *Также убедитесь в корректности заполнения Address Line 2 – 2044389 это уникальный номер (ID), который вы получаете при регистрации на сайте и видите в своем аккаунте. По нему мы узнаем, что это ваша посылка.
                            <br />
                            *Для быстрой регистрации посылки, пожалуйста введите трек-номер посылки.
                            <br />
                            *Вы можете получить свою посылку в течение ≈5-10 рабочих дней после ввоза посылки на наш международный склад.
                        </p>
                    </div>
                    <img src={UserImg} className='mt-6  mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default MyAddress;