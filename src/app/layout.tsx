import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'
import './globals.css';
import { CartProvider } from '@/context/ShoppingCart';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Head content here */}
      </head>
      <CartProvider>
        <body className={`${inter.className} bg-gray-100 min-h-screen`}>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
};

export default RootLayout;
