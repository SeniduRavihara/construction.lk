import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, Menu, User, MessageSquare, Bell, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header */}
      <header className="border-bottom border-gray-100 py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold font-display tracking-tight hidden sm:block">
              BuildConnect <span className="text-primary">B2B</span>
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl items-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
            <div className="flex items-center px-3 border-r border-gray-200">
              <Search className="w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search products, suppliers..." 
                className="border-none bg-transparent focus-visible:ring-0 w-64"
              />
            </div>
            <div className="flex items-center px-3 border-r border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
              <MapPin className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600 whitespace-nowrap">Location</span>
              <ChevronDown className="w-3 h-3 ml-1 text-gray-400" />
            </div>
            <div className="flex items-center px-3 cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="text-sm text-gray-600 whitespace-nowrap">Category</span>
              <ChevronDown className="w-3 h-3 ml-1 text-gray-400" />
            </div>
            <Button className="rounded-none h-10 px-6 bg-primary hover:bg-primary/90">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:flex flex-col items-center cursor-pointer group">
              <User className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
              <span className="text-[10px] uppercase font-semibold mt-1 text-gray-500 group-hover:text-primary">Sign In</span>
            </div>
            <div className="hidden lg:flex flex-col items-center cursor-pointer group">
              <User className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
              <span className="text-[10px] uppercase font-semibold mt-1 text-gray-500 group-hover:text-primary">Register</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer group relative">
              <MessageSquare className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
              <span className="text-[10px] uppercase font-semibold mt-1 text-gray-500 group-hover:text-primary">Messages</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">2</span>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="border-y border-gray-100 py-2 px-4 md:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ul className="flex items-center gap-8">
            {['Commerce', 'Suppliers', 'Support', 'Locations', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Suppliers' ? '/search' : '#'} 
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    (item === 'Commerce' && location.pathname === '/') || 
                    (item === 'Suppliers' && location.pathname === '/search') 
                    ? 'text-primary border-b-2 border-primary pb-2' : 'text-gray-600'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="bg-primary hover:bg-primary/90 text-sm font-semibold px-6 py-2 h-auto rounded-full">
            Post Your Requirements
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-bold text-lg mb-6">About BuildConnect B2B</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              BuildConnect B2B is a leading construction sourcing & suppliers commerce platform designed to help contractors, builders, and developers find the best materials and services globally.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">For Suppliers</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-primary">About</Link></li>
              <li><Link to="#" className="hover:text-primary">For Suppliers</Link></li>
              <li><Link to="#" className="hover:text-primary">Project Management</Link></li>
              <li><Link to="#" className="hover:text-primary">Plumbing Design</Link></li>
              <li><Link to="#" className="hover:text-primary">Contractors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">For Buyers</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-primary">About Us</Link></li>
              <li><Link to="#" className="hover:text-primary">For Buyers</Link></li>
              <li><Link to="#" className="hover:text-primary">Architectural Design</Link></li>
              <li><Link to="#" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter Sign-up</h3>
            <div className="flex gap-2 mb-6">
              <Input placeholder="Enter your email..." className="bg-white" />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="w-8 h-5 bg-gray-200 rounded"></div>
              <div className="w-8 h-5 bg-gray-200 rounded"></div>
              <div className="w-8 h-5 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2"><span className="font-bold">T:</span> +3224 5000001 839</p>
              <p className="flex items-center gap-2"><span className="font-bold">E:</span> your BuildConnect B2B.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 BuildConnect B2B. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-primary">Privacy</Link>
            <Link to="#" className="hover:text-primary">Legal</Link>
            <Link to="#" className="hover:text-primary">Links</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
