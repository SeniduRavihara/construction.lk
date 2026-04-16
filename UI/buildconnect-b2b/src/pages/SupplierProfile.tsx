import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Phone, Mail, MessageSquare, ChevronLeft, ChevronRight, CheckCircle2, QrCode, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const galleryImages = [
  'https://picsum.photos/seed/gal1/800/600',
  'https://picsum.photos/seed/gal2/800/600',
  'https://picsum.photos/seed/gal3/800/600',
  'https://picsum.photos/seed/gal4/800/600',
  'https://picsum.photos/seed/gal5/800/600',
  'https://picsum.photos/seed/gal6/800/600',
];

const reviews = [
  { name: 'John D., MegaCorp', text: 'Apex is reliable and delivers on time. Excellent work on our logistics center.', rating: 5 },
  { name: 'Sarah L., Urban Developers', text: 'Professional team, great communication throughout the project.', rating: 5 },
];

const services = [
  'Concrete Supply', 'Earthmoving', 'Steel Fabrication', 'Project Management', 'Civil Engineering', 'Heavy Machinery Rental'
];

export default function SupplierProfile() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Gallery */}
      <section className="relative h-[400px] grid grid-cols-1 md:grid-cols-3 gap-1">
        <div className="md:col-span-1 h-full relative group cursor-pointer overflow-hidden">
          <img src="https://picsum.photos/seed/hero1/800/1000" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
        <div className="md:col-span-1 h-full relative group cursor-pointer overflow-hidden">
          <img src="https://picsum.photos/seed/hero2/800/1000" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
        <div className="md:col-span-1 h-full relative group cursor-pointer overflow-hidden">
          <img src="https://picsum.photos/seed/hero3/800/1000" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
        
        <Button variant="secondary" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button variant="secondary" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-12 relative z-10">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-xl flex items-center justify-center p-2 shadow-sm">
                <div className="w-full h-full bg-orange-600 rounded-lg flex items-center justify-center text-white text-3xl font-bold">A</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl md:text-3xl font-bold font-display">Apex Construction Solutions</h1>
                  <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500 text-white" />
                </div>
                <p className="text-gray-500 mb-2">B2B construction company</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="font-bold">4.8</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-1">512 reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none gap-2 border-green-500 text-green-600 hover:bg-green-50">
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </Button>
              <Button className="flex-1 md:flex-none gap-2 bg-secondary hover:bg-secondary/90">
                Enquiry
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Tabs defaultValue="gallery" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b border-gray-200 rounded-none h-auto p-0 mb-8">
                {['Gallery', 'Information', 'Services', 'Reviews'].map((tab) => (
                  <TabsTrigger 
                    key={tab} 
                    value={tab.toLowerCase()}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-8 py-4 font-bold text-gray-500 data-[state=active]:text-primary transition-all"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="gallery" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {galleryImages.map((img, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${i + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="information" className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-4">Company Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Apex Construction Solutions is a premier B2B provider of comprehensive construction services and materials. With over 15 years of experience in the industry, we have built a reputation for excellence, reliability, and innovation. Our team of experts is dedicated to delivering high-quality solutions tailored to the unique needs of our clients.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-sm text-gray-400 uppercase mb-2">Founded</h4>
                    <p className="font-medium">2009</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-400 uppercase mb-2">Employees</h4>
                    <p className="font-medium">250+</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Products and Services Tags */}
            <div className="mt-16">
              <h2 className="text-xl font-bold font-display mb-6">Products and Services</h2>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <Badge key={service} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-full">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            {/* User Reviews Section */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold font-display">User Reviews</h2>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold">4.8/5</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, i) => (
                  <Card key={i} className="border-gray-100 bg-gray-50/50">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[1, 2, 3, 4, 5].map((j) => (
                          <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-4 italic">"{review.text}"</p>
                      <p className="text-xs font-bold text-gray-900">- {review.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact Info Card */}
            <Card className="border-gray-100 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-50 p-8 flex flex-col items-center text-center border-b border-gray-100">
                  <div className="w-32 h-32 bg-white p-2 rounded-xl shadow-sm mb-4">
                    <QrCode className="w-full h-full text-gray-800" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scan to view profile</p>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">123 Builder's Way, Industrial Zone, Cityville, 40001</p>
                      <Link to="#" className="text-xs text-primary font-bold hover:underline">Get Directions</Link>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">+1-800-BUILDER</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">contact@apexconstruction.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lead Generation Form */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-6">Lead Generation</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="bg-gray-50 border-gray-200" />
                  <Input placeholder="Mobile Number" className="bg-gray-50 border-gray-200" />
                  <textarea 
                    placeholder="Message" 
                    className="w-full min-h-[120px] bg-gray-50 border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <Button className="w-full bg-secondary hover:bg-secondary/90 gap-2 h-12">
                    Send Enquiry <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
