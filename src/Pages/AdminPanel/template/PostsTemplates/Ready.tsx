import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { TfiSave } from 'react-icons/tfi';
import { TiArrowBackOutline } from 'react-icons/ti';
import { ReadyInfo } from '../../../../data/main';
import { FiEdit } from 'react-icons/fi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface Added {
    id: number;
    payment: string;
    uid: string;
    track: string;
    date: string;
    recipient: string;
    country: string;
    img: string;
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
                                <p className='font-gilroy600'>Страна отправки</p>
                                <input
                                    type="text"
                                    name='UserNameInfo'
                                    placeholder='Страна отправки*'
                                    defaultValue='США'
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Получатель</p>
                                <input
                                    type="text"
                                    name='UserFamilieInfo'
                                    placeholder='Получатель*'
                                    defaultValue='Алексеев Денис Владимирович (По-умолчанию) UID17034'
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Трек</p>
                                <input
                                    type="text"
                                    name='UserMainInfo'
                                    defaultValue="9261290185965529220155"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Номер посылки</p>
                                <input
                                    type="text"
                                    name='UserCountryInfo'
                                    defaultValue=""
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Вес</p>
                                <input
                                    type="text"
                                    name='UserUDInfo'
                                    defaultValue=""
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Дата вылета</p>
                                <input
                                    type="date"
                                    name='MVD'
                                    defaultValue="04.03.2024"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6'>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Стоимость доставки</p>
                                <input
                                    type="text"
                                    name='UserDateInfo'
                                    defaultValue="0"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'
                                />
                            </div>
                            <div className='font-gilroy400 text-lg md:w-1/2'>
                                <p className='font-gilroy600'>Статус</p>
                                <select name="Status"
                                    className='py-2 px-4 rounded border border-gray-400 outline-none w-full'>
                                    <option value="Добавлено">Добавлено</option>
                                    <option value="На складе">На складе</option>
                                    <option value="Готово к отправлению">Готово к отправлению</option>
                                    <option value="В пути">В пути</option>
                                    <option value="В стране">В стране</option>
                                    <option value="На доставке">На доставке</option>
                                    <option value="Доставлено">Доставлено</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-2 mt-5'>
                        <div className='flex gap-14 mb-5'>
                            <p>Активно?</p>
                            <fieldset className='flex gap-3'>
                                <div className='flex gap-1'>
                                    <input type="radio" name="dakoroche" value="dakoroche" defaultChecked
                                        className='cursor-pointer' />
                                    <p>Да</p>
                                </div>

                                <div className='flex gap-1'>
                                    <input type="radio" name="dakoroche" value="netkoroche"
                                        className='cursor-pointer' />
                                    <p>Нет</p>
                                </div>
                            </fieldset>
                        </div>
                        <div>
                            <p>Товары: кеды 40$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

const Ready: React.FC = () => {

    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState<Added[]>(ReadyInfo);
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
        <div className='w-full bg-white p-8 rounded-md mt-4 shadow border'>
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
                            ОПЛАТА
                        </td>
                        <td className='px-4'>
                            UID
                        </td>
                        <td className='px-4'>
                            ТРЕК-НОМЕР
                        </td>
                        <td className='px-4'>
                            ДАТА
                        </td>
                        <td className='px-4'>
                            ПОЛУЧАТЕЛЬ
                        </td>
                        <td className='px-4'>
                            СТРАНА
                        </td>
                        <td className='px-4'>
                            СТАТУС
                        </td>
                        <td className='px-4'>
                            СТРАНА
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
                            </td>
                            <td className='px-2'>
                                {checkbox.payment}
                            </td>
                            <td className='px-2'>
                                {checkbox.uid}
                            </td>
                            <td className='px-2'>
                                {checkbox.track}
                            </td>
                            <td className='px-2'>
                                {checkbox.date}
                            </td>
                            <td className='px-2'>
                                {checkbox.recipient}
                            </td>
                            <td className='px-2'>
                                {checkbox.country}
                            </td>
                            <td className='px-2'>
                                <img src={checkbox.img} />
                            </td>
                            <td className='px-2 text-center'>
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

export default Ready;