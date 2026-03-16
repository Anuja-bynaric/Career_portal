import React from 'react';
import { Target, Users, Zap, CheckCircle } from 'lucide-react';

const CompanyInfo = () => {
  const highlights = [
    {
      icon: <Target className="text-red-600" size={28} />,
      title: "Our Vision",
      desc: "Our goal is to make the recruitment process AI-driven through continuous innovation."
    },
    {
      icon: <Users className="text-red-600" size={28} />,
      title: "Great Culture",
      desc: "We provide a supportive and flexible work environment designed to help talent flourish."
    },
    {
      icon: <Zap className="text-red-600" size={28} />,
      title: "Fast Hiring",
      desc: "Our hiring process is transparent and efficient. Everything from application to feedback moves quickly."
    }
  ];

  return (
    <section className="bg-white py-7 px-8 border-b border-gray-100">
      <div className="max-w-6xl ">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div>
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6 ">
              Why Work at <span className="text-red-600">Bynaric?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are a young and dynamic team where every individual idea is valued. 
              If you have the desire to innovate in technology, Bynaric is the right place for you.
            </p>
            
            <div className="space-y-4">
              {[ 'Latest Tech Stack', 'Career Growth', 'AI-Driven Innovation'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-slate-700 font-semibold">
                  <CheckCircle size={20} className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="grid gap-6">
            {highlights.map((h, index) => (
              <div key={index} className="flex p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-red-200 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="mr-5 bg-white p-3 rounded-xl shadow-sm">{h.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{h.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;