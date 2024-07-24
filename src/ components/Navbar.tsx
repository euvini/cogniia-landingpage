import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Divider from './ui/divider';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        } else {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 300); // Duração da animação

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <header className="bg-transparent flex w-full">
            <div className="container mx-auto flex justify-between items-center self-center py-4 px-1">
                <img src='/cogniia.svg' alt='logo' height={46} className='aspect-video max-w-36' />
                <nav className="hidden md:flex flex-wrap items-center justify-between w-full gap-1 max-w-2xl">
                    <a href="#about" className="text-purple-800 text-[16px] hover:text-purple-700">Sobre a Cogniia</a>
                    <a href="#therapeutic-intervention" className="text-purple-800 text-[16px] hover:text-purple-700">Baseado em ciência</a>
                    <a href="/blog" className="text-purple-800 text-[16px] hover:text-purple-700">Blog</a>
                    <a href="#faq" className="text-purple-800 text-[16px] hover:text-purple-700">FAQ</a>
                    <Divider height={30} width={1} />
                    <a href="#login" className="text-purple-800 text-[16px] hover:text-purple-700 uppercase font-bold">Login</a>
                    <Button variant='default'>
                        Cadastre-se
                    </Button>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-purple-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden bg-beige-200 shadow-lg absolute w-full h-screen z-40 transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    } ${isAnimating ? 'visible' : 'invisible'}`}
            >
                <div className="flex flex-col items-left py-4 px-6 space-y-4">
                    <a href="#about" className="text-purple-800 text-[16px] hover:text-purple-700" onClick={() => setIsOpen(false)}>Sobre a Cogniia</a>
                    <a href="#therapeutic-intervention" className="text-purple-800 text-[16px] hover:text-purple-700" onClick={() => setIsOpen(false)}>Baseado em ciência</a>
                    <a href="/blog" className="text-purple-800 text-[16px] hover:text-purple-700" onClick={() => setIsOpen(false)}>Blog</a>
                    <a href="#faq" className="text-purple-800 text-[16px] hover:text-purple-700" onClick={() => setIsOpen(false)}>FAQ</a>
                    <Divider height={0.5} width="100%" />
                    <a href="#login" className="text-purple-800 text-[16px] hover:text-purple-700 uppercase font-bold" onClick={() => setIsOpen(false)}>Login</a>
                    <Button variant="default" className="w-fit" onClick={() => setIsOpen(false)}>Cadastre-se</Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;