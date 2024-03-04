import React, { useState } from 'react';
import Logo from '../../assets/adminLogo.png';
import AdminImg from '../../assets/admin.png';
import { GoCreditCard } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserCircle, LuLogOut } from "react-icons/lu";
import { TbUserDown } from "react-icons/tb";
import { LiaBoxOpenSolid } from "react-icons/lia";
import PanelSettings from './template/PanelSettings';
import Modal1 from './template/Modal1';
import Modal2 from './template/Modal2';
import Modal3 from './template/Modal3';
import Modal4 from './template/Modal4';
import Modal5 from './template/Modal5';

const AdminPanel: React.FC = () => {

    const [activeModal, setActiveModal] = useState('modal5');

    const openModal = (modalType: string) => {
        setActiveModal(modalType);
    };



    return (
        <div className='bg-ownGray'>
            <div className='pr-4'>
                <nav className='flex justify-between bg-ownGray shadow-md border-b border-gray-400 w-full fixed z-10 pr-5'>
                    <div className='bg-white py-4 px-4 w-[220px] lg:w-[240px]'>
                        <a href="">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <div
                        onClick={() => openModal('panelSettings')}
                        className='flex items-center gap-2 cursor-pointer'>
                        <img src={AdminImg} />
                        <div className='flex flex-col'>
                            <h2 className='font-gilroy600'>
                                irina
                            </h2>
                            <p>
                                erke-naz342@mail.ru
                            </p>
                        </div>
                    </div>
                </nav>
                <div className='flex items-start gap-6'>
                    <div className='bg-white fixed h-dvh w-[220px] lg:w-[240px] pb-4 flex flex-col justify-between z-0'>
                        <div className='flex flex-col gap-2 pl-6 lg:pl-8 mt-20 text-sm '>
                            <div className={`${activeModal === 'modal1' ? 'text-primary' : ''} flex items-center gap-3 text-md`}>
                                <GoCreditCard className='text-xl' />
                                <button
                                    onClick={() => openModal('modal1')}
                                    className='flex items-center  
                                    px-2 w-full justify-between font-gilroy600'
                                    type='button'>
                                    Транзакции
                                </button>
                            </div>
                            <div className={`${activeModal === 'modal2' ? 'text-primary' : ''} flex items-center gap-3`}>
                                <IoSettingsOutline className=' text-xl' />
                                <button
                                    onClick={() => openModal('modal2')}
                                    className='flex items-center  
                                    px-2 w-full justify-between font-gilroy600'
                                    type='button'>
                                    Настройки
                                </button>
                            </div>
                            <div className={`${activeModal === 'modal3' ? 'text-primary' : ''} flex items-center gap-3`}>
                                <LuUserCircle className=' text-xl' />
                                <button
                                    onClick={() => openModal('modal3')}
                                    className='flex items-center  
                                    px-2 w-full justify-between font-gilroy600'
                                    type='button'>
                                    Пользователи
                                </button>
                            </div>
                            <div className={`${activeModal === 'modal4' ? 'text-primary' : ''} flex items-center gap-3`}>
                                <TbUserDown className=' text-xl' />
                                <button
                                    onClick={() => openModal('modal4')}
                                    className='flex items-center  
                                    px-2 w-full justify-between font-gilroy600'
                                    type='button'>
                                    Получатели (0)
                                </button>
                            </div>
                            <div className={`${activeModal === 'modal5' ? 'text-primary' : ''} flex items-center gap-3`}>
                                <LiaBoxOpenSolid className=' text-xl' />
                                <button
                                    onClick={() => openModal('modal5')}
                                    className='flex items-center  
                                    px-2 w-full justify-between font-gilroy600'
                                    type='button'>
                                    Посылки (116)
                                </button>
                            </div>
                        </div>
                        <div className='border-t-2 border-gray-400 pl-8 pt-5'>
                            <button className='text-lg md:text-xl font-gilroy600 flex items-center gap-2 hover:text-primary transition-all'>
                                <LuLogOut className='rotate-180' />
                                LOG OUT
                            </button>
                        </div>
                    </div>
                    <div
                        className='w-full py-8 flex justify-between bg-ownGray'>
                        <div className='w-[240px] lg:w-[260px] flex flex-shrink-0 h-dvh'>
                        </div>
                        {activeModal === 'panelSettings' && (<PanelSettings />)}
                        {activeModal === 'modal1' && (<Modal1 />)}
                        {activeModal === 'modal2' && (<Modal2 />)}
                        {activeModal === 'modal3' && (<Modal3 />)}
                        {activeModal === 'modal4' && (<Modal4 />)}
                        {activeModal === 'modal5' && (<Modal5 />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;