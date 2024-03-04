import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/loginLogo.png';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { VscLockSmall } from "react-icons/vsc";
import './NavBarA.css';


const NavBar: React.FC = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        if (isNavbarOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('body');
        } else {
            document.body.style.overflow = 'visible';
            document.body.classList.remove('body');
        }

        return () => {
            document.body.style.overflow = 'visible';
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isNavbarOpen]);


    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className='bg-ownGray'>
            <nav className='container py-8 flex gap-4 sm:gap-8 justify-between items-center font-gilroy700 px-4'>
                <div className='flex items-center gap-8 lg:gap-10'>
                    <Link to={'/'}>
                        <img src={Logo} alt="logo" className='logo' />
                    </Link>
                    <ul
                        onClick={isNavbarOpen ? toggleNavbar : () => { }}
                        className={`items-center gap-4 2xl:text-xl lg:text-lg  xl:flex menu ${isNavbarOpen ? 'active' : ''}`}>
                        <button className=' text-white absolute left-10 top-10 text-2xl'
                            onClick={toggleNavbar}>
                            <FaTimes />
                        </button>
                        <li><Link className='list__link' to={'/o-kompanii'}>О нас</Link></li>
                        <li><a className='list__link' href='#topMagazin'>Популярные магазины</a></li>
                        <li><Link className='list__link' to={'/buy-me'}>Купите вместо меня</Link></li>
                        <li><Link className='list__link' to={'/kontakty'}>Контакты</Link></li>
                        <li><a className='list__link' href='#calculate'>Калькулятор</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-2 sm:gap-4 lg:gap-8 relative' ref={menuRef}>
                    <button
                        className={`flex items-center sm:gap-2 cursor-pointer hover:text-primary transition-all text-sm sm:text-md lg:text-xl
                        ${isOpen ? 'text-primary' : ''}`}
                        onClick={toggleMenu}
                    >
                        <VscLockSmall className="text-lg sm:text-xl text-primary" />
                        Личный <span className=''>кабинет</span>
                    </button>
                    {isOpen && (
                        <ul className="absolute z-10 top-7 sm:top-10 -left-16 sm:-left-10 bg-white rounded-xl border shadow-lg py-4 px-6" onClick={toggleMenu}>
                            <li>Irina admin</li>
                            <li className='font-gilroy400 mb-2'>erke-naz342@mail.ru</li>
                            <li>
                                <Link to={'/profile'} className='font-gilroy600 hover:text-primary transition-all'>
                                    Мой профиль
                                </Link>
                            </li>
                            <li>
                                <Link to={'/profile/parcels'} className='font-gilroy600 hover:text-primary transition-all'>
                                    Мои посылки
                                </Link>
                            </li>
                            <li>
                                <Link to={'/profile/addresses'} className='font-gilroy600 hover:text-primary transition-all'>
                                    Мои адреса
                                </Link>
                            </li>
                            <li>
                                <Link to={'/profile/parcels/create'} className='font-gilroy600 hover:text-primary transition-all'>
                                    Добавить посылку
                                </Link>
                            </li>
                            <li>
                                <Link to={'/profile/transactions'} className='font-gilroy600 hover:text-primary transition-all'>
                                    Мои транзакции
                                </Link>
                            </li>
                            <li>
                                <Link to={'/profile/settings'} className='font-gilroy600 hover:text-primary transition-all'>
                                    Настройки аккаунта
                                </Link>
                            </li>
                            <li>
                                <Link to={'/profile/notifications'} className='font-gilroy600 hover:text-primary transition-all'>
                                    Мои уведомления
                                </Link>
                            </li>
                            <li>
                                <Link to={'#!'} className='font-gilroy600 hover:text-primary transition-all'>
                                    Выход
                                </Link>
                            </li>
                        </ul>
                    )}
                    <button className='text-xl sm:text-2xl rotate-180 ' onClick={toggleNavbar}>
                        <HiMiniBars3CenterLeft />
                    </button>
                </div>
            </nav >
            <div className='py-4 sm:bg-primary w-full sm:text-white px-4 sm:px-0'>
                <ul className='container flex sm:flex-row flex-col sm:w-full w-[250px] items-center gap-4 sm:gap-8'>
                    <li className='border-2 border-primary
                        rounded-full sm:border-none  text-center underNav'>
                        <Link to={'/profile/addresses'} className='relative pb-1 sm:after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-white
                        after:bottom-0 after:left-0 sm:hover:after:w-full after:transition-all font-gilroy600  '>
                            Мои адреса
                        </Link>
                    </li>
                    <li className='border-2 border-primary
                        rounded-full sm:border-none  text-center underNav'>
                        <Link to={'/profile/parcels'} className='relative pb-1 sm:after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-white
                        after:bottom-0 after:left-0 sm:hover:after:w-full after:transition-all font-gilroy600'>
                            Мои посылки
                        </Link>
                    </li>
                    <li className='border-2 border-primary
                        rounded-full sm:border-none  text-center underNav'>
                        <Link to={'/profile/settings'} className='relative pb-1 sm:after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-white
                        after:bottom-0 after:left-0 sm:hover:after:w-full after:transition-all font-gilroy600'>
                            Личные данные
                        </Link>
                    </li>
                    <li className='border-2 border-primary
                        rounded-full sm:border-none  text-center underNav'>
                        <Link to={'/profile/nsettings'} className='relative pb-1 sm:after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-white
                        after:bottom-0 after:left-0 sm:hover:after:w-full after:transition-all font-gilroy600'>
                            Настройка уведомлений
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar