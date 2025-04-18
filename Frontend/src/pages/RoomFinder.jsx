import React from "react";

const RoomFinder = () => { return ( <div className="flex flex-col md:flex-row p-6 bg-gray-50 min-h-screen"> {/* Search & Filters Section */} <div className="md:w-1/3 w-full p-4 bg-white rounded-2xl shadow-lg"> <h2 className="text-2xl font-bold mb-4">Search & Filters</h2> <input className="w-full p-2 mb-4 border rounded" placeholder="Area, locality, city..." />

<div className="mb-4">
      <h3 className="font-semibold mb-2">Property Type</h3>
      <div className="flex gap-2 flex-wrap">
        {['PG', 'Hostel', 'Apartment', 'Shared', 'Independent'].map(type => (
          <button key={type} className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">{type}</button>
        ))}
      </div>
    </div>

    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price Range (₹)</h3>
      <input type="range" min="5000" max="20000" className="w-full" />
    </div>

    <div className="mb-4">
      <h3 className="font-semibold mb-2">Distance from Campus</h3>
      <select className="w-full p-2 border rounded">
        <option>Any distance</option>
        <option>Within 1 km</option>
        <option>1-5 km</option>
        <option>5-10 km</option>
      </select>
    </div>

    <div className="mb-4">
      <h3 className="font-semibold mb-2">Bedrooms</h3>
      <select className="w-full p-2 border rounded">
        <option>Any bedrooms</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>

    <div className="mb-4">
      <h3 className="font-semibold mb-2">Amenities</h3>
      <div className="flex gap-2 flex-wrap">
        {['Wi-Fi', 'AC', 'Food', 'Gym', 'Parking'].map(amenity => (
          <button key={amenity} className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">{amenity}</button>
        ))}
      </div>
    </div>

    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-full">Apply Filters</button>
  </div>

  {/* Property Listings Section */}
  <div className="md:w-2/3 w-full p-4 space-y-4">
    {[{
      title: 'Modern Studio Apartment',
      location: 'Koramangala, Bangalore',
      distance: '1.2 km',
      type: 'Studio',
      beds: 1,
      baths: 1,
      amenities: ['Wi-Fi', 'AC', 'Gym', 'Parking'],
      price: '₹15,000 / month',
      availability: 'Immediate',
      rating: 4.5
    },
    {
      title: 'Shared 3BHK Apartment',
      location: 'HSR Layout, Bangalore',
      distance: '3.5 km',
      type: 'Shared',
      beds: 3,
      baths: 2,
      amenities: ['Wi-Fi', 'AC', 'Washing Machine', 'Power Backup'],
      price: '₹8,000 / month',
      availability: 'From 1st July',
      rating: 4.2
    },
    {
      title: 'Premium PG with Food',
      location: 'Indiranagar, Bangalore',
      distance: '5 km',
      type: 'PG',
      beds: 1,
      baths: 1,
      amenities: ['Wi-Fi', 'AC', 'Food', 'Housekeeping'],
      price: '₹12,000 / month',
      availability: 'Immediate',
      rating: 4.5
    },
    {
      title: '2BHK Independent House',
      location: 'Jayanagar, Bangalore',
      distance: '7 km',
      type: 'Independent',
      beds: 2,
      baths: 2,
      amenities: ['Wi-Fi', 'AC', 'Garden', 'Parking'],
      price: '₹18,000 / month',
      availability: 'From 15th July',
      rating: 4.7
    },
    {
      title: 'Hostel Near Campus',
      location: 'Mathikere, Bangalore',
      distance: '0.5 km',
      type: 'Hostel',
      beds: 1,
      baths: 1,
      amenities: ['Wi-Fi', 'Food', 'Study Room', 'Parking'],
      price: '₹6,000 / month',
      availability: 'Immediate',
      rating: 3.8
    }].map((property, index) => (
      <div key={index} className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{property.title}</h3>
          <span className="text-yellow-500">★ {property.rating}</span>
        </div>
        <p className="text-gray-600">{property.location} ({property.distance} from campus)</p>
        <div className="text-sm text-gray-500 my-2">{property.type} • {property.beds} Bed • {property.baths} Bath</div>
        <div className="flex gap-2 flex-wrap text-xs text-gray-700 mb-2">
          {property.amenities.map(amenity => <span key={amenity} className="bg-gray-100 px-2 py-1 rounded-full">{amenity}</span>)}
        </div>
        <div className="font-bold text-lg mb-1">{property.price}</div>
        <div className="text-sm text-gray-500 mb-2">Available: {property.availability}</div>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full">View Details</button>
      </div>
    ))}
  </div>
</div>

); };

export default RoomFinder;