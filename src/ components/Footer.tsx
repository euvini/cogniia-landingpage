import React from 'react';
import Divider from './ui/divider';

const Footer: React.FC = () => {
    return (
        <footer className=" w-full flex flex-col items-center justify-end gap-8">
            <div className="container mx-auto text-center flex justify-between items-center">
                <div className='flex flex-col gap-2'>
                    <img src="/cogniia.svg" alt="cogniia" className='h-11' />
                    <p className='text-xs text-grey-800 text-left'>&copy; {new Date().getFullYear()} Cogniia</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <button>
                        <img src="/social-media/Linkedin.svg" alt="Instagram" />
                    </button>
                    <button>
                        <img src="/social-media/Instagram.svg" alt="Instagram" />
                    </button>
                    <button>
                        <img src="/social-media/Youtube.svg" alt="Instagram" />
                    </button>
                    <button>
                        <img src="/social-media/Whatsapp.svg" alt="Instagram" />
                    </button>
                </div>
            </div>

            <Divider width={'90%'} height={1} color='bg-beige-300' />

            <div className="container mx-auto text-center flex justify-between items-center">
                <button >
                    <img src="/badge-matilha.svg" alt="cogniia" className='h-7' />
                </button>
                <div className='flex gap-10 items-center text-grey-800 text-xs'>
                    <button>
                        Termos e condições
                    </button>
                    <button>
                        Políticas de privacidade
                    </button>
                </div>
            </div>
            <Divider height={20} width={0} />
            <img src="/FooterBGWave.svg" alt="FooterBGWave" className='object-cover absolute -z-10' />
        </footer>
    );
};

export default Footer;