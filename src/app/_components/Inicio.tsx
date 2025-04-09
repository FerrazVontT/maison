import { Forum } from 'next/font/google';

const forum = Forum({
    weight: '400',
    subsets: ['latin'],
});

export default function Inicio() {
    return (
        <section>
<div className="w-full h-[700px] sm:h-[700px] lg:h-[580px] bg-fixed bg-center bg-cover bg-[url('/dsng2.png')] relative">
  <div className="absolute inset-0 bg-black/30" />
  <div className="relative z-10 flex items-center justify-center h-full">

  </div>
</div>



            <section className="w-full py-40 bg-white dark:bg-zinc-900">
                <div className="max-w-7xl px-4 mx-auto grid md:grid-cols-2 gap-10 items-start">
                    <div className="space-y-6 text-zinc-800 dark:text-white">
                        <h2 className={`${forum.className} text-3xl sm:text-6xl`}>SOBRE NÓS</h2>
                        <p className={`${forum.className} text-2xl leading-9`}>
                            Maison Privée é o nome dado ao projeto que visa facilitar o acesso dos brasileiros às grandes marcas estrangeiras e, muitas vezes, de tão difícil acesso.
                            Somos uma empresa de serviço fiel ao consumidor, onde se pode alcançar, sem burocracias, os itens mais desejados mundialmente.
                        </p>
                        <p className="text-base text-zinc-600 dark:text-zinc-300">
                            Sua história merece ser escrita com os detalhes certos — e estamos aqui para isso.
                        </p>
                    </div>

                    {/* Imagens desktop */}
                    <div className="hidden lg:flex justify-end pr-12 gap-6 relative">
                        <div className="relative mt-23 w-[260px] h-[320px]">
                            <img src="/im1.jpeg" alt="Imagem 1" className="object-cover w-full h-full shadow-md" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                                <span className={`${forum.className} text-5xl italic text-black drop-shadow-md`}>beleza</span>
                            </div>
                        </div>
                        <div className="relative w-[220px] h-[280px]">
                            <img src="/im2.jpeg" alt="Imagem 2" className="object-cover w-full h-full shadow-md" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                                <span className={`${forum.className} text-5xl italic text-black drop-shadow-md`}>moda</span>
                            </div>
                        </div>
                    </div>

                    {/* Imagens mobile/tablet */}
                    <div className="flex lg:hidden justify-center gap-4 mt-8">
                        <div className="relative w-[140px] h-[180px]">
                            <img src="/im1.jpeg" alt="Imagem 1" className="object-cover w-full h-full shadow-md" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
                                <span className={`${forum.className} text-2xl italic text-black drop-shadow-md`}>beleza</span>
                            </div>
                        </div>
                        <div className="relative w-[140px] h-[180px]">
                            <img src="/im2.jpeg" alt="Imagem 2" className="object-cover w-full h-full shadow-md" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
                                <span className={`${forum.className} text-2xl italic text-black drop-shadow-md`}>moda</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}