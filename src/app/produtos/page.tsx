import Image from 'next/image'

const productList = Array.from({ length: 20 }, (_, i) => ({
    image: `/produtos/produto${i + 1}.jpg`,
    alt: `Produto ${i + 1}`,
}))

export default function ProdutosPage() {
    return (
        <main className="p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-10">Produtos</h1>
            <div className="grid grid-cols-4 gap-6">
                {productList.map((prod, idx) => (
                    <div
                        key={idx}
                        className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-md"
                    >
                        <Image
                            src={prod.image}
                            alt={prod.alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </main>
    )
}
