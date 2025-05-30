'use client';

import { Info, Menu, Phone, Search, ShoppingBag, User, X } from 'lucide-react';
import { Forum } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const forum = Forum({
    weight: '400',
    subsets: ['latin'],
});

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md text-black shadow-md">
                <div className="flex items-center justify-between w-full px-6 py-2 mx-auto max-w-8xl">

                    <div className="hidden md:flex w-[60px]">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center">
                        <Link
                            href="/"
                            className={`${forum.className} text-4xl font-bold tracking-wide`}
                        >
                            MAISON PRIVÉE
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/pesquisa" className="hover:text-zinc-800">
                            <Search className="w-5 h-5" />
                        </Link>
                        <Link href="/login" className="hover:text-zinc-800">
                            <User className="w-5 h-5" />
                        </Link>
                        <Link href="/carrinho" className="hover:text-zinc-800">
                            <ShoppingBag className="w-5 h-5" />
                        </Link>
                    </div>


                    {/* Mobile: menu hambúrguer e ícone de perfil */}
                    <div className="md:hidden flex w-full justify-between items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                        <Link href="/login">
                            <User className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-white border-t border-zinc-200 shadow-md px-6 py-4 space-y-4">
                        <Link href="/pesquisa" className="flex items-center gap-2 hover:text-zinc-600">
                            <Search className="w-5 h-5" /> Pesquisar
                        </Link>
                        <Link href="/produtos" className="flex items-center gap-2 hover:text-zinc-600">
                            <ShoppingBag className="w-5 h-5" /> Produtos
                        </Link>
                        <Link href="/sobre" className="flex items-center gap-2 hover:text-zinc-600">
                            <Info className="w-5 h-5" /> Sobre nós
                        </Link>
                        <Link href="/contato" className="flex items-center gap-2 hover:text-zinc-600">
                            <Phone className="w-5 h-5" /> Entre em contato
                        </Link>
                    </div>
                )}
            </header>

            {/* Sidebar para Desktop */}
            {menuOpen && (
    <div className="hidden md:flex fixed inset-0 z-50">
        <div
            className="fixed inset-0 bg-white/20 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
        />
        <div className="relative w-1/3 max-w-sm bg-white/90 backdrop-blur-xl shadow-lg z-50 p-6 space-y-6">
            <button
                className="absolute top-4 right-4"
                onClick={() => setMenuOpen(false)}
            >
                <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col gap-4 mt-8">
                <Link href="/pesquisa" className="flex items-center gap-2 text-lg hover:text-zinc-700">
                    <Search className="w-5 h-5" /> Pesquisar
                </Link>
                <Link href="/produtos" className="flex items-center gap-2 text-lg hover:text-zinc-700">
                    <ShoppingBag className="w-5 h-5" /> Produtos
                </Link>
                <Link href="/sobre" className="flex items-center gap-2 text-lg hover:text-zinc-700">
                    <Info className="w-5 h-5" /> Sobre nós
                </Link>
                <Link href="/contato" className="flex items-center gap-2 text-lg hover:text-zinc-700">
                    <Phone className="w-5 h-5" /> Entre em contato
                </Link>
            </nav>
        </div>
    </div>
)}

        </>
    );
}
