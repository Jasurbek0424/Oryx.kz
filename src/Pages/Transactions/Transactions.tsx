import React, { useState } from 'react';

const Transactions: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleClick = (buttonId: string) => {
        setActiveButton(buttonId === activeButton ? null : buttonId);
    };

    return (
        <div className='py-10 bg-ownGray'>
            <div className='container px-4 sm:px-0'>
                <h1 className='xl:text-5xl lg:text-4xl text-3xl font-bold font-gilroy700'>
                    Транзакции
                </h1>
                <p className='text-lg my-2'>
                    Список проведенных транзакций
                </p>
                <div className='flex gap-2'>
                    <button
                        className={`py-2 px-5 rounded hover:bg-primary hover:text-white text-primary transition-all border border-primary 
                        ${activeButton === 'all' ? 'bg-primary text-white' : ''}`}
                        onClick={() => handleClick('all')}
                    >
                        Все
                    </button>
                    <button
                        className={`py-2 px-5 rounded hover:bg-primary hover:text-white text-primary transition-all border border-primary 
                        ${activeButton === 'income' ? 'bg-primary text-white' : ''}`}
                        onClick={() => handleClick('income')}
                    >
                        Приход
                    </button>
                    <button
                        className={`py-2 px-5 rounded hover:bg-primary hover:text-white text-primary transition-all border border-primary 
                        ${activeButton === 'expense' ? 'bg-primary text-white' : ''}`}
                        onClick={() => handleClick('expense')}
                    >
                        Расход
                    </button>
                </div>
                <div className='mt-6 overflow-y-auto'>
                    <table className='w-full '>
                        <tbody className='font-gilroy600'>
                            <tr className='bg-white flex-shrink-0'>
                                <th className='py-2 px-5 border border-gray-400 flex-shrink-0'>
                                    Сумма ($)
                                </th>
                                <th className='py-2 px-5 border border-gray-400'>
                                    Тип
                                </th>
                                <th className='py-2 px-5 border border-gray-400'>
                                    Дата
                                </th>
                                <th className='py-2 px-5 border border-gray-400'>
                                    Комментарии
                                </th>
                                <th className='py-2 px-5 border border-gray-400'>
                                    Подтвержден
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
