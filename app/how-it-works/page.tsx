import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works - Simple 4-Step Process',
  description: 'Learn how ProjectHelp delivers academic projects in 4 simple steps: Browse, Order, Connect, and Deliver. Get complete source code, documentation, and 24/7 support. Fast turnaround guaranteed.',
  keywords: ['how it works', 'project delivery process', 'academic project help', 'custom project process', 'project turnaround time'],
  openGraph: {
    title: 'How It Works - Simple 4-Step Process | ProjectHelp',
    description: 'Learn how ProjectHelp delivers academic projects in 4 simple steps. Fast turnaround with complete support.',
    type: 'website',
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary text-primary-foreground py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How It Works</h1>
          <p className="text-lg text-primary-foreground/90 text-balance">
            A simple, transparent process to get your academic project delivered
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Main Steps */}
        <div className="space-y-8 mb-16">
          {[
            {
              step: 1,
              title: 'Choose Your Project',
              description:
                'Browse our marketplace of ready-made projects or submit a custom request. Each project is carefully crafted by our academic experts.',
              details: [
                'Explore multiple domains and project types',
                'View detailed descriptions and pricing',
                'Check included services and deliverables',
                'Request custom modifications if needed',
              ],
            },
            {
              step: 2,
              title: 'Place Your Order',
              description:
                'Select your project, add optional services, and proceed to checkout. Our secure process takes just a few minutes.',
              details: [
                'Choose base project',
                'Add research paper publishing support (optional)',
                'Add items to cart',
                'Complete checkout with your details',
              ],
            },
            {
              step: 3,
              title: 'Our Team Reaches Out',
              description:
                'Within 1 hour of placing your order, our verified academic team will contact you to confirm requirements and answer questions.',
              details: [
                'Team reaches out via phone or email',
                'Confirm project specifications',
                'Discuss any customizations',
                'Address your questions',
              ],
            },
            {
              step: 4,
              title: 'Project Development',
              description:
                'Our experienced academic developers and mentors work on your project using industry best practices and academic standards.',
              details: [
                'Professional code development',
                'Comprehensive documentation',
                'Quality assurance and testing',
                'Plagiarism verification',
              ],
            },
            {
              step: 5,
              title: 'Receive Your Project',
              description:
                'Get your completed project with full source code, documentation, and faculty-ready formatting. Unlimited revisions included.',
              details: [
                'Complete source code and files',
                'Detailed project report',
                'Plagiarism-verified documentation',
                'Faculty-ready formatting',
              ],
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 md:gap-8">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl md:text-3xl flex-shrink-0">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h2 className="text-2xl font-bold text-foreground mb-3">{item.title}</h2>
                <p className="text-muted-foreground mb-4">{item.description}</p>

                <div className="grid md:grid-cols-2 gap-3">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Connector */}
        <div className="relative my-16 h-40 hidden md:block">
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent"></div>
        </div>

        {/* Why Choose Us */}
        <section className="bg-secondary/5 rounded-lg border border-border p-8 md:p-12 my-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose ProjectHelp?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔬',
                title: 'Backed by Research Scientists',
                description: 'Our projects are developed by experienced researchers with advanced degrees.',
              },
              {
                icon: '👥',
                title: 'Experienced Academic Team',
                description:
                  'Mentored by professionals with years of academic and industry experience.',
              },
              {
                icon: '✅',
                title: 'Quality Assurance',
                description:
                  'Every project undergoes rigorous review and testing before delivery.',
              },
              {
                icon: '📚',
                title: 'Comprehensive Documentation',
                description:
                  'Detailed reports, comments, and faculty-ready formatting included.',
              },
              {
                icon: '🔄',
                title: 'Unlimited Revisions',
                description:
                  'We work with you until you are completely satisfied with the project.',
              },
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                description:
                  'Our team responds within 1 hour and works efficiently on your project.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What's Included in Every Project</h2>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              'Complete source code',
              'Detailed project documentation',
              'Plagiarism-verified content',
              'Faculty-ready formatting',
              'Comprehensive project report',
              'Code comments and explanations',
              'Unlimited revisions',
              'Team support within 1 hour',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle2 size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                q: 'How long does it take to complete a project?',
                a: 'Standard projects are completed within 5-10 business days depending on complexity. Custom projects have personalized timelines discussed with our team.',
              },
              {
                q: 'Can I request modifications after delivery?',
                a: 'Yes! All projects include unlimited revisions. We work with you until you are completely satisfied.',
              },
              {
                q: 'Are the projects original?',
                a: 'Absolutely. All projects are custom-built for you and verified for plagiarism before delivery.',
              },
              {
                q: 'What about academic integrity?',
                a: 'Our projects are designed for learning and reference. We recommend reviewing the code and documentation to understand the concepts before submission.',
              },
              {
                q: 'Do you offer support after delivery?',
                a: 'Yes, our team is available for questions and revisions. We provide email support and WhatsApp communication.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major payment methods. Our checkout process is secure and your information is protected.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center my-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-primary-foreground/90 mb-8 text-balance">
            Browse our marketplace and find the perfect project for your academic needs.
          </p>
          <Link href="/marketplace">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Explore Marketplace
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </section>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20ProjectHelp%2C%20I%20have%20a%20question%20about%20your%20services."
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-colors z-40"
        aria-label="Contact on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/80 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© 2024 ProjectHelp - Academic Projects Marketplace. All rights reserved.</p>
          <p className="mt-2 text-primary-foreground/60">
            Backed by research scientists and experienced student teams.
          </p>
        </div>
      </footer>
    </div>
  );
}
