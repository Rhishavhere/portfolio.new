"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, FileText, CheckSquare, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function NotionPortfolio() {
  return (
    <div className="min-h-screen bg-white text-[#37352f] font-sans selection:bg-[#2383e2] selection:text-white pb-32">
      
      {/* Top Navbar Simulation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#ededed] flex items-center px-4 py-2 text-sm text-[#787774] font-medium h-12">
        <Link href="/" className="hover:bg-[#efefef] p-1.5 rounded transition-colors flex items-center gap-1">
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>
        <span className="mx-1 text-[#e1e1e1]">/</span>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#efefef] rounded cursor-pointer transition-colors">
          <span>👨‍💻</span>
          <span className="text-[#37352f]">Firstname's Workspace</span>
        </div>
      </div>

      {/* Cover Image Placeholder */}
      <div className="w-full h-[30vh] bg-gradient-to-r from-stone-200 to-stone-100 flex items-center justify-center relative overflow-hidden group">
         {/* Subtle pattern for the cover */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
         <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 backdrop-blur text-xs px-2 py-1 rounded shadow-sm cursor-pointer border border-[#ededed] text-[#37352f] font-medium font-sans">
           Change cover
         </div>
      </div>

      {/* Main Content constraints */}
      <main className="max-w-[900px] mx-auto px-6 sm:px-24">
        
        {/* Page Icon */}
        <div className="text-[78px] leading-none -mt-12 mb-4 relative z-10 select-none">
          🚀
        </div>

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#37352f] mb-8 outline-none">
          Firstname Lastname
        </h1>

        {/* Info properties (Notion database style) */}
        <div className="flex flex-col gap-2 mb-8 text-[14px] border-b border-[#ededed] pb-6">
          <div className="flex items-center text-[#787774]">
            <div className="w-32 flex items-center gap-2">
              <FileText size={16} />
              <span>Role</span>
            </div>
            <div className="text-[#37352f] flex gap-2">
              <span className="bg-[#e8ecee] px-2 py-0.5 rounded-sm">Software Engineer</span>
              <span className="bg-[#fdecc8] px-2 py-0.5 rounded-sm">Founder</span>
            </div>
          </div>
          <div className="flex items-center text-[#787774]">
            <div className="w-32 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                 <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM1 8a7 7 0 1114 0A7 7 0 011 8zm7-4a.5.5 0 01.5.5v3.15l2.12 2.12a.5.5 0 01-.71.7l-2.26-2.27A.5.5 0 017.5 7.5v-3a.5.5 0 01.5-.5z"/>
              </svg>
              <span>Located</span>
            </div>
            <div className="text-[#37352f]">
              <span className="underline decoration-[#e1e1e1] underline-offset-4">San Francisco, CA</span>
            </div>
          </div>
          <div className="flex items-center text-[#787774]">
            <div className="w-32 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                 <path d="M14 3.5v9a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h2V2.5a.5.5 0 011 0V3h5V2.5a.5.5 0 011 0V3h2a.5.5 0 01.5.5zM3 4v1h10V4H3zm10 2H3v6h10V6z"/>
              </svg>
              <span>Last updated</span>
            </div>
            <div className="text-[#37352f]">Today</div>
          </div>
        </div>

        {/* Callout */}
        <div className="flex items-start p-4 my-6 rounded-md bg-[#f1f1ef] border border-transparent">
          <div className="text-xl mr-3 leading-none select-none">💡</div>
          <div className="text-[15px] leading-relaxed">
            I build robust architectures that power modern web applications. The intersection of strict engineering and absolute design clarity is where my work lives.
          </div>
        </div>

        {/* Content Blocks */}
        <div className="relative group mb-[1px]">
          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
             <div className="absolute -left-6 opacity-0 group-hover:opacity-100 cursor-pointer text-[#d3d3d3] hover:text-[#37352f] transition-opacity">
               <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] fill-current"><path d="M5.5 3.5h3v2h-3v-2zm0 5h3v2h-3v-2z"></path></svg>
             </div>
             Experience
          </h2>
        </div>
        
        {/* Toggle List items mimicking Notion */}
        <div className="space-y-1 mb-8">
           
           <div className="flex gap-2 p-1 hover:bg-[#efefef] rounded-sm transition-colors group">
             <div className="w-5 h-5 flex items-center justify-center cursor-pointer text-[#787774] hover:bg-[#e1e1e1] rounded-sm shrink-0 mt-0.5">
               <ChevronRight size={16} />
             </div>
             <div className="flex-1 text-[15px] leading-relaxed">
               <span className="font-semibold">Stealth Startup</span> <span className="text-[#787774]">&mdash; Senior Engineer (2024 - Present)</span>
             </div>
           </div>

           <div className="flex gap-2 p-1 hover:bg-[#efefef] rounded-sm transition-colors group">
             <div className="w-5 h-5 flex items-center justify-center cursor-pointer text-[#787774] hover:bg-[#e1e1e1] rounded-sm shrink-0 mt-0.5">
               <ChevronRight size={16} />
             </div>
             <div className="flex-1 text-[15px] leading-relaxed">
               <span className="font-semibold">Design Agency</span> <span className="text-[#787774]">&mdash; Frontend Developer (2022 - 2024)</span>
             </div>
           </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#ededed] my-8"></div>

        {/* Projects Gallery/List */}
        <div className="relative group mb-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
             <div className="absolute -left-6 opacity-0 group-hover:opacity-100 cursor-pointer text-[#d3d3d3] hover:text-[#37352f] transition-opacity">
               <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] fill-current"><path d="M5.5 3.5h3v2h-3v-2zm0 5h3v2h-3v-2z"></path></svg>
             </div>
             Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          
          {/* Card 1 */}
          <div className="border border-[#ededed] rounded-md overflow-hidden hover:bg-[#f9f9f8] hover:shadow-sm cursor-pointer transition-all group">
            <div className="h-32 bg-[#f1f1ef] border-b border-[#ededed] relative flex justify-center items-center text-4xl overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
               📦
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[15px] group-hover:underline decoration-1 underline-offset-2">E-Commerce Architecture</h3>
              <p className="text-sm text-[#787774] mt-1 line-clamp-2">Next.js, Node, Postgres. High performance storefront built from scratch.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#ededed] rounded-md overflow-hidden hover:bg-[#f9f9f8] hover:shadow-sm cursor-pointer transition-all group">
            <div className="h-32 bg-[#e8ecee] border-b border-[#ededed] relative flex justify-center items-center text-4xl overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
               📊
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[15px] group-hover:underline decoration-1 underline-offset-2">Internal Analytics Tool</h3>
              <p className="text-sm text-[#787774] mt-1 line-clamp-2">React, D3.js, Python. Processing huge amounts of internal telemetry.</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#ededed] my-8"></div>

        <h2 className="text-2xl font-semibold mb-4">Connect</h2>
        
        {/* Simple List */}
        <div className="space-y-0 text-[15px]">
          <a href="#" className="flex items-center gap-3 p-1.5 -mx-1.5 hover:bg-[#efefef] rounded transition-colors group">
             <Github size={18} className="text-[#787774]" />
             <span className="border-b border-[#37352f]/20 group-hover:border-[#37352f] transition-colors">GitHub</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-1.5 -mx-1.5 hover:bg-[#efefef] rounded transition-colors group">
             <Twitter size={18} className="text-[#787774]" />
             <span className="border-b border-[#37352f]/20 group-hover:border-[#37352f] transition-colors">Twitter</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-1.5 -mx-1.5 hover:bg-[#efefef] rounded transition-colors group">
             <Linkedin size={18} className="text-[#787774]" />
             <span className="border-b border-[#37352f]/20 group-hover:border-[#37352f] transition-colors">LinkedIn</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-1.5 -mx-1.5 hover:bg-[#efefef] rounded transition-colors group">
             <Mail size={18} className="text-[#787774]" />
             <span className="border-b border-[#37352f]/20 group-hover:border-[#37352f] transition-colors">Email Me</span>
          </a>
        </div>

      </main>

    </div>
  );
}
