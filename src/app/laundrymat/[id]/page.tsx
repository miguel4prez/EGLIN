"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Laundrymat } from "../../../../interface";
import { useCart } from "@/context/ShoppingCart";
import DeleteIcon from '@mui/icons-material/Delete';

const LaundrymatProfile: React.FC = () => {
  const [laundrymat, setLaundrymat] = useState<Laundrymat | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [clickedItems, setClickedItems] = useState<{ [key: number]: boolean }>({});
  const { getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetch(`http://localhost:3000/laundrymats/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setLaundrymat(data);
          setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!laundrymat) {
    return <div>No laundrymat found.</div>;
  }

  const currentHour = new Date().getHours();
  const isOpen = (laundrymat.business_hours.open === 0 && laundrymat.business_hours.close === 0) || 
    (currentHour >= laundrymat.business_hours.open && currentHour < laundrymat.business_hours.close);

  const handleButtonClick = (item: number) => {
    setClickedItems(prevState => ({
      ...prevState,
      [item]: !prevState[item]
    }));
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <div className="relative w-full h-64 mb-4">
        <img src={laundrymat.image} alt={laundrymat.name} className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">{laundrymat.name}</h1>
          <div className="flex items-center space-x-2 text-gray-700 mt-2">
            <span className="text-yellow-500 mr-2">{laundrymat.rating} ★</span>
            <span className="text-gray-600">({laundrymat.number_of_ratings} reviews)</span>
            <span>·</span>
            <span>{laundrymat.distance} miles away</span>
            <span>·</span>
            <span className={isOpen ? 'text-green-700' : 'text-red-600'}>{isOpen ? 'Open now' : 'Closed'}</span>
          </div>
        </div>
        <button
          onClick={() => history.back()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
        >
          Back to Results
        </button>
      </div>

      <div className="w-full h-24 mb-4 bg-gray-200 flex items-center justify-center">
        <span>Advertisement Banner</span>
      </div>

      <div className="flex">
        <div className="bg-white p-6 shadow rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Store Info</h2>
          <p className="text-gray-700">Address: {laundrymat.address}</p>
          <p className="text-gray-700">Distance: {laundrymat.distance} miles</p>
          <p className="text-gray-700">Return Estimate: {laundrymat.approx_duration} hours</p>
          <p className="text-gray-700">Services: {laundrymat.services.join(', ')}</p>
          <p className="text-gray-700">Contact: {laundrymat.contact_number}</p>
          <p className="text-gray-700">Hours: {laundrymat.working_hours}</p>
          <p className="text-gray-700">Price: {laundrymat.price_range}</p>
          <p className="text-gray-700">Delivery Available: {laundrymat.delivery_available ? 'Yes' : 'No'}</p>
          <p className="text-gray-700">Pick Up Available: {laundrymat.pick_up_available ? 'Yes' : 'No'}</p>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <div className="flex space-x-4 mb-4">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">Delivery</button>
            <button className="px-4 py-2 text-gray-600">Pickup</button>
          </div>

          <h2 className="text-xl font-bold mb-4">Featured Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-100 p-4 rounded-lg shadow">
                <img src={laundrymat.image} alt={`${laundrymat.name} Item ${item}`} className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="text-lg font-bold">{`${laundrymat.name} Item ${item}`}</h3>
                <p className="text-gray-700">$9.99</p>
                <div className="flex justify-end">
                  {getItemQuantity(item) === 0 ? (
                    <button onClick={() => { handleButtonClick(item); increaseQuantity(item); }} className="p-3 bg-sky-500 text-white text-sm rounded-3xl">Add To Cart</button>
                  ) : (
                    <div className="flex items-center justify-between w-5/12 my-2 mt-3">
                      {getItemQuantity(item) === 1 ? (
                        <button className="p-2 bg-red-500 text-white text-xs rounded-sm" onClick={() => removeFromCart(item)}>
                          <DeleteIcon sx={{ fontSize: 12, padding: 0 }} />
                        </button>
                      ) : (
                        <button onClick={() => decreaseQuantity(item)} className="p-2 bg-sky-500 text-white text-xs rounded-sm">-</button>
                      )}
                      <p>{getItemQuantity(item)}</p>
                      <button onClick={() => increaseQuantity(item)} className="p-2 bg-sky-500 text-white text-xs rounded-sm">+</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundrymatProfile;
