function WorkTogether() {
    return (
        <main id="contact" className="mx-auto max-w-6xl px-6 py-20">

            <article className="rounded-[28px] bg-sky-100 px-6 py-16 text-center transition duration-500 hover:shadow-xl">

                <h2 className="text-4xl font-medium text-black">
                    Let's work together
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-slate-600">
                    We would love to learn more about you and what
                    we can build together.
                </p>

                <nav className="mt-10 flex justify-center gap-8">

                    <a
                        href="#"
                        className="rounded-lg bg-sky-500 px-6 py-4
               text-lg font-semibold text-white
               transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-lg"
                    >
                        Contact us
                    </a>

                    <a
                        href="#"
                        className="rounded-lg bg-sky-500 px-6 py-4
               text-lg font-semibold text-white
               transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-lg"
                    >
                        Our pricing
                    </a>

                </nav>

            </article>

        </main>
    )
}

export default WorkTogether