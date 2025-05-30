import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
})

export default function ConteudoHome() {
    const smallContainers = [
        {
            src: '/batom-make.jpeg',
            alt: 'Small 1',
            href: '/category1',
            title: 'Inverno Romântico',
            subtitle: 'Nova Coleção Outono',
        },
        {
            src: '/direitaINv.jpeg',
            alt: 'Small 2',
            href: '/category2',
            title: 'Ares Descompromissados',
            subtitle: 'Estilo Casual',
        },
    ]

    const smallContainers2 = [
        {
            src: '/esquerdaIN.jpeg',
            alt: 'Small 3',
            href: '/category3',
            title: 'Elegância Minimalista',
            subtitle: 'Clássicos Atemporais',
        },
        {
            src: '/batomB.jpeg',
            alt: 'Small 4',
            href: '/category4',
            title: 'Urban Chic',
            subtitle: 'Moda de Rua',
        },
    ]

    const animatedLinkClasses =
        'text-sm pointer-events-auto cursor-pointer text-white relative after:block after:h-[2px] after:bg-white after:rounded after:absolute after:left-0 after:right-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:mt-1'

    return (
        <>
            <section className="w-full bg-white dark:bg-zinc-900 -mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
                    {smallContainers.map(({ src, alt, href, title, subtitle }) => (
                        <Link
                            key={src}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full block h-[700px] cursor-pointer group"
                        >
                            <img src={src} alt={alt} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end h-full p-4 pointer-events-none">
                                <h3 className={`${montserrat.className} text-3xl text-white uppercase pointer-events-auto text-center`}>
                                    {title}
                                </h3>
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={animatedLinkClasses}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {subtitle}
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="relative w-full">
                    <img src="/imr.jpeg" alt="Tendências 2025" className="w-full h-[520px] object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end p-4">
                        <h3 className={`${montserrat.className} text-4xl text-white uppercase text-center`}>
                            Tendências 2025
                        </h3>
                        <Link href="/subcategory3" target="_blank" rel="noopener noreferrer">
                            <p className={animatedLinkClasses}>Novas Cores</p>
                        </Link>
                        <Link href="/subcategory4" target="_blank" rel="noopener noreferrer">
                            <p className={animatedLinkClasses}>Estampas Exclusivas</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100 dark:bg-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
                    {smallContainers2.map(({ src, alt, href, title, subtitle }) => (
                        <Link
                            key={src}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full block h-[700px] cursor-pointer group"
                        >
                            <img src={src} alt={alt} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end h-full p-4 pointer-events-none">
                                <h3 className={`${montserrat.className} text-3xl text-white uppercase pointer-events-auto text-center`}>
                                    {title}
                                </h3>
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={animatedLinkClasses}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {subtitle}
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="relative w-full">
                    <img src="/direitaINv.jpeg" alt="Coleção Verão" className="w-full h-[400px] object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end p-4">
                        <h3 className={`${montserrat.className} text-4xl text-white uppercase text-center`}>
                            Coleção Verão
                        </h3>
                        <Link href="/subcategory5" target="_blank" rel="noopener noreferrer">
                            <p className={animatedLinkClasses}>Peças Leves</p>
                        </Link>
                        <Link href="/subcategory6" target="_blank" rel="noopener noreferrer">
                            <p className={animatedLinkClasses}>Acessórios Vibrantes</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
