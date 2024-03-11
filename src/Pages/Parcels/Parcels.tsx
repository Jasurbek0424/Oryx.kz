import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md"
import { TbEdit } from "react-icons/tb";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import UserImg from '../../assets/user.png';
import Status from '../../assets/status.png';
import './Parcel.css';

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 py-5 px-5 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-white py-4 px-4 sm:px-6 rounded-md 
            flex flex-col justify-around max-w-[300px] w-full h-[150px]"
                onClick={(e) => e.stopPropagation()}>
                <h2 className='font-gilroy600 text-black'>
                    Вы правда хотите удалить посылку ?
                </h2>
                <div className='flex justify-between'>
                    <button className=" px-4 bg-primary text-white rounded-lg hover:bg-red-600" onClick={onClose}>
                        Удалить
                    </button>
                    <button className=" px-4 bg-primary text-white rounded-lg hover:bg-red-600" onClick={onClose}>
                        Отменить
                    </button>
                </div>

            </div>
        </div>
    );
};

const Parcels: React.FC = () => {

    const [openTable, setopenTable] = useState<boolean>(false)
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
        <div className='bg-ownGray py-10'>
            <div className='container sm:px-2 px-4'>
                <div className='flex items-center justify-between flex-wrap sm:gap-4'>
                    <div>
                        <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold font-gilroy700'>
                            Список ваших посылок
                        </h1>
                        <p className='lg:text-lg my-2'>
                            Вся информация о ваших посылках и их статусах
                        </p>
                    </div>
                    <div>
                        <Link to={'/profile/parcels/create'} className='flex gap-2 items-center font-gilroy700 text-sm sm:text-md 
                        md:text-lg lg:text-xl py-1 sm:py-2 px-4 rounded-full sm:rounded-md bg-primary
                        hover:bg-red-600 transition-all text-white'>
                            <FaPlus className='hidden sm:block' /> Добавить посылку
                        </Link>
                    </div>
                    <div className='flex justify-evenly w-full mt-5'>
                        <Link to={'/profile/parcels'} className='flex gap-2 items-center font-gilroy700 text-sm sm:text-md 
                        md:text-lg lg:text-xl py-2 px-4 border-b border-gray-600 rounded-md sm:rounded-md bg-white
                        hover:bg-red-600 transition-all sm:hidden hover:text-white'>
                            Мои посылки
                        </Link>
                        <Link to={'/profile/addresses'} className='flex gap-2 items-center font-gilroy700 text-sm sm:text-md 
                        md:text-lg lg:text-xl py-2 px-4 border-b border-gray-600 rounded-md sm:rounded-md bg-white
                        hover:bg-red-600 transition-all sm:hidden hover:text-white'>
                            Мои адреса
                        </Link>
                    </div>
                </div>
                <form className='flex items-center gap-4 mt-4 flex-wrap'>
                    <div className='w-full sm:max-w-max rounded-full
                    flex items-center justify-between pr-3 sm:pr-0 border bg-white border-gray-400 font-inter400'>
                        <input
                            type="search"
                            id='search'
                            placeholder='Поиск по треку'
                            className='py-1 md:py-2 sm:px-4 px-2  outline-none w-full rounded-full'
                        />
                        <button type='submit'>
                            <IoSearch className='md:text-2xl text-xl text-primary block sm:hidden' />
                        </button>
                    </div>
                    <select
                        id='status'
                        className=' hidden sm:block
                        py-1 md:py-2 px-4 w-full sm:max-w-max rounded-full border border-gray-400 font-inter400 outline-none'>
                        <option className='bg-primary text-white' value="">
                            Статус посылки
                        </option>
                        <option className='bg-primary text-white' value="Статус 1">
                            Статус 1
                        </option>
                        <option className='bg-primary text-white' value="Статус 2">
                            Статус 2
                        </option>
                        <option className='bg-primary text-white' value="Статус 3">
                            Статус 3
                        </option>
                    </select>
                    <button
                        type='submit'
                        className='hidden sm:block py-0.5 px-4 rounded-full bg-primary text-white'
                    >
                        Поиск
                    </button>
                    <button type='reset' className='hidden sm:block py-0.5 px-4 rounded-full bg-primary text-white'>
                        Очистить
                    </button>
                </form>
                <div className='mt-5 border rounded-xl overflow-hidden border-gray-400 pb-4'>
                    <table className='w-full'>
                        <tbody className=''>
                            <tr className='font-gilroy600'>
                                <th className='py-1 px-4 border'>
                                    Трек-код
                                </th>
                                <th className='py-1 px-4 border tel'>
                                    Статус
                                </th>
                                <th className='py-1 px-4 border smNone'>
                                    Наименование
                                </th>
                                <th className='py-1 px-4 border smNone'>
                                    Стоимость
                                </th>
                                <th className='py-1 px-4 border lgNone'>
                                    Дата добавления
                                </th>
                                <th className='py-1 px-4 border lgNone'>
                                    Направление
                                </th>
                                <th className='py-1 px-4 border'>

                                </th>
                            </tr>
                            <tr className='text-center text-gray-600'>
                                <td className='text-sm sm:text-md sm:px-4 border'>
                                    1Z4399R3YW54310597
                                </td>
                                <td className=' sm:px-4 border tel'>
                                    <Link to={'/profile/parcels/details'}>
                                        <img src={Status} className='mx-auto' />
                                    </Link>
                                </td>
                                <td className='py-1 px-4 border smNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border smNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border lgNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border lgNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-2 sm:px-4 border icons'>
                                    <button type='button' onClick={openModal} className='text-lg mt-1'>
                                        <MdDelete />
                                    </button>
                                    {isModalOpen && <Modal onClose={closeModal} />}
                                    <button type='button' className='sm:mx-3 text-lg mt-1'>
                                        <Link to={'/profile/parcels/details'}>
                                            <TbEdit />
                                        </Link>
                                    </button>
                                    <button
                                        className='text-lg mt-1'
                                        type='button'
                                        onClick={() => setopenTable(!openTable)}
                                    >
                                        {openTable ? <FaAngleDown /> : <FaAngleUp />}

                                    </button>
                                </td>
                            </tr>
                            <tr className='text-center text-gray-600'>
                                <td className='text-sm sm:text-md sm:px-4 border'>
                                    1Z4399R3YW54310597
                                </td>
                                <td className=' sm:px-4 border tel'>
                                    <Link to={'/profile/parcels/details'}>
                                        <img src={Status} className='mx-auto' />
                                    </Link>
                                </td>
                                <td className='py-1 px-4 border smNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border smNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border lgNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border lgNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-2 sm:px-4 border icons'>
                                    <button type='button' onClick={openModal} className='text-lg mt-1'>
                                        <MdDelete />
                                    </button>
                                    {isModalOpen && <Modal onClose={closeModal} />}
                                    <button type='button' className='sm:mx-3 text-lg mt-1'>
                                        <Link to={'/profile/parcels/details'}>
                                            <TbEdit />
                                        </Link>
                                    </button>
                                    <button
                                        className='text-lg mt-1'
                                        type='button'
                                        onClick={() => setopenTable(!openTable)}
                                    >
                                        {openTable ? <FaAngleDown /> : <FaAngleUp />}

                                    </button>
                                </td>
                            </tr>
                            <tr className='text-center text-gray-600'>
                                <td className='text-sm sm:text-md sm:px-4 border'>
                                    1Z4399R3YW54310597
                                </td>
                                <td className=' sm:px-4 border tel'>
                                    <Link to={'/profile/parcels/details'}>
                                        <img src={Status} className='mx-auto' />
                                    </Link>
                                </td>
                                <td className='py-1 px-4 border smNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border smNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border lgNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-4 border lgNone'>
                                    TEST
                                </td>
                                <td className='py-1 px-2 sm:px-4 border icons'>
                                    <button type='button' onClick={openModal} className='text-lg mt-1'>
                                        <MdDelete />
                                    </button>
                                    {isModalOpen && <Modal onClose={closeModal} />}
                                    <button type='button' className='sm:mx-3 text-lg mt-1'>
                                        <Link to={'/profile/parcels/details'}>
                                            <TbEdit />
                                        </Link>
                                    </button>
                                    <button
                                        className='text-lg mt-1'
                                        type='button'
                                        onClick={() => setopenTable(!openTable)}
                                    >
                                        {openTable ? <FaAngleDown /> : <FaAngleUp />}

                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {openTable &&
                        <div className='mt-8 px-2 sm:px-5 w-full'>
                            <table className='w-full'>
                                <tbody className='font-gilroy400'>
                                    <tr>
                                        <th className='py-1 px-4 border border-gray-400 w-1/2 md:w-1/3'>
                                            Наименование товара
                                        </th>
                                        <td className='text-center py-1 px-4 border border-gray-400'>
                                            TEST
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='py-1 px-4 border border-gray-400'>
                                            Стоимость
                                        </th>
                                        <td className='text-center py-1 px-4 border border-gray-400'>
                                            TEST
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='py-1 px-4 border border-gray-400'>
                                            Получатель
                                        </th>
                                        <td className='text-center py-1 px-4 border border-gray-400'>
                                            TEST
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='py-1 px-4 border border-gray-400'>
                                            Город
                                        </th>
                                        <td className='text-center py-1 px-4 border border-gray-400'>
                                            TEST
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='py-1 px-4 border border-gray-400'>
                                            Адрес
                                        </th>
                                        <td className='text-center py-1 px-4 border border-gray-400'>
                                            TEST
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='py-1 px-4 border border-gray-400'>
                                            Телефон
                                        </th>
                                        <td className='text-center py-1 px-4 border border-gray-400'>
                                            TEST
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                <img src={UserImg} className='mt-6 block sm:hidden mx-auto' />
            </div>
        </div>
    );
};

export default Parcels;