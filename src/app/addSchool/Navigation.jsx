"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { School, Plus, Grid, Home } from 'lucide-react';

export default function Navigation() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-gray-800 text-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            
            <span className="text-xl font-bold"></span>
          </Link>
          
          <div className="flex space-x-4">
            <Link href="/">
              <span className={`px-4 py-2 rounded-md transition flex items-center
                `}>
                
                Home
              </span>
            </Link>
            
            <Link href="/showSchools">
              <span className={`px-4 py-2 rounded-md transition flex items-center`}>
                View Schools
              </span>
            </Link>
            
            <Link href="/addSchool">
              <span className={`px-4 py-2 rounded-md transition flex items-center`  }>
                <Plus className="w-4 h-4 mr-2" />
                Add School
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}