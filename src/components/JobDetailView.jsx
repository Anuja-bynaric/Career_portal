import React from 'react';
import { MapPin, Briefcase, Clock, ChevronLeft, Send } from 'lucide-react';

const JobDetailView = ({ job, onBack }) => {
  if (!job) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center text-red-600 font-bold mb-8 hover:gap-2 transition-all"
      >
        <ChevronLeft size={20} /> Back to Openings
      </button>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* LEFT: JOB INFO */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600 font-medium">
              <span className="flex items-center gap-1"><MapPin size={18} /> {job.location}</span>
              <span className="flex items-center gap-1"><Briefcase size={18} /> {job.exp}</span>
              <span className="flex items-center gap-1"><Clock size={18} /> {job.type}</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-800">Job Description</h3>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
            
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
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Apply for this position</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name *</label>
                <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none" placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address *</label>
                <input type="email" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none" placeholder="+91 0000000000" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Resume/CV *</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-red-500 transition-colors cursor-pointer">
                  <p className="text-xs text-gray-500">Click to upload PDF or Word Doc</p>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-red-700 transition active:scale-95 flex items-center justify-center gap-2"
              >
                SUBMIT APPLICATION <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailView;