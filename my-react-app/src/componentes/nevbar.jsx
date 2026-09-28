function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-cyan-100 shadow-sm">
      <div className="flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">

        <a
          href="#home"className="flex items-center gap-3 text-xl font-bold text-slate-900">
          <img
            className="h-9 w-auto"
            src="https://themewagon.github.io/blast/logo.svg"alt="Blast logo"/><span>Blast</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-medium text-slate-600">
          <a className="transition-colors hover:text-sky-600" href="#home">Home</a>

          <a className="transition-colors hover:text-sky-600" href="#services">Services</a>

          <a className="transition-colors hover:text-sky-600" href="#about">About</a>

          <a className="transition-colors hover:text-sky-600" href="#contact">Contact</a>
        </div>

        <a href="#contact"className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white">Get started</a>

      </div>
    </nav>
  );
}

export default Navbar;