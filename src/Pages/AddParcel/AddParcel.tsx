import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Todo {
    title: string;
    currency: string;
    price: string;
}



const AddParcel: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([{ title: '', currency: '', price: '' }]);
    const [limitExceeded, setLimitExceeded] = useState<boolean>(false);

    const handleTodoChange = (index: number, field: keyof Todo, value: string) => {
        const newTodos = [...todos];
        newTodos[index][field] = value;
        setTodos(newTodos);
    };

    const handleAddTodo = () => {
        if (todos.length < 10) {
            setTodos([...todos, { title: '', currency: '', price: '' }]);
        } else {
            setLimitExceeded(true);
        }
    };
    const handleRemoveTodo = (index: number) => {
        setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className='py-10 bg-ownGray'>
            <div className='container'>
                <div className='flex items-center justify-between flex-wrap mb-10 sm:px-0 px-4 gap-4'>
                    <h1 className='xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold font-gilroy700'>
                        Добавление посылки
                    </h1>
                    <div>
                        <Link to={'/profile/parcels/create'} className='flex gap-2 items-center font-gilroy700 text-sm sm:text-md 
                        md:text-lg lg:text-xl py-1 sm:py-2 px-4 rounded-full sm:rounded-md bg-primary
                        hover:bg-red-600 transition-all text-white'>
                            <FaPlus className='hidden sm:block' /> Добавить посылку
                        </Link>
                    </div>
                </div>
                <div className='flex gap-6 lg:flex-row flex-col px-4 sm:px-0'>
                    <form onSubmit={handleSubmit} className='w-full bg-white py-6 px-4 sm:px-8 rounded-xl sm:rounded-3xl md:rounded-3xl border'>
                        <div className='mb-5 flex flex-col md:flex-row pb-4 justify-between
                             sm:items-start gap-2'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='tracking'>
                                    Номер трекинга
                                </label>
                                <input
                                    id='tracking'
                                    name='tracking'
                                    type="text"
                                    required
                                    className="py-2 px-4 rounded border border-gray-400 font-inter400  outline-none"
                                    placeholder="Номер трекинга"
                                />
                            </div>
                            <p className='max-w-[350px] font-gilroy600 text-sm sm:text-md'>
                                Трекинг-номер – это номер, по которому отслеживается доставка посылки в курьерской службе. Не путать с номером заказа.
                            </p>
                        </div>
                        {todos.map((todo, index) => (
                            <div key={index} >
                                {index !== 0 && (
                                    <button
                                        className='mb-4 transition-all hover:text-blue-700 font-gilroy600 text-lg rounded-full'
                                        onClick={() => handleRemoveTodo(index)}>
                                        Удалить
                                    </button>
                                )}
                                {index !== 0 && (
                                    <hr className='mb-2' />
                                )}
                                <div className="mb-5 flex flex-col md:flex-row pb-4 justify-between
                          gap-2">
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor='declaration'>
                                            Декларация
                                        </label>
                                        <input
                                            type="text"
                                            id='declaration'
                                            name='declaration'
                                            value={todo.title}
                                            required
                                            onChange={(e) => handleTodoChange(index, 'title', e.target.value)}
                                            className="py-2 px-4 rounded border border-gray-400 font-inter400  outline-none"
                                            placeholder="Наименование"
                                        />
                                    </div>
                                    <div className='flex gap-4 items-end'>
                                        <select
                                            id='selectCurrency'
                                            value={todo.currency}
                                            onChange={(e) => handleTodoChange(index, 'currency', e.target.value)}
                                            className='py-2.5 px-2 sm:px-4 rounded border border-gray-400 font-inter400  outline-none'
                                        >
                                            <option value="$">$</option>
                                            <option value="€">€</option>
                                        </select>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor='price'>
                                                Стоимость
                                            </label>
                                            <input
                                                type="text"
                                                id='price'
                                                name='price'
                                                required
                                                value={todo.price}
                                                onChange={(e) => handleTodoChange(index, 'price', e.target.value)}
                                                className="py-2 px-4 rounded border border-gray-400 font-inter400 w-full outline-none"
                                                placeholder="Введите сумму"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h2 className='text-2xl md:text-3xl font-gilroy700 flex flex-col sm:gap-3 mb-5'>
                            Итого:
                            <span>
                                0.0$
                            </span>
                        </h2>
                        {limitExceeded && <p className="text-red-500">Лимит для покупок достигнут (максимум 10)</p>}
                        <button type="button" onClick={handleAddTodo} className=" flex gap-2 items-center font-gilroy700 text-sm sm:text-lg md:text-xl
                         py-2 px-4 rounded-md bg-primary
                        hover:bg-red-600 transition-all text-white">
                            Добавить еще один товар
                        </button>

                        <div className='py-4 px-2 sm:px-6 border bg-ownGray my-6 max-w-[320px] flex items-center justify-between'>
                            <p className='font-gilroy600 sm:text-lg'>
                                Получатель
                            </p>
                            <span className='py-1 px-2 border bg-white sm:text-md text-sm'>
                                TEST TEST1 TEST1
                            </span>
                        </div>
                        <div className='sm:text-lg font-gilroy600'>
                            Добавить <Link to={'/profile/settings'} className='text-primary underline'>получателя</Link>
                        </div>
                        <div className='flex gap-2 mt-6 text-sm sm:text-md'>
                            <button
                                type='submit'
                                className='py-2 px-4 bg-primary text-white font-gilroy600 rounded-full hover:bg-red-600 
                            transition-all'>
                                Сохранить
                            </button>
                            <button
                                type='submit'
                                className='py-2 px-4 bg-gray-500 text-white font-gilroy600 rounded-full hover:bg-gray-600 
                            transition-all'>
                                Отмена
                            </button>
                        </div>
                    </form>
                    <div className=''>
                        <div className='py-4 px-6 border border-gray-400 rounded-xl'>
                            <h2 className='md:text-lg'>
                                ВНИМАНИЕ! *Во избежание проблем при таможенной очистке, просим вводить детальное описание наименования товара на русском
                            </h2>
                        </div>
                        <div className='mt-5 md:mt-10 sm:text-md text-sm'>
                            <button className='py-2 px-3 sm:px-4 bg-primary text-white font-gilroy600 rounded-full hover:bg-red-600 transition-all'>
                                Смотреть спсок запрещённых товаров
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddParcel;