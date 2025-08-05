'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bell, Settings, MapPin } from 'lucide-react';

export default function navbar() {
  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
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
          <Settings className="hover:text-gray-400" />
          <Bell className="hover:text-gray-400" />
        </div>
      </div>
    </nav>
  );
}
