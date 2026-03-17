import React from 'react';

const JobCard = ({ location, title, exp, type, description, onApply }) => {
  return (
    <div className="bg-white p-5  border border-gray-100 shadow-sm hover:shadow-xl transition-all group border-l-4 border-l-transparent hover:border-l-red-600 mb-6">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-semibold text-red-600 uppercase tracking-widest">{location}</span>
          <h3 className="text-2xl font-semibold mt-1 group-hover:text-red-600 transition">{title}</h3>
          <div className="flex gap-4 mt-4">
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{exp}</span>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{type}</span>
          </div>
        </div>
        <button
          onClick={onApply}
          className="bg-slate-100 group-hover:bg-red-600 group-hover:text-white px-6 py-3 rounded-xl transition font-bold"
        >
          Apply Now
        </button>
      </div>
      <p className="mt-6 text-gray-600 line-clamp-2 leading-relaxed ">
        "{description}"
      </p>
    </div>
  );
};


export default JobCard;