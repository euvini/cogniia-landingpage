import React from 'react';
import Navbar from '../../ components/Navbar';
import Footer from '../../ components/Footer';
import Divider from '../../ components/ui/divider';
import BlogSection from '../home/blog';
import FaqSection from '../home/faq';
import HeroSection from './hero';

const Blog: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <img src='/bg-wave-beige.svg' alt='bg-wave-beige' style={{ position: 'absolute', top: 0, zIndex: -1, width: '100%', maxHeight: 800 }} />
            <main className="flex-grow self-center">

                <Divider height={100} width={0} />
                <HeroSection />
                <Divider height={370} width={0} />
                <BlogSection />
                <Divider height={370} width={0} />
                <FaqSection />
                <Divider height={370} width={0} />

            </main>
            <Footer />
        </div>
    );
};

export default Blog;