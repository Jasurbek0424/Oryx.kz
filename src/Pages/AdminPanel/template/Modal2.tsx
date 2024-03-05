import React, { useState } from 'react';
import Setting1 from './SettingsTemplates/Setting1';
import Setting2 from './SettingsTemplates/Setting2';
import Setting3 from './SettingsTemplates/Setting3';
import Setting4 from './SettingsTemplates/Setting4';

const Modal2: React.FC = () => {

    const [activeModal, setActiveModal] = useState<string>('shablon');

    const openModal = (modalType: string) => {
        setActiveModal(modalType);
    };

    return (
        <div className='w-full sm:py-10 px-4'>
            <div className='w-full'>
                <h2 className='font-gilroy600 relative pb-2 '>
                    Настройки
                </h2>
                <p>
                    Редактировать шаблоны писем, страну доставки/отправки и тарифы
                </p>
            </div>
            <div className='w-full bg-white p-6 rounded-md mt-6 shadow'>

                <div className='flex gap-4 bg-ownGray py-4 flex-wrap'>
                    <div className={`${activeModal === 'shablon' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('shablon')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            Шаблоны писем
                        </button>
                    </div>
                    <div className={`${activeModal === 'Countrydelivery' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('Countrydelivery')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            Страна доставки
                        </button>
                    </div>
                    <div className={`${activeModal === 'CountryPost' ? 'text-primary' : ''} px-4 border-r border-gray-400 outline-none`}>
                        <button
                            onClick={() => openModal('CountryPost')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            Страна отправки
                        </button>
                    </div>
                    <div className={`${activeModal === 'Tarif' ? 'text-primary' : ''} px-4 border-r border-gray-400 md:border-none outline-none`}>
                        <button
                            onClick={() => openModal('Tarif')}
                            className='px-2 font-gilroy600'
                            type='button'>
                            Тарифы
                        </button>
                    </div>
                </div>
                <div
                    className='w-full py-8'>
                    {activeModal === 'shablon' && (<Setting1 />)}
                    {activeModal === 'Countrydelivery' && (<Setting2 />)}
                    {activeModal === 'CountryPost' && (<Setting3 />)}
                    {activeModal === 'Tarif' && (<Setting4 />)}
                </div>
            </div>
        </div>
    );
};

export default Modal2;