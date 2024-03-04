import React from 'react';
import { TfiSave } from "react-icons/tfi";
import { TiArrowBackOutline } from "react-icons/ti";

const PanelSettings: React.FC = () => {
    return (
        <form className='w-full py-10 px-4'>
            <div className='flex gap-4 justify-end w-full'>
                <button type='submit' className='flex items-center gap-2 py-1 md:py-2 px-4 md:px-6 bg-primary rounded-md text-white'>
                    <TfiSave />
                    Сохранить
                </button>
                <button type='submit' className='flex items-center gap-2 md:py-2 px-4 md:px-6 bg-gray-400 rounded-md text-white'>
                    <TiArrowBackOutline className='text-lg' />
                    Назад
                </button>
            </div>
            <div className='w-full bg-white p-6 rounded-md mt-6 shadow'>
                <h2 className='font-gilroy600 relative pb-2 after:content-[""] after:absolute after:h-1 text-lg
                after:w-[100px] after:bg-primary after:left-0 after:bottom-0'>
                    Редактировать сотрудника
                </h2>

                <div className='mt-6 flex flex-col gap-8'>
                    <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                        <div className='font-gilroy400 text-lg md:w-1/2'>
                            <label htmlFor="adminName" className='font-gilroy600'>Имя</label>
                            <input
                                type="text"
                                id='adminName'
                                placeholder='Имя*'
                                defaultValue='irina'
                                className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                            />
                        </div>
                        <div className='font-gilroy400 text-lg md:w-1/2'>
                            <label htmlFor="adminEmail" className='font-gilroy600'>Email</label>
                            <input
                                type="text"
                                id='adminEmail'
                                placeholder='Email*'
                                defaultValue='erke-naz342@mail.ru'
                                className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                        <div className='font-gilroy400 text-lg md:w-1/2'>
                            <label htmlFor="adminPassword" className='font-gilroy600'>Пароль</label>
                            <input
                                type="text"
                                id='adminPassword'
                                placeholder='Введите пароль'
                                className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                            />
                        </div>
                        <div className='font-gilroy400  md:w-1/2'>
                            <label htmlFor="adminPhoto" className='font-gilroy600 text-lg'>Фото</label>
                            <input
                                type="file"
                                id='adminPhoto'
                                className='py-1.5 px-4 rounded border border-gray-400 outline-none w-full'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                        <div className='font-gilroy400 text-lg md:w-1/2'>
                            <label htmlFor="adminStatus" className='font-gilroy600 text-lg'>Роль</label>
                            <select
                                id='adminStatus'
                                className='py-2 px-4 rounded border border-gray-400 outline-none w-full'>
                                <option value="Казахстан">Админ</option>
                            </select>
                        </div>
                        <div className='font-gilroy400 text-lg md:w-1/2'>
                            <label htmlFor="adminCountry" className='font-gilroy600 text-lg'>Город</label>
                            <select
                                id='adminCountry'
                                className='py-2 px-4 rounded border border-gray-400 outline-none w-full'>
                                <option value="Казахстан"></option>
                                <option value="Астана">Астана</option>
                                <option value="Актау">Актау</option>
                                <option value="Актобе">Актобе</option>
                                <option value="Атырау">Атырау</option>
                                <option value="Караганда">Караганда</option>
                                <option value="Кокшетау">Кокшетау</option>
                                <option value="Костанай">Костанай</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default PanelSettings;