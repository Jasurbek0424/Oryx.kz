
import { HiPhone } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterLogo from '../../assets/footerlogo.png';

import SendForm from "../SendForm";

function Footer() {
    return (
        <footer className="bg-footer py-10">
            <div className="container sm:px-1 px-4">
                <div className="flex justify-center sm:justify-between items-center gap-4 sm:flex-row flex-wrap">
                    <div className="flex justify-between items-center gap-4 text-sm sm:text-md lg:text-xl
                    sm:flex-row flex-wrap text-white font-inter400">
                        <a href="tel:+7 747 515 56 13"
                            className="flex gap-2 items-center">
                            <HiPhone className="text-xl lg:text-2xl" />
                            +7 747 515 56 13</a>
                        <a href="#!" className="w-[30px] h-[30px] rounded-full bg-ownGray flex items-center justify-center">
                            <FaInstagram className="text-lg text-black" />
                        </a>
                    </div>
                    <div className="flex md:flex-nowrap flex-wrap justify-center gap-4">
                        <Link to={'/panel'} className="py-1 px-2 border rounded-full bg-grayOpasity text-white 
                        text-xs sm:text-sm lg:text-md">
                            Войти в личный кабинет
                        </Link>
                        <Link to={'/panel'} className="py-1 px-2 border rounded-full bg-grayOpasity text-white 
                        text-xs sm:text-sm lg:text-md">
                            Регистрация в ЛК
                        </Link>
                    </div>
                </div>
                <div className="mt-5">
                    <SendForm />
                </div>
                <div className="flex items-center  sm:flex-nowrap flex-wrap justify-center">
                    <div className="flex lg:flex-nowrap flex-wrap items-center justify-between font-inter400 gap-5 md:gap-4
                     text-white text-sm py-6 border-t border-b border-gray-400 px-4 w-full">
                        <a href="">
                            <img src={FooterLogo} alt="Logo" className="flex-shrink-0" />
                        </a>
                        <div className="flex flex-col gap-2 md:max-w-[150px]">
                            <Link className="hover:text-primary transition-all" to={'/o-kompanii'}>О компании</Link>
                            <Link className="hover:text-primary transition-all" to={'#topMagazin'}>Популярные магазины в США</Link>
                        </div>
                        <div className="flex flex-col gap-2 md:max-w-[150px]">
                            <Link className="hover:text-primary transition-all" to={'/kontakty'}>Контакты</Link>
                            <Link className="hover:text-primary transition-all" to={'#!'}>Помощь в работе с сервисом</Link>
                        </div>
                        <div className="flex flex-col gap-2 md:max-w-[150px]">
                            <Link className="hover:text-primary transition-all" to={'#!'}>Политика конфиденциальности</Link>
                            <Link className="hover:text-primary transition-all" to={'#!'}>Общие условия</Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer