import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { Tarifs } from '../../../../data/main';
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

const Setting3: React.FC = () => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState<Checkbox[]>(Tarifs);
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
                                    // id={`checkbox-${checkbox.id}`}
                                    name={`checkbox-${checkbox.id}`}
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


export default Setting3;
