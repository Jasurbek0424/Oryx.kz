import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Brands } from '../data/main';
import { Link } from 'react-router-dom';

const MultiCarousel: React.FC = () => {
    const carouselRef = useRef<Carousel>(null);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 767 },
            items: 4,
        },
        planshet: {
            breakpoint: { max: 767, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    const handlePreviousClick = () => {
        if (carouselRef.current) {
            carouselRef.current.previous(0);
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.next(0);
        }
    };

    return (
        <div className="container mx-auto my-8 pb-10">
            <div className="relative mb-5">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-20-px"
                    ref={carouselRef}
                    arrows={false}
                    className='p-0'
                >
                    {Brands.map(e => (
                        <div key={e.id} className='flex justify-center items-center h-full p-0'>
                            <div>
                                <img src={e.img} alt="" className='w-[130px] sm:w-[140px] md:w-[140px] lg:w-[150px] xl:w-[180px]' />
                            </div>
                        </div>
                    ))}
                </Carousel>
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-50 opacity-75 focus:opacity-100 focus:bg-primary focus:text-white p-2 rounded-full focus:outline-none"
                    onClick={handlePreviousClick}
                >
                    <FaChevronLeft className="text-md md:text-xl" />
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-50 opacity-75 focus:opacity-100 focus:bg-primary focus:text-white p-2 rounded-full focus:outline-none"
                    onClick={handleNextClick}
                >
                    <FaChevronRight className="text-md md:text-xl" />
                </button>
            </div>
            <Link to={'#!'} className="max-w-[120px] sm:max-w-[150px] md:max-w-[150px] lg:max-w-[200px] rounded-md flex items-center justify-center flex-shrink-0 
                py-1 sm:py-2 bg-primary text-sm sm:text-lg md:text-xl font-gilroy400 text-white mx-auto hover:bg-secondary">
                Смотреть все
            </Link>
        </div>
    );
};

export default MultiCarousel;
