import { Forum } from 'next/font/google'
import productsJson from '../../data/produtos.json'
import { Product } from '../../types/product'
import ProductCard from './ProductCard'

const forum = Forum({ subsets: ['latin'], weight: '400' })

const products = productsJson as Product[]

export default function HomeProducts() {
    return (
            <section className="px-8 pt-8 pb-16 text-center">
                <h2 className={`${forum.className} text-6xl mb-16`}>Nossos Produtos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto min-h-[540px]">
                    {products.map((p, i) => (
                        <ProductCard
                            key={i}
                            image={p.imagens[0]}
                            hoverImage={p.imagens[1] || p.imagens[0]}
                            alt={p.nome}
                            slug={p.slug}
                        />
                    ))}
                </div>
            </section>
    )
}
