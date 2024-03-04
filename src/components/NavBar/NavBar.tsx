import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Login from '../../assets/icons/login.png';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import './NavBar.css';


const NavBar: React.FC = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('body');
        } else {
            document.body.style.overflow = 'visible';
            document.body.classList.remove('body');
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isNavbarOpen]);


    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
            <nav className='container py-8 flex gap-8 justify-between items-center font-gilroy700 px-4'>
                <div className='flex items-center gap-8 lg:gap-10'>
                    <Link to={'/'}>
                        <img src={Logo} alt="logo" className='logo' />
                    </Link>
                    <ul
                        onClick={isNavbarOpen ? toggleNavbar : () => { }}
                        className={`items-center gap-4 2xl:text-xl lg:text-lg  xl:flex menu ${isNavbarOpen ? 'active' : ''}`}>
                        <button className='xl:hidden text-white absolute left-10 top-10 text-2xl'
                            onClick={toggleNavbar}>
                            <FaTimes />
                        </button>
                        <li><Link className='list__link' to={'/o-kompanii'}>О нас</Link></li>
                        <li><a className='list__link' href='#topMagazin'>Популярные магазины</a></li>
                        <li><Link className='list__link' to={'/buy-me'}>Купите вместо меня</Link></li>
                        <li><Link className='list__link' to={'/kontakty'}>Контакты</Link></li>
                        <li><a className='list__link' href='#calculate'>Калькулятор</a></li>
                        <div className=' gap-2 sm:gap-4 lg:gap-8 2xl:text-xl lg:text-lg sm:text-sm text-xs login'>
                            <Link to={'/profile'} className='flex items-center gap-2 py-1 px-6 bg-primary border hover:bg-secondary rounded-full text-white' >
                                <img src={Login} className='sm:h-[25px] h-[20px]' alt="" />
                                Вход
                            </Link>
                            <Link to={'/profile'} className='py-1.5 px-4 border rounded-full bg-primary hover:bg-secondary transition-all'>
                                Регистрация
                            </Link>
                        </div>
                    </ul>
                </div>
                <div className='flex items-center gap-2 sm:gap-4 lg:gap-8 2xl:text-xl lg:text-lg sm:text-sm text-xs '>
                    <Link to={'/profile'} className='flex items-center gap-2 py-1 px-6 bg-primary hover:bg-secondary rounded-full text-white outlogin' >
                        <img src={Login} className='sm:h-[25px] h-[20px]' alt="" />
                        Вход
                    </Link>
                    <Link to={'/profile'} className='py-1.5 px-4 border rounded-full hover:bg-gray-100 transition-all outlogin'>
                        Регистрация
                    </Link>
                    <button className='xl:hidden text-2xl rotate-180 ' onClick={toggleNavbar}>
                        <HiMiniBars3CenterLeft />
                    </button>
                </div>
            </nav >
        </>
    )
}

export default NavBar