import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";

interface Todo {
    link: string;
    characteristics: string;
    name: string;
}

const TodoForm: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([{ link: '', characteristics: '', name: '' }]);
    const [limitExceeded, setLimitExceeded] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');

    const handleTodoChange = (index: number, field: keyof Todo, value: string) => {
        const newTodos = [...todos];
        newTodos[index][field] = value;
        setTodos(newTodos);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
        const phoneRegex = /^\+\d{11}$/;
        if (!e.target.value.match(phoneRegex)) {
            setPhoneError('Пожалуйста введите конкретный номер телефона');
        } else {
            setPhoneError('');
        }
    };

    const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', ' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Backspace', 'Home', 'End'];
        if (!allowedKeys.includes(e.key) && e.key.length === 1) {
            e.preventDefault();
        }
    };

    const handleAddTodo = () => {
        if (todos.length < 10) {
            setTodos([...todos, { link: '', characteristics: '', name: '' }]);
        } else {
            setLimitExceeded(true);
        }
    };
    const handleRemoveTodo = (index: number) => {
        setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!phone) {
            setPhoneError('Пожалуйста введите конкретный номер телефона');
            return;
        }
        setPhone('');
    };

    return (
        <div className='bg-ownGray py-8 px-4 rounded'>
            <form onSubmit={handleSubmit}>
                {todos.map((todo, index) => (
                    <div key={index} className="mb-5 flex flex-col sm:flex-row pb-4 border-b-2 sm:border-none
                     border-gray-300 sm:items-center gap-2">
                        <input
                            type="text"
                            value={todo.link}
                            onChange={(e) => handleTodoChange(index, 'link', e.target.value)}
                            className="py-1 lg:py-2 rounded-full px-4 sm:w-1/2 outline-none border text-sm lg:text-md"
                            placeholder="Скопируйте ссылку из магазина и вставьте сюда"
                        />
                        <input
                            type="text"
                            value={todo.characteristics}
                            onChange={(e) => handleTodoChange(index, 'characteristics', e.target.value)}
                            className="py-1 lg:py-2 rounded-full px-4 sm:w-1/4 outline-none border text-sm lg:text-md"
                            placeholder="Характеристики"
                        />
                        <input
                            type="text"
                            value={todo.name}
                            onChange={(e) => handleTodoChange(index, 'name', e.target.value)}
                            className="py-1 lg:py-2 rounded-full px-4 sm:w-1/5 outline-none border text-sm lg:text-md"
                            placeholder="Введите имя товара"
                        />
                        {index !== 0 && (
                            <button
                                className='p-2 w-[32px] lg:w-[40px] lg:p-3 bg-primary text-white rounded-full'
                                onClick={() => handleRemoveTodo(index)}>
                                <FaTimes />
                            </button>
                        )}
                    </div>
                ))}

                {limitExceeded && <p className="text-red-500">Лимит для покупок достигнут (максимум 10)</p>}
                <button type="button" onClick={handleAddTodo} className=" flex items-center gap-1 
                font-gilroy700 text-md sm:text-lg lg:text-xl text-primary rounded-full ">
                    <span className='text-2xl lg:text-3xl'>+</span> Добавить еще одну покупку
                </button>
                <div className='bg-white rounded-full flex justify-between sm:max-w-[310px] ml-auto mt-3 border'>
                    <input
                        type="tel"
                        id="phone"
                        required
                        autoComplete='phone'
                        value={phone}
                        onChange={handlePhoneChange}
                        pattern='^\+[0-9]{11}$'
                        onKeyDown={handlePhoneKeyDown}
                        placeholder='+7 (123) 456 78 90'
                        className='rounded-full py-1 lg:py-2 pl-4 outline-none '
                    />
                    <button type="submit" className='text-white font-inter400 w-[115px] sm:flex-shrink-0 text-xs sm:text-md bg-primary rounded-full'>
                        Отправить
                    </button>
                </div>
                {phoneError && <span className="text-red text-center text-sm">{phoneError}</span>}
            </form>
        </div>
    );
};

export default TodoForm;
