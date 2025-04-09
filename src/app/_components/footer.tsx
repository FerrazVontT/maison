

export function Footer() {
    return (
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
    )
}