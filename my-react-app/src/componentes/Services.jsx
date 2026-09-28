function Services() {
    return (
            <section id="services" className="bg-slate-50 px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-center text-3xl font-bold text-slate-900">Our Services</h2>

                <div className="mt-10 grid gap-6 md:grid-cols-3  ">
                    <article className="rounded-2xl border border-slate-200 bg-cyan-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-xl font-semibold text-slate-900 ">Web Design</h3>
                        <p className="mt-3 leading-7 text-slate-600">
                            Beautiful, responsive designs that make your brand stand out.</p>
                        <a href="#contact" className="mt-6 inline-block font-semibold text-sky-600 hover:text-sky-800">
                            Learn more:-</a>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-cyan-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-xl font-semibold text-slate-900">Development</h3>
                        <p className="mt-3 leading-7 text-slate-600">Fast and reliable websites built with modern technologies.</p>
                        <a href="#contact" className="mt-6 inline-block font-semibold text-sky-600 hover:text-sky-800">Learn more:-</a>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-cyan-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-xl font-semibold text-slate-900">Digital Marketing</h3>
                        <p className="mt-3 leading-7 text-slate-600">Practical strategies to reach more customers and grow online.</p>
                        <a href="#contact" className="mt-6 inline-block font-semibold text-sky-600 hover:text-sky-800"> Learn more:-</a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Services