import FAQItem from "../../ components/faq";
import Divider from "../../ components/ui/divider";
import { faqData } from "../../mock/faq";

export default function FaqSection() {
    return (
        <section id='faq' className='relative flex flex-col items-center justify-center w-full gap-20'>
            <h1 className='text-5xl text-purple-700 leading-tight'>FAQ</h1>
            <div className='flex flex-col gap-10 w-full items-center'>
                {
                    faqData.map((item, index) => (
                        <div className='max-w-[854px] w-full flex flex-col gap-10'>
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                            <Divider width={'100%'} height={1} color='bg-beige-300' />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}