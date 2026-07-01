import React from 'react';

const Item= ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-60 sm:w-96">
      <img 
        src={item.image_url} 
        alt={item.name} 
        className="w-full h-48 object-contain rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-700 mb-2">{item.name}</h2>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Category:</span> {item.category}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Brand:</span> {item.brand}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Price:</span> ${item.price}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Quantity:</span> {item.quantity}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Status:</span> {item.status}
        </p>
        {/* <p className="text-gray-700 mb-4">
          <span className="font-semibold">Godown ID:</span> {item.godown_id}
        </p> */}
        <div className="text-gray-700 mb-4">
          <span className="font-semibold">Attributes:</span>
          {item.attributes ? (
            <ul className="list-disc pl-5 mt-2">
              {Object.entries(item.attributes).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium">{key}:</span> {value}
                </li>
              ))}
            </ul>
          ) : (
            <p>No attributes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
