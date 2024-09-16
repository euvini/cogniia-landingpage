import React from 'react';
import Navbar from './ components/Navbar';
import Footer from './ components/Footer';
import Divider from './ components/ui/divider';
import AboutPageSection from './pages/home/about';
import TherapeuticInterventionSection from './pages/home/therapeutic-intervention';
import IndividualFollowUpSection from './pages/home/individual-follow-up';
import SecureEnvironmentSection from './pages/home/secure-environment';
import BlogSection from './pages/home/blog';
import FaqSection from './pages/home/faq';
import PlatformSection from './pages/home/platform';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <img src='/bg-wave-beige.svg' alt='bg-wave-beige' className='absolute top-0 -z-10 w-full max-h-[1016px] h-screen object-cover' />
      <main className="flex-grow self-center max-w-[1440px]">

        <AboutPageSection />

        <Divider height={370} mobileHeight={100} mobileWidth={0} width={0} />

        <TherapeuticInterventionSection />

        <IndividualFollowUpSection />

        <Divider height={70} width={0} />

        <SecureEnvironmentSection />

        <Divider height={170} width={0} />

        <BlogSection />

        <Divider height={170} mobileHeight={800} mobileWidth={0} width={0} />

        <FaqSection />

        <Divider height={100} width={0} />

        <PlatformSection />

        <Divider height={170} mobileHeight={100} mobileWidth={0} width={0} />

      </main>
      <Footer />
    </div>
  );
};

export default App;