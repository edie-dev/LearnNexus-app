import { CircleCheck, Award, Network } from "lucide-react";

export default function CaseStudies() {

    const cards = [
  {
    title: "Results Guaranteed",
    description:
      "Our AI-native approach is proven to increase student-engagement by 48% and diminish administrative inefficiency by over 60%.",
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
    icon: <CircleCheck className="text-teal-400" />,
  },
  {
    title: "Proven Experience",
    description:
      "Led by veterans from top global tech firms and educational leadeers who understand the unique challenges of modern schooling.",
    gradient: "from-green-400 via-teal-500 to-emerald-600",
    icon: <Award className="text-teal-400" />,      
  },
  {
    title: "Strategic Management",
    description:
      "More than just software, we provide the strategic framework for digital transformation that ensures long-term institutional success.",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    icon: <Network className="text-teal-400" />,
  },
];


    return (

        <>

        <section className="mt-34 mb-2 px-20 text-center pt-34">
              <h1 className="text-7xl font-bold text-white">Real Impact, Real Results</h1>
              <p className="text-gray-400 text-2xl mt-4">We deliever measurable transformation for educational institutions worldwide.</p>
        </section>
    {/* //     <div className="min-h-screen flex items-center justify-center px-6">
      
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        
    //     {cards.map((card, index) => (
    //       <div
    //         key={index}
    //         className={`p-6 rounded-xl text-white shadow-lg bg-gradient-to-r ${card.gradient}`}
    //       >
    //         <h3 className="text-xl font-bold mb-3">{card.title}</h3>
    //         <p className="text-white/90">{card.description}</p>
    //       </div>
    //     ))}

    //   </div>

    // </div> */}

    <section className="w-full py-20 px-6 bg-midnight-600">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {cards.map((card, index) => (
      <div
        key={index}
        className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden group hover:scale-[1.02] transition min-h-85"
      >
        <div className="flex flex-col h-full">
          
          <div>
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-teal-400/25">
              {card.icon}
            </div>

            <h3 className="text-white text-xl font-semibold mb-3">
              {card.title}
            </h3>
          </div>

          <p className="text-gray-400 mt-auto text-xl">
            {card.description}
          </p>

        </div>
      </div>
    ))}

  </div>
</section>
</>
        
    );
}