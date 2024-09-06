import React from 'react';
import Divider from './ui/divider';

const Footer: React.FC = () => {
    return (
        <footer className=" w-full flex flex-col items-center justify-end gap-8">
            <div className="md:flex-row container flex-col mx-auto gap-4 text-center flex justify-between md:items-center">
                <div className='flex flex-col gap-2 self-start'>
                    <img src="/cogniia.svg" alt="cogniia" className='md:h-11 h-9' />
                    <p className='text-xs text-grey-800 text-left'>&copy; {new Date().getFullYear()} Cogniia</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <button>
                        <img src="/social-media/Linkedin.svg" alt="Instagram" />
                    </button>
                    <a href='https://www.instagram.com/cogniia/' target='_blank'>
                        <img src="/social-media/Instagram.svg" alt="Instagram" />
                    </a>
                    <button>
                        <img src="/social-media/Youtube.svg" alt="Instagram" />
                    </button>
                    <a href='https://wa.me/554184138805' target='_blank'>
                        <img src="/social-media/Whatsapp.svg" alt="Instagram" />
                    </a>
                </div>
            </div>

            <Divider width={'90%'} mobileWidth={0} mobileHeight={0} height={1} color='bg-beige-300' />

            <div className="container md:flex-row flex-col mx-auto text-center flex justify-between md:items-center gap-4">
                <a href='https://www.matilha.digital/' target='_blank' >
                    <img src="/badge-matilha.svg" alt="cogniia" className='h-7' />
                </a>
                <div className='flex gap-10 items-center text-grey-800 text-xs'>
                    <a href='https://cogniia.vercel.app/service-terms' target='_blank'>
                        Termos e condições
                    </a>
                    <a href='https://cogniia.vercel.app/privacy-terms' target='_blank'>
                        Políticas de privacidade
                    </a>
                </div>
            </div>
            <Divider height={20} width={0} />
            <img src="/FooterBGWave.svg" alt="FooterBGWave" className='object-cover absolute -z-10 h-screen' />
        </footer>
    );
};

export default Footer;