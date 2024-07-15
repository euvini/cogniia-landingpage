import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">{title}</h2>
                <div className="text-center space-y-4">{children}</div>
            </div>
        </section>
    );
};

export default Section;