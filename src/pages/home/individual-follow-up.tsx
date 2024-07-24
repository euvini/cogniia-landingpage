import { Button } from "../../ components/ui/button";

export default function IndividualFollowUpSection() {
    return (
        <section id="individual-follow-up" className='flex justify-center items-center text-center h-[33.62rem]'>
            <div className='md:flex '>
                <img src="/polygons1.svg" alt="polygons1" className='md:-ml-52 md:h-[38.68rem] h-52 absolute md:flex -z-10' />
            </div>
            <div className='flex flex-col gap-10 items-center justify-center my-52'>
                <h1 className='md:text-[3.5rem] text-3xl text-purple-700 leading-tight max-w-[39.5rem]'>Nossa plataforma, sua jornada de liberdade</h1>
                <Button type='button' variant='default' className='w-fit p-5'>
                    Cadastre-se e conheça
                </Button>
                <img src="/WontStop1.svg" alt="WontStop1" className='md:hidden h-64' />
            </div>
            <div>
                <img src="/WontStop1.svg" alt="WontStop1" className='hidden md:relative' />
            </div>
        </section>
    )
}