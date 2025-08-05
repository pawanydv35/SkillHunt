// components/Navbar.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bell, Settings, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function navbar() {
  return (
    <nav className="bg-black text-white px-6 py-3 w-full shadow-md flex items-center justify-between">
      {/* Left: Logo + Menu */}
      <div className="flex items-center space-x-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-white font-semibold text-lg">
          <span className="bg-white rounded-full w-5 h-5 block"></span> {/* Placeholder for logo icon */}
          <span>LuckyJob</span>
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="#" className="hover:text-gray-300 border-b-2 border-white pb-1">Find job</Link>
          <Link href="#" className="hover:text-gray-300">Messages</Link>
          <Link href="#" className="hover:text-gray-300">Hiring</Link>
          <Link href="#" className="hover:text-gray-300">Community</Link>
          <Link href="#" className="hover:text-gray-300">FAQ</Link>
        </div>
      </div>

      {/* Right: Location + Icons */}
      <div className="flex items-center space-x-4">
        {/* Location */}
        <div className="hidden md:flex items-center text-sm text-gray-300 space-x-1">
          <MapPin size={16} />
          <span>New York, NY</span>
        </div>

        {/* Profile */}
        <Image
          src="/avatar.jpg" // Put your avatar image in public/avatar.jpg
          alt="User"
          width={32}
          height={32}
          className="rounded-full border border-gray-600"
        />

        {/* Settings Icon */}
        <Settings className="w-5 h-5 hover:text-gray-400 cursor-pointer" />

        {/* Notification Icon */}
        <Bell className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
      </div>
    </nav>
  );
}
