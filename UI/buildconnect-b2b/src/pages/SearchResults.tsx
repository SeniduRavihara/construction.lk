import React from 'react';
import { Search, MapPin, Star, Phone, Mail, MessageSquare, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const results = [
  {
    name: 'Apex Construction Materials',
    rating: 4.8,
    reviews: 32,
    tags: ['#Cement', '#Steel', '#HeavyEquipment', '#ArchitecturalServices'],
    desc: 'Apex construction materials soss as building comerials, building-routios and sepater rmtterian...',
    image: 'https://picsum.photos/seed/res1/400/300',
  },
  {
    name: 'Global Builders Solutions',
    rating: 4.8,
    reviews: 32,
    tags: ['#Cement', '#Steel', '#HeavyEquipment'],
    desc: 'Construction materials for business in building construction, inaransxi and architecturalseriet...',
    image: 'https://picsum.photos/seed/res2/400/300',
  },
  {
    name: 'Heavy Machinery',
    rating: 4.8,
    reviews: 32,
    tags: ['#Cement', '#Steel'],
    desc: 'Heavy machinarion materials for kston-quality construction ceneirion manunenoers and evolmim...',
    image: 'https://picsum.photos/seed/res3/400/300',
  },
  {
    name: 'Construction Sales',
    rating: 4.8,
    reviews: 32,
    tags: ['#Cement'],
    desc: 'We are site to ssnotiams lns compasy construction building and bonding sites. Construction materia...',
    image: 'https://picsum.photos/seed/res4/400/300',
  },
];

const recommendedBrands = [
  { name: 'Caterpillar Excavators', desc: 'Caterpillar excavators for construction brands.', image: 'https://picsum.photos/seed/cat/400/300' },
  { name: 'Sika Waterproofing Solutions', desc: 'Sika waterproofing solutions construction brands.', image: 'https://picsum.photos/seed/sika/400/300' },
];

export default function SearchResults() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-primary cursor-pointer">Search Results</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">Construction</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg">Filters</h2>
                <Button variant="ghost" size="sm" className="text-xs text-primary h-auto p-0">Clear all</Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-sm mb-4 flex items-center justify-between">
                    Location <ChevronRight className="w-4 h-4 rotate-90" />
                  </h3>
                  <Input placeholder="Search location..." className="text-sm h-9 mb-4" />
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-sm mb-4 flex items-center justify-between">
                    Business Type <ChevronRight className="w-4 h-4 rotate-90" />
                  </h3>
                  <div className="space-y-3">
                    {['Supplier', 'Contractor', 'Service Provider'].map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-gray-300 rounded group-hover:border-primary transition-colors" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm">Verified Status</h3>
                  <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold font-display">Construction Search Results</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <span className="text-gray-900 font-medium cursor-pointer flex items-center gap-1">
                  Relevance <ChevronRight className="w-3 h-3 rotate-90" />
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {results.map((result, i) => (
                <Card key={i} className="overflow-hidden border-gray-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-48 sm:h-auto overflow-hidden">
                      <img 
                        src={result.image} 
                        alt={result.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg hover:text-primary cursor-pointer transition-colors">
                          {result.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">{result.rating}</span>
                          <span className="text-gray-400">({result.reviews} reviews)</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {result.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-gray-500 mb-6 line-clamp-2">
                        {result.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="h-9 px-4 gap-2 border-gray-200">
                          <Phone className="w-3 h-3" /> Call
                        </Button>
                        <Button className="h-9 px-4 gap-2 bg-primary hover:bg-primary/90">
                          <Mail className="w-3 h-3" /> Enquiry
                        </Button>
                        <Button variant="secondary" size="sm" className="h-9 px-4 gap-2 bg-secondary text-white hover:bg-secondary/90">
                          <MessageSquare className="w-3 h-3" /> Chat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="secondary" size="sm" className="w-8 h-8 p-0 bg-secondary text-white">1</Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
              <Button variant="outline" size="sm" className="px-3 h-8 gap-1">Next <ChevronRight className="w-3 h-3" /></Button>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="font-bold text-lg mb-6">Recommended Brands</h2>
              <div className="space-y-6">
                {recommendedBrands.map((brand, i) => (
                  <Card key={i} className="overflow-hidden border-gray-100 group cursor-pointer">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={brand.image} 
                        alt={brand.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {i === 0 && (
                        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-[10px] font-bold">CAT</div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-sm mb-1">{brand.name}</h3>
                      <p className="text-[10px] text-gray-500">{brand.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
