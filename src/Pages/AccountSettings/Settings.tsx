import React, { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 py-5 px-5 flex justify-center bg-black bg-opacity-50 overflow-y-auto" onClick={onClose}>
            <div className="bg-ownGray py-4 px-4 sm:px-6 rounded-md relative max-w-3xl w-full h-max" onClick={(e) => e.stopPropagation()}>
                <button className="mt-4 p-2 absolute bg-primary text-white rounded-full hover:bg-red-600
                -right-4 -top-7" onClick={onClose}>
                    <FaTimes />
                </button>
                <h2 className="text-lg font-gilroy600 mb-4">Добавить получателя</h2>
                <p className=' sm:my-5'>
                    Для того чтобы добавить получателя, обязательно заполните все поля помеченные *
                </p>
                <div className="modal-content py-4">
                    <form className='flex flex-col gap-4'>
                        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-6'>
                            <input
                                type="text"
                                required
                                placeholder='Имя*'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none sm:w-1/2'
                            />
                            <input
                                type="text"
                                required
                                placeholder='Фамилия*'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none sm:w-1/2'
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-6'>
                            <input
                                type="text"
                                required
                                placeholder='Отчество'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none sm:w-1/2'
                            />
                            <select className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none sm:w-1/2'>
                                <option value="Казахстан">Казахстан</option>
                                <option value="Россия">Россия</option>
                            </select>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-6'>
                            <input
                                type="text"
                                required
                                placeholder='Номер удостоверения личности*'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none sm:w-1/2'
                            />
                            <input
                                type="text"
                                required
                                placeholder='Кем выдано*'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none sm:w-1/2'
                            />
                        </div>
                        <div className=''>
                            <input
                                type="text"
                                required
                                placeholder='Дата выдачи*'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none w-full'
                            />
                        </div>
                        <p className=' sm:my-5'>
                            Прикрепите скан или фото обеих сторон удостоверения личности отдельными файлами в формате jpg, png
                        </p>
                        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='sm:w-1/2'>
                                <p className='mb-2'>
                                    Прикрепить сторону А *
                                </p>
                                <input
                                    type="file"
                                    required
                                    className='py-2 px-4 rounded border border-gray-400 bg-white w-full'
                                />
                            </div>
                            <div className='sm:w-1/2'>
                                <p className='mb-2'>
                                    Прикрепить сторону Б *
                                </p>
                                <input
                                    type="file"
                                    required
                                    className='py-2 px-4 rounded border border-gray-400 bg-white w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-6'>
                            <input
                                type="text"
                                required
                                placeholder='+7 (...)*'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none sm:w-1/2'
                            />
                            <input
                                type="text"
                                required
                                placeholder='Город*'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none sm:w-1/2'
                            />
                        </div>
                        <div className=''>
                            <input
                                type="text"
                                required
                                placeholder='Адрес*'
                                className='py-2 px-4 rounded border border-gray-400 font-gilroy400 text-lg outline-none w-full'
                            />
                        </div>
                        <div className='flex gap-2'>
                            <button
                                type='submit'
                                className='py-2 px-4 bg-primary text-white font-gilroy600 rounded-full hover:bg-red-600 
                            transition-all'>
                                Сохранить
                            </button>
                            <button
                                type='submit'
                                className='py-2 px-4 bg-gray-500 text-white font-gilroy600 rounded-full hover:bg-gray-600 
                            transition-all'>
                                Отмена
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};



const Settings: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isModalOpen]);



    return (
        <div className='py-10 bg-ownGray'>
            <div className='container px-4'>
                <h1 className='xl:text-5xl lg:text-4xl text-3xl font-bold font-gilroy700'>
                    Личные данные пользователя
                </h1>
                <p className='text-lg my-5'>
                    В данном разделе собрана вся ваша персональная информация
                </p>
                <div className='flex flex-col items-center lg:flex-row lg:items-start gap-6'>
                    <form className='flex flex-col gap-4 w-full lg:w-1/2 py-8 px-4 md:px-10 rounded-2xl bg-white'>
                        <h2 className='font-gilroy600 text-xl w-full flex  items-center justify-between'>
                            Мои данные
                            <span className=' font-gilroy400'>
                                ID: #17302
                            </span>
                        </h2>
                        <input
                            type="text"
                            defaultValue="Irina"
                            required
                            placeholder='Фамилия'
                            className='py-2 px-4 rounded border border-gray-400 font-inter400  outline-none'
                        />
                        <input
                            type="text"
                            defaultValue="Admin"
                            required
                            placeholder='Admin'
                            className='py-2 px-4 rounded border border-gray-400 font-inter400  outline-none'
                        />
                        <input
                            type="text"
                            defaultValue=""
                            required
                            placeholder='Отчество'
                            className='py-2 px-4 rounded border border-gray-400 font-inter400  outline-none'
                        />
                        <input
                            type="email"
                            defaultValue="erke-naz342@mail.ru"
                            required
                            placeholder='Email'
                            className='py-2 px-4 rounded border border-gray-400 font-inter400  outline-none'
                        />
                        <input
                            type="number"
                            defaultValue="75551234567"
                            required
                            placeholder='Номер телефона'
                            className='py-2 px-4 rounded border border-gray-400 font-inter400  outline-none'
                        />
                        <input
                            type="number"
                            defaultValue=""
                            required
                            placeholder='Пароль'
                            className='py-2 px-4 rounded border border-gray-400 font-inter400  outline-none'
                        />
                        <div className='flex flex-col items-center sm:flex-row gap-2 mb-6'>
                            <button
                                type='submit'
                                className='py-2 px-4 bg-primary text-white font-gilroy600 rounded-full hover:bg-red-600 
                            transition-all'>
                                Сохранить изменения
                            </button>
                            <button
                                type='submit'
                                className='py-2 px-4 bg-gray-500 text-white font-gilroy600 rounded-full hover:bg-gray-600 
                            transition-all'>
                                Отменить изменения
                            </button>
                        </div>
                    </form>
                    <div className='flex flex-col items-start gap-4 py-8 px-10 rounded-2xl bg-white w-full lg:w-1/2'>
                        <h2 className='font-gilroy600 text-xl'>
                            Получатели
                        </h2>
                        <p className='text-lg'>
                            Добавить получателя
                        </p>
                        <div>
                            <button
                                type='button'
                                onClick={openModal}
                                className='py-2 px-4 bg-primary text-white font-gilroy600 rounded-full hover:bg-red-600 transition-all'
                            >
                                Добавить получателя
                            </button>
                            {isModalOpen && <Modal onClose={closeModal} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;