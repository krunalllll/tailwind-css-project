function About() {
    return (
        <>

            <section id="about" className="mx-auto max-w-3xl px-6 py-20 text-center">
                <div>

                    <div>
                        <h2 className="flex items-center justify-center gap-4 text-4xl font-medium text-black">About</h2>
                    </div>

                    <div className="mt-10">
                        <p className="mb-10 text-lg leading-8 text-slate-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione. Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque,
                            iste dolor cupiditate blanditiis ratione.</p>

                        <a href="#" className="inline-block rounded-full bg-sky-500 px-6 py-4
               text-lg font-semibold text-white
               transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-lg">Learn more about us</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About