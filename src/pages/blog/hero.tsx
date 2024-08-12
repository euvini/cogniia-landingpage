import { useEffect, useState } from "react";
import Divider from "../../ components/ui/divider";
import { apiFetch } from "../../services/api";
import { IPost } from "../types";
import { useParams } from "react-router-dom";

export default function HeroSection() {
    const [details, setDetails] = useState<IPost[] | null>(null)

    const { slug } = useParams()

    const getNoticia = async () => {
        try {
            const data: any = await apiFetch({ endpoint: `/posts/?slug=${slug}` });
            setDetails(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (slug) {
            getNoticia()
        }
    }, [slug])

    return (
        <section id="hero" className='relative flex flex-col items-center justify-center w-full '>
            {
                details?.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-16">
                        <h1 className='text-5xl text-purple-700 leading-tight max-w-[854px]'>
                            {item.title.rendered}
                        </h1>
                        <Divider height={50} width={0} />
                        <div className=' aspect-video bg-slate-500 rounded-2xl overflow-hidden items-center justify-center flex h-96'>
                            <img src={item.acf_medias.imagem} alt="capa" className="object-cover" />
                        </div>
                        <p className='text-[1rem] text-grey-800 md:text-2xl mt-3 md:mt-0 max-w-6xl' dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                    </div>
                ))
            }
        </section>
    )
}