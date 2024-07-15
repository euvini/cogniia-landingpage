import { Button } from "../../ components/ui/button";

export default function IndividualFollowUpSection() {
    return (
        <section id="individual-follow-up" className='flex justify-center items-center text-center h-[33.62rem]'>
            <div className='flex'>
                <img src="/polygons1.svg" alt="polygons1" className='-ml-52 h-[38.68rem]' />
            </div>
            <div className='flex flex-col gap-10 items-center'>
                <h1 className='text-[3.5rem] text-purple-700 leading-tight max-w-[39.5rem]'>Nossa plataforma, sua jornada de liberdade</h1>
                <Button type='button' variant='default' className='w-fit p-5'>
                    Cadastre-se e conheça
                </Button>
            </div>
            <div>
                <img src="/WontStop1.svg" alt="WontStop1" className='' />
            </div>
        </section>
    )
}