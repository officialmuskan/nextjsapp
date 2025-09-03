import Link from 'next/link';
import { School, Plus, Grid } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
       <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/addSchool">
            <div className="bg-zinc-800 text-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <h2 className="text-2xl font-bold mb-3">Add School</h2>
              <p>
                Add new schools to the database with complete information and images
              </p>
            </div>
          </Link>

          <Link href="/showSchools">
            <div className="bg-zinc-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              
              <h2 className="text-2xl font-bold  text-white mb-3">View Schools</h2>
              <p>
                Browse through all schools in an organized, easy-to-navigate format
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}