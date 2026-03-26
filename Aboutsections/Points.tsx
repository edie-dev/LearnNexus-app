
import { SplinePointer, Eye, Goal, Server} from "lucide-react";

export default function Points() {

   const features = [
  {
    title: "Our Mission",
    description: `Our mission is to simplify and modernize how schools operate
      by providing a unified platform that brings together student
      management, learning systems, communication, and finances.`,
    icon: <SplinePointer className="text-blue-400" />,
    gradient: "bg-blue-500",
  },
  {
    title: "Our Vision",
    description: `We envision a future where every school operates on a smart,
      connected digital infrastructure powered by AI, enabling
      better learning experiences and more efficient management.`,
    icon: <Eye className="text-yellow-400" />,
    gradient: "bg-yellow-500",
  },
  {
    title: "Our Long-Term Goals",
    description: `LearnNexus aims to become a leading digital infrastructure
      for education, empowering schools, teachers, and students
      with intelligent tools that improve efficiency, communication,
      and learning outcomes.`,
    icon: <Goal className="text-green-400" />,
    gradient: "bg-green-500",
  },
  {
    title: "Why Schools Need Digital Infrastructure",
    description: `Traditional school systems often rely on fragmented tools
      and manual processes, which leads to inefficiency and poor
      communication. LearnNexus brings everything into one unified
      platform, making operations smoother and smarter.`,
    icon: <Server className="text-purple-400" />,
    gradient: "bg-purple-500",
  },
];
  return (
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="relative group rounded-2xl border border-white/10 bg-[#020617] p-6 overflow-hidden transition duration-300 hover:border-white/20 hover:-translate-y-1"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 opacity-40">
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-40 ${feature.gradient} blur-3xl`}
              />
            </div>
            {/* Icon */}
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-xl font-semibold mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-5">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

//     // <>
//     {/* <section className="mt-6">
//       <div className="max-w-5xl mx-auto">
        
//         <div className="flex items-center gap-3">
//         <SplinePointer className="text-teal-900" size={30} /> 
//         <h2 className="text-3xl font-bold text-start text-teal-300">
//           Our Mission
//         </h2>
//         </div>
//         <p className="mt-4 text-gray-600 leading-relaxed">
//           Our mission is to simplify and modernize how schools operate
//           by providing a unified platform that brings together student
//           management, learning systems, communication, and finances.
//         </p>
//       </div>
//     </section>

//     <section className="mt-6">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex items-center gap-3">
//         <Eye className="text-teal-900" size={30} /> 
//         <h2 className="text-3xl font-bold text-start text-teal-300">
//           Our Vision
//         </h2>
//         </div>

//         <p className="mt-4 text-gray-600 leading-relaxed">
//           We envision a future where every school operates on a smart,
//           connected digital infrastructure powered by AI, enabling
//           better learning experiences and more efficient management.
//         </p>
//       </div>
//     </section>

//     <section className="mt-6">
//       <div className="max-w-5xl mx-auto">
        
//         <div className="flex items-center gap-3">
//         <Goal className="text-teal-900" size={30} /> 
//         <h2 className="text-3xl font-bold text-start text-teal-300">
//           Our Long-Term Goals
//         </h2>
//         </div>

//         <p className="mt-4 text-gray-600 leading-relaxed">
//           LearnNexus aims to become a leading digital infrastructure
//           for education, empowering schools, teachers, and students
//           with intelligent tools that improve efficiency, communication,
//           and learning outcomes.
//         </p>

//         <p className="mt-4 text-gray-600 leading-relaxed">
//           Our long-term goal is to build a fully integrated ecosystem
//           where academic management, digital learning, financial systems,
//           and AI-powered insights work seamlessly together.
//         </p>
//       </div>
//     </section>

//      <section className="mt-6">
//       <div className="max-w-5xl mx-auto">
         
//          <div className="flex items-center gap-3">
//         <Server className="text-teal-900" size={30} /> 
//         <h2 className="text-3xl font-bold text-start text-teal-300">
//           Why Schools Need Digital Infrastructure
//         </h2>
//         </div>

//         <p className="mt-4 text-gray-600 leading-relaxed">
//           Traditional school systems often rely on fragmented tools
//           and manual processes, which leads to inefficiency and poor
//           communication. LearnNexus brings everything into one unified
//           platform, making operations smoother and smarter.
//         </p>
//       </div>
//     </section> */}
//    // </>
  );
}