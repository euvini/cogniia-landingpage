import React from 'react';
import { Button } from './ui/button';
import Divider from './ui/divider';

const Navbar: React.FC = () => {
    return (
        <header className="bg-transparent">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <img src='/cogniia.svg' alt='logo' height={46} width={154} />
                <nav className="space-x-4 flex flex-row items-center gap-10">
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
            </div>
        </header>
    );
};

export default Navbar;