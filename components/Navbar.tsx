// import Link from "next/link";
// import  {Home, Info, Lightbulb, Logs} from "lucide-react";

// export default function Navbar() {
//   return (
//     <>
//         <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
//                     backdrop-blur-md bg-white/5 border border-white/10 
//                     rounded-full px-6 py-3 flex gap-6 items-center">

//       {/* Logo */}
//       <span className="text-white font-bold text-lg">
//         Learn<span className="text-teal-300">Nexus</span>
//       </span>

//       {/* Navigation Links */}
//       <div className="hidden md:flex gap-6 ml-6">
//         <Link href="/" className="text-gray-300 hover:text-teal-300 transition">
//           Home
//         </Link>
//         <Link href="/about" className="text-gray-300 hover:text-teal-300 transition">
//           About Us
//         </Link>
//         <Link href="/solutions" className="text-gray-300 hover:text-teal-300 transition">
//           Solutions
//         </Link>
//         <Link href="/solutions" className="text-gray-300 hover:text-teal-300 transition">
//           Waitlist
//         </Link>
//       </div>
//     </nav>
    
    
//     <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 flex 
//     gap-6 items-center w-22.5 max-w-sm"> 
//     <Link href="/" className="flex flex-col items-center text-gray-300 hover:text-teal-300"><Home size={20} /></Link>
//     <Link href="/about" className="flex flex-col items-center text-gray-300 hover:text-teal-300"><Info size={20} /></Link>
//     <Link href="/solutions" className="flex flex-col items-center text-gray-300 hover:text-teal-300"><Lightbulb size={20} /></Link>
//     <Link href="/" className="flex flex-col items-center text-gray-300 hover:text-teal-300"><Logs size={20} /></Link>
//     </nav>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Lightbulb, List } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* 🔹 Desktop Navbar */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 
                      backdrop-blur-md bg-white/5 border border-white/10 
                      rounded-full px-6 py-3 gap-6 items-center">

        {/* Logo */}
        <span className="text-white font-bold text-lg">
          Learn<span className="text-teal-300">Nexus</span>
        </span>

        {/* Links */}
        <div className="flex gap-6 ml-6">
          <Link
            href="/"
            className={`transition ${
              pathname === "/" 
                ? "text-teal-300 font-semibold"
                : "text-gray-300 hover:text-teal-300"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`transition ${
              pathname === "/about" 
                ? "text-teal-300 font-semibold"
                : "text-gray-300 hover:text-teal-300"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/solutions"
            className={`transition ${
              pathname === "/solutions" 
                ? "text-teal-300 font-semibold"
                : "text-gray-300 hover:text-teal-300"
            }`}
          >
            Solutions
          </Link>

          <Link
            href="/waitlist"
            className={`transition ${
              pathname === "/waitlist" 
                ? "text-teal-300 font-semibold"
                : "text-gray-300 hover:text-teal-300"
            }`}
          >
            Waitlist
          </Link>
        </div>
      </nav>

      {/* 🔹 Mobile Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 
                      backdrop-blur-md bg-white/5 border border-white/10 
                      rounded-full px-6 py-3 flex justify-between items-center 
                      w-[90%] max-w-sm">

        {/* Home */}
        <Link href="/" className="relative flex flex-col items-center">
          {pathname === "/" && (
            <span className="absolute -inset-2 rounded-full bg-teal-400/20 blur-md"></span>
          )}
          <Home
            size={20}
            className={`relative ${
              pathname === "/" ? "text-teal-300" : "text-gray-400"
            }`}
          />
        </Link>

        {/* About */}
        <Link href="/about" className="relative flex flex-col items-center">
          {pathname === "/about" && (
            <span className="absolute -inset-2 rounded-full bg-teal-400/20 blur-md"></span>
          )}
          <Info
            size={20}
            className={`relative ${
              pathname === "/about" ? "text-teal-300" : "text-gray-400"
            }`}
          />
        </Link>

        {/* Solutions */}
        <Link href="/solutions" className="relative flex flex-col items-center">
          {pathname === "/solutions" && (
            <span className="absolute -inset-2 rounded-full bg-teal-400/20 blur-md"></span>
          )}
          <Lightbulb
            size={20}
            className={`relative ${
              pathname === "/solutions" ? "text-teal-300" : "text-gray-400"
            }`}
          />
        </Link>

        {/* Waitlist */}
        <Link href="/waitlist" className="relative flex flex-col items-center">
          {pathname === "/waitlist" && (
            <span className="absolute -inset-2 rounded-full bg-teal-400/20 blur-md"></span>
          )}
          <List
            size={20}
            className={`relative ${
              pathname === "/waitlist" ? "text-teal-300" : "text-gray-400"
            }`}
          />
        </Link>
      </nav>
    </>
  );
}