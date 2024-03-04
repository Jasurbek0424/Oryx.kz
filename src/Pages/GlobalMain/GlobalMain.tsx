/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { roadMap, Counties, Faq, faqItems } from "../../data/main"; // ExampleProduct add
import Decor from '../../assets/decor.png';
import ShopingCarousel from "../../components/ShopingCarousel";
import CalculateImg from '../../assets/calculate.png';
import AboutImg from '../../assets/about.png';
import Accordion from '../../components/Accordion';
import { FaArrowRightLong } from "react-icons/fa6";
// import OptionProduct from "../../components/OptionProduct";


const GlobalMain: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const [weight, setWeight] = useState<string>(''); // Состояние для веса товара
    const [deliveryCost, setDeliveryCost] = useState<number | null>(null); // Состояние для стоимости доставки

    const handleWeightChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setWeight(value);
        }
    };


    const calculateDeliveryCost = () => {
        const weightNumber = parseFloat(weight);
        if (!isNaN(weightNumber)) {
            const roundedWeight = Math.ceil(weightNumber * 1000) / 1000;
            const cost = roundedWeight * 13;
            setDeliveryCost(cost);
        } else {
            setDeliveryCost(null);
        }
    };


    useEffect(() => {
        calculateDeliveryCost();
    }, [weight]);




    return (
        <main>
            <section className="container py-14 ">
                <h2 className="text-center px-2 font-gilroy700 text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 flex justify-center relative 
            after:content-[''] after:absolute after:w-1/3 md:after:w-1/3 lg:after:w-1/4 xl:after:w-1/5 after:h-1 md:after:h-1.5 after:bg-primary after:bottom-0">
                    Как заказать доставку посылки из
                    <br />
                    США?
                </h2>
                <div className="flex sm:flex-nowrap flex-wrap items-start justify-around relative z-10 gap-4 sm:gap-2 md:gap-4 mt-10 mb-8">
                    <img src={Decor} alt="" className="absolute top-10 -z-10 hidden sm:block sm:max-w-[65%] md:max-w-[70%] lg:max-w-[75%] xl:max-w-[100%]" />
                    {roadMap.map(el => (
                        <div
                            key={el.id}
                            className="flex items-center flex-col px-4 max-w-[220px] sm:max-w-[200px] md:max-w-[240px]  
                            lg:max-w-[280px] hover:shadow-md rounded-md py-4 transition-all
                            flex-shrink-0 text-center gap-2 md:gap-4">
                            <div className="p-4 border-2 border-gray-600 rounded-xl bg-white">
                                <img src={el.img} alt="Icon" className="w-[55px] sm:w-[65px] md:w-[80px] md:h-[80px]" />
                            </div>
                            <h3 className="font-gilroy700 text-lg sm:text-xl md:text-2xl">
                                {el.title}
                            </h3>
                            <p className="font-inter400 text-xs md:text-sm">
                                {el.context}
                            </p>
                        </div>
                    ))}

                </div>
                <Link to={'#!'} className="max-w-[130px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[250px] rounded-md flex items-center justify-center flex-shrink-0 
                py-1 sm:py-2 bg-primary text-sm sm:text-lg md:text-xl font-gilroy400 text-white mx-auto hover:bg-secondary">
                    Получить адрес
                </Link>
            </section>
            <section id="topMagazin">
                <h2 className="text-center px-2 font-gilroy700 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-8">
                    Популярные магазины
                </h2>
                <ShopingCarousel />
            </section>
            <section className="bg-ownGray py-6" id="calculate">
                <div className="container flex flex-col-reverse items-center sm:flex-row gap-4 px-4">
                    <div className="flex flex-col gap-4 md:gap-8 ">
                        <h2 className="font-gilroy700 text-xl sm:text-2xl md:text-3xl">
                            Калькулятор стоимости доставки
                        </h2>
                        <form className="flex gap-4 items-center lg:flex-nowrap
                        flex-wrap font-gilroy600">
                            <select className="p-2 rounded-full shadow-md outline-none text-sm md:text-md"
                                id="selectCountries">
                                {Counties.map(country => (
                                    <option key={country.title} value={country.title}>
                                        {country.title}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="text"
                                id="weight"
                                value={weight}
                                onChange={handleWeightChange}
                                placeholder="Вес (кг)"
                                className="p-2 rounded-full shadow-md max-w-[80px] md:max-w-[120px] outline-none text-sm md:text-md"
                            />
                            <p className="">
                                Итог: {deliveryCost !== null ? `$${deliveryCost.toFixed(2)}` : '$'}
                            </p>

                        </form>
                        <h2 className="font-gilroy700 text-md sm:text-lg md:text-xl">
                            Срок доставки От 7 до 14 дней
                        </h2>
                        <div className="w-full h-0.5 bg-gray-400"></div>
                        <p className="font-gilroy400 text-sm md:text-md text-justify lg:text-lg">
                            * Стоимость доставки – 13 долларов за килограмм. Чтобы вы не переплачивали, мы округляем расчет веса до 100 грамм. В списке можно выбрать популярные товары и узнать примерную стоимость их доставки, а на калькуляторе рассчитать точно по весу.
                        </p>
                    </div>
                    <div className="sm:w-1/2 flex-shrink-0 flex justify-end relative">
                        <img src={CalculateImg} alt="" className="static z-10 h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px] transform sm:-translate-y-[10%] lg:-translate-y-1/4" />
                        <div className="w-[256px] sm:w-[286px] md:w-[336px] lg:w-[376px] h-[252px] sm:h-[282px] md:h-[322px] lg:h-[362px] bg-gray-300 absolute -z-0 bottom-0 rounded-tr-[50%]">
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="container py-6">
                <div className="flex sm:flex-nowrap flex-wrap sm:text-start text-center justify-center sm:justify-between items-center mb-5 px-4">
                    <h2 className="font-gilroy700 text-xl sm:text-2xl md:text-3xl">
                        Примеры товаров из США
                    </h2>
                    <p className="max-w-[240px] flex-shrink-0 sm:pl-4 pl-0 py-2 sm:after:content-[''] sm:after:absolute after:h-full
                    after:bg-gray-300 after:w-0.5 after:left-0 after:top-0 relative">
                        Какие товары чаще всего заказывают в США
                    </p>
                </div>
                <div className="flex flex-wrap items-start justify-center gap-4">
                    {ExampleProduct.map(el => (
                        <div key={el.id} className="mb-6">
                            <OptionProduct title={el.title} img={el.img} />
                        </div>
                    ))}
                </div>
            </section> */}
            <section className="bg-ownGray py-6">
                <h2 className="font-gilroy700 text-xl sm:text-2xl md:text-3xl text-center mb-4">
                    Частые вопросы
                </h2>
                <div className="">
                    {Faq.map((elem, index) => (
                        <div key={elem.title}>
                            <Accordion title={elem.title} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                                {elem.context}
                            </Accordion>
                        </div>
                    ))}
                </div>
                <div className="container flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-8 lg:gap-4 my-10">
                    {faqItems.map(el => (
                        <div key={el.id} className="flex items-center gap-2 max-w-[240px]">
                            <div>
                                <img src={el.img} alt="" className="w-[60px] sm:w-[75px]" />
                            </div>
                            <div>
                                <h3 className="font-gilroy700 text-lg lg:text-xl xl:text-2xl">
                                    {el.title}
                                </h3>
                                <p className="text-sm md:text-md">
                                    {el.context}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="container py-8 flex sm:flex-row flex-col items-center px-4 gap-2">
                <div className="flex flex-col justify-around gap-2">
                    <h2 className="font-inter700 text-xl sm:text-2xl md:text-3xl sm:text-start text-center">
                        О компании
                    </h2>
                    <p className="text-md md:text-xl line-clamp-6">
                        ORYX – это надежный мейлфорвардер, имеющий собственный автоматизированный склад в
                        безналоговом штате Америки. Покупка и доставка из США любых товаров – наша основная
                        деятельность. Мы сотрудничаем с лучшими перевозчиками долго и плодотворно благодаря этому
                        готовы предложить доступную стоимость доставки.
                    </p>
                    <Link to={'#!'} className="bg-primary hover:bg-secondary flex items-center justify-between 
                    rounded-full text-white py-1 px-3 w-[160px] sm:w-[180px] lg:w-[220px] text-sm md:text-md lg:text-xl">
                        УЗНАТЬ БОЛЬШЕ
                        <FaArrowRightLong />
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <img src={AboutImg} alt="Car" className="w-[350px] lg:w-full" />
                </div>
            </section>
        </main >
    );
};

export default GlobalMain;