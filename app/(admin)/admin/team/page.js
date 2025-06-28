'use client';
import React, { useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      phone: "(555) 123-4567",
      profession: "Head Chef",
      image: "/chef-avatar.jpg",
      status: "active"
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.g@example.com",
      phone: "(555) 987-6543",
      profession: "Restaurant Manager",
      image: "/manager-avatar.jpg",
      status: "active"
    },
    {
      id: 3,
      name: "David Kim",
      email: "david.k@example.com",
      phone: "(555) 456-7890",
      profession: "Sous Chef",
      image: "/sous-chef-avatar.jpg",
      status: "active"
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      phone: "(555) 234-5678",
      profession: "Waiter",
      image: "/waiter-avatar.jpg",
      status: "active"
    },
    {
      id: 5,
      name: "James Wilson",
      email: "james.w@example.com",
      phone: "(555) 876-5432",
      profession: "Bartender",
      image: "/bartender-avatar.jpg",
      status: "inactive"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    image: '',
    status: 'active'
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.profession) {
      setUsers([...users, {
        id: users.length + 1,
        ...newUser
      }]);
      setNewUser({
        name: '',
        email: '',
        phone: '',
        profession: '',
        image: '',
        status: 'active'
      });
      setShowAddModal(false);
    }
  };

  // Delete a user
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  // Update a user
  const handleUpdateUser = () => {
    if (editingUser) {
      setUsers(users.map(user =>
        user.id === editingUser.id ? editingUser : user
      ));
      setEditingUser(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 sm:mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Team Members
            </h1>
            <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
              Manage your restaurant staff and their information
            </p>
          </div>
          <div className="mt-3 md:mt-0 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full px-3 py-2 text-sm sm:text-base bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg sm:rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add
            </button>
          </div>
        </div>

        {/* Stats Cards - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
          {[
            { title: 'Total Users', value: users.length, icon: '👥', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
            { title: 'Active Users', value: users.filter(u => u.status === 'active').length, icon: '✅', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
            { title: 'On Leave', value: 2, icon: '⏱️', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
            { title: 'Inactive', value: users.filter(u => u.status === 'inactive').length, icon: '⛔', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm p-3 sm:p-4 transition-all duration-300 hover:shadow-sm sm:hover:shadow-md"
            >
              <div className="flex items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${stat.color} flex items-center justify-center mr-3`}>
                  <span className="text-lg sm:text-xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Users Table - Desktop */}
        <div className="hidden md:block bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Team Member</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Contact</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Profession</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10">
                          <div className="bg-gray-200 dark:bg-gray-600 border-2 border-dashed rounded-full w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{user.phone}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{user.profession}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                        {user.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingUser(user)}
                          className="p-1.5 rounded-lg text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-gray-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="p-1.5 rounded-lg text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-gray-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Users Grid */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-2 md:hidden gap-3 sm:gap-4">
          {filteredUsers.map((user) => (
            <div key={user.id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm overflow-hidden transition-all duration-300 hover:shadow-sm sm:hover:shadow-md">
              <div className="p-3 sm:p-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 dark:bg-gray-600 border-2 border-dashed rounded-full w-10 h-10 sm:w-12 sm:h-12" />
                  <div className="ml-3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{user.name}</h3>
                    <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400">{user.profession}</p>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {user.email}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {user.phone}
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 text-[10px] sm:text-xs font-semibold rounded-full ${user.status === 'active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                      {user.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => setEditingUser(user)}
                    className="flex items-center text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="flex items-center text-xs sm:text-sm text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 sm:h-24 sm:w-24 mx-auto text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="mt-4 text-lg sm:text-xl font-medium text-gray-900 dark:text-white">No users found</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Try adjusting your search or add a new team member.
            </p>
            <div className="mt-4">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-3 py-2 text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg sm:rounded-xl shadow-sm transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add User
              </button>
            </div>
          </div>
        )}

        {/* Add User Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Add New User</h3>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      value={newUser.name}
                      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      value={newUser.phone}
                      onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profession</label>
                    <select
                      className="w-full px-3 py-2 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      value={newUser.profession}
                      onChange={(e) => setNewUser({ ...newUser, profession: e.target.value })}
                    >
                      <option value="">Select profession</option>
                      <option value="Chef">Chef</option>
                      <option value="Sous Chef">Sous Chef</option>
                      <option value="Restaurant Manager">Restaurant Manager</option>
                      <option value="Waiter">Waiter</option>
                      <option value="Bartender">Bartender</option>
                      <option value="Host/Hostess">Host/Hostess</option>
                      <option value="Dishwasher">Dishwasher</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          checked={newUser.status === 'active'}
                          onChange={() => setNewUser({ ...newUser, status: 'active' })}
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Active</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          checked={newUser.status === 'inactive'}
                          onChange={() => setNewUser({ ...newUser, status: 'inactive' })}
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Inactive</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-2 sm:space-x-3">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="px-3 py-2 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddUser}
                    className="px-3 py-2 text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-sm transition-all duration-300"
                  >
                    Add User
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit User Modal */}
        {editingUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Edit User</h3>
                  <button
                    onClick={() => setEditingUser(null)}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      value={editingUser.phone}
                      onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profession</label>
                    <select
                      className="w-full px-3 py-2 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      value={editingUser.profession}
                      onChange={(e) => setEditingUser({ ...editingUser, profession: e.target.value })}
                    >
                      <option value="Chef">Chef</option>
                      <option value="Sous Chef">Sous Chef</option>
                      <option value="Restaurant Manager">Restaurant Manager</option>
                      <option value="Waiter">Waiter</option>
                      <option value="Bartender">Bartender</option>
                      <option value="Host/Hostess">Host/Hostess</option>
                      <option value="Dishwasher">Dishwasher</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          checked={editingUser.status === 'active'}
                          onChange={() => setEditingUser({ ...editingUser, status: 'active' })}
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Active</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          checked={editingUser.status === 'inactive'}
                          onChange={() => setEditingUser({ ...editingUser, status: 'inactive' })}
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Inactive</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-2 sm:space-x-3">
                  <button
                    onClick={() => setEditingUser(null)}
                    className="px-3 py-2 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateUser}
                    className="px-3 py-2 text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-sm transition-all duration-300"
                  >
                    Update User
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;