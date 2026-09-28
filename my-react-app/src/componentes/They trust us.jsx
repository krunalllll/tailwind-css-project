function TheyTrustUs() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-20">

            <h2 className="mb-16 flex justify-center items-center gap-4 text-4xl font-medium">
                <img className="h-10 w-10 object-contain" src="https://cdn.svglogos.dev/logos/devin.svg" alt="Devin logo" />
                They trust us
            </h2>

            <ul className="flex flex-wrap justify-center gap-6">

                <li className="flex h-40 w-52 flex-col items-center justify-center rounded-3xl bg-sky-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img className="mb-4 h-14 w-14 object-contain" src="https://cdn.svglogos.dev/logos/n8n-icon.svg" alt="n8n logo" />
                    <p className="text-xl text-slate-600">Globex</p>
                </li>

                <li className="flex h-40 w-52 flex-col items-center justify-center rounded-3xl bg-sky-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img className="mb-4 h-14 w-14 object-contain" src="https://cdn.svglogos.dev/logos/cline-icon.svg" alt="Cline logo" />
                    <p className="text-xl text-slate-600">Soylent</p>
                </li>

                <li className="flex h-40 w-52 flex-col items-center justify-center rounded-3xl bg-sky-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img className="mb-4 h-14 w-14 object-contain" src="https://cdn.svglogos.dev/logos/kiro.svg" alt="Kiro logo" />
                    <p className="text-xl text-slate-600">Initech</p>
                </li>

                <li className="flex h-40 w-52 flex-col items-center justify-center rounded-3xl bg-sky-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img className="mb-4 h-14 w-14 object-contain" src="https://cdn.svglogos.dev/logos/stytch.svg" alt="Stytch logo" />
                    <p className="text-xl text-slate-600">Umbrella</p>
                </li>
                 </ul>

        </section>
    )
}

export default TheyTrustUs