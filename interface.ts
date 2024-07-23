export interface Laundrymat {
  id: number;
  name: string;
  image: string;
  address: string;
  contact_number: string;
  rating: number;
  working_hours: string;
  number_of_ratings: number;
  distance: number;
  services: string[];
  price_range: string;
  delivery_available: boolean;
  pick_up_available: boolean;
  approx_duration: number;
  business_hours: {
    open: number;
    close: number;
  };
}

export interface User {
  id: number;
  name: string;
  image: string;
  address: string;
  state: string;
  city: string;
  country: string;
  orders: string[];
}