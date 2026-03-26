import Link from "next/link";
export default function CTA() {
    return (

      <>
        <section className="py-20 bg-midnight-600">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="flex flex-col items-center text-center border border-teal-300/30 rounded-3xl p-12">
      
      <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight [text-shadow:0_0_10px_rgba(45,212,191,0.7),0_0_20px_rgba(45,212,191,0.5)]">
        Transform how your school operates
      </h1>

      <p className="mt-6 text-gray-400 text-lg">
        LearnNexus brings together everything your institution needs, student records, learning 
        <br />management, and intelligent dashboards, all powered by AI that works for you.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
          Schedule Demo
        </button>

        <button className="px-6 py-3 rounded-full border border-white/20 text-white backdrop-blur-md hover:bg-white/5">
          View Case Studies
        </button>
       </div>
    </div>
  </div>
</section>


        <section className="text-center px-20 py-34 font-bold">
  <h2 className="text-5xl font-bold text-white">
    Ready to transform your school?
  </h2>
  <p className="mt-4 text-gray-500 text-2xl">
    Join the LearnNexus waitlist today.
  </p>
  <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button className="px-12 py-6 text-xl rounded-full bg-gray-400 text-black font-semibold hover:scale-105 hover:bg-cyan-400 transition">
          <Link href="/waitlist">
          Login
          </Link>
        </button>

        <button className="px-12 py-6 text-xl rounded-full bg-gray-400 text-black font-semibold hover:scale-105 hover:bg-cyan-400 transition">
            <Link href="/waitlist"> 
          Get Started
            </Link>
        </button>
       </div>


</section>

</>
    );
}