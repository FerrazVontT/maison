import { motion } from 'framer-motion';
import { Forum } from 'next/font/google';

const forum = Forum({
    weight: '400',
    subsets: ['latin'],
});

export default function Proposito() {
    return (
        <section className="w-full py-48 bg-fixed bg-center bg-cover bg-[url('/imr.jpeg')] relative">
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
    );
}
