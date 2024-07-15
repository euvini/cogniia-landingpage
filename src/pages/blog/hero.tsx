import Divider from "../../ components/ui/divider";

export default function HeroSection() {
    return (
        <section id="hero" className='relative flex flex-col items-center justify-center w-full '>
            <h1 className='text-5xl text-purple-700 leading-tight max-w-[854px]'>
                Lorem ipsum dolor sit amet consectetur. Mauris suspendisse tortor at tortor
            </h1>
            <Divider height={72} width={0} />
            <div className=' aspect-video bg-slate-500 rounded-2xl overflow-hidden items-center justify-center flex'>
                <img src="/foto.png" alt="capa" style={{ objectFit: 'fill', }} />
            </div>
        </section>
    )
}