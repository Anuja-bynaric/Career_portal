import React, { useState } from 'react';
import { Search, MapPin, Upload, ChevronLeft, Send, Clock, Briefcase, Award } from 'lucide-react';
import JobCard from './JobCard';
import CompanyInfo from './CompanyInfo';

const CareerPortal = () => {
  const [showJobs, setShowJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = () => {
    setShowJobs(true);
    setSelectedJob(null);
    setTimeout(() => {
      document.getElementById('jobs-list')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectJob = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* NAVIGATION - Matching image_f06b08.jpg */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-red-600 tracking-tighter cursor-pointer" onClick={() => setSelectedJob(null)}>
          BYNARIC<span className="text-slate-800">.</span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <button onClick={() => {setSelectedJob(null); setShowJobs(true)}} className="hover:text-red-600 transition">Carrer</button>
          <button className="hover:text-red-600 transition">About Us</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 font-medium px-4 py-2">Sign In</button>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-red-600 transition shadow-lg">Register</button>
        </div>
      </nav>

      {selectedJob ? (
        /* JOB DETAIL VIEW */
        <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-500">
          <button 
            onClick={() => setSelectedJob(null)}
            className="flex items-center text-red-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ChevronLeft size={20} /> Back to Openings
          </button>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-black text-slate-900 mb-4">{selectedJob.title}</h1>
              <div className="flex flex-wrap gap-6 text-gray-500 mb-10 pb-6 border-b">
                <span className="flex items-center gap-2"><MapPin size={18}/> {selectedJob.location}</span>
                <span className="flex items-center gap-2"><Briefcase size={18}/> {selectedJob.exp}</span>
                <span className="flex items-center gap-2"><Clock size={18}/> {selectedJob.type}</span>
              </div>
              <div className="space-y-8 text-gray-600 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Job Description</h3>
                  <p className="italic text-gray-500 mb-4">"{selectedJob.description}"</p>
                  <p>We focus on building world-class software engineers using the latest technology. This role offers the opportunity to work on high-impact projects within a dynamic team.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 sticky top-28">
                <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application Sent!"); setSelectedJob(null); }}>
                  <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-500" required />
                  <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-500" required />
                  <div className="border-2 border-dashed border-gray-200 p-6 text-center rounded-xl cursor-pointer">
                    <Upload className="mx-auto text-gray-400 mb-2" />
                    <span className="text-xs text-gray-500">Upload CV (PDF)</span>
                  </div>
                  <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2">
                    Submit Application <Send size={18}/>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* HOME VIEW - Dark Hero with Search image_f06b08.jpg */
        <>
      {/* Removed pattern: The pattern div has been deleted. */}

<div className="relative h-[400px] flex items-center justify-center bg-[#111827] text-white overflow-hidden shadow-[inset_0_-80px_100px_-20px_rgba(220,38,38,0.3)]">
  {/* The smooth deep background */}
  <div className="absolute inset-0 bg-[#111827]"></div>
  
  {/* Defines the smooth red glow at the very bottom */}
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-red-600/40 to-transparent"></div>

  <div className="relative z-10 text-center px-4 max-w-3xl">
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tighter uppercase italic drop-shadow-lg">
      Work with <span className="text-red-600">Bynaric</span>
    </h1>
    
    {/* Paragraph text */}
    <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto font-medium">
      Join a team of innovators. Explore opportunities in Tech, Marketing, and AI.
    </p>
    
    {/* Compact Glassmorphism Search Bar */}
    <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-xl flex flex-col md:flex-row gap-1.5 border border-white/10 shadow-2xl max-w-2xl mx-auto">
      <div className="flex-1 flex items-center px-3 bg-white rounded-lg">
        <Search className="text-gray-400" size={16} />
        <input 
          type="text" 
          placeholder="Role or Keyword" 
          className="w-full p-2.5 text-xs text-slate-800 outline-none bg-transparent font-semibold" 
        />
      </div>
      
      <div className="flex-1 flex items-center px-3 bg-white rounded-lg">
        <MapPin className="text-gray-400" size={16} />
        <input 
          type="text" 
          placeholder="Location" 
          className="w-full p-2.5 text-xs text-slate-800 outline-none bg-transparent font-semibold" 
        />
      </div>
      
      <button 
        onClick={handleSearch} 
        className="bg-red-600 text-white px-8 py-2.5 rounded-lg text-xs font-black hover:bg-red-700 transition uppercase tracking-widest shadow-lg active:scale-95"
      >
        Search
      </button>
    </div>
  </div>
</div>

          <CompanyInfo />

          {showJobs && (
            <div id="jobs-list" className="max-w-6xl mx-auto px-8 py-20">
              <div className="flex items-baseline gap-4 mb-12">
                <h2 className="text-4xl font-black text-slate-900">Current Openings</h2>
                <span className="text-gray-400 font-medium">(1415 Jobs)</span>
              </div>
              
              <div className="space-y-8">
                {/* MERN STACK JOB CARD */}
                <JobCard 
                  location="PUNE, INDIA"
                  title="Software Developer - MERN Stack"
                  exp="2+ Years Exp"
                  type="Full Time"
                  description="We are looking for a MERN Stack developer to build scalable web applications. Skills: React, Node.js, MongoDB, Tailwind CSS..."
                  onApply={() => handleSelectJob({
                    title: "Software Developer - MERN Stack",
                    location: "Pune, India",
                    exp: "2+ Years Exp",
                    type: "Full Time",
                    description: "High-impact role focusing on building next-gen AI interfaces. Experience with React, Node.js and Tailwind CSS is required."
                  })}
                />

                {/* MARKETING INTERN JOB CARD */}
                <JobCard 
                  location="MUMBAI, INDIA"
                  title="Marketing and Sales Intern"
                  exp="0-1 Years Exp"
                  type="Internship"
                  description="Excellent communication skills, lead generation, and client relationship management. Join our growth team..."
                  onApply={() => handleSelectJob({
                    title: "Marketing and Sales Intern",
                    location: "Mumbai, India",
                    exp: "0-1 Years Exp",
                    type: "Internship",
                    description: "Looking for creative minds to join our marketing engine. Focus on digital strategy and client relationship management."
                  })}
                />
              </div>
            </div>
          )}

          {/* FOOTER - Matching image_f05c64.png */}
          {/* FOOTER - Cleaned with Top Red Glow */}
<footer className="relative bg-[#0b0f1a] text-white py-16 px-8 overflow-hidden">
  
  {/* Top Red Glow Shadow - Mirroring the Hero effect */}
  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-red-600/20 to-transparent"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    
  

    {/* Brand Logo */}
    <div className="text-3xl font-black mb-4 italic tracking-tighter uppercase">
      BYNARIC<span className="text-red-600">.</span>
    </div>

    {/* Slogan */}
    <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm font-medium">
      Building the future of recruitment through AI and seamless user experiences.
    </p>

    {/* Red Divider Line */}
    <div className="h-px bg-red-600 w-16 mx-auto mb-8 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>

    {/* Copyright and Contact */}
    <div className="space-y-1">
      <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">© 2026 Bynaric Systems. All Rights Reserved.</p>
      <p className="text-gray-600 text-xs mt-2">
        Inquiries: <span className="text-red-500 font-bold ml-1">hr@bynaric.in</span>
      </p>
    </div>
  </div>
</footer>
        </>
      )}
    </div>
  );
};

export default CareerPortal;