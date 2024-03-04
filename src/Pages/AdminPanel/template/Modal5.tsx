import React, { useState } from 'react';
import Added from './PostsTemplates/Added';
import { IoMdDownload } from "react-icons/io";
import { MdUpload } from "react-icons/md";
import InSklad from './PostsTemplates/InSklad';
import Ready from './PostsTemplates/Ready';
import OnWay from './PostsTemplates/OnWay';
import InCountry from './PostsTemplates/InCountry';
import OnDelivery from './PostsTemplates/OnDelivery';
import Delivered from './PostsTemplates/Delivered';

const Modal5: React.FC = () => {

    const [activeModal, setActiveModal] = useState<string>('added');

    const openModal = (modalType: string) => {
        setActiveModal(modalType);
    };

    return (
        <div className='w-full py-10 px-4'>
            <div className='w-full bg-white p-6 rounded-md mt-6 shadow'>
                <div className='flex justify-between mb-10 gap-6'>
                    <div className=''>
                        <h2 className='font-gilroy600'>
                            Посылки за месяц
                        </h2>
                        <p>
                            Список активных посылок
                        </p>
                    </div>
                    <div className='flex gap-2 items-center mb-4 flex-wrap'>

                        <button className='py-2 px-4 bg-primary text-white font-gilroy600 rounded'>
                            + Добавить
                        </button>
                        <button className='py-2 px-4 border text-primary hover:bg-primary hover:text-white border-primary
                        transition-all font-gilroy600 rounded flex items-center gap-2'>
                            <MdUpload /> Загрузить EXCEL
                        </button>
                        <button className='py-2 px-4 border hover:bg-primary text-primary hover:text-white border-primary
                        transition-all font-gilroy600 rounded flex items-center gap-2'>
                            <IoMdDownload /> Скачать в excel
                        </button>

                    </div>
                </div>
                <div className='flex gap-4 bg-ownGray py-4 text-sm'>
                    <div className={`${activeModal === 'added' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('added')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            Добавлено (62)
                        </button>
                    </div>
                    <div className={`${activeModal === 'inSklad' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('inSklad')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            На складе (1)
                        </button>
                    </div>
                    <div className={`${activeModal === 'ready' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('ready')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            Готово к отправлению (0)
                        </button>
                    </div>
                    <div className={`${activeModal === 'onWay' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('onWay')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            В пути (101)
                        </button>
                    </div>
                    <div className={`${activeModal === 'inCounrty' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('inCounrty')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            В стране (50)
                        </button>
                    </div>
                    <div className={`${activeModal === 'onDelivery' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('onDelivery')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            На доставке (31)
                        </button>
                    </div>
                    <div className={`${activeModal === 'delivered' ? 'text-primary' : ''} outline-none`}>
                        <button
                            onClick={() => openModal('delivered')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            Доставлено (75)
                        </button>
                    </div>
                </div>
                <div
                    className='w-full py-8'>
                    {activeModal === 'added' && (<Added />)}
                    {activeModal === 'inSklad' && (<InSklad />)}
                    {activeModal === 'ready' && (<Ready />)}
                    {activeModal === 'onWay' && (<OnWay />)}
                    {activeModal === 'inCounrty' && (<InCountry />)}
                    {activeModal === 'onDelivery' && (<OnDelivery />)}
                    {activeModal === 'delivered' && (<Delivered />)}
                </div>
            </div>
        </div>
    );
};

export default Modal5;