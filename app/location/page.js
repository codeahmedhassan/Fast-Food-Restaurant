// app/location/page.jsx
'use client';
import React, { useState, useEffect } from 'react';

const LocationPage = () => {
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [activeBranch, setActiveBranch] = useState(null);

  // Pakistan cities and branches data
  const cities = [
    'All', 'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 
    'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 
    'Gujranwala', 'Hyderabad', 'Sargodha', 'Abbottabad'
  ];

  const branches = [
    {
      id: 1,
      name: "Karachi Downtown",
      city: "Karachi",
      location: "Main Clifton Road, Block 3",
      hours: "11:00 AM - 11:00 PM",
      phone: "(021) 123-4567",
      capacity: 120,
      image: "/branch-karachi.jpg"
    },
    {
      id: 2,
      name: "Lahore Food Court",
      city: "Lahore",
      location: "Liberty Market, Gulberg",
      hours: "10:00 AM - 10:00 PM",
      phone: "(042) 234-5678",
      capacity: 90,
      image: "/branch-lahore.jpg"
    },
    {
      id: 3,
      name: "Islamabad Central",
      city: "Islamabad",
      location: "Blue Area, Sector F-7",
      hours: "11:00 AM - 11:30 PM",
      phone: "(051) 345-6789",
      capacity: 110,
      image: "/branch-islamabad.jpg"
    },
    {
      id: 4,
      name: "Peshawar Heritage",
      city: "Peshawar",
      location: "University Road",
      hours: "10:30 AM - 10:00 PM",
      phone: "(091) 456-7890",
      capacity: 80,
      image: "/branch-peshawar.jpg"
    },
    {
      id: 5,
      name: "Quetta Mountain View",
      city: "Quetta",
      location: "Jinnah Road",
      hours: "11:00 AM - 10:00 PM",
      phone: "(081) 567-8901",
      capacity: 70,
      image: "/branch-quetta.jpg"
    },
    {
      id: 6,
      name: "Karachi Seaside",
      city: "Karachi",
      location: "Sea View, Clifton",
      hours: "11:00 AM - 11:00 PM",
      phone: "(021) 678-9012",
      capacity: 150,
      image: "/branch-seaview.jpg"
    },
    {
      id: 7,
      name: "Lahore Fort Branch",
      city: "Lahore",
      location: "Near Lahore Fort",
      hours: "10:00 AM - 10:00 PM",
      phone: "(042) 789-0123",
      capacity: 100,
      image: "/branch-fort.jpg"
    },
    {
      id: 8,
      name: "Islamabad Hillside",
      city: "Islamabad",
      location: "F-6 Markaz",
      hours: "11:00 AM - 11:30 PM",
      phone: "(051) 890-1234",
      capacity: 95,
      image: "/branch-hillside.jpg"
    }
  ];

  // Filter branches based on city and search query
  useEffect(() => {
    let result = branches;
    
    if (selectedCity !== 'All') {
      result = result.filter(branch => branch.city === selectedCity);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(branch => 
        branch.name.toLowerCase().includes(query) || 
        branch.location.toLowerCase().includes(query)
      );
    }
    
    setFilteredBranches(result);
    if (result.length > 0 && !activeBranch) {
      setActiveBranch(result[0]);
    }
  }, [selectedCity, searchQuery]);


  // Handle branch click to show details
  const handleBranchClick = (branch) => {
    setActiveBranch(branch);
    // Scroll to details section on mobile
    if (window.innerWidth < 1024) {
      document.getElementById('branch-details').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white bg-gradient-to-br from-amber-50 to-white text-gray-900`}>
      
      {/* Hero Section */}
      <section className={`py-16 md:py-24 px-4 md:px-8 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 bg-gradient-to-r from-red-700 to-amber-600 `}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 dark:text-amber-300 text-white `}>
            Find Your Nearest Branch
          </h1>
          <p className={`text-xl max-w-2xl mx-auto dark:text-gray-300 text-amber-100 `}>
            Discover our restaurant locations across Pakistan. Select a city or search for your nearest branch.
          </p>
        </div>
      </section>
      
      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className={`p-6 rounded-2xl shadow-xl transition-all dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border dark:border-gray-700 bg-gradient-to-br from-white to-amber-50 border border-amber-100`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* City Selector */}
            <div>
              <label htmlFor="city-select" className={`block text-sm font-medium mb-2 dark:text-amber-300' : 'text-red-800'}`}>
                Select City
              </label>
              <div className="relative">
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className={`w-full p-4 rounded-xl border appearance-none dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-amber-50 border-amber-200 text-gray-900 `}
                >
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className={`w-5 h-5 dark:text-amber-400 text-red-700 `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Branch Search */}
            <div>
              <label htmlFor="branch-search" className={`block text-sm font-medium mb-2 dark:text-amber-300 text-red-800 `}>
                Search Branch
              </label>
              <div className="relative">
                <input
                  id="branch-search"
                  type="text"
                  placeholder="Enter branch name or location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-amber-50 border-amber-200 text-gray-900`}
                />
                <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full dark:bg-amber-900 bg-red-100 `}>
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Branch Cards */}
          <div className="w-full lg:w-7/12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className={`text-2xl font-bold dark:text-amber-400 text-red-800 `}>
                Our Branches
              </h2>
              <p className={`dark:text-gray-400 text-amber-700 `}>
                {filteredBranches.length} {filteredBranches.length === 1 ? 'branch' : 'branches'} found
              </p>
            </div>
            
            {filteredBranches.length === 0 ? (
              <div className={`text-center py-12 rounded-xl dark:bg-gray-800 bg-white border dark:border-gray-700 border-amber-100 `}>
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">No branches found</h3>
                <p className={`dark:text-gray-400 text-gray-600`}>
                  Try selecting a different city or changing your search query.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredBranches.map(branch => (
                  <div 
                    key={branch.id} 
                    onClick={() => handleBranchClick(branch)}
                    className={`rounded-xl overflow-hidden shadow-lg transform transition-all cursor-pointer border-2 ${
                      activeBranch?.id === branch.id 
                        ? ('dark:border-amber-500 border-red-600') 
                        : ('dark:border-gray-700 dark:hover:border-amber-500 border-amber-100 hover:border-red-600')
                    }`}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Branch Image */}
                      <div className={`md:w-2/5 h-48 md:h-auto relative overflow-hidden dark:bg-gray-700 bg-amber-100 `}>
                        <div className="bg-gradient-to-r from-transparent via-transparent to-black/30 absolute inset-0"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <span className={`text-sm font-medium px-3 py-1 rounded-full dark:bg-amber-900 dark:text-amber-300 bg-red-700 text-white `}>
                            {branch.city}
                          </span>
                        </div>
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">🏢</div>
                            <p className={`dark:text-gray-400 text-amber-700 `}>Branch Image</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Branch Info */}
                      <div className={`md:w-3/5 p-6 dark:bg-gray-800 bg-white `}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
                            <div className="flex items-center mb-1">
                              <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              <span>{branch.location}</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <span>{branch.hours}</span>
                            </div>
                          </div>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center dark:bg-amber-900 dark:text-amber-400 bg-amber-200 text-amber-800 `}>
                            <span>{branch.capacity}</span>
                          </div>
                        </div>
                        <button 
                          className={`mt-4 w-full py-3 px-4 rounded-xl font-medium transition-colors dark:bg-amber-700 dark:hover:bg-amber-600 bg-red-600 hover:bg-red-700 text-white`}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Map and Branch Details */}
          <div className="w-full lg:w-5/12">
            {/* Pakistan Map */}
            <div className={`sticky top-4 rounded-2xl overflow-hidden shadow-xl mb-8 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border dark:border-gray-700 bg-gradient-to-br from-white to-amber-50 border border-amber-100 `}>
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-4 dark:text-amber-400 text-red-800 `}>
                  Our Locations in Pakistan
                </h2>
                <div className="relative">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-dashed border-amber-300 rounded-xl w-full aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">🇵🇰</div>
                      <p className="text-amber-800 font-medium">Interactive Pakistan Map</p>
                      <p className="text-amber-700 text-sm mt-2">Branches highlighted with location markers</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className={`p-2 rounded-full dark:bg-amber-900 dark:text-amber-300 bg-amber-200 text-amber-800 `}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className={`text-lg font-semibold mb-3 dark:text-amber-300 text-red-700 `}>
                    Cities We Serve
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cities.filter(city => city !== 'All').map(city => (
                      <span 
                        key={city} 
                        onClick={() => setSelectedCity(city)}
                        className={`cursor-pointer px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedCity === city 
                            ? ('dark:bg-amber-500 dark:text-gray-900 dark:font-bold bg-red-600 text-white font-bold') 
                            : ('dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 bg-amber-100 text-amber-800 hover:bg-amber-200')
                        }`}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Branch Details */}
            {activeBranch && (
              <div 
                id="branch-details"
                className={`sticky top-4 rounded-2xl overflow-hidden shadow-xl dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border dark:border-gray-700 bg-gradient-to-br from-white to-amber-50 border border-amber-100 `}
              >
                <div className="p-6">
                  <h2 className={`text-2xl font-bold mb-4 dark:text-amber-400 text-red-800 `}>
                    {activeBranch.name}
                  </h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl mr-4 dark:bg-amber-900 bg-amber-100 `}>
                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p>{activeBranch.location}, {activeBranch.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl mr-4 dark:bg-amber-900 bg-amber-100 `}>
                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Opening Hours</h3>
                        <p>{activeBranch.hours}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl mr-4 dark:bg-amber-900 bg-amber-100 `}>
                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Contact</h3>
                        <p>{activeBranch.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className={`p-3 rounded-xl mr-4 dark:bg-amber-900 bg-amber-100 `}>
                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Capacity</h3>
                        <p>{activeBranch.capacity} guests</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 px-4 rounded-xl font-medium transition-colors dark:bg-gradient-to-r dark:from-amber-700 dark:to-amber-600 dark:hover:from-amber-600 dark:hover:to-amber-500 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white`}>
                    Get Directions
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button 
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-10 dark:bg-gradient-to-r dark:from-amber-700 dark:to-amber-600 bg-gradient-to-r from-red-700 to-red-600  text-white`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </button>
    </div>
  );
};

export default LocationPage;