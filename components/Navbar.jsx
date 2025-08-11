'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bell, Settings, MapPin, Search, Briefcase, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [salaryRange, setSalaryRange] = useState([1200, 20000]);

  return (
    <nav className="bg-black text-white w-full shadow-md">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo + Menu */}
        <div className="flex items-center space-x-10">
          <Link href="/" className="flex items-center space-x-2 font-bold text-lg">
            <span className="bg-white w-5 h-5 rounded-full block"></span>
            <span>LuckyJob</span>
          </Link>
          <div className="hidden md:flex space-x-6 text-sm">
            <Link href="#">Find job</Link>
            <Link href="#">Messages</Link>
            <Link href="#">Hiring</Link>
            <Link href="#">Community</Link>
            <Link href="#">FAQ</Link>
          </div>
        </div>

        {/* Right: Location + Icons */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="hidden md:flex items-center text-gray-300 space-x-1">
            <MapPin size={16} />
            <span>New York, NY</span>
          </div>
          <Image
            src="/avatar.jpg"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <Settings className="hover:text-gray-400 cursor-pointer" />
          <Bell className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Row: Filters */}
      <div className="bg-black border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          
          {/* Job Title */}
          <div className="flex items-center space-x-2">
            <Search size={18} />
            <select className="bg-transparent border-none text-white focus:outline-none">
              <option>Designer</option>
              <option>Developer</option>
              <option>Manager</option>
            </select>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <MapPin size={18} />
            <select className="bg-transparent border-none text-white focus:outline-none">
              <option>Work location</option>
              <option>Remote</option>
              <option>On-site</option>
            </select>
          </div>

          {/* Experience */}
          <div className="flex items-center space-x-2">
            <Briefcase size={18} />
            <select className="bg-transparent border-none text-white focus:outline-none">
              <option>Experience</option>
              <option>Fresher</option>
              <option>1-3 years</option>
              <option>3+ years</option>
            </select>
          </div>

          {/* Salary */}
          <div className="flex items-center space-x-2">
            <DollarSign size={18} />
            <select className="bg-transparent border-none text-white focus:outline-none">
              <option>Per month</option>
              <option>Per year</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="flex flex-col text-sm">
            <span>Salary range: ${salaryRange[0]} - ${salaryRange[1]}</span>
            <input
              type="range"
              min="0"
              max="50000"
              value={salaryRange[0]}
              onChange={(e) => setSalaryRange([+e.target.value, salaryRange[1]])}
              className="accent-blue-500"
            />
            <input
              type="range"
              min="0"
              max="50000"
              value={salaryRange[1]}
              onChange={(e) => setSalaryRange([salaryRange[0], +e.target.value])}
              className="accent-blue-500"
            />
          </div>

        </div>
      </div>
    </nav>
  );
}
