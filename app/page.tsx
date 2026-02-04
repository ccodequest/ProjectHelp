import Link from 'next/link';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { domains } from '@/lib/mock-data';
import { CheckCircle2, ArrowRight, Star, Zap, Users, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative gradient-primary text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <p className="text-sm font-semibold text-primary-foreground flex items-center gap-2">
              <Star size={16} className="fill-white" />
              Trusted by 1000+ students
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Professional Academic Projects, Delivered Right
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-balance max-w-3xl mx-auto">
            Get expertly crafted academic projects with complete documentation, backed by research scientists and industry professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/marketplace">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 text-base shadow-lg hover:shadow-xl transition-all">
                Browse Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 text-base">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Projects Available</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">50+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Expert Developers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">99.8%</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Students Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Experience the highest quality academic projects with complete support and transparency</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Expert Quality',
                desc: 'Created by Ph.D. researchers and industry professionals'
              },
              {
                icon: Zap,
                title: 'Quick Turnaround',
                desc: 'Fast delivery without compromising on quality'
              },
              {
                icon: Users,
                title: '24/7 Support',
                desc: 'Dedicated team available for questions and revisions'
              },
              {
                icon: CheckCircle2,
                title: 'Plagiarism-Free',
                desc: 'Verified original content with proper citations'
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">What We Deliver</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Complete Source Code', items: ['Well-documented code', 'Industry best practices', 'Code comments and explanations', 'GitHub-ready format'] },
              { title: 'Comprehensive Documentation', items: ['Project reports', 'API documentation', 'Setup instructions', 'User guide'] },
              { title: 'Academic Support', items: ['Research paper assistance', 'Publication support', 'Citation formatting', 'Plagiarism verification'] },
              { title: 'Ongoing Support', items: ['Unlimited revisions', 'WhatsApp support', 'Email assistance', 'Technical guidance'] },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Simple 4-Step Process</h2>

          <div className="grid md:grid-cols-4 gap-4 md:gap-0">
            {[
              { num: '1', title: 'Browse', desc: 'Explore 500+ projects or request custom' },
              { num: '2', title: 'Order', desc: 'Add to cart and checkout in minutes' },
              { num: '3', title: 'Connect', desc: 'We reach out via WhatsApp & email' },
              { num: '4', title: 'Deliver', desc: 'Get complete project with documentation' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center mb-6 md:mb-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-2 w-4 h-1 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Categories */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Featured Domains</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domains.slice(0, 8).map((domain) => (
              <Link key={domain} href={`/marketplace?domain=${domain}`}>
                <div className="bg-white rounded-lg p-6 border border-blue-100 hover:shadow-md hover:border-primary transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-foreground text-lg">{domain}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Browse projects</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 gradient-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Start Your Project Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 text-balance">
            Join thousands of students who've successfully completed their academic projects with us.
          </p>
          <Link href="/marketplace">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
              View Marketplace
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground/80 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">ProjectHelp</h4>
              <p className="text-sm">Professional academic projects for students worldwide</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/marketplace" className="hover:text-white transition">Marketplace</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:help@projecthelp.com" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="https://wa.me/919845293201" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Info</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm">© 2024 ProjectHelp. All rights reserved. | Crafted with ❤️ for students</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
