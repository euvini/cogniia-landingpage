import { Button } from "../../ components/ui/button";

export default function AboutPageSection() {
    return (
        <section id="about" className='relative grid grid-cols-2 items-center justify-center mt-[5rem]'>
            <div className='flex items-center justify-center p-9'>
                <img src="/girl-relaxing.svg" alt="girl-relaxing" />
            </div>
            <div className='flex flex-col max-w-[632px] justify-center'>
                <h1 className='text-[5rem] text-purple-700 leading-tight'>Sua ansiedade não precisa ser um problema</h1>
                <p className='text-2xl text-grey-800'>
                    Na nossa plataforma você encontra um <b>ambiente 100% seguro</b>. Utilizando Inteligência Artificial, oferecemos a melhor intervenção terapêutica, de forma
                    {' '}<b>individual e personalizada</b> para sua
                    ansiedade.
                </p>
                <Button variant='default' className='mt-10 w-fit p-5'>
                    Conheça a Cogniia
                </Button>
            </div>
        </section>
    )
}