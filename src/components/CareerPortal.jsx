import React, { useState, useEffect } from 'react';
import { Search, MapPin, Upload, ChevronLeft, Send, Clock, Briefcase, ChevronDown, ChevronRight } from 'lucide-react';
import JobCard from './JobCard';
import CompanyInfo from './CompanyInfo';
import Footer from './Footer';
import JobDetailView from './JobDetailView';
const logo = "/assets/logo.png";
const slides = [
  "/assets/teamPhoto.JPG",
  "/assets/image2.JPG",
  "/assets/photo.jpg"
];

const ALL_JOBS = [
  {
    id: 1,
    title: "Marketing and Sales intern",
    location: "Pune, India",
    exp: "0 to 1 years",
    type: "Full Time",
    category: "Marketing",
    description: "Excellent communication skills. Communicating with prospective clients to arrange appointments for sales presentations. Bachelor’s or Master degree in Business, Marketing, or a related field (preferred). Developing new business opportunities through networking and relationship building with new clients. Selling products or services to prospective clients. Providing customers with information about products or services via email, phone, or in person. Knowledge and understanding of sales principles. Ability to learn and adapt to sales training. Creation and maintenance of MIS Reports. Basic sales management skills. Ability to work well in a team.",
    requirements: [
      "Excellent communication skills",
      "Communicating with prospective clients to arrange appointments for sales presentations",
      "Bachelor’s or Master degree in Business, Marketing, or a related field (preferred)",
      "Developing new business opportunities through networking and relationship building with new clients",
      "Selling products or services to prospective clients",
      "Providing customers with information about products or services via email, phone, or in person",
      "Knowledge and understanding of sales principles",
      "Ability to learn and adapt to sales training",
      "Creation and maintenance of MIS Reports",
      "Basic sales management skills",
      "Ability to work well in a team"
    ],
    responsibilities: [
      "Communicating with prospective clients to arrange appointments for sales presentations",
      "Developing new business opportunities through networking and relationship building with new clients",
      "Providing customers with information about products or services via email, phone, or in person",
      "Organizing and maintaining records of client accounts",
      "Selling products or services to prospective clients",
      "Creation and maintenance of MIS Reports",
      "Attending and participating in meetings, workshops, events, and exhibitions"
    ],
    about: "We are a young, IT / EdTech small start-up having a strong presence in Institutional ERP product market; we build everything around “People”. A Team of agile software engineers addicted to new technologies, love programming and inclined towards new technologies. Work / life balance is a priority for us, with a Strong Roadmap, we are on a growth path."
  },
  {
    id: 2,
    title: "Software Developer (PHP, Laravel)",
    location: "Pune, India",
    exp: "2 +",
    type: "Full Time",
    category: "Developer",
    description: "Minimum 2 Years of Experience in Web Application Development. Knowledge of PHP web frameworks including Laravel and Codeigniter is a plus.",
    requirements: [
      "Minimum 2 Years of Experience in Web Application Development",
      "Knowledge of PHP web frameworks including Laravel and Codeigniter is a plus",
      "Knowledge of front-end technologies including JavaScript, AJAX is a plus",
      "Understanding of object-oriented PHP programming",
      "Previous experience creating scalable applications",
      "Exposure to code versioning tools including Git, Mercurial, CVS and SVN",
      "Familiarity with SQL Databases is a plus",
      "Good logical and analytical skills"
    ],
    responsibilities: [
      "Collaborate with team members to determine best practices and client requirements for software development",
      "Solve complex performance problems and architectural challenges",
      "Write “clean”, well-designed code",
      "Good understanding of data structures & algorithms and their space & time complexities",
      "Strong technical aptitude and a good knowledge of CS fundamentals"
    ],
    about: "We are a young, IT / EdTech small start-up having a strong presence in Institutional ERP product market; we build everything around “People”. A Team of agile software engineers addicted to new technologies, love programming and inclined towards new technologies. Work/life balance is a priority for us, with a Strong Roadmap, we are on a growth path and looking for a passionate, self-starter."
  },
  {
    id: 3,
    title: "Sr. Software Developer",
    location: "Mumbai, India",
    exp: "2 +",
    type: "Full Time",
    category: "Developer",
    description: "Minimum 2-3 Years of Experience in Web Application Development. Proven experience on PHP MVC frameworks.",
    requirements: [
      "Minimum 2-3 Years of Experience in Web Application Development",
      "Knowledge of PHP web frameworks including Laravel and Codeigniter is a plus",
      "Knowledge of front-end technologies including JavaScript, AJAX is a plus",
      "Understanding of object-oriented PHP programming",
      "Previous experience creating scalable applications",
      "Exposure to code versioning tools including Git, Mercurial, CVS and SVN",
      "Familiarity with SQL Databases is a plus",
      "Good logical and analytical skills",
      "Proven experience on PHP MVC frameworks",
      "Exposure towards SQL and other databases"
    ],
    responsibilities: [
      "Collaborate with team members to determine best practices and client requirements for software development",
      "Solve complex performance problems and architectural challenges",
      "Write “clean”, well-designed code",
      "Good understanding of data structures & algorithms and their space & time complexities",
      "Strong technical aptitude and a good knowledge of CS fundamentals",
      "Solve complex performance problems and architectural challenges (Technical Leadership)",
      "Write “clean”, well-designed code (Lead level)",
      "Good understanding of data structures & algorithms and their space & time complexities (Advanced)",
      "Strong technical aptitude and a good knowledge of CS fundamentals"
    ],
    about: "We are a young, IT / EdTech small start-up having a strong presence in Institutional ERP product market; we build everything around “People”. A Team of agile software engineers addicted to new technologies, love programming and inclined towards new technologies. Work/life balance is a priority for us, with a Strong Roadmap, we are on a growth path and looking for a passionate, self-starter."
  }
];

const CareerPortal = () => {
  const [showJobs, setShowJobs] = useState(true); // Default to true to show all jobs
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Search States
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(ALL_JOBS); // Default to show all

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
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
        <div className="cursor-pointer shrink-0" onClick={() => { setSelectedJob(null); setFilteredJobs(ALL_JOBS); }}>
          <img src={logo} alt="Bynaric Logo" className="h-9 w-auto object-contain" />
        </div>

        <div className="hidden lg:flex items-center space-x-7 text-[14px] font-semibold text-gray-700">
          <button onClick={() => { setSelectedJob(null); setFilteredJobs(ALL_JOBS); }} className="hover:text-red-600 transition">Home</button>
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-red-600 transition">
            <span>Product & Platforms</span>
            <ChevronDown size={14} />
          </div>
          <button onClick={() => { setSelectedJob(null); setFilteredJobs(ALL_JOBS); }} className="text-red-600 transition border-b-2 border-red-600 pb-0.5">Career</button>
          <button className="hover:text-red-600 transition">Blog</button>
          <button className="hover:text-red-600 transition">Contact Us</button>
          <Search size={18} className="text-gray-800 cursor-pointer hover:text-red-600 transition ml-2" />
        </div>
      </nav>

      <div className="relative z-10">
        {selectedJob ? (
          <JobDetailView
            job={selectedJob}
            onBack={() => setSelectedJob(null)}
          />
        ) : (
          <>
            <div className="pt-8 pb-4 bg-gray-50">
              <div className="max-w-4xl mx-auto text-center px-4 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tighter uppercase text-gray-900">
                  Work with <span className="text-red-600">Bynaric</span>
                </h1>
                <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto font-medium">
                  We help companies reach their full potential. Explore opportunities in <br />
                  <span className="text-red-600">Tech, Marketing, and AI.</span>
                </p>
              </div>
            </div>

            {/* Compact Search Section */}
            <div className="pb-8 px-0 pt-4">
              <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white p-2.5 flex flex-col md:flex-row gap-2 shadow-lg rounded-xl border border-gray-100">
                  <div className="flex-[1.5] flex items-center px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
                    <Search className="text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Role (e.g. Developer)"
                      className="w-full p-1.5 text-xs outline-none bg-transparent font-semibold"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 flex items-center px-3 py-1.5 bg-gray-50 rounded-lg relative border border-gray-100">
                    <MapPin className="text-gray-400 mr-1" size={16} />
                    <select
                      className="w-full p-1 text-xs outline-none bg-transparent font-semibold appearance-none cursor-pointer"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    >
                      <option value="">All Locations</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                    <ChevronDown className="absolute right-3 text-gray-400 pointer-events-none" size={14} />
                  </div>
                  <button onClick={handleSearch} className="bg-red-600 text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-red-700 transition-all uppercase tracking-wider shadow-md">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Always visible results section */}
            <div id="jobs-list" className="max-w-6xl mx-auto px-8 py-5 min-h-[300px]">
              <div className="flex items-baseline gap-4 mb-5 border-b border-gray-100 pb-6">
                <h4 className="text-2xl font-bold text-gray-900">OPEN POSITIONS</h4>
                <span className="text-red-600 font-semibold bg-red-50 px-4 py-1 rounded-full text-sm border border-red-100">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Available
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
                  <button onClick={() => setFilteredJobs(ALL_JOBS)} className="text-red-600 underline mt-2">View all jobs</button>
                </div>
              )}
            </div>

            <div className="px-8 mt-12"><CompanyInfo /></div>

            {/* Slider Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 relative group">
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
              <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow hover:bg-red-600 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow hover:bg-red-600 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                <ChevronRight size={24} />
              </button>
            </div>

            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default CareerPortal;