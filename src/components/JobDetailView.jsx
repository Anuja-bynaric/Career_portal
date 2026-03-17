import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, ChevronLeft, Send, UploadCloud, FileText, X } from 'lucide-react';

const JobDetailView = ({ job, onBack }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  if (!job) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className=" mx-auto py-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center ml-8 text-red-600 font-bold mb-8 hover:gap-2 transition-all"
      >
        <ChevronLeft size={20} /> Back to Openings
      </button>

      {/* Grid Layout: items-start keeps the form at the top */}
      <div className="max-w-7xl mx-10 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT: JOB INFO */}
        <div className=" space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{job.title}</h3>
            <div className="flex flex-wrap gap-4 text-gray-600 font-medium">
              <span className="flex items-center gap-1"><MapPin size={18} /> {job.location}</span>
              <span className="flex items-center gap-1"><Briefcase size={18} /> {job.exp}</span>
              <span className="flex items-center gap-1"><Clock size={18} /> {job.type}</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-800">Job Description</h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{job.description}</p>

            <h3 className="text-xl font-bold text-slate-800 mt-8">What You'll Do</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Collaborate with cross-functional teams to define and ship new features.</li>
              <li>Ensure the performance, quality, and responsiveness of applications.</li>
              <li>Apply best practices in software development and use the latest technology.</li>
              <li>Work towards global standards in software engineering.</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: APPLICATION FORM */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Apply for this position</h3>
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Full Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Email Address"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  className="w-full p-3  border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Phone Number"
                  required
                />
              </div>

              {/* Resume Upload Box */}
              <div className="max-w-full"> {/* Optional: Constrains the width of the entire resume section */}
                <label className="block text-sm font-bold text-gray-700 mb-1">Resume/CV *</label>
                {!selectedFile ? (
                  <label className="group cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                    {/* Reduced padding from p-6 to p-3 and set a max-width */}
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-3 text-center bg-gray-50 group-hover:border-red-500 group-hover:bg-red-50/30 transition-all duration-300">
                      <div className="flex flex-col items-center gap-1">
                        {/* Smaller icon container */}
                        <div className="p-1.5 bg-white rounded-full shadow-sm text-gray-400 group-hover:text-red-500 transition-colors">
                          <UploadCloud size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-700">Click to upload</p>
                          <p className="text-[10px] text-gray-400">PDF or Word (Max 5MB)</p>
                        </div>
                      </div>
                    </div>
                  </label>
                ) : (
                  /* Compact File Selected State */
                  <div className="flex items-center justify-between p-2 bg-red-50 border border-red-100 rounded-xl">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <FileText className="text-red-600 flex-shrink-0" size={16} />
                      <span className="text-xs font-medium text-gray-700 truncate">
                        {selectedFile.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 hover:bg-red-200 rounded-full text-red-600 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
                  required
                />
                <label htmlFor="consent" className="text-xs text-gray-600 leading-tight cursor-pointer">
                  By using this form you agree with the storage and handling of your data by this website. <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="w-full max-w-[200px] mx-auto bg-red-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-red-700 transition active:scale-95 flex items-center justify-center gap-2 mt-6"
              >
                SUBMIT <Send size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
      <footer className="w-full bg-black text-white/70 py-12 mt-20">
        <div className="w-full px-4 text-center">
          <p className="text-sm md:text-base tracking-wider">
            © 2022 Bynaric All Rights Reserved. [wps_visitor_counter]
          </p>
        </div>
      </footer>
    </div>

  );
};

export default JobDetailView;