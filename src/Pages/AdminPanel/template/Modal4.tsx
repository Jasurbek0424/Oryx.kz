import React, { useState } from 'react';
import { Recipients } from '../../../data/main';
import { TiArrowBackOutline } from 'react-icons/ti';
import { TfiSave } from 'react-icons/tfi';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


interface UsersInfo {
    id: number;
    title: string;
    date: string;
    status: string;
    checked: boolean
}

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 mt-10 flex justify-center bg-black bg-opacity-5 overflow-y-auto" onClick={onClose}>
            <div
                className=" py-8 px-10 
                sm:px-6 rounded-md relative max-w-3xl w-full h-max"
                onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-end gap-4 w-full mt-5'>
                    <button type='submit' className='flex items-center gap-2 md:py-2 px-4 md:px-6
                    shadow bg-gray-400 rounded text-white'>
                        <TiArrowBackOutline className='text-lg' />
                        Назад
                    </button>
                    <button type='submit' className='flex items-center gap-2 py-1 md:py-2 px-4 md:px-6
                    shadow bg-primary rounded-md text-white'>
                        <TfiSave />
                        Сохранить
                    </button>
                </div>
                <div className='w-full bg-white p-6 rounded-md mt-6 shadow'>
                    <h2 className='font-gilroy600 relative pb-2 after:content-[""] after:absolute after:h-1 text-lg
                after:w-[100px] after:bg-primary after:left-0 after:bottom-0'>
                        Данные пользователя
                    </h2>

                    <div className='mt-6 flex flex-col gap-8'>
                        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Имя</p>
                                <input
                                    type="text"
                                    name='UserNameInfo'
                                    placeholder='Имя*'
                                    defaultValue='Рамиль'
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Фамилия</p>
                                <input
                                    type="text"
                                    name='UserFamilieInfo'
                                    placeholder='Familie*'
                                    defaultValue='Имяржанов'
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Отчество</p>
                                <input
                                    type="text"
                                    name='UserMainInfo'
                                    defaultValue="Сухратжанович"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Страна</p>
                                <input
                                    type="text"
                                    name='UserCountryInfo'
                                    defaultValue="Казахстан"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Номер уд-ния личности</p>
                                <input
                                    type="text"
                                    name='UserUDInfo'
                                    defaultValue="6152365651"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Кем выдан</p>
                                <input
                                    type="text"
                                    name='MVD'
                                    defaultValue="МВД РК"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Дата выдачи</p>
                                <input
                                    type="text"
                                    name='UserDateInfo'
                                    defaultValue="14.02.2019"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Город</p>
                                <input
                                    type="text"
                                    name='city'
                                    defaultValue="Астана"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Телефон</p>
                                <input
                                    type="text"
                                    name='adadad'
                                    defaultValue="+77082415827"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Адрес(буквы)</p>
                                <input
                                    type="text"
                                    name='asdafasd'
                                    defaultValue="Шакарима кудайберды Улы 20"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-5'>
                        <p>Подтвержден</p>
                        <input type="checkbox" name='podtvejden' className='accent-primary' />
                    </div>
                </div>
            </div>
        </div >
    );
};

const Modal4: React.FC = () => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState<UsersInfo[]>(Recipients);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [checkedStates, setCheckedStates] = useState<boolean[]>(checkboxes.map(() => false));
    const [currentPage, setCurrentPage] = useState<number>(1);
    const usersPerPage = 8;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = checkboxes.slice(indexOfFirstUser, indexOfLastUser);

    // Function to handle changes in individual checkbox
    const handleCheckboxChange = (id: number) => {
        const updatedCheckedStates = [...checkedStates];
        updatedCheckedStates[id] = !updatedCheckedStates[id];
        setCheckedStates(updatedCheckedStates);
        setSelectAll(updatedCheckedStates.every((checked) => checked));
    };

    // Function to handle changes in select all checkbox
    const handleSelectAllChange = () => {
        const updatedCheckedStates = checkedStates.map(() => !selectAll);
        setCheckedStates(updatedCheckedStates);
        setSelectAll(!selectAll);
    };

    // Function to delete selected checkboxes
    const handleDeleteSelected = () => {
        const updatedCheckboxes = checkboxes.filter((_, index) => !checkedStates[index]);
        setCheckboxes(updatedCheckboxes);
        setCheckedStates(updatedCheckboxes.map(() => false));
        setSelectAll(false);
    };

    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle page change
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Function to go to the next page
    const goToNextPage = () => {
        if (currentPage < Math.ceil(checkboxes.length / usersPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to go to the previous page
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='w-full bg-white p-8 rounded-md mt-12 shadow'>
            <div className='flex justify-between mb-10 gap-6'>
                <div className=''>
                    <h2 className='font-gilroy600'>
                        Пользователи
                    </h2>
                    <p>
                        Список пользователей
                    </p>
                </div>
                <div className='flex gap-2 items-center mb-4 flex-wrap'>
                    <form className='border px-2 py-2 flex items-center gap-4 rounded'>
                        <button type='submit' className='text-xl'>
                            <IoSearch />
                        </button>
                        <input type="search" id='searchUser' placeholder='Найти пользователя' className='outline-none' />
                    </form>

                    <button className='py-2 px-4 bg-primary text-white font-gilroy600 rounded'>
                        Добавить пользователя +
                    </button>

                </div>
            </div>
            <table className='w-full text-xs lg:text-sm'>
                <tbody>
                    <tr className=''>
                        <td className="">
                            <input
                                type="checkbox"
                                id="selectAll"
                                checked={selectAll}
                                onChange={handleSelectAllChange}
                                className="mr-2"
                            />
                            <label htmlFor="selectAll">
                                ВЫБРАНО: {checkedStates.filter((checked) => checked).length}
                            </label>
                            <br />
                            <button
                                onClick={handleDeleteSelected}
                                type='button'
                                className='text-primary text-sm flex items-center ml-10 hover:underline my-2'
                            >
                                Удалить <MdDelete />
                            </button>
                        </td>
                        <td className='px-4'>
                            ФИО
                        </td>
                        <td className='px-4'>
                            ДАТА ОТПРАВКИ
                        </td>
                        <td className='px-4'>
                            <select name="status" id="status" className='border'>
                                <option value="Все">Все</option>
                                <option value="Подтверждён">Подтверждён</option>
                                <option value="Откланён">Откланён</option>
                                <option value="Новый">Новый</option>
                            </select>
                        </td>
                        <td className='px-4'>

                        </td>
                    </tr>
                    {currentUsers.map((checkbox, index) => (
                        <tr key={`${checkbox.id}-${index}`} className="border-t border-b">
                            <td className='pr-4 py-5 flex'>
                                <input
                                    type="checkbox"
                                    name={`checkbox-${checkbox.id}`}
                                    checked={checkedStates[indexOfFirstUser + index]}
                                    onChange={() => handleCheckboxChange(indexOfFirstUser + index)}
                                    className="mr-2"
                                />
                                {checkbox.id}
                            </td>
                            <td className='px-2'>
                                {checkbox.title}
                            </td>
                            <td className='px-2'>
                                {checkbox.date}
                            </td>
                            <td className='px-2 flex items-end gap-4'>
                                {checkbox.status}
                            </td>
                            <td className='px-2'>
                                <button
                                    type='button'
                                    onClick={openModal}
                                    className='mt-4 pr-3 text-primary text-xl'>
                                    <FiEdit />
                                </button>
                                {isModalOpen && <Modal onClose={closeModal} />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className="mt-4" aria-label="Page navigation example">
                <ul className="flex justify-center items-center">
                    <li className="p-2 bg-ownGray flex cursor-pointer" onClick={goToPrevPage}>
                        <button className={`${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            disabled={currentPage === 1}>
                            <FaAngleLeft />
                        </button>
                    </li>
                    {[...Array(Math.ceil(checkboxes.length / usersPerPage)).keys()].map((number) => (
                        <li
                            key={number}
                            className={`px-3 py-1 border-r border-l cursor-pointer ${currentPage === number + 1 ? 'bg-blue-400 border-blue-400'
                                : ''}`}
                            onClick={() => paginate(number + 1)}>
                            <button className="page-link">
                                {number + 1}
                            </button>
                        </li>
                    ))}
                    <li className="p-2 bg-ownGray flex cursor-pointer" onClick={goToNextPage}>
                        <button className={`${currentPage === Math.ceil(checkboxes.length / usersPerPage) ? 'cursor-not-allowed'
                            : 'cursor-pointer'}`}
                            disabled={currentPage === Math.ceil(checkboxes.length / usersPerPage)}>
                            <FaAngleRight />
                        </button>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Modal4;