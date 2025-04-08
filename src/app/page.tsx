/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion';
import { Forum } from 'next/font/google';
import "swiper/css";
import "swiper/css/navigation";
import HomeProducts from '../app/_components/HomeProducts';

const forum = Forum({
  weight: '400',
  subsets: ['latin'],
});


export default function Home() {
  return (
    <main>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('/maisonn.jpeg')] sm:bg-[url('/dsng2.png')] z-0" />
        <div className="absolute inset-0 bg-black/30 z-10" />
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

      {/* PRODUTOS EM DESTAQUE */}
      <HomeProducts />

      {/* PROPÓSITO */}
      <section className="w-full py-45 bg-fixed bg-center bg-cover bg-[url('/imr.jpeg')] relative">
        <div className="absolute inset-0 bg-black/75" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-6 "
        >
          <h2 className={`${forum.className} relative -top-15 text-6xl text-slate-100`}>Nosso propósito</h2>
          <p className={`${forum.className} text-[1.685rem] leading-relaxed text-slate-100`}>
            Nascida do desejo de oferecer ao público uma experiência de luxo sem complicações, Maison Privée é fruto de um sonho e de uma forte vontade de simplificar o acesso às grandes marcas...
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-light tracking-wide">Maison Privée</div>
          <div className="flex items-center gap-2">
            <a href="mailto:contato@maisonprivee.com" className="hover:underline text-sm">contato@maisonprivee.com</a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="https://www.instagram.com/maisonprivee.official/" className="hover:underline">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
