import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">User Profile</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700">This is the user profile page.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;