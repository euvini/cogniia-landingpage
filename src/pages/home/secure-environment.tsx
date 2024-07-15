import { Button } from "../../ components/ui/button";

export default function SecureEnvironmentSection() {
    return (
        <section id="secure-environment" className='relative grid grid-cols-2 items-center justify-center w-full'>
            <div className='flex flex-col max-w-[584px] justify-self-end items-center'>
                <h1 className='text-5xl text-purple-700 leading-tight'>Elaborado por especialistas, baseado em ciência</h1>
                <p className='text-xl text-grey-800'>
                    Nós entendemos seu sofrimento e sabemos que precisa de algo que funcione. Sem
                    mágicas ou receitas mirabolantes, <b className='font-semibold'>combinamos ciência e expertise</b> para oferecer
                    uma solução de verdade para o seu sofrimento.
                </p>
                <Button variant='default' className='mt-10 w-fit p-5 self-start'>
                    Conheça a Cogniia
                </Button>
            </div>
            <div className='flex items-center justify-center p-9'>
                <video src="/2024_GW_MVP_1_TwinklingWater.mov" autoPlay controls className='rounded-3xl max-w-[631px]'></video>
                <img src="/PatternPolygon.svg" alt="PatternPolygon" className='absolute right-0 bottom-0 self-end -z-10' />
            </div>
            <img src='/bg-wave-beige2.svg' alt='bg-wave-beige2' className='w-screen' style={{ position: 'absolute', bottom: -50, zIndex: -20 }} />
        </section>
    )
}