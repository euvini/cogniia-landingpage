import { useEffect, useState } from "react";
import { Button } from "../../ components/ui/button";
import Divider from "../../ components/ui/divider";
import { apiFetch } from "../../services/api";
import { IPost } from "../types";

export default function BlogSection() {
    const [news, setNews] = useState<IPost[] | null>(null)

    const getNoticia = async () => {
        try {
            const data: any = await apiFetch({ endpoint: '/posts' });
            setNews(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getNoticia()
    }, [])

    return (
        <section id="blog" className='relative flex flex-col items-center justify-center w-full mt-14 md:mt-0'>
            <h1 className='md:text-5xl text-3xl text-purple-700 leading-tight'>Blog</h1>
            <Divider height={80} width={0} />
            <div className='grid md:grid-cols-3 grid-cols-1 h-[527px] items-center justify-center gap-8 p-4'>
                {
                    news?.map((item, index) => {
                        if (index < 3) return (
                            <div key={item.id} className='max-w-[411px] flex flex-col gap-8'>
                                <div className='rounded-2xl overflow-hidden aspect-video items-center justify-center flex'>
                                    <img src={item.acf_medias.imagem} alt="foto" style={{ objectFit: 'cover' }} />
                                </div>
                                <span className='text-2xl text-purple-700'>{item.title.rendered}</span>
                                <Button type='button' variant='outline' className='w-fit'>
                                    Leia mais
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}