import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Building Materials', icon: '🧱' },
  { name: 'Heavy Machinery', icon: '🚜' },
  { name: 'Electrical & Lighting', icon: '💡' },
  { name: 'Plumbing', icon: '🚰' },
  { name: 'Contractors', icon: '👷' },
  { name: 'Tools & Hardware', icon: '🛠️' },
];

const suppliers = [
  { name: 'Apex Construction Solutions', logo: 'A', desc: 'Apex Construction Solutions reactions in hantantostion, and more interatist in Beal Build...', color: 'bg-orange-600' },
  { name: 'Global Build Corp', logo: 'G', desc: 'Global Build Corp is a beautiful imaan ooxieries cooratn construction, amt/tietiahand...', color: 'bg-blue-600' },
  { name: 'SriLanka Builders Pvt Ltd', logo: 'S', desc: 'ShLanka Builders Pvt Ltd has comples seriwss for eirer construction and Cenundshian...', color: 'bg-cyan-600' },
  { name: 'Concrete Masters', logo: 'M', desc: 'Concrete Masters is a correction of provitás x invesslens of concrete menproattcnens...', color: 'bg-gray-800' },
];

const hotDeals = [
  { name: 'Excavator X500', price: 'LKR 15,000,000', image: 'https://picsum.photos/seed/excavator/400/300' },
  { name: 'Cement Mixers', price: 'LKR 250,000', image: 'https://picsum.photos/seed/mixer1/400/300' },
  { name: 'Cement Mixers', price: 'LKR 250,000', image: 'https://picsum.photos/seed/mixer2/400/300' },
  { name: 'Cement Mixers', price: 'LKR 1,500,000', image: 'https://picsum.photos/seed/mixer3/400/300' },
];

const services = [
  { name: 'Site Preparation', desc: 'Site Preparation, and uccer prepsssor services.', image: 'https://picsum.photos/seed/site/400/300' },
  { name: 'Project Management', desc: 'Project Management and architectural projects.', image: 'https://picsum.photos/seed/project/400/300' },
  { name: 'Architectural Design', desc: 'Architectural Design and architecture.', image: 'https://picsum.photos/seed/arch/400/300' },
  { name: 'Structural Engineering', desc: 'Structural engineering a structural engineering.', image: 'https://picsum.photos/seed/struct/400/300' },
];

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/construction-hero/1920/1080" 
          alt="Construction Site" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
              Your Reliable Partner for Global Construction Sourcing. Find Suppliers, Get Quotes, Grow Your Business.
            </h1>
            <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-md">
              Start Sourcing
            </Button>
          </motion.div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i === 1 ? 'w-8 bg-primary' : 'w-2 bg-white/50'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <h3 className="text-sm font-bold text-gray-800">{cat.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Suppliers */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold font-display">Featured Suppliers</h2>
          <Link to="/search" className="text-sm font-semibold text-gray-500 hover:text-primary flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suppliers.map((supplier) => (
              <Card key={supplier.name} className="overflow-hidden border-gray-100 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 ${supplier.color} rounded-lg flex items-center justify-center text-white text-3xl font-bold`}>
                      {supplier.logo}
                    </div>
                  </div>
                  <h3 className="font-bold text-center mb-2">{supplier.name}</h3>
                  <p className="text-xs text-gray-500 text-center mb-6 line-clamp-2">
                    {supplier.desc}
                  </p>
                  <Link to="/profile">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Contact Supplier
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" size="icon" className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hidden lg:flex">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hidden lg:flex">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Hot Deals */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
        <h2 className="text-2xl font-bold font-display mb-8">Hot Deals on Construction Gear</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotDeals.map((deal, i) => (
            <Card key={i} className="overflow-hidden border-gray-100 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm mb-1">{deal.name} - {deal.price}</h3>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-4 h-9">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
        <h2 className="text-2xl font-bold font-display mb-8">Popular Construction Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="overflow-hidden border-gray-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm mb-1">{service.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{service.desc}</p>
                <Button variant="secondary" className="bg-primary text-white hover:bg-primary/90 h-8 px-4 text-xs rounded-sm">
                  View Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
