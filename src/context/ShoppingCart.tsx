'use client'

import { useContext, createContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps= {
  children: ReactNode
}

type CartItem ={ 
  id: number,
  quantity: number
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number,
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
  removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useCart() {
  return useContext(ShoppingCartContext)
}


export function CartProvider({ children }: ShoppingCartProviderProps ) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  
  function decreaseQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id != id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }



  return ( 
    <ShoppingCartContext.Provider 
      value={{ 
        getItemQuantity, 
        increaseQuantity, 
        decreaseQuantity, 
        removeFromCart 
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  )}

