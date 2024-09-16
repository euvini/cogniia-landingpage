import { Button } from "../../ components/ui/button";

export default function TherapeuticInterventionSection() {
    return (
        <section id="therapeutic-intervention" className='grid grid-cols-1 md:grid-cols-2 justify-center'>
            <div className='items-center justify-start max-w-[39rem] md:flex flex-col gap-20 hidden'>
                <img src="/girl-walking.svg" alt="girl-relaxing" />
                <div className='p-8 bg-beige-200 rounded-3xl max-w-[345px] flex flex-col gap-6'>
                    <h1 className='text-2xl text-purple-700'>Consulte nosso FAQ e saiba mais sobre nós</h1>
                    <Button type='button' variant='default' className='w-fit p-5'>
                        <a href="#faq">
                            Acesse nosso FAQ
                        </a>
                    </Button>
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-20 p-4 md:p-0'>
                <div className='flex flex-col md:max-w-[18.75rem] gap-10'>
                    <img src="/hexIcon/HexIconPurple.svg" alt="HexIconPurple" height={80} width={80} />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl text-purple-700'>Intervenção terapêutica via I.A</h1>
                        <p className='text-xl text-grey-800'>Nossa intervenção terapêutica é desenhada para <b className='font-semibold'>casos leves e moderados de ansiedade</b>, utilizando Inteligência Artificial para te proporcionar o melhor tratamento disponível de forma fácil e acessível.</p>
                    </div>
                </div>

                <div className='flex flex-col md:max-w-[18.75rem] gap-10'>
                    <img src="/hexIcon/HexIconBlue.svg" alt="HexIconPurple" height={80} width={80} />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl md:text-2xl lg:text-3xl text-purple-700'>Acompanhamento individual</h1>
                        <p className='text-xl text-grey-800'>
                            Cada jornada é única, assim como suas necessidades. Por isso, <b className='font-semibold'>nosso foco é você!</b> Respeitamos sua história e cuidaremos das suas necessidades, no seu ritmo!
                        </p>
                    </div>
                </div>

                <div className='flex flex-col md:max-w-[18.75rem] gap-10'>
                    <img src="/hexIcon/HexIconPink.svg" alt="HexIconPurple" height={80} width={80} />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl text-purple-700'>Ambiente seguro</h1>
                        <p className='text-xl text-grey-800'>
                            Entendemos que enfrentar a ansiedade não é fácil, <b className='font-semibold'>mas você não está sozinho nessa</b>. Na nossa plataforma, você encontra um <b className='font-semibold'>ambiente 100%
                                seguro</b> onde pode se expressar livremente e <b className='font-semibold'>sem julgamentos</b>. Estamos com você em cada passo dessa jornada.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col md:max-w-[18.75rem] gap-10'>
                    <img src="/hexIcon/HexIconPurple800.svg" alt="HexIconPurple" height={80} width={80} />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl text-purple-700'>Eficaz</h1>
                        <p className='text-xl text-grey-800'>
                            <b className='font-semibold'>Sem receita mágica</b>, sem soluções fantasiosas. Apenas o que realmente funciona para tratar ansiedade, de acordo com o melhor da <b className='font-semibold'>evidência científica</b>.</p>
                    </div>
                </div>
            </div>

            <div className='items-center justify-start max-w-[39rem] flex flex-col gap-10 md:hidden mt-12'>
                <div className='p-8 bg-beige-200 rounded-3xl max-w-[345px] flex flex-col gap-6'>
                    <h1 className='text-2xl text-purple-700'>Consulte nosso FAQ e saiba mais sobre nós</h1>
                    <Button type='button' variant='default' className='w-fit p-5'>
                        Acesse nosso FAQ
                    </Button>
                </div>
                <img src="/girl-walking.svg" alt="girl-relaxing" className="p-8" />
            </div>
        </section>
    )
}