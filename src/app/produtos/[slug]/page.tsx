import products from '@/data/produtos.json'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Product = {
    slug: string
    nome: string
    descricao: string
    preco: number
    imagens: string[]
}

type Params = {
    params: {
        slug: string
    }
}

export default function ProdutoPage({ params }: Params) {
    const produto = (products as Product[]).find(p => p.slug === params.slug)

    if (!produto) return notFound()

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-4">{produto.nome}</h1>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {produto.imagens.map((img, i) => (
                    <Image
                        key={i}
                        src={img}
                        alt={produto.nome}
                        width={600}
                        height={600}
                        className="object-cover rounded-lg"
                    />
                ))}
            </div>

            <p className="text-lg mb-4">{produto.descricao}</p>
            <p className="text-2xl font-semibold text-green-700">R$ {produto.preco.toFixed(2)}</p>
        </div>
    )
}
