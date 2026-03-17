'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Fiona Miao Consulting
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:flex gap-6`}>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
            <Link href="/appointments" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
