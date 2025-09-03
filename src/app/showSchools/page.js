'use client'
import { useState, useEffect } from 'react';
// import Navigation from '../app/addSchool/Navigation';
import SchoolCard from '../../components/SchoolCard'
import { School } from 'lucide-react';

export default function ShowSchools({ initialSchools }) {
  const [schools, setSchools] = useState(initialSchools || []);
  const [loading, setLoading] = useState(!initialSchools);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialSchools) {
      fetchSchools();
    }
  }, [initialSchools]);

  const fetchSchools = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/schools');
      if (!response.ok) {
        throw new Error('Failed to fetch schools');
      }
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      setError('Failed to load schools');
      console.error('Error fetching schools:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      
      
      {/* Header */}
      <div className="bg-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              
  
            </div>
            <div className="text-sm text-gray-600">
              {schools.length} schools found
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-black max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading schools...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={fetchSchools}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : schools.length === 0 ? (
          <div className="bg-black text-center py-12">
            <School className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">No schools found</h3>
            <p className="text-gray-500">Add some schools to see them here.</p>
          </div>
        ) : (
          <div className="bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {schools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

