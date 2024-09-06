import { Button } from "../../ components/ui/button";

export default function AboutPageSection() {
    return (
        <section id="about" className='relative grid grid-cols-1 md:grid-cols-2 items-center justify-center md:mt-[5rem]'>
            <div className='flex justify-center items-center p-2 md:p-9'>
                <img src="/girl-relaxing.svg" alt="girl-relaxing" />
            </div>
            <div className='flex flex-col max-w-[632px] justify-center items-center p-3'>
                <h1 className='text-[2.5rem] md:text-[5rem] text-purple-700 leading-tight'>Sua ansiedade não precisa ser um problema</h1>
                <p className='text-[1rem] text-grey-800 md:text-2xl mt-3 md:mt-0'>
                    Na nossa plataforma você encontra um <b>ambiente 100% seguro</b>. Utilizando Inteligência Artificial, oferecemos a melhor intervenção terapêutica, de forma
                    {' '}<b>individual e personalizada</b> para sua
                    ansiedade.
                </p>
                <Button variant='default' className='md:mt-10 mt-4 w-fit p-5 self-start' >
                    <a href="https://cogniia.vercel.app/">
                        Conheça a Cogniia
                    </a>
                </Button>
            </div>
        </section>
    )
}