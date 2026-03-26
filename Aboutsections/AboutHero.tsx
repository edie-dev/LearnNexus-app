import  {Play} from "lucide-react";

export default function AboutHero() {
  return (

    <>
    <section className="py-34 px-20 text-left">
        <div className="relative z-10 px-6 max-w-4xl">
        <div className="inline-block px-4 py-2 mb-6 rounded-full border border-cyan-400/30 text-sm text-teal-300 bg-white/5 backdrop-blur font-bold">
          LEARNNEXUS LEADERSHIP
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white">Building the 
            <span className="bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"><br />Future of <br />Learning</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg">LearnNexus is an AI-native Education Operating System
            <br />designed to help schools digitize and manage their entire academic 
            <br />and administrative operations from one intelligent platform.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
          <button className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
            Meet our Founders
          </button>
{/* <div className="flex items-center gap-3">
        <SplinePointer className="text-teal-900" size={30} /> 
        <h2 className="text-3xl font-bold text-start text-teal-300">
          Our Mission
        </h2>
        </div> */}
        <div className="flex items-center">
        <Play className="text-gray-400" size={20} />
          <button className="px-6 py-3 rounded-full  text-white backdrop-blur-md">
            Watch our story
          </button>
          </div>
        </div>
            </div>
    </section>

    <section className="py-34 px-20 text-center">
   <h1 className="text-7xl font-bold text-white">Our Story</h1>
   <p className="text-gray-400 text-lg mt-4">
     Founded in Lagos, LearnNexus began with a simple  observation: educational technology was fragmented and inaccesible.
     <br /> We set out to build a unified operating system that handles everything from student management to AI-driven personalized learning paths. 
    </p>

    <p className="text-gray-400 text-lg">
     <br />Today, we serve schools across Africa, bridging the gap between legacy processes and the intelligent future of global education.
     <br /> Our mission remains unchanged: to democratize high-tier infrastructure for every classroom.
     </p>
     
     <button className="text-white font-bold rounded-full border border-gray-400 px-6 py-3 mt-4 hover:bg-teal-300 transition">
      Discover our Full Roadmap
     </button>
    </section>

    

    </>
  );
}