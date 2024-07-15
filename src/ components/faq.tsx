import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='max-w-[854px] w-full gap-5 flex flex-col'>
            <button
                onClick={toggleFAQ}
                className='text-purple-700 text-2xl text-left w-full flex justify-between items-center'
            >
                {question}
                <img
                    src="/icons/chevron-up.svg"
                    alt="chevron"
                    className={cn('transition-transform duration-300', {
                        'rotate-180': !isOpen,
                        'rotate-0': isOpen,
                    })}
                />
            </button>
            <p className={`text-lg text-grey-600 transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                {answer}
            </p>
        </div>
    );
};

export default FAQItem;