'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockProjects, domains } from '@/lib/mock-data';
import { useCart } from '@/lib/cart-context';
import { Search, ShoppingCart, Check, X, Filter } from 'lucide-react';

export default function MarketplacePage() {
  const { addToCart, items, removeFromCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.domain.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDomain = !selectedDomain || project.domain === selectedDomain;
      return matchesSearch && matchesDomain;
    });
  }, [searchQuery, selectedDomain]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="gradient-primary text-primary-foreground py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Project Marketplace</h1>
              <p className="text-primary-foreground/80 text-lg">
                {filteredProjects.length} projects found {selectedDomain && `in ${selectedDomain}`}
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
              <p className="text-sm text-primary-foreground/80">Cart Items</p>
              <p className="text-3xl font-bold text-white">{items.length}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search projects by name or domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 rounded-lg border-2 text-base"
              />
            </div>
          </div>

          {/* Filters Toggle & Domain Filter */}
          <div className="mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 mb-4 md:mb-0 text-foreground font-semibold hover:text-primary transition-colors"
            >
              <Filter size={20} />
              Filter by Domain
            </button>

            {showFilters && (
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className={`px-4 py-2.5 rounded-full font-medium transition-all text-sm ${
                    selectedDomain === null
                      ? 'gradient-primary text-white shadow-md'
                      : 'bg-gray-200 text-foreground hover:bg-gray-300'
                  }`}
                >
                  All Domains
                </button>
                {domains.map((domain) => (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                    className={`px-4 py-2.5 rounded-full font-medium transition-all text-sm ${
                      selectedDomain === domain
                        ? 'gradient-primary text-white shadow-md'
                        : 'bg-gray-200 text-foreground hover:bg-gray-300'
                    }`}
                  >
                    {domain}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Results Info */}
          <div className="mb-6 text-sm text-muted-foreground">
            Showing <strong>{filteredProjects.length}</strong> projects
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const isInCart = items.some((item) => item.project.id === project.id);

                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:border-primary group"
                  >
                    <div className="p-6 space-y-4 h-full flex flex-col">
                      {/* Domain Badge & Status */}
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs font-bold px-3 py-1.5 gradient-primary text-white rounded-full uppercase tracking-wide">
                          {project.domain}
                        </span>
                        {isInCart && (
                          <span className="text-xs font-bold px-3 py-1.5 bg-green-100 text-green-700 rounded-full flex items-center gap-1 uppercase tracking-wide">
                            <Check size={14} />
                            In Cart
                          </span>
                        )}
                      </div>

                      {/* Project Name */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3">
                          {project.name}
                        </h3>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4 border-t border-gray-200">
                        {isInCart ? (
                          <Button
                            onClick={() => removeFromCart(project.id)}
                            variant="outline"
                            className="w-full gap-2 rounded-lg border-2 border-red-300 text-red-600 hover:bg-red-50"
                          >
                            <X size={16} />
                            Remove from Cart
                          </Button>
                        ) : (
                          <Button
                            onClick={() => addToCart(project)}
                            className="w-full gap-2 gradient-primary text-white rounded-lg font-semibold hover:shadow-md transition-all"
                          >
                            <ShoppingCart size={16} />
                            Add to Cart
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-foreground font-semibold mb-2">No projects found</p>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDomain(null);
                }}
                className="mt-4 px-6 py-2 gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground/80 py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p className="font-semibold text-white mb-2">© 2024 ProjectHelp</p>
          <p className="text-primary-foreground/70">
            Professional academic project solutions for students worldwide
          </p>
        </div>
      </footer>
    </div>
  );
}
