import React, { useState } from 'react';

const SendForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !phone) {
            if (!phone) {
                setPhoneError('Пожалуйста введите конкретный номер телефона');
            }
            return;
        }
        setName('');
        setPhone('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className=' sm:max-w-[310px] w-full flex mx-auto sm:mx-0 flex-col gap-3 h-[120px] sm:h-[130px]'>
                <div>
                    <input
                        type="text"
                        id="name"
                        required
                        autoComplete='name'
                        value={name}
                        onChange={handleNameChange}
                        pattern="^[a-zA-Zа-яА-ЯңғұүқәіөһӘҮҰҚӨҺәіғқңөұүһӘәӨөҮүҰұҚқ]+$"
                        placeholder='Имя'
                        className='w-full py-1 rounded-full px-4 outline-none' />
                </div>
                <div className='bg-white rounded-full flex justify-between'>
                    <input
                        type="tel"
                        id="phone"
                        required
                        autoComplete='phone'
                        value={phone}
                        onChange={handlePhoneChange}
                        pattern='^[0-9+]+$'
                        onKeyDown={handlePhoneKeyDown}
                        placeholder='+7 (123) 456 78 90'
                        className='rounded-full py-1 pl-4 outline-none'
                    />
                    <button type="submit" className='text-white font-inter400 w-[115px]
                    sm:flex-shrink-0 text-xs sm:text-md bg-primary rounded-full'>
                        Отпарвить
                    </button>
                </div>
                {phoneError && <span className="text-white text-center text-sm">{phoneError}</span>}
            </form>
        </div>
    );
};

export default SendForm;
