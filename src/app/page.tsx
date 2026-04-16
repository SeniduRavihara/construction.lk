"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SiteFrame } from "@/components/site-frame";
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Building Materials', image: '/images/category/building-materials.png' },
  { name: 'Heavy Machinery', image: '/images/category/heavy-machinery.png' },
  { name: 'Electrical & Lighting', image: '/images/category/electrical-lighting.png' },
  { name: 'Plumbing', image: '/images/category/plumbing.png' },
  { name: 'Contractors', image: '/images/category/contractors.png' },
  { name: 'Paints & Coatings', image: '/images/category/paints-coatings.png' },
  { name: 'Tools & Hardware', image: '/images/category/tools-hardware.png' },
  { name: 'Engineering & Design', image: '/images/category/engineering-design.png' },
  { name: 'Interior & Flooring', image: '/images/category/interior-flooring.png' },
  { name: 'Roofing & Residential', image: '/images/category/roofing-residential.png' },
  { name: 'HVAC', image: '/images/category/hvac.png' },
  { name: 'Landscaping', image: '/images/category/landscaping.png' },
];

const suppliers = [
  { 
    name: 'Apex Construction Solutions', 
    logo: '/images/logo.png', 
    desc: 'Apex Construction Solutions is a verified leader in heavy machinery and structural materials sourcing.', 
    color: 'bg-orange-600' 
  },
  { 
    name: 'Global Build Corp', 
    logo: 'G', 
    desc: 'Global Build Corp provides international standards for construction management and logistics.', 
    color: 'bg-blue-600' 
  },
  { 
    name: 'SriLanka Builders Pvt Ltd', 
    logo: 'S', 
    desc: 'Specializing in residential and commercial infrastructure projects across the island.', 
    color: 'bg-cyan-600' 
  },
  { 
    name: 'Concrete Masters', 
    logo: 'M', 
    desc: 'Premium concrete solutions and prefabricated structures for large scale developments.', 
    color: 'bg-gray-800' 
  },
];

const hotDeals = [
  { name: 'Excavator X500', price: 'LKR 15,000,000', image: '/images/excavator.png' },
  { name: 'Cement Mixers', price: 'LKR 250,000', image: 'https://picsum.photos/seed/mixer1/400/300' },
  { name: 'Scaffolding Set', price: 'LKR 250,000', image: 'https://picsum.photos/seed/mixer2/400/300' },
  { name: 'Power Drill Pack', price: 'LKR 1,500,000', image: 'https://picsum.photos/seed/mixer3/400/300' },
];

const services = [
  { name: 'Site Preparation', desc: 'Ground clearing, leveling, and drainage preparation services.', image: 'https://picsum.photos/seed/site/400/300' },
  { name: 'Project Management', desc: 'End-to-end management for complex civil engineering projects.', image: 'https://picsum.photos/seed/project/400/300' },
  { name: 'Architectural Design', desc: 'Modern and functional designs tailored for urban environments.', image: 'https://picsum.photos/seed/arch/400/300' },
  { name: 'Structural Engineering', desc: 'Ensuring safety and durability through expert calculations.', image: 'https://picsum.photos/seed/struct/400/300' },
];

export default function Home() {
  return (
    <SiteFrame active="home">
      <div className="pb-20">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <Image 
            src="/images/hero.png" 
            alt="Construction Site" 
            fill
            className="absolute inset-0 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-12 h-[1px] bg-primary"></span>
                <span className="text-primary font-bold uppercase tracking-widest text-xs">Reliable B2B Network</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-display">
                Your Partner for <span className="text-primary">Global Construction</span> Sourcing.
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-lg leading-relaxed">
                Connect with verified suppliers, request instant quotes, and grow your construction business with our streamlined B2B platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-7 h-auto rounded-md font-bold shadow-lg shadow-primary/20">
                  Start Sourcing Now
                </Button>
                <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 text-lg px-8 py-7 h-auto rounded-md font-bold">
                  <Play className="w-5 h-5 mr-2 fill-white" /> View Demo
                </Button>
              </div>
            </motion.div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-12 left-4 md:left-8 flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 1 ? 'w-12 bg-primary' : 'w-3 bg-white/30'}`} />
              ))}
            </div>
          </div>
        </section>

        
        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-16 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-xl transition-all cursor-pointer group border-transparent hover:border-primary/20 bg-white/95 backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src={cat.image} 
                        alt={cat.name} 
                        fill 
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xs font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                      {cat.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Suppliers */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24">
          <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-3xl font-bold font-display text-secondary">Featured Suppliers</h2>
              <p className="text-sm text-gray-500 mt-2">Verified industry leaders with proven track records.</p>
            </div>
            <Link href="/search" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              View all directory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {suppliers.map((supplier) => (
                <Card key={supplier.name} className="overflow-hidden border-gray-100 hover:border-primary/20 transition-all group">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-8">
                      {supplier.logo.startsWith('/') ? (
                        <div className="relative w-20 h-20 bg-white p-2 rounded-xl shadow-sm border border-gray-50">
                          <Image src={supplier.logo} alt={supplier.name} fill className="object-contain" />
                        </div>
                      ) : (
                        <div className={`w-20 h-20 ${supplier.color} rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-black/10`}>
                          {supplier.logo}
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold text-center mb-3 text-secondary text-lg group-hover:text-primary transition-colors">{supplier.name}</h3>
                    <p className="text-xs text-gray-500 text-center mb-8 line-clamp-3 leading-relaxed">
                      {supplier.desc}
                    </p>
                    <Link href="/profile">
                      <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all font-bold">
                        Contact Supplier
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="secondary" size="icon" className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl border border-gray-100 hidden lg:flex hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button variant="secondary" size="icon" className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl border border-gray-100 hidden lg:flex hover:bg-primary hover:text-white transition-colors">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </section>

        {/* Hot Deals */}
        <section className="bg-secondary mt-32 py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold font-display text-white mb-4">Hot Deals on Construction Gear</h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hidden sm:flex">Explore All Deals</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {hotDeals.map((deal, i) => (
                <Card key={i} className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-all">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image 
                      src={deal.image} 
                      alt={deal.name} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">-15% OFF</div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-sm mb-1 text-white">{deal.name}</h3>
                    <p className="text-primary font-bold">{deal.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 mt-6 h-11 font-bold rounded-sm">
                      Get Instant Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-32">
          <h2 className="text-3xl font-bold font-display text-secondary mb-4 text-center">Popular Construction Services</h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Expert teams providing end-to-end support for infrastructure and residential projects.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden border-gray-100 shadow-lg shadow-black/5 flex flex-col h-full bg-white">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image 
                      src={service.image} 
                      alt={service.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-2 text-secondary">{service.name}</h3>
                    <p className="text-xs text-gray-500 mb-8 leading-relaxed flex-1">{service.desc}</p>
                    <Button variant="secondary" className="w-full bg-gray-100 text-secondary hover:bg-primary hover:text-white transition-all font-bold h-10">
                      Explore Service
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
