'use client';

import { Forum } from 'next/font/google';
import { useState } from 'react';

const forum = Forum({
    weight: '400',
    subsets: ['latin'],
});

export default function Produtos() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const products = [
        { id: 1, name: 'Sapato 1', category: 'shoes', image: '/sapato1.jpg' },
        { id: 2, name: 'Sapato 2', category: 'shoes', image: '/sapato2.jpg' },
        { id: 3, name: 'Sapato 3', category: 'shoes', image: '/sapato3.jpg' },
        { id: 4, name: 'Batom 1', category: 'lipstick', image: '/batom1.jpg' },
        { id: 5, name: 'Batom 2', category: 'lipstick', image: '/batom2.jpg' },
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <section className="w-full py-20 bg-white dark:bg-zinc-900">
            <div className="max-w-7xl px-4 mx-auto">
                <div className="mb-6">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 border border-zinc-300 rounded"
                    >
                        <option value="all">Todos</option>
                        <option value="shoes">Sapatos</option>
                        <option value="lipstick">Batom</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="relative group overflow-hidden rounded shadow-md">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                                <span className={`${forum.className} text-xl text-black drop-shadow`}>{product.name}</span>
                            </div>
                            <button
                                onClick={() => alert(`Detalhes de ${product.name}`)}
                                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg"
                            >
                                Ver Detalhes
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
