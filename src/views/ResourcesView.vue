<script setup lang="ts">
import SectionTitle from '../components/ui/SectionTitle.vue';
import CallToAction from '../components/ui/CallToAction.vue';

const blogPosts = [
  {
    title: 'How AI is Transforming B2B Prospecting',
    excerpt: 'Learn how artificial intelligence is revolutionizing the way sales teams discover and engage with potential clients.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI',
    date: 'Oct 12, 2023'
  },
  {
    title: 'The ROI of Sales Automation: Real Numbers',
    excerpt: 'Dive into the actual return on investment metrics from companies that have implemented sales automation.',
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ROI',
    date: 'Sep 28, 2023'
  },
  {
    title: 'From LinkedIn to HubSpot: Building a Seamless Pipeline',
    excerpt: 'A step-by-step guide to creating an end-to-end prospecting and outreach system that eliminates manual tasks.',
    image: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Workflow',
    date: 'Sep 15, 2023'
  },
  {
    title: 'Why Email Verification Is Critical for Deliverability',
    excerpt: 'Understanding the technical aspects of email deliverability and how proper verification impacts your outreach success.',
    image: 'https://images.pexels.com/photos/7310203/pexels-photo-7310203.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Email',
    date: 'Aug 30, 2023'
  },
  {
    title: 'Confidence Scoring: How AI Checks Its Own Work',
    excerpt: 'An inside look at how modern AI systems can evaluate the reliability of their own outputs for business applications.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI',
    date: 'Aug 17, 2023'
  },
  {
    title: 'The Future of SDR Teams in an AI-Driven World',
    excerpt: 'How sales development representatives can evolve their skills and provide more value as automation becomes standard.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Strategy',
    date: 'Aug 3, 2023'
  }
];

const caseStudies = [
  {
    company: 'TechConnect',
    industry: 'SaaS',
    results: '3.2x pipeline growth in 60 days',
    quote: 'We went from spending 15 hours a week on manual prospecting to running a fully automated pipeline that delivers better quality leads than our manual process ever did.',
    logo: 'TechConnect'
  },
  {
    company: 'LeadGen Agency',
    industry: 'Marketing',
    results: '45% increase in email response rates',
    quote: 'The AI enrichment gives us personalization capabilities that have dramatically improved our clients\' campaign performance across the board.',
    logo: 'LeadGen'
  },
  {
    company: 'Stratosphere Inc',
    industry: 'Finance',
    results: '22 hours saved per SDR per week',
    quote: 'In a regulated industry like finance, the accuracy of our outreach is critical. The QA system ensures we\'re only sending verified, compliant information.',
    logo: 'Stratosphere'
  }
];

const webinars = [
  {
    title: 'Building Your First Automated Pipeline',
    description: 'A step-by-step walkthrough of setting up a complete sales automation system from scratch.',
    date: 'October 25, 2023',
    duration: '45 minutes',
    presenter: 'Sarah Johnson, Head of Sales Engineering'
  },
  {
    title: 'Advanced AI Personalization Techniques',
    description: 'Learn how to leverage AI-generated content for hyper-personalized outreach that converts.',
    date: 'November 8, 2023',
    duration: '60 minutes',
    presenter: 'Michael Chen, Director of AI Strategy'
  },
  {
    title: 'From Cold to Sold: The New B2B Sales Funnel',
    description: 'How automation is reshaping the traditional B2B sales funnel and what it means for your metrics.',
    date: 'November 22, 2023',
    duration: '50 minutes',
    presenter: 'Aisha Patel, Chief Revenue Officer'
  }
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-background-dark"></div>
        
        <!-- Gradient Orbs -->
        <div class="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-neon-cyan/20 blur-3xl"></div>
        <div class="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-neon-magenta/20 blur-3xl"></div>
        
        <!-- Grid pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      <div class="container relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Dive deeper into sales automation with our educational content, case studies, and webinars.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Lead Magnet -->
    <section class="pb-20">
      <div class="container">
        <div class="max-w-5xl mx-auto glass-card p-8 overflow-hidden relative">
          <!-- Background Gradient Effects -->
          <div class="absolute -top-20 -right-20 w-60 h-60 bg-neon-cyan/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-neon-magenta/20 rounded-full blur-3xl"></div>
          
          <!-- Content -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-4">Download the Lead Automation Playbook</h2>
              <p class="text-white/70 mb-6">
                Our comprehensive 45-page guide to building a fully automated sales pipeline from scratch. Includes templates, scripts, and step-by-step instructions.
              </p>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-white/70">Complete automation workflow diagrams</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-white/70">ROI calculation templates</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-white/70">AI prompt library for enrichment</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-white/70">Email sequence templates with high response rates</span>
                </li>
              </ul>
              
              <button class="btn-primary">Download Free Guide</button>
            </div>
            
            <div class="hidden md:block">
              <!-- Placeholder for eBook cover -->
              <div class="aspect-[3/4] bg-background-dark rounded-lg shadow-2xl border border-gray-750 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-magenta/20 to-neon-violet/20"></div>
                <div class="p-8 relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <h3 class="text-2xl font-bold mb-4">Lead Automation Playbook</h3>
                  <p class="text-white/70 mb-8">The complete guide to building your automated sales pipeline</p>
                  <div class="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p class="text-sm text-white/50">PDF Format • 45 Pages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Blog Posts -->
    <section class="section">
      <div class="container">
        <SectionTitle 
          title="Latest Articles" 
          subtitle="Insights, strategies, and case studies to help you master sales automation."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="(post, index) in blogPosts" 
            :key="index"
            class="glass-card overflow-hidden transition-all duration-300 hover:shadow-glow group"
          >
            <!-- Featured Image -->
            <div class="aspect-video overflow-hidden">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-medium px-2 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan">
                  {{ post.category }}
                </span>
                <span class="text-sm text-white/50">{{ post.date }}</span>
              </div>
              
              <h3 class="text-xl font-semibold mb-3">{{ post.title }}</h3>
              <p class="text-white/70 mb-4">{{ post.excerpt }}</p>
              
              <a href="#" class="inline-flex items-center text-neon-cyan hover:underline">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="btn-secondary">View All Articles</button>
        </div>
      </div>
    </section>
    
    <!-- Case Studies -->
    <section class="section bg-gray-850 border-y border-gray-750">
      <div class="container">
        <SectionTitle 
          title="Case Studies" 
          subtitle="Real results from companies using our automated sales pipeline."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            v-for="(study, index) in caseStudies" 
            :key="index"
            class="glass-card p-8 transition-all duration-300 hover:shadow-glow"
          >
            <div class="h-12 mb-6 text-2xl font-bold">
              {{ study.logo }}
            </div>
            
            <div class="mb-4">
              <span class="text-white/50 block text-sm">Industry</span>
              <span class="text-white font-medium">{{ study.industry }}</span>
            </div>
            
            <div class="mb-6">
              <span class="text-white/50 block text-sm">Results</span>
              <span class="text-neon-cyan font-semibold">{{ study.results }}</span>
            </div>
            
            <div class="mb-6">
              <svg class="h-6 w-6 text-neon-cyan mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p class="text-white/70 italic">{{ study.quote }}</p>
            </div>
            
            <a href="#" class="inline-flex items-center text-neon-cyan hover:underline">
              Read Full Case Study
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Webinars -->
    <section class="section">
      <div class="container">
        <SectionTitle 
          title="Upcoming Webinars" 
          subtitle="Join our live sessions to learn directly from automation experts."
        />
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div 
              v-for="(webinar, index) in webinars" 
              :key="index"
              class="glass-card p-6 transition-all duration-300 hover:shadow-glow"
            >
              <div class="flex flex-col md:flex-row md:items-center">
                <!-- Date Badge -->
                <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div class="w-16 h-16 rounded-lg glass-card border border-neon-magenta flex flex-col items-center justify-center">
                    <span class="text-neon-magenta font-bold text-xl">
                      {{ webinar.date.split(' ')[1].replace(',', '') }}
                    </span>
                    <span class="text-white/70 text-xs">
                      {{ webinar.date.split(' ')[0] }}
                    </span>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="flex-grow">
                  <h3 class="text-xl font-semibold mb-2">{{ webinar.title }}</h3>
                  <p class="text-white/70 mb-3">{{ webinar.description }}</p>
                  
                  <div class="flex flex-wrap items-center text-sm text-white/50">
                    <span class="mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {{ webinar.duration }}
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {{ webinar.presenter }}
                    </span>
                  </div>
                </div>
                
                <!-- CTA -->
                <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <button class="btn-secondary text-sm whitespace-nowrap">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <a href="#" class="text-neon-cyan hover:underline">
              View past webinar recordings →
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <CallToAction
      title="Ready to Transform Your Sales Process?"
      subtitle="Start automating your pipeline today and see the results for yourself."
      primaryBtnText="Start My Free Trial"
      primaryBtnLink="/demo"
      secondaryBtnText="Book a Demo"
      secondaryBtnLink="/demo"
    />
  </div>
</template>