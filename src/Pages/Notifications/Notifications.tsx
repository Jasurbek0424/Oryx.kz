import React from 'react';

const Notifications: React.FC = () => {
    return (
        <div className='py-10 bg-ownGray'>
            <div className='container px-4'>
                <h1 className='xl:text-5xl lg:text-4xl text-3xl font-bold font-gilroy700'>
                    Уведомления
                </h1>
                <p className='text-lg my-2'>
                    Уведомления о действиях на сайте
                </p>
                <div className='flex lg:flex-nowrap justify-center flex-wrap gap-5 '>
                    <div className='py-4 px-6 rounded-xl bg-white w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4'>
                        <h2 className='font-gilroy600 mb-4'>
                            Уведомления о статусе посылки
                        </h2>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="first" className='cursor-pointer accent-primary' />
                            <label htmlFor="first" className='cursor-pointer'>Уведомление «Регистрация посылки»</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="second" className='cursor-pointer accent-primary' />
                            <label htmlFor="second" className='cursor-pointer'>Уведомление «Получено на складе в США»</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="third" className='cursor-pointer accent-primary' />
                            <label htmlFor="third" className='cursor-pointer'>Уведомление «Доставлено»</label>
                        </div>
                    </div>
                    <div className='py-4 px-6 rounded-xl bg-white w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4'>
                        <h2 className='font-gilroy600 mb-4'>
                            Уведомления o транзакциях
                        </h2>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="tran-first" className='cursor-pointer accent-primary' />
                            <label htmlFor="tran-first" className='cursor-pointer'>Уведомление о пополнении баланса</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="tran-second" className='cursor-pointer accent-primary' />
                            <label htmlFor="tran-second" className='cursor-pointer'>Уведомление о бонусах</label>
                        </div>
                    </div>
                    <div className='py-4 px-6 rounded-xl bg-white w-full md:w-1/2 lg:w-1/3'>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="last" className='cursor-pointer accent-primary' />
                            <label htmlFor="last" className='cursor-pointer'>Отключить все уведомления на эл. почту и на аккаунт</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;