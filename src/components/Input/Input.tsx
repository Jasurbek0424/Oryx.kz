import React, { useState } from 'react';
import { AiOutlineCopy } from "react-icons/ai";
import './Input.css';

interface InputProps {
    id: string,
    defaultValue: string
    name?: string
}

const CopyInput: React.FC<InputProps> = ({ id, defaultValue, name }) => {
    const [inputValue, setInputValue] = useState(defaultValue);
    const [copied, setCopied] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <div className="flex items-center relative justify-between border rounded-lg px-2 py-1 
        font-gilroy600 border-gray-300 w-full text-black">
            <input
                id={id}
                type="text"
                value={inputValue}
                onChange={handleChange}
                autoComplete={name}
                className="py-1 mr-2 focus:outline-none w-full md:text-lg text-md"
            />
            <button
                onClick={handleCopy}
                className="sm:text-3xl text-2xl"
            >
                <AiOutlineCopy />
            </button>
            {copied && (
                <span className="ml-2 text-primary absolute -top-6 right-0 font-gilroy600 animate-fadeOut">
                    Copied
                </span>
            )}
        </div>
    );
};

export default CopyInput;
