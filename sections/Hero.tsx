export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#020617]">

      <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#031B2E] to-[#033B3D]" />

   
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,255,0.12),transparent_60%)]" />


      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#020617]/70 to-black" />


      <div className="absolute w-100 h-25 bg-cyan-400/20 blur-3xl rotate-45 top-10 right-10 animate-pulse" />
      <div className="absolute w-75 h-20 bg-blue-500/20 blur-3xl rotate-45 bottom-20 left-10" />


      <div className="relative z-10 px-6 max-w-4xl">
        <div className="inline-block px-4 py-2 mb-6 rounded-full border border-cyan-400/30 text-sm text-white bg-white/5 backdrop-blur">
          AI - Powered Education Operating System
        </div>

  
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-white">The AI-Native </span>
          <span className="bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Education <br /> Operating System
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          The all in one AI-powered School Management System to streamline
          operations, manage student records, automate billing, control finances,
          and empower parents all from a single intelligent platform.
        </p>

   
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
            Book a Demo
          </button>

          <button className="px-6 py-3 rounded-full border border-white/20 text-white backdrop-blur-md">
            Explore Features
          </button>
        </div>

      </div>
    </section>
  );
}