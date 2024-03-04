import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/hero.png';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <header className='md:py-16'>
            <div className='container flex justify-around px-4 hero'>
                <div className='flex flex-col gap-6'>
                    <h1 className='xl:text-6xl lg:text-5xl text-3xl font-bold font-gilroy700'>
                        Доставка <span className='text-primary'>посылок</span>
                        <br />
                        из США в <span className='text-primary'>Казахстан</span>
                    </h1>
                    <p className='font-gilroy400 leading-8 xl:max-w-[500px] sm:leading-7 sm:text-sm sm:max-w-[400px]
                    lg:leading-8 lg:text-lg lg:max-w-[440px] max-w-[350px] text-md'>
                        Покупайте в любых интернет-магазинах Америки, а мы гарантируем быструю доставку.
                        Регистрируйтесь сейчас и откройте себе доступ к лучшим товарам и акциям из США. Просто,
                        Надежно и Удобно.
                    </p>
                    <Link to={'#!'} className='font-gilroy600 sm:max-w-[150px] sm:py-2 sm:text-sm 
                    lg:max-w-[180px] lg:py-3 lg:text-lg max-w-[150px] px-4 py-1 text-sm flex justify-center
                    hover:bg-secondary bg-primary rounded-full text-white'>
                        Получить сейчас
                    </Link>
                </div>
                <div className='bg-ownGray'>
                    <img
                        className='xl:h-[480px] sm:h-[360px] lg:h-[440px] h-[300px]'
                        src={HeroImg}
                        alt="Hero Img" />
                </div>
            </div>
        </header>
    );
};

export default Hero;