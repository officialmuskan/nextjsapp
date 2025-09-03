import { MapPin, Phone, Mail } from 'lucide-react';

export default function SchoolCard({ school }) {
//   const imageUrl = school.image && school.image !== 'default-school.jpg' 
//     ? `/schoolImages/${school.image}` 
//     : 'https://via.placeholder.com/300x200?text=School+Image';

  return (
    <div className="bg-zinc-800 text-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        // src={imageUrl}
        alt={school.name}
        className="w-full h-48 object-cover"
        // onError={(e) => {
        //   e.target.src = 'https://via.placeholder.com/300x200?text=School+Image';
        // }
        />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white 800 mb-2 line-clamp-2">
          {school.name}
        </h3>
        <div className="flex items-start mb-2">
          <MapPin className="w-4 h-4 text-white 500 mt-1 mr-2 flex-shrink-0" />
          <p className="text-sm text-white 600 line-clamp-2">
            {school.address}, {school.city}
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {school.city}
          </span>
          <div className="flex space-x-2">
            <Phone className="w-4 h-4 text-white 400" title={school.contact} />
            <Mail className="w-4 h-4 text-white 400" title={school.email_id} />
          </div>
        </div>
      </div>
    </div>
  );
}