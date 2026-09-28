function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-sky-100 px-6 py-20">

            <main className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-4">

                <article className="md:col-span-2">
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-700">
                        <img className="h-8 w-auto object-contain" src="https://themewagon.github.io/blast/logo.svg" alt="Blast logo" />Blast</h2>

                    <p className="mt-8 max-w-md text-lg leading-7 text-slate-600">Production-ready theme specially designed for
                        Business, Marketing, SaaS and Startup websites.</p>

                    <p className="mt-10 text-slate-600">
                        @ 2026-Present · Blast · Blue astro theme by
                        <strong className="text-slate-700">Cédric Joyau</strong>
                    </p>

                    <p className="text-slate-600">Distributed by
                        <strong className="text-slate-700">ThemeWagon</strong>
                    </p>
                </article>


                <nav>
                    <h3 className="mb-6 text-lg font-medium text-black">Follow us</h3>

                    <ul className="space-y-5 text-lg text-slate-700">
                        <li>
                            <a className="hover:text-sky-500">LinkedIn </a>
                        </li>

                        <li>
                            <a className="hover:text-sky-500">GitHub</a>
                        </li>
                    </ul>
                </nav>


                <nav>
                    <h3 className="mb-6 text-lg font-medium text-black">Company</h3>

                    <ul className=" text-lg text-slate-700">
                        <li><a href="#" className="hover:text-sky-500">Home</a></li>
                        <li><a href="#" className="hover:text-sky-500">About</a></li>
                        <li><a href="#" className="hover:text-sky-500">Pricing</a></li>
                        <li><a href="#" className="hover:text-sky-500">Contact</a></li>
                    </ul>
                </nav>

            </main>

            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="mx-auto mt-10 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-2xl text-white shadow-lg transition hover:bg-sky-600"
            >
                ↑
            </button>

        </footer>
    )
}

export default Footer