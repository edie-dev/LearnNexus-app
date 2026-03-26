import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-5 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-black">

  {/* Logo + Description */}
  <div className="flex flex-col gap-4">
    <h1 className="text-3xl font-bold">
      Learn<span className="text-teal-300">Nexus</span>
    </h1>
    <p className="text-gray-400 mt-4 max-w-sm">
      The world's first AI-native education operating system. Built for schools that demand more.
    </p>
  </div>

  {/* Product */}
  <div className="flex flex-col gap-4">
    <h1 className="text-white text-lg font-semibold">PRODUCT</h1>
    <ul className="flex flex-col gap-3 mt-4">
      <li className="text-gray-500 hover:text-white cursor-pointer">OS Architecture</li>
      <li className="text-gray-500 hover:text-white cursor-pointer">LMS Integrations</li>
      <li className="text-gray-500 hover:text-white cursor-pointer">SIS Management</li>
      <li className="text-gray-500 hover:text-white cursor-pointer">AI Insights Hub</li>
    </ul>
  </div>

  {/* Institution */}
  <div className="flex flex-col gap-4">
    <h1 className="text-white text-lg font-semibold">INSTITUTION</h1>
    <ul className="flex flex-col gap-3 mt-4">
      <li className="text-gray-500 hover:text-white cursor-pointer">Success Stories</li>
      <li className="text-gray-500 hover:text-white cursor-pointer">Implementation</li>
      <li className="text-gray-500 hover:text-white cursor-pointer">Security & Privacy</li>
      <li className="text-gray-500 hover:text-white cursor-pointer">Developer API</li>
    </ul>
  </div>

  {/* Newsletter */}
  <div className="flex flex-col gap-4">
    <h1 className="text-white text-lg font-semibold">NEWSLETTER</h1>
    <p className="text-gray-500">Get the latest on AI in education.</p>

    <input
      type="email"
      placeholder="Your email address"
      className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
    />

    <button className="mt-3 w-full py-3 bg-teal-300 text-black rounded-lg hover:bg-teal-400 transition">
      Subscribe
    </button>
  </div>

  <div className="flex flex-row mt-10">
    <p className="text-gray-500 text-left">© 2026 LearnNexus Systems Inc. All rights reserved.</p>
    <div>
   <ul className="flex flex-col text-right gap-3">
      <li className="text-gray-500 hover:text-white cursor-pointer"></li>
      <li className="text-gray-500 hover:text-white cursor-pointer"></li>
      <li className="text-gray-500 hover:text-white cursor-pointer"></li>
    </ul>
    </div>
  </div>

</footer>
    );
}