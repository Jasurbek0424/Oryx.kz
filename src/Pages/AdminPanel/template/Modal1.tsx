import React from 'react';
import { PanelTransactions } from '../../../data/main';

const Modal1: React.FC = () => {
    return (
        <div className='w-full py-10  '>
            <div className='w-full py-6 bg-white rounded-md mt-6 shadow'>
                <div className='flex justify-between px-6'>
                    <div className=''>
                        <h2 className='font-gilroy600'>
                            Транзакции
                        </h2>
                        <p>
                            Список проведенных транзакций
                        </p>
                    </div>
                    <div className='flex gap-2 items-center mb-4'>
                        <label htmlFor="since">C</label>
                        <input
                            id='since'
                            type="date"
                            className='py-1 px-2 bg-primary rounded text-white cursor-pointer'
                        />
                        <label htmlFor="date">По</label>
                        <input
                            id='for'
                            type="date"
                            className='py-1 px-2 bg-primary rounded text-white cursor-pointer'
                        />
                    </div>
                </div>
                <div className='mt-8'>
                    <table className='w-full'>
                        <tbody>
                            <tr className='text-start bg-gray-100 hover:bg-ownGray border-t border-b border-gray-300
                             text-sm lg:text-md'>
                                <th className='text-gray-500 py-4 px-4 text-start'>
                                    ID ПЛАТЕЖА
                                </th>
                                <th className='text-gray-500 text-start px-4'>
                                    КОД БАНКА
                                </th>
                                <th className='text-gray-500 text-start px-4'>
                                    ПОЛЬЗОВАТЕЛЬ
                                </th>
                                <th className='text-gray-500 text-start px-4'>
                                    ТРЕК
                                </th>
                                <th className='text-gray-500 text-start px-4'>
                                    ДАТА
                                </th>
                                <th className='text-gray-500 text-start px-4'>
                                    СУММА USD
                                </th>
                            </tr>
                            {PanelTransactions.map(el => (
                                <tr key={el.id} className='border-t border-b border-gray-300 hover:bg-ownGray text-sm'>
                                    <th className='text-gray-600 py-4 px-4 text-start'>
                                        {el.id}
                                    </th>
                                    <th className='text-gray-600 py-4 px-4 text-start'>
                                        {el.bankKod}
                                    </th>
                                    <td className='text-primary py-4 px-4 text-start'>
                                        {el.user}
                                    </td>
                                    <td className=' py-4 px-4 text-start'>
                                        {el.track}
                                    </td>
                                    <td className=' py-4 px-4 text-start'>
                                        {el.date}
                                    </td>
                                    <td className=' py-4 px-4 text-start'>
                                        {el.summa}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Modal1;