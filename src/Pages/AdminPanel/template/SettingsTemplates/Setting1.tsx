import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { LaterShablon } from '../../../../data/main';
import { TfiSave } from 'react-icons/tfi';
import { TiArrowBackOutline } from 'react-icons/ti';

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




const Setting1: React.FC = () => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState<Checkbox[]>(LaterShablon);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Function to handle changes in individual checkbox
    const handleCheckboxChange = (id: number) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
        setSelectAll(updatedCheckboxes.every((checkbox) => checkbox.checked));
    };
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

    // Function to select/deselect all checkboxes
    const handleSelectAll = () => {
        const updatedCheckboxes = checkboxes.map((checkbox) => ({
            ...checkbox,
            checked: !selectAll
        }));
        setCheckboxes(updatedCheckboxes);
        setSelectAll(!selectAll);
    };

    // Function to delete selected checkboxes
    const handleDeleteSelected = () => {
        const updatedCheckboxes = checkboxes.filter((checkbox) => !checkbox.checked);
        setCheckboxes(updatedCheckboxes);
        setSelectAll(false);
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
                                onChange={handleSelectAll}
                                className="mr-2"
                            />
                            <label htmlFor="selectAll">
                                ВЫБРАНO: {checkboxes.filter((checkbox) => checkbox.checked).length}
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
                            СОДЕРЖАНИЕ
                        </td>
                        <td className='px-4 text-end'>
                            СТАТУС
                        </td>
                    </tr>
                    {checkboxes.map((checkbox) => (
                        <tr key={checkbox.id} className="border-t border-b">
                            <td className='pr-4 py-5 flex'>
                                <input
                                    type="checkbox"
                                    id={`checkbox-${checkbox.id}`}
                                    checked={checkbox.checked}
                                    onChange={() => handleCheckboxChange(checkbox.id)}
                                    className="mr-2"
                                />
                                {checkbox.title}
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

export default Setting1;
