import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyNotifications: React.FC = () => {

    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleClick = (buttonId: string) => {
        setActiveButton(buttonId === activeButton ? null : buttonId);
    };

    return (
        <div className='py-10 bg-ownGray'>
            <div className='container'>
                <div className='flex items-center justify-between flex-wrap mb-10 sm:px-0 px-4 gap-4'>
                    <div>
                        <h1 className='xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold font-gilroy700'>
                            Мои уведомления
                        </h1>
                        <p className='text-lg my-2'>
                            Уведомления о действиях на сайте
                        </p>
                    </div>
                    <div>
                        <Link to={'/parcels/create'} className='flex gap-2 items-center font-gilroy700 
                        md:text-xl py-2 px-4 rounded-md bg-primary
                        hover:bg-red-600 transition-all text-white'>
                            <FaPlus /> Добавить посылку
                        </Link>
                    </div>
                </div>

                <div className='flex gap-2 sm:flex-row flex-col sm:px-0 px-4'>
                    <button
                        className={`py-2 px-5 rounded hover:bg-primary hover:text-white transition-all border text-primary border-primary 
                        ${activeButton === 'all' ? 'bg-primary text-white' : ''}`}
                        onClick={() => handleClick('all')}
                    >
                        Все уведомления
                    </button>
                    <button
                        className={`py-2 px-5 rounded hover:bg-primary hover:text-white transition-all border text-primary border-primary 
                        ${activeButton === 'unread' ? 'bg-primary text-white' : ''}`}
                        onClick={() => handleClick('unread')}
                    >
                        Непрочитанные
                    </button>
                    <button
                        className={`py-2 px-5 rounded hover:bg-primary hover:text-white transition-all border text-primary border-primary 
                        ${activeButton === 'onway' ? 'bg-primary text-white' : ''}`}
                        onClick={() => handleClick('onway')}
                    >
                        В пути
                    </button>
                    <button
                        className={`py-2 px-5 rounded hover:bg-primary hover:text-white transition-all border text-primary border-primary 
                        ${activeButton === 'incountry' ? 'bg-primary text-white' : ''}`}
                        onClick={() => handleClick('incountry')}
                    >
                        В стране
                    </button>
                </div>

                <div className='mt-10 w-full flex flex-wrap gap-6 sm:px-0 px-4'>
                    <div className='w-full lg:w-1/3 bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-10 rounded-lg'>
                        <p className='flex flex-col gap-1 sm:text-lg md:text-xl'>
                            Доставлено
                            <span>
                                16.01.2024, 15:01
                            </span>
                        </p>
                    </div>
                    <div className='w-full lg:w-1/2 bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-10 rounded-lg'>
                        <p className='flex flex-col gap-1 sm:text-lg md:text-xl'>
                            Ваша посылка зарегистрирована
                            <span>
                                06.12.2023, 16:12
                            </span>
                        </p>
                    </div>
                    <div className='w-full lg:w-1/2 bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-10 rounded-lg'>
                        <p className='flex flex-col gap-1 sm:text-lg md:text-xl'>
                            Доставлено
                            <span>
                                16.01.2024, 15:01
                            </span>
                        </p>
                    </div>
                    <div className='w-full lg:w-1/3 bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-10 rounded-lg'>
                        <p className='flex flex-col gap-1 sm:text-lg md:text-xl'>
                            Ваша посылка зарегистрирована
                            <span>
                                06.12.2023, 16:12
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNotifications;