// app/admin/contacts/page.js
import React from 'react';
import { FiMail, FiUser, FiMessageSquare, FiCalendar, FiSearch } from 'react-icons/fi';

export default function ContactPage() {
  // Sample contact data (in a real app, this would come from your API)
  const contacts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      subject: 'Reservation Inquiry',
      message: 'Hi, I would like to reserve a table for 4 on Friday at 7 PM. Do you have availability?',
      date: '2023-10-15 14:30',
      status: 'new'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      subject: 'Special Dietary Requirements',
      message: 'Hello, I have a severe nut allergy. Can your kitchen accommodate this? I want to visit with my family this weekend.',
      date: '2023-10-14 09:15',
      status: 'replied'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      email: 'emma.r@example.com',
      subject: 'Private Event Inquiry',
      message: "We're planning a wedding reception for 80 guests in November. Could you send me your private dining options and pricing?",
      date: '2023-10-13 16:45',
      status: 'pending'
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.w@example.com',
      subject: 'Compliment to the Chef',
      message: 'The sea bass I had last night was exceptional! Please pass along my compliments to the chef. It was perfectly cooked.',
      date: '2023-10-12 21:20',
      status: 'archived'
    },
    {
      id: 5,
      name: 'Olivia Thompson',
      email: 'olivia.t@example.com',
      subject: 'Job Application',
      message: 'I saw your posting for a sous chef position. I have 8 years of experience in fine dining restaurants. How can I apply?',
      date: '2023-10-11 11:05',
      status: 'replied'
    },
    {
      id: 6,
      name: 'David Kim',
      email: 'david.k@example.com',
      subject: 'Feedback on Service',
      message: 'Our server last night was very attentive and knowledgeable about your wine selection. Great experience overall!',
      date: '2023-10-10 19:30',
      status: 'archived'
    },
  ];

  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusStyles = {
      new: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      replied: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      archived: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    };

    const statusText = {
      new: 'New',
      replied: 'Replied',
      pending: 'Pending',
      archived: 'Archived',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {statusText[status]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <FiMail className="mr-2 sm:mr-3 text-indigo-600 dark:text-indigo-400 text-sm sm:text-base md:text-lg" />
            Customer Messages
          </h1>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
            Manage all customer inquiries and feedback
          </p>
        </div>

        {/* Stats Cards - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
          {[
            { title: 'Total', value: 42, icon: <FiMail />, color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
            { title: 'New', value: 8, icon: <FiUser />, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
            { title: 'Replied', value: 24, icon: <FiMessageSquare />, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
            { title: 'Pending', value: 10, icon: <FiCalendar />, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm p-2 sm:p-4 md:p-6 transition-all duration-300 hover:shadow-sm sm:hover:shadow-md"
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${stat.color} flex items-center justify-center mb-2 sm:mb-3 md:mb-4`}>
                <span className="text-sm sm:text-base md:text-lg">{stat.icon}</span>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">{stat.title}</h3>
              <p className="mt-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Controls and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-6">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search messages..."
                className="block w-full pl-7 sm:pl-10 pr-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex space-x-2 sm:space-x-3">
              <select className="bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Statuses</option>
                <option>New</option>
                <option>Replied</option>
                <option>Pending</option>
                <option>Archived</option>
              </select>

              <select className="bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Messages List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm overflow-hidden">
          {/* Desktop Table Header */}
          <div className="hidden sm:grid grid-cols-12 gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-gray-50 dark:bg-gray-700 text-[10px] sm:text-xs md:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-3">Name & Contact</div>
            <div className="col-span-5 sm:col-span-4">Message</div>
            <div className="col-span-3 sm:col-span-2">Subject</div>
            <div className="hidden sm:block sm:col-span-2">Date</div>
            <div className="col-span-3 sm:col-span-1 text-right">Status</div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="p-2 sm:p-3 md:p-4 lg:p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {/* Desktop View */}
                <div className="hidden sm:grid grid-cols-12 gap-2 sm:gap-3 md:gap-4 items-center">
                  <div className="col-span-4 sm:col-span-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                        <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-300 font-medium">
                          {contact.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-2 sm:ml-3 md:ml-4">
                        <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">{contact.name}</h3>
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">{contact.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-5 sm:col-span-4">
                    <p className="text-xs sm:text-sm md:text-base text-gray-900 dark:text-gray-200 line-clamp-2">{contact.message}</p>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">{contact.subject}</p>
                  </div>

                  <div className="hidden sm:block sm:col-span-2">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                      {new Date(contact.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
                      {new Date(contact.date).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  <div className="col-span-3 sm:col-span-1 flex justify-end">
                    <StatusBadge status={contact.status} />
                  </div>
                </div>

                {/* Mobile View */}
                <div className="sm:hidden">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                        <span className="text-xs text-indigo-600 dark:text-indigo-300 font-medium">
                          {contact.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{contact.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[100px]">{contact.email}</p>
                      </div>
                    </div>
                    <StatusBadge status={contact.status} />
                  </div>

                  <div className="mt-2 pl-11">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">{contact.subject}</h4>
                    <p className="mt-1 text-xs text-gray-700 dark:text-gray-300 line-clamp-2">{contact.message}</p>

                    <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <FiCalendar className="mr-1 h-3 w-3 flex-shrink-0" />
                      <span>
                        {new Date(contact.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="mx-1">•</span>
                      <span>
                        {new Date(contact.date).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="bg-white dark:bg-gray-800 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
              Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
              <span className="font-medium">42</span> results
            </div>
            <div className="flex space-x-1 sm:space-x-2">
              <button className="relative inline-flex items-center px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                Prev
              </button>
              <button className="relative inline-flex items-center px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}