import Link from 'next/link';
import { School, Plus, Grid } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <School className="w-20 h-20 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            School Management System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage school information efficiently with our easy-to-use platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/addSchool">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <Plus className="w-12 h-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Add School</h2>
              <p className="text-gray-600">
                Add new schools to the database with complete information and images
              </p>
            </div>
          </Link>

          <Link href="/showSchools">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <Grid className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-3">View Schools</h2>
              <p className="text-gray-600">
                Browse through all schools in an organized, easy-to-navigate format
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}