import Navigation from '../app/addSchool/Navigation';
import AddSchoolForm from '../app/addSchool/AddSchoolForm';

export default function AddSchool() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-6 px-4">
        <AddSchoolForm />
      </div>
    </div>
  );
}