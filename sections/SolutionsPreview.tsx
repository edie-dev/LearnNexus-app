"use client";

import {
  Database,
  BookOpen,
  LayoutDashboard,
  Brain,
  ArrowUpRight,
  Check,
} from "lucide-react";

export default function SolutionsPreview() {
  
  const features = [
    {
      title: "Student Information System",
      description:
        "Centralized student records, enrollment, attendance, grading scheduling and compliance all in one secure database.",
      tags: ["Student profiles", "Attendance", "Transcript", "Scheduling"],
      icon: <Database className="text-blue-400" />,
      gradient: "bg-blue-500",
    },
    {
      title: "Learning Management System",
      description:
        "Course delivery, assignment, assessment and progress tracking that integrate seamlessly with student data.",
      tags: ["Course builder", "Assignment", "Assessment", "Tracking"],
      icon: <BookOpen className="text-yellow-400" />,
      gradient: "bg-yellow-500",
    },
    {
      title: "Role Based Dashboard",
      description:
        "Personalized experience for administrators, teachers, students, and parents.",
      tags: ["Admin view", "Teacher view", "Student view", "Parent view"],
      icon: <LayoutDashboard className="text-green-400" />,
      gradient: "bg-green-500",
    },
    {
      title: "AI Intelligence Layer",
      description:
        "Embedded AI that analyzes data, surfaces insight, automates workflows.",
      tags: ["Prediction", "Automation", "Insight", "Recommendation"],
      icon: <Brain className="text-purple-400" />,
      gradient: "bg-purple-500",
    },
  ];

    const cards = [
  {
    title: "For Schools",
    description:
      "Strategic oversight, automated operations, and financial stability with enterprise-grade security.",
    points: ["Centralized Reporting", "Multi-tenant Management"],
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
  },
  {
    title: "For Teachers",
    description:
      "Save 10+ hours a week with AI-assisted grading, lesson planning, and behavioral tracking.",
    points: ["AI Lesson Copilot", "Instant Progress Reports"],
    gradient: "from-green-400 via-teal-500 to-emerald-600",
  },
  {
    title: "For Parents",
    description:
      "Stay connected to your child’s journey with real-time updates and simplified communication.",
    points: ["Real-time Performance", "1-Click Tuition Payments"],
    gradient: "from-red-500 via-orange-500 to-yellow-500",
  },
];

  return (

    <>
    <section className="py-24 px-6 bg-midnight-600">
    <div className="text-start py-6 pl-20">
               <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white pb-4">A Single Architecture for the 
               <br />Entire Lifecycle</h1>
                <p className="text-xl md:text-2xl text-gray-400 pb-4">Stop juggling disconnected tools. LearnNexus creates a seamless thread from 
                    <br />enrollment to graduation.</p>
                <p className="text-end text-teal-300 py-6 pl-20">See All Capabilities</p>
                

            </div>
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

            {/* Arrow */}
            <div className="absolute top-4 right-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={18} />
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

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {feature.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    
    <section className="w-full py-20 px-6 bg-midnight-600">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    {cards.map((card, index) => (
      <div
        key={index}
        className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden group hover:scale-[1.02] transition min-h-85"
      >
      
        <div className="flex flex-col h-full">
        <h3 className="text-white text-xl font-semibold mb-3">{card.title}</h3>
        <p className="text-gray-400 text-sm mb-6">{card.description}</p>
        <ul className="space-y-3">
          {card.points.map((point, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-white">
              <span className="bg-cyan-500/20 p-1 full">
                <Check size={14} className="text-cyan-400" />
              </span> 
              {point}
            </li>
          ))}
        </ul>
        <div className="grow" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 ${card.gradient} opacity-70"/>
        <div  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-44 h-44 ${card.gradient} blur-2xl opacity-60"/>
        <div className="absolute bottom-4 left-4 right-4 h-24 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10" />
      </div>
    ))}
  </div>
</section>
</>  );
}