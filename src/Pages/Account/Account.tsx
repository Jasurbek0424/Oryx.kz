import React from 'react';
import UserDefault from '../../assets/userDefault.png';
import { Link } from 'react-router-dom';

const Account: React.FC = () => {
    return (
        <div className='bg-ownGray py-8'>
            <div className='container mb-10 flex gap-8 lg:justify-between justify-center lg:flex-nowrap flex-wrap px-4 sm:px-0'>
                <div className='w-full sm:w-1/2 lg:w-1/3 py-4 px-6 shadow rounded-xl flex flex-col gap-2 bg-white'>
                    <div>
                        <img src={UserDefault} alt="" className='rounded-full' />
                    </div>
                    <h2 className=' font-gilroy600 text-xl lg:text-2xl'>
                        Irina admin
                    </h2>
                    <p className='flex items-center gap-4 '>
                        <span className=' text-gray-600'>ID:</span> #15730
                    </p>
                    <p className='flex items-center gap-3 '>
                        <span className=' text-gray-600'>Email:</span> erke-naz342@mail.ru
                    </p>
                    <p className='flex items-center gap-2 '>
                        <span className=' text-gray-600'>Телефон:</span> +5 (555) 555-55-55
                    </p>
                    <Link to={'/profile/settings'} className='font-gilroy600 text-primary underline'>
                        Посмотреть все данные
                    </Link>
                    <p className=' font-gilroy600 text-primary text-3xl'>
                        VIP
                    </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 py-4 px-6 shadow rounded-xl flex flex-col gap-2 bg-white'>
                    <h2 className='font-gilroy600 text-xl lg:text-2xl'>
                        Мои посылки
                    </h2>
                    <p className='flex items-center gap-4 '>
                        Просмотр статуса и добавление новых посылок
                    </p>
                    <p className='flex items-center gap-3 '>
                        Активных посылок (2)
                    </p>
                    <Link to={'/profile/parcels'} className='font-gilroy600 text-primary underline'>
                        Узнать подробнее
                    </Link>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/4 py-4 px-6 shadow rounded-xl flex flex-col gap-2 bg-white'>
                    <h2 className='font-gilroy600 text-xl lg:text-2xl'>
                        Транзакции
                    </h2>
                    <p className='flex items-center gap-4 '>
                        История совершенных транзакций
                    </p>
                    <Link to={'/profile/transactions'} className='font-gilroy600 text-primary underline'>
                        Узнать подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Account;