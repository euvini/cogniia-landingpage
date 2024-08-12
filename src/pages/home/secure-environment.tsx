import { Button } from "../../ components/ui/button";

export default function SecureEnvironmentSection() {
    return (
        <section id="secure-environment" className='relative grid grid-cols-1 md:grid-cols-2 items-center p-4 md:p-0 w-full'>
            <div className='flex flex-col max-w-[584px] justify-self-end items-center'>
                <h1 className='md:text-5xl text-3xl text-purple-700 leading-tight'>Elaborado por especialistas, baseado em ciência</h1>
                <p className='md:text-xl text-[1rem] text-grey-800'>
                    Nós entendemos seu sofrimento e sabemos que precisa de algo que funcione. Sem
                    mágicas ou receitas mirabolantes, <b className='font-semibold'>combinamos ciência e expertise</b> para oferecer
                    uma solução de verdade para o seu sofrimento.
                </p>
                <Button variant='default' className='mt-10 w-fit p-5 self-start'>
                    Conheça a Cogniia
                </Button>
            </div>
            <div className='flex items-center justify-center p-9'>
                <video src="/2024_GW_MVP_1_TwinklingWater.mov" autoPlay muted loop className='rounded-3xl aspect-video'></video>
                <img src="/PatternPolygon.svg" alt="PatternPolygon" className='absolute right-0 bottom-0 self-end -z-10 h-64 md:h-[546px]:' />
            </div>
            <img src='/bg-wave-beige2.svg' alt='bg-wave-beige2' className='w-screen absolute -bottom-12 -z-20 h-screen object-cover' />
        </section>
    )
}