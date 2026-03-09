import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f4f5] text-[#18181b] font-sans selection:bg-[#ef4444] selection:text-white">
      <div className="max-w-[1400px] mx-auto min-h-screen flex flex-col">
        
        {/* Strict Header Grid */}
        <header className="grid grid-cols-4 md:grid-cols-12 gap-px bg-zinc-300 border-b border-zinc-300">
          <div className="col-span-2 md:col-span-3 bg-[#f4f4f5] p-4 text-[11px] uppercase tracking-widest font-bold">
            Firstname Lastname<br/>
            Portfolio &copy; {new Date().getFullYear()}
          </div>
          <div className="col-span-2 md:col-span-3 bg-[#f4f4f5] p-4 text-[11px] uppercase tracking-widest">
            Based in<br/>
            San Francisco, CA
          </div>
          <div className="col-span-4 md:col-span-4 bg-[#f4f4f5] p-4 text-[11px] uppercase tracking-widest text-[#ef4444] font-bold flex flex-col justify-between">
            <span>Status</span>
            <span>Available for select projects</span>
          </div>
          <div className="col-span-4 md:col-span-2 bg-[#f4f4f5] p-4 flex flex-col justify-between items-end text-[11px] uppercase tracking-widest text-right">
            <span className="text-zinc-400">Index &darr;</span>
            <Link href="/notion" className="mt-4 hover:text-[#ef4444] transition-colors underline underline-offset-2">V6: Notion Theme &rarr;</Link>
          </div>
        </header>

        {/* Main Grid Assembly */}
        <main className="flex-1 grid grid-cols-4 md:grid-cols-12 gap-px bg-zinc-300">
          
          {/* Left Spacer / Decorative */}
          <div className="hidden md:block col-span-3 bg-[#f4f4f5] p-8">
            <div className="w-full h-full border border-zinc-200 flex items-end p-4">
               <span className="text-[10px] text-zinc-400 uppercase font-mono tracking-widest">Fig. 01 / Identity</span>
            </div>
          </div>

          {/* Core Content area */}
          <div className="col-span-4 md:col-span-6 bg-[#f4f4f5] p-8 md:p-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-12">
              Software engineer focused on systems design, typography, and functional minimalism.
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 text-sm leading-relaxed border-t border-zinc-200 pt-12">
               <div>
                 <h2 className="text-[11px] uppercase tracking-widest font-bold mb-4 text-zinc-500">About</h2>
                 <p className="text-zinc-700">
                   I build robust architectures that power modern web applications. The intersection of strict engineering and absolute design clarity is where my work lives.
                 </p>
               </div>
               <div>
                 <h2 className="text-[11px] uppercase tracking-widest font-bold mb-4 text-zinc-500">Experience</h2>
                 <ul className="space-y-4 text-zinc-700">
                   <li className="flex justify-between border-b border-zinc-200 pb-2">
                     <span className="font-medium">Stealth Startup</span>
                     <span className="text-zinc-400">2024&mdash;Pres.</span>
                   </li>
                   <li className="flex justify-between border-b border-zinc-200 pb-2">
                     <span className="font-medium">Design Agency</span>
                     <span className="text-zinc-400">2022&mdash;2024</span>
                   </li>
                 </ul>
               </div>
            </div>
          </div>

          {/* Right Column / Index */}
          <div className="col-span-4 md:col-span-3 bg-[#f4f4f5] p-8 border-l border-zinc-300 flex flex-col gap-12">
             
             <div>
               <h2 className="text-[11px] uppercase tracking-widest font-bold mb-6 text-[#ef4444]">Selected Work</h2>
               <ul className="space-y-6 text-sm">
                 <li>
                   <a href="#" className="group block">
                     <span className="block font-medium mb-1 group-hover:text-[#ef4444] transition-colors">E-Commerce Architecture</span>
                     <span className="text-xs text-zinc-500">Next.js, Node, Postgres</span>
                   </a>
                 </li>
                 <li>
                   <a href="#" className="group block">
                     <span className="block font-medium mb-1 group-hover:text-[#ef4444] transition-colors">Internal Analytics Tool</span>
                     <span className="text-xs text-zinc-500">React, D3.js, Python</span>
                   </a>
                 </li>
                 <li>
                   <a href="#" className="group block">
                     <span className="block font-medium mb-1 group-hover:text-[#ef4444] transition-colors">Design System UI Kit</span>
                     <span className="text-xs text-zinc-500">Figma, Tailwind, React</span>
                   </a>
                 </li>
               </ul>
             </div>

             <div className="mt-auto">
               <h2 className="text-[11px] uppercase tracking-widest font-bold mb-4 text-zinc-500">Links</h2>
               <ul className="space-y-2 text-sm">
                 <li><a href="#" className="hover:text-[#ef4444] transition-colors uppercase tracking-wider text-xs font-medium">Github</a></li>
                 <li><a href="#" className="hover:text-[#ef4444] transition-colors uppercase tracking-wider text-xs font-medium">Twitter</a></li>
                 <li><a href="#" className="hover:text-[#ef4444] transition-colors uppercase tracking-wider text-xs font-medium">LinkedIn</a></li>
               </ul>
             </div>

          </div>

        </main>
      </div>
    </div>
  );
}
