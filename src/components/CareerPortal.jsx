import React, { useState, useEffect } from 'react';
import { Search, MapPin, Upload, ChevronLeft, Send, Clock, Briefcase, ChevronDown } from 'lucide-react';
import JobCard from './JobCard';
import CompanyInfo from './CompanyInfo';

const logo = "/assets/logo.png";
const slides = [
  "/assets/teamPhoto.JPG",
  "/assets/image2.png",
  "/assets/features.png",
  "/assets/image3.png",
  "/assets/photo.jpg"
];

const CareerPortal = () => {
  const [showJobs, setShowJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
    <div
      className="min-h-screen font-sans text-gray-100 relative"
      style={{
        backgroundColor: '#0f0202',
        /* INTENSIFIED RED TOP SHADOW */
        backgroundImage: `radial-gradient(circle at 50% -10%, rgba(220, 38, 38, 0.4) 0%, rgba(15, 2, 2, 1) 60%)`,
        backgroundAttachment: 'fixed'
      }}
    >
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-red-900/30 sticky top-0 z-50">
        <div className="cursor-pointer" onClick={() => setSelectedJob(null)}>
          <img src={logo} alt="Bynaric Logo" className="h-8 w-auto object-contain brightness-110" />
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-gray-300">
          <button onClick={() => { setSelectedJob(null); setShowJobs(true) }} className="hover:text-red-500 transition">Career</button>
          <button className="hover:text-red-500 transition">About Us</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 font-medium px-4 py-2 hover:text-white">Sign In</button>
          <button className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-600 transition shadow-[0_0_15px_rgba(185,28,28,0.4)]">Register</button>
        </div>
      </nav>

      <div className="relative z-10">
        {selectedJob ? (
          <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-500">
            <button
              onClick={() => setSelectedJob(null)}
              className="flex items-center text-red-500 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ChevronLeft size={20} /> Back to Openings
            </button>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-black text-white mb-4">{selectedJob.title}</h1>
                <div className="flex flex-wrap gap-6 text-gray-400 mb-10 pb-6 border-b border-red-900/20">
                  <span className="flex items-center gap-2"><MapPin size={18} /> {selectedJob.location}</span>
                  <span className="flex items-center gap-2"><Briefcase size={18} /> {selectedJob.exp}</span>
                  <span className="flex items-center gap-2"><Clock size={18} /> {selectedJob.type}</span>
                </div>
                <div className="space-y-8 text-gray-300 leading-relaxed">
                  <h3 className="text-xl font-bold text-red-500">Job Description</h3>
                  <p className="italic text-gray-400">"{selectedJob.description}"</p>
                  <p>Join Bynaric Systems and build scalable solutions that redefine industry standards.</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-[#1a0505] p-8 rounded-3xl shadow-2xl border border-red-900/20 sticky top-28">
                  <h3 className="text-2xl font-bold mb-6 text-white">Apply Now</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application Sent!"); setSelectedJob(null); }}>
                    <input type="text" placeholder="Full Name" className="w-full p-3 bg-[#2a0a0a] border border-red-900/30 rounded-xl text-white outline-none focus:ring-2 focus:ring-red-600" required />
                    <input type="email" placeholder="Email Address" className="w-full p-3 bg-[#2a0a0a] border border-red-900/30 rounded-xl text-white outline-none focus:ring-2 focus:ring-red-600" required />
                    <div className="border-2 border-dashed border-red-900/20 p-6 text-center rounded-xl cursor-pointer hover:bg-red-950/20 transition-colors">
                      <Upload className="mx-auto text-gray-500 mb-2" />
                      <span className="text-xs text-gray-400">Upload CV (PDF)</span>
                    </div>
                    <button type="submit" className="w-full bg-red-700 text-white font-bold py-4 rounded-xl hover:bg-red-600 transition flex items-center justify-center gap-2">
                      Submit Application <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="pt-16 pb-0">
              <div className="max-w-4xl mx-auto text-center px-4 mb-16">
                <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-white">
                  Work with <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">Bynaric</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                  We help companies reach their full potential. <br />
                  Explore opportunities in <span className="text-gray-200">Tech, Marketing, and AI.</span>
                </p>
              </div>

              {/* SLIDESHOW: MADE FULL WIDTH */}
              <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-y border-[#2a0a0a]">
                {slides.map((s, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${s})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0202] via-transparent to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* SEARCH OPTION: MADE FULL WIDTH */}
            <div className="pb-24 px-0">
              <div className="w-full relative z-20">
                <div className="bg-white p-4 flex flex-col md:flex-row gap-4 shadow-2xl border-b border-red-900/20">
                  <div className="flex-1 flex items-center px-5 py-2 bg-[#2a0a0a] rounded-2xl border border-red-900/10 focus-within:border-red-600/50 transition-colors">
                    <Search className="text-red-800" size={20} />
                    <input
                      type="text"
                      placeholder="Role or Keyword"
                      className="w-full p-3 text-sm text-white outline-none bg-transparent font-semibold placeholder:text-gray-600"
                    />
                  </div>

                  <div className="flex-1 flex items-center px-5 py-2 bg-[#2a0a0a] rounded-2xl relative border border-red-900/10 focus-within:border-red-600/50 transition-colors">
                    <MapPin className="text-red-800 mr-2" size={20} />
                    <select
                      className="w-full p-3 text-sm text-white outline-none bg-transparent font-semibold appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#1a0505]">Select Location</option>
                      <option value="pune" className="bg-[#1a0505]">Pune, India</option>
                      <option value="mumbai" className="bg-[#1a0505]">Mumbai, India</option>
                    </select>
                    <ChevronDown className="absolute right-5 text-red-800 pointer-events-none" size={18} />
                  </div>

                  <button
                    onClick={handleSearch}
                    className="bg-red-700 text-white px-16 py-4 rounded-2xl text-sm font-black hover:bg-red-600 transition-all uppercase tracking-widest shadow-lg active:scale-95 border-b-4 border-red-900"
                  >
                    Search Jobs
                  </button>
                </div>
              </div>

              <div className="mt-24 px-8 opacity-90">
                <CompanyInfo />
              </div>
            </div>

            {showJobs && (
              <div id="jobs-list" className="max-w-6xl mx-auto px-8 py-20">
                <div className="flex items-baseline gap-4 mb-12 border-b border-red-900/20 pb-6">
                  <h2 className="text-4xl font-black text-white">Current Openings</h2>
                  <span className="text-red-500 font-bold bg-red-950/40 px-4 py-1 rounded-full text-sm border border-red-900/30">1415 Jobs</span>
                </div>

                <div className="grid gap-6">
                  <JobCard
                    location="PUNE, INDIA"
                    title="Software Developer - MERN Stack"
                    exp="2+ Years Exp"
                    type="Full Time"
                    onApply={() => handleSelectJob({
                      title: "Software Developer - MERN Stack",
                      location: "Pune, India",
                      exp: "2+ Years",
                      type: "Full Time",
                      description: "High-impact role focusing on building next-gen AI interfaces."
                    })}
                  />
                  <JobCard
                    location="MUMBAI, INDIA"
                    title="Marketing and Sales Intern"
                    exp="0-1 Years Exp"
                    type="Internship"
                    onApply={() => handleSelectJob({
                      title: "Marketing and Sales Intern",
                      location: "Mumbai, India",
                      exp: "0-1 Years",
                      type: "Internship",
                      description: "Creative role involving lead gen and client strategy."
                    })}
                  />
                </div>
              </div>
            )}

            <footer className="bg-[#050101] text-white py-16 px-8 border-t border-red-900/20">
              <div className="max-w-7xl mx-auto text-center">
                <div className="text-2xl font-black mb-4 tracking-widest text-red-700 uppercase">BYNARIC SYSTEMS</div>
                <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm font-medium">
                  Building the future of recruitment through AI and seamless user experiences.
                </p>
                <div className="text-gray-700 text-[10px] uppercase tracking-widest">© 2026 Bynaric Systems. <span className="text-red-900 mx-2">|</span> hr@bynaric.in</div>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerPortal;