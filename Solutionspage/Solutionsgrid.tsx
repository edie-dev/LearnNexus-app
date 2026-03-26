export default function Solutionsgrid() {
    const solutions = [
  {
    title: "Student Information System",
    description:
      "Manage student records, attendance, and academic data efficiently in one centralized system.",
    gradient: "bg-purple-900",
  },
  {
    title: "Learning Management System",
    description:
      "Deliver digital learning content, assignments, and track student progress seamlessly.",
    gradient: "bg-blue-900",
  },
  {
    title: "School Finance & Billing",
    description:
      "Handle school fees, payments, and financial records with ease and transparency.",
      gradient: "bg-green-900",
  },
  {
    title: "Parent Communication System",
    description:
      "Keep parents informed with real-time updates on student performance and activities.",
    gradient: "bg-amber-900",
  },
  {
    title: "AI Academic Intelligence",
    description:
      "Leverage AI-powered insights to enhance teaching, learning, and academic decision-making.",
      gradient: "bg-red-900",
  },
];

  return (
    <section className="py-34 px-20">
      <div className="max-full mx-auto flex flex-col gap-6 px-4">
        {solutions.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border border-black ${item.gradient} hover:shadow-lg transition`}
          >
            <h3 className="text-2xl lg:text-5xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-gray-500 text-xl">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
