import React, { useState, useEffect } from 'react';
import { Search, MapPin, Upload, ChevronLeft, Send, Clock, Briefcase, ChevronDown, ChevronRight } from 'lucide-react';
import JobCard from './JobCard';
import CompanyInfo from './CompanyInfo';
import Footer from './Footer';

const logo = "/assets/logo.png";
const slides = [
  "/assets/teamPhoto.JPG",
  "/assets/image2.JPG",
  "/assets/photo.jpg"
];

// All Job Data
const ALL_JOBS = [
  {
    id: 1,
    title: "Business Development Executive (Marketing)",
    location: "Pune, India",
    exp: "0 - 1 Years",
    type: "Full Time",
    category: "Marketing",
    description: "Excellent communication skills. Communicating with prospective clients to arrange appointments for sales presentations.",
    requirements: [
      "Excellent communication skills",
      "Bachelor’s or Master degree in Business, Marketing, or a related field (preferred)",
      "Knowledge and understanding of sales principles",
      "Ability to learn and adapt to sales training",
      "Basic sales management skills",
      "Ability to work well in a team"
    ],
    responsibilities: [
      "Communicating with prospective clients to arrange appointments for sales presentations",
      "Developing new business opportunities through networking and relationship building",
      "Providing customers with information about products/services via email, phone, or in person",
      "Organizing and maintaining records of client accounts",
      "Creation and maintenance of MIS Reports",
      "Attending and participating in meetings, workshops, events, and exhibitions"
    ]
  },
  {
    id: 2,
    title: "Software Developer (PHP, Laravel)",
    location: "Pune, India",
    exp: "2+ Years",
    type: "Full Time",
    category: "Developer",
    description: "Minimum 2 Years of Experience in Web Application Development. Knowledge of PHP web frameworks including Laravel and Codeigniter.",
    requirements: [
      "Minimum 2 Years of Experience in Web Application Development",
      "Knowledge of PHP web frameworks (Laravel/Codeigniter) and front-end (JS, AJAX)",
      "Understanding of object-oriented PHP programming",
      "Previous experience creating scalable applications",
      "Exposure to code versioning tools including Git",
      "Good logical and analytical skills"
    ],
    responsibilities: [
      "Collaborate with team members to determine best practices",
      "Solve complex performance problems and architectural challenges",
      "Write clean, well-designed code",
      "Strong understanding of data structures & algorithms",
      "Maintain high technical aptitude and knowledge of CS fundamentals"
    ]
  },
  {
    id: 3,
    title: "Sr. Software Developer",
    location: "Mumbai, India",
    exp: "2+ Years",
    type: "Full Time",
    category: "Developer",
    description: "Minimum 2-3 Years of Experience in Web Application Development. Proven experience on PHP MVC frameworks.",
    requirements: [
      "Minimum 2-3 Years of Experience in Web Application Development",
      "Proven experience on PHP MVC frameworks",
      "Exposure towards SQL and other databases",
      "Understanding of object-oriented PHP programming",
      "Experience with Git, Mercurial, or SVN",
      "Strong logical and analytical skills"
    ],
    responsibilities: [
      "Architect complex performance solutions",
      "Collaborate with team to determine client requirements",
      "Write clean, well-designed code",
      "Apply deep knowledge of CS fundamentals and data structures",
      "Lead technical problem-solving efforts"
    ]
  }
];

const CareerPortal = () => {
  const [showJobs, setShowJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Search States
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleSearch = () => {
    const results = ALL_JOBS.filter(job => {
      const matchesRole = job.title.toLowerCase().includes(searchKeyword.toLowerCase()) || 
                          job.category.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchesLocation = searchLocation === "" || job.location.toLowerCase().includes(searchLocation.toLowerCase());
      return matchesRole && matchesLocation;
    });

    setFilteredJobs(results);
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
    <div className="min-h-screen font-sans text-gray-900 bg-white relative">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="cursor-pointer shrink-0" onClick={() => { setSelectedJob(null); setShowJobs(false); }}>
          <img src={logo} alt="Bynaric Logo" className="h-9 w-auto object-contain" />
        </div>

        <div className="hidden lg:flex items-center space-x-7 text-[14px] font-semibold text-gray-700">
          <button onClick={() => { setSelectedJob(null); setShowJobs(false); }} className="hover:text-red-600 transition">Home</button>
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-red-600 transition">
            <span>Product & Platforms</span>
            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
          </div>
          <button onClick={() => { setSelectedJob(null); setShowJobs(true); setFilteredJobs(ALL_JOBS); }} className="text-red-600 transition border-b-2 border-red-600 pb-0.5">Career</button>
          <button className="hover:text-red-600 transition">Blog</button>
          <button className="hover:text-red-600 transition">Contact Us</button>
          <Search size={18} className="text-gray-800 cursor-pointer hover:text-red-600 transition ml-2" />
        </div>
      </nav>

      <div className="relative z-10">
        {selectedJob ? (
          <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-500">
            <button onClick={() => setSelectedJob(null)} className="flex items-center text-red-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform">
              <ChevronLeft size={20} /> Back to Openings
            </button>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-black text-gray-900 mb-4">{selectedJob.title}</h1>
                <div className="flex flex-wrap gap-6 text-gray-500 mb-10 pb-6 border-b border-gray-100">
                  <span className="flex items-center gap-2"><MapPin size={18} /> {selectedJob.location}</span>
                  <span className="flex items-center gap-2"><Briefcase size={18} /> {selectedJob.exp}</span>
                  <span className="flex items-center gap-2"><Clock size={18} /> {selectedJob.type}</span>
                </div>
                
                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <section>
                    <h3 className="text-xl font-bold text-red-600 mb-3">About Us</h3>
                    <p>We are a young, IT / EdTech small start-up having a strong presence in Institutional ERP product market; we build everything around “People”. Work/life balance is a priority for us.</p>
                  </section>
                  <section>
                    <h3 className="text-xl font-bold text-red-600 mb-3">Qualification And Experience</h3>
                    <ul className="list-disc ml-5 space-y-2">
                      {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-xl font-bold text-red-600 mb-3">Key Performance Indicators</h3>
                    <ul className="list-disc ml-5 space-y-2">
                      {selectedJob.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
                    </ul>
                  </section>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Apply Now</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application Sent!"); setSelectedJob(null); }}>
                    <input type="text" placeholder="Full Name" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-600" required />
                    <input type="email" placeholder="Email Address" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-600" required />
                    <div className="border-2 border-dashed border-gray-200 p-6 text-center rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                      <Upload className="mx-auto text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500">Upload CV (PDF)</span>
                    </div>
                    <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2">
                      Submit Application <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="pt-8 pb-0 bg-gray-50">
              <div className="max-w-4xl mx-auto text-center px-4 mb-16">
                <h1 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase text-gray-900">
                  Work with <span className="text-red-600">Bynaric</span>
                </h1>
                <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                  We help companies reach their full potential. Explore opportunities in <br />
                  <span className="text-red-600">Tech, Marketing, and AI.</span>
                </p>
              </div>

              <div className="max-w-6xl mx-auto px-4 relative group">
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden border border-gray-100 shadow-sm rounded-lg">
                  {slides.map((s, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                      style={{ backgroundImage: `url(${s})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>
                <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="pb-24 px-0 pt-12"> 
              <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white p-4 flex flex-col md:flex-row gap-4 shadow-xl rounded-2xl border border-gray-100">
                  <div className="flex-1 flex items-center px-5 py-2 bg-gray-50 rounded-2xl border border-gray-100">
                    <Search className="text-gray-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Search job role (e.g. Software Developer)" 
                      className="w-full p-3 text-sm outline-none bg-transparent font-semibold"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 flex items-center px-5 py-2 bg-gray-50 rounded-2xl relative border border-gray-100">
                    <MapPin className="text-gray-400 mr-2" size={20} />
                    <select 
                      className="w-full p-3 text-sm outline-none bg-transparent font-semibold appearance-none cursor-pointer"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    >
                      <option value="">All Locations</option>
                      <option value="Pune">Pune, India</option>
                      <option value="Mumbai">Mumbai, India</option>
                    </select>
                    <ChevronDown className="absolute right-5 text-gray-400 pointer-events-none" size={18} />
                  </div>
                  <button onClick={handleSearch} className="bg-red-600 text-white px-10 py-3 rounded-2xl text-sm font-black hover:bg-red-700 transition-all uppercase tracking-widest shadow-lg active:scale-95">
                    Search Jobs
                  </button>
                </div>
              </div>
            </div>

            {showJobs && (
              <div id="jobs-list" className="max-w-6xl mx-auto px-8 py-5 min-h-[300px]">
                <div className="flex items-baseline gap-4 mb-5 border-b border-gray-100 pb-6">
                  <h2 className="text-3xl font-black text-gray-900">Search Results</h2>
                  <span className="text-red-600 font-semibold bg-red-50 px-4 py-1 rounded-full text-sm border border-red-100">
                    {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
                  </span>
                </div>
                
                {filteredJobs.length > 0 ? (
                  <div className="grid gap-6">
                    {filteredJobs.map(job => (
                      <JobCard
                        key={job.id}
                        location={job.location.toUpperCase()}
                        title={job.title}
                        exp={job.exp}
                        type={job.type}
                        description={job.description}
                        onApply={() => handleSelectJob(job)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <h3 className="text-xl font-bold text-gray-400">No matching jobs found.</h3>
                    <p className="text-gray-500">Try searching for "Software Developer" or "Marketing".</p>
                  </div>
                )}
              </div>
            )}
            
            <div className="px-8"><CompanyInfo /></div>
            <Footer/>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerPortal;