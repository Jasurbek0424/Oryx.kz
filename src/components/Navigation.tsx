import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
    path: string;
}



const Navigation: React.FC<NavigationProps> = ({ path }) => {
    const pathParts = path.split('/').filter((part) => part !== '');

    return (
        <nav className='flex gap-2 w-full py-2 bg-gray-200 px-4 rounded-sm text-xl'>
            <Link to="/" className="hover:underline font-gilroy600">
                Главная
            </Link>

            {pathParts.map((part, index) => {
                const isLastPart = index === pathParts.length - 1;
                let mappedPart: string;

                if (part === 'o-kompanii') {
                    mappedPart = 'О компании';
                } else if (part === 'buy-me') {
                    mappedPart = 'Купите вместо меня';
                } else if (part === 'kontakty') {
                    mappedPart = 'Контакты';
                } else {
                    mappedPart = part;
                }

                return (
                    <React.Fragment key={index}>
                        <span> / </span>
                        {isLastPart ? (
                            <span className='cursor-default'>{mappedPart}</span>
                        ) : (
                            <Link to={`/${pathParts.slice(0, index + 1).join('/')}`} className="hover:underline">
                                {mappedPart}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};


export default Navigation;
