import { Button } from "../../ components/ui/button";

export default function PlatformSection() {
    return (
        <section id="platform" className='relative grid grid-cols-2 items-center justify-center w-full'>
            <div className='flex flex-col max-w-[524px] justify-self-end items-center'>
                <h1 className='text-5xl text-purple-700 leading-tight'>Nossa plataforma, sua jornada de liberdade</h1>
                <Button variant='default' className='mt-10 w-fit p-5 self-start'>
                    Cadastre-se gratuitamente
                </Button>
            </div>
            <div className='flex items-center justify-center'>
                <img src="/TelaeIlustraçao.svg" alt="TelaeIlustração" />
            </div>
        </section>
    )
}