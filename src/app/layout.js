import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import SocialIcons from '@/components/Header/SocialIcons';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Safe Movers',
  description: 'Get high level service in the moving and relocations industry',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocialIcons />
        <hr />
        <Navbar />
        <hr />
        {children}
        <hr />
        <Footer />
      </body>
    </html>
  );
}
