"use client"; 
import { useState, useEffect, FormEvent } from "react";
import { Laundrymat } from "../../../interface";
import { useRouter, useSearchParams } from "next/navigation";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import Link from "next/link";

interface LaundrymatListProps {
  filter: 'all' | 'delivery' | 'pickup';
  priceFilter: string | null;
}

const LaundrymatList: React.FC<LaundrymatListProps> = ({ filter, priceFilter }) => {
  const [laundrymats, setLaundrymats] = useState<Laundrymat[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    fetch('http://localhost:3000/laundrymats')
    .then(res => res.json())
    .then(data => {
      setLaundrymats(data)
      setLoading(true)
    })
  }, [])


  const filteredLaundrymats = laundrymats.filter(laundrymat => {
    if (filter === 'delivery' && !laundrymat.delivery_available) return false;
    if (filter === 'pickup' && !laundrymat.pick_up_available) return false;
    if (priceFilter && laundrymat.price_range !== priceFilter) return false;
    return true;
  });

  

  if (loading === false){
    return <div>Loading...</div>
  } else {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">{filteredLaundrymats.length} Laundrymats</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredLaundrymats.map((laundrymat, index) => (
            <Link href={`/laundrymat/${laundrymat.id}`} key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={laundrymat.image} alt={laundrymat.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-blue-600">{laundrymat.name}</h2>
              {/* <p className="text-gray-700">{laundrymat.address}</p> */}
              <p className="text-gray-700">Rating: {laundrymat.rating} ({laundrymat.number_of_ratings} reviews)</p>
              <p className="text-gray-700">Distance: {laundrymat.distance} miles</p>
              <p className="text-gray-700">Return Estimate: {laundrymat.approx_duration} hours</p>
              {/* <p className="text-gray-700">Services: {laundrymat.services.join(', ')}</p> */}
              {/* <p className="text-gray-700">Contact: {laundrymat.contact_number}</p> */}
              {/* <p className="text-gray-700">Hours: {laundrymat.working_hours}</p> */}
              <p className="text-gray-700">Price: {laundrymat.price_range}</p>
              <p className="text-gray-700">Delivery Available: {laundrymat.delivery_available ? 'Yes' : 'No'}</p>
              <p className="text-gray-700">Pick Up Available: {laundrymat.pick_up_available ? 'Yes' : 'No'}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default function Results() {
  const [newAddress, setNewAddress] = useState<string>('')
  const searchParams = useSearchParams();
  const address = searchParams.get('address')
  const [selectedOption, setSelectedOption] = useState<'all' | 'delivery' | 'pickup'>('all');
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const router = useRouter();

  
  const handleClick = (option: 'all' | 'delivery' | 'pickup') => {
    setSelectedOption(option);
  };

  const handlePriceClick = (price: string | null) => {
    setSelectedPrice(price);
  };

  const handleAddressSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newAddress) {
      router.push(`/results?address=${encodeURIComponent(newAddress)}`);
    }
  };

  const resetBtn = () => {
    setSelectedOption('all')
    setSelectedPrice(null)
  }

  return (
    <>
     <div className='text-black flex justify-center items-center gap-5 m-5'>
        <button className="p-2 rounded-lg text-black bg-gray-300">Full Service</button>
        <button className="p-2 rounded-lg text-black bg-gray-300">Dry Cleaning</button>
        <button className="p-2 rounded-lg text-black bg-gray-300">Stain Removal</button>
        <button className="p-2 rounded-lg text-black bg-gray-300">Tailor Services</button>
        <button className="p-2 rounded-lg text-black bg-gray-300">Folding Services</button>
      </div>
      <div className="pt-16 text-black flex justify-center items-center gap-5">
      <p className="font-semibold">Search Results for: <span className="font-normal italic">{address}</span></p> 
      <div>|</div>
        <div className="flex gap-3" >
          <button
            className={`p-2 rounded-lg ${selectedOption === 'all' ? 'text-white bg-blue-600' : 'text-black bg-gray-300'}`}
            onClick={() => handleClick('all')}
          >
            All
          </button>
          <button
              className={`p-2 rounded-lg ${selectedOption === 'delivery' ? 'text-white bg-blue-600' : 'text-black bg-gray-300'}`}
              onClick={() => handleClick('delivery')}
            >
            Delivery
          </button>
          <button
            className={`p-2 rounded-lg ${selectedOption === 'pickup' ? 'text-white bg-blue-600' : 'text-black bg-gray-300'}`}
            onClick={() => handleClick('pickup')}
          >
            Pick Up
          </button>
        </div>
        <div>|</div>
        <div className="flex gap-3">
          <button
            className={`p-2 rounded-lg ${selectedPrice === null ? 'text-white bg-blue-600' : 'text-black bg-gray-300'}`}
            onClick={() => handlePriceClick(null)}
          >
            All
          </button>
          <button
            className={`p-2 rounded-lg ${selectedPrice === '$' ? 'text-white bg-blue-600' : 'text-black bg-gray-300'}`}
            onClick={() => handlePriceClick('$')}
          >
            $
          </button>
          <button
            className={`p-2 rounded-lg ${selectedPrice === '$$' ? 'text-white bg-blue-600' : 'text-black bg-gray-300'}`}
            onClick={() => handlePriceClick('$$')}
          >
            $$
          </button>
          <button
            className={`p-2 rounded-lg ${selectedPrice === '$$$' ? 'text-white bg-blue-600' : 'text-black bg-gray-300'}`}
            onClick={() => handlePriceClick('$$$')}
          >
            $$$
          </button>
        </div>
        <div>|</div>
        <button className="text-black bg-gray-300 rounded-lg p-2" onClick={resetBtn}>Reset</button>
        <div>|</div>
        {/* <button className="text-white bg-blue-600 rounded-lg p-2">View Cart <ShoppingCartIcon /> </button> */}
      </div>
      
      <Paper
        component="form"
        onSubmit={handleAddressSubmit}
        sx={{ p: '2px 4px', display: 'flex', margin: '25px auto', alignItems: 'center', width: '25%' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, backgroundColor: 'white', color: 'black'}}
          placeholder={address ? address : 'Enter delivery address'}
          value={newAddress}
          onChange={event => setNewAddress(event.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      
      <LaundrymatList filter={selectedOption} priceFilter={selectedPrice} />
    </>
  )
}