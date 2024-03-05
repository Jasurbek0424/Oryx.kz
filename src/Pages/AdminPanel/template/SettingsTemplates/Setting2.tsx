import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { CountryDelivery } from '../../../../data/main';
import { TiArrowBackOutline } from 'react-icons/ti';
import { TfiSave } from 'react-icons/tfi';

interface Checkbox {
    id: number;
    title: string;
    context: string;
    status: string;
    checked: boolean;
}

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-5 overflow-y-auto" onClick={onClose}>
            <div
                className="bg-ownGray py-8 px-10 
                sm:px-6 rounded-md relative max-w-3xl w-full h-max"
                onClick={(e) => e.stopPropagation()}>
                <div className='flex gap-14 mb-4'>
                    <div className='flex flex-col gap-4'>
                        <p className='py-2'>
                            Название
                        </p>
                        <p className='py-2'>
                            Код
                        </p>
                        <p className='py-2'>
                            Города
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <input
                            type="text"
                            name='countryName'
                            defaultValue="Казахстан"
                            className='px-4 py-2 w-1/2 border rounded'
                        />
                        <input
                            type="text"
                            name='countryCodeSetting'
                            defaultValue="kz"
                            className='px-4 py-2 w-1/2 border rounded'
                        />
                        <textarea
                            className='px-4 py-2 w-1/2 border rounded'
                            name='countriesSetting'
                            defaultValue="Астана
Алматы
Актау
Актобе
Атырау
Караганда
Кокшетау
Костанай
Кызылорда 
Павлодар
Петропавловск
Семей
Талдыкорган
Тараз
Туркестан
Уральск
Усть-Каменогорск."
                            cols={2}
                            rows={4}
                        ></textarea>

                    </div>
                </div>
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
                <hr />
                <div className='flex gap-4 w-full mt-5'>
                    <button type='submit' className='flex items-center gap-2 md:py-2 px-4 md:px-6 bg-gray-400 rounded-md text-white'>
                        <TiArrowBackOutline className='text-lg' />
                        Назад
                    </button>
                    <button type='submit' className='flex items-center gap-2 py-1 md:py-2 px-4 md:px-6 bg-primary rounded-md text-white'>
                        <TfiSave />
                        Сохранить
                    </button>
                </div>
            </div>

        </div >
    );
};



const Setting2: React.FC = () => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState<Checkbox[]>(CountryDelivery);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [checkedStates, setCheckedStates] = useState<boolean[]>(checkboxes.map(() => false));

    // Function to handle changes in individual checkbox
    const handleCheckboxChange = (id: number) => {
        const updatedCheckedStates = checkedStates.map((checked, index) =>
            index === id ? !checked : checked
        );
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

    return (
        <div>
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
                            <label htmlFor="selectAll" className='second'>
                                ВЫБРАНО: {checkedStates.filter((checked) => checked).length}
                            </label>
                            <br />
                            <button
                                onClick={handleDeleteSelected}
                                type='button'
                                className='text-primary text-sm flex items-center sm:ml-4 hover:underline my-2'
                            >
                                <span className='uid'>Удалить</span> <MdDelete />
                            </button>
                        </td>
                        <td className='px-4'>
                            СОДЕРЖАНИЕ
                        </td>
                        <td className='px-4 text-end'>
                            СТАТУС
                        </td>
                    </tr>
                    {checkboxes.map((checkbox, index) => (
                        <tr key={`${checkbox.id}-${index}`} className="border-t border-b">
                            <td className='pr-4 py-5 flex'>
                                <input
                                    type="checkbox"
                                    id={`checkbox-${checkbox.id}${index}`}
                                    checked={checkedStates[index]}
                                    onChange={() => handleCheckboxChange(index)}
                                    className="mr-2"
                                />
                                <span className='uid'>
                                    {checkbox.title}
                                </span>
                            </td>
                            <td className='py-5'>
                                {checkbox.context.split('\n').map((paragraph, index) => (
                                    <span key={index} className="">
                                        {paragraph} <br />
                                    </span>
                                ))}
                                <button
                                    type='button'
                                    onClick={openModal}
                                    className='mt-4 pr-3 border-r-2 border-gray-700 underline font-gilroy600'>
                                    Редактировать
                                </button>
                                {isModalOpen && <Modal onClose={closeModal} />}
                                <button type='button' className='pl-3 text-primary underline font-gilroy600'>
                                    Удалить
                                </button>
                            </td>
                            <td className='flex px-2 justify-end pr-4'>
                                {checkbox.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default Setting2;
