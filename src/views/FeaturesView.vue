<script setup lang="ts">
import SectionTitle from '../components/ui/SectionTitle.vue';
import CallToAction from '../components/ui/CallToAction.vue';

const features = [
  {
    id: 1,
    title: 'Prospecting',
    description: 'Manual LinkedIn/Crunchbase sourcing with intelligent filtering',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    content: 'Our system begins with intentional, targeted prospecting. While the initial company identification happens in LinkedIn and Crunchbase, our integration tools make it simple to collect and organize your targets. Create custom filters based on company size, industry, location, or funding status to find the perfect targets for your outreach.',
    benefits: [
      'Search across multiple platforms simultaneously',
      'Save prospect lists for team collaboration',
      'Apply advanced filtering criteria',
      'Track prospecting activity metrics'
    ]
  },
  {
    id: 2,
    title: 'Lead Collection',
    description: 'FindyLead integration for structured CSV exports',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7 M4 7c0-2.21 3.582-4 8-4s8 4',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7 M4 7c0-2.21 3.582-4 8-4s8 4',
    content: 'Once you\'ve identified target companies, our FindyLead integration transforms raw prospect URLs into structured, enriched data. Simply paste your collected URLs into the system, and receive a comprehensive CSV with company information, employee counts, industries, and more.',
    benefits: [
      'Bulk URL processing for efficiency',
      'Consistent data formatting across sources',
      'Custom field mapping options',
      'Automatic duplicate detection'
    ]
  },
  {
    id: 3,
    title: 'Auto-Ingestion',
    description: 'Gmail + Apps Script + Google Sheets workflow automation',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    content: 'The magic begins when your CSV is processed. Our system uses Gmail triggers and Google Apps Script to automatically detect and process your lead files. When a CSV arrives, our automation immediately begins organizing, analyzing, and preparing the data for the next stage.',
    benefits: [
      'Zero-touch file processing workflow',
      'Automatic data normalization',
      'Error handling and notification system',
      'Custom workflow triggers'
    ]
  },
  {
    id: 4,
    title: 'Email Sourcing',
    description: 'Findymail API for real-time email discovery and verification',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    content: 'Finding accurate business email addresses is crucial for outreach success. Our Findymail API integration automatically discovers and verifies email addresses for your prospects. Using pattern matching, domain verification, and mailbox validation, we ensure you\'re only reaching out to active, legitimate email addresses.',
    benefits: [
      '98.5% email deliverability rate',
      'Pattern-based discovery for hard-to-find addresses',
      'Real-time mailbox verification',
      'Spam trap and honeypot avoidance'
    ]
  },
  {
    id: 5,
    title: 'AI Enrichment',
    description: 'GPT-powered company descriptions and contextual metadata',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    content: 'Our AI enrichment engine transforms basic company information into detailed, context-rich profiles. Using advanced language models, we generate accurate company descriptions, identify key value propositions, determine company challenges, and extract industry-specific insights.',
    benefits: [
      'Automatically generated company summaries',
      'Industry-specific pain point identification',
      'Competitive landscape analysis',
      'Personalization hooks for email campaigns'
    ]
  },
  {
    id: 6,
    title: 'QA System',
    description: 'AI-powered accuracy scoring with semantic validation',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    content: 'Our revolutionary QA system uses semantic analysis to verify the accuracy of AI-generated content. By comparing enriched company data against official websites and trusted sources, we calculate a confidence score for each lead.',
    benefits: [
      'Confidence scoring for all enriched data',
      'Automated fact-checking against trusted sources',
      'Content improvement suggestions',
      'Quality trending analytics'
    ]
  },
  {
    id: 7,
    title: 'HubSpot Sync',
    description: 'Bi-directional CRM integration with custom field mapping',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    content: 'High-quality leads deserve seamless CRM integration. Our HubSpot sync automatically creates contacts, companies, and deals with all your enriched data. Custom field mapping ensures data lands exactly where you need it.',
    benefits: [
      'Automated contact and company creation',
      'Custom property mapping',
      'Activity and engagement tracking',
      'Deal stage progression automation'
    ]
  },
  {
    id: 8,
    title: 'Smartlead Campaign Builder',
    description: 'Intelligent outreach sequence creation with enriched data',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    content: 'The final piece of the automation puzzle is intelligent outreach. Our Smartlead integration automatically creates personalized email campaigns based on your enriched lead data. Using the AI-generated company descriptions and industry insights, we craft compelling email sequences.',
    benefits: [
      'Dynamic personalization tokens',
      'Industry-specific template suggestions',
      'A/B testing automation',
      'Performance analytics dashboard'
    ]
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
            <span class="block">Powerful</span>
            <span class="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet bg-clip-text text-transparent">
              Pipeline Features
            </span>
          </h1>
          
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Every step of your sales process, automated with precision. Explore the tools that make our pipeline run without manual intervention.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Features Grid -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="feature in features" :key="feature.id" class="feature-card">
            <div class="glass-card p-8 h-full transition-all duration-300 hover:shadow-glow group">
              <!-- Icon & Title -->
              <div class="flex items-start mb-6">
                <div class="w-12 h-12 bg-background-dark rounded-lg flex items-center justify-center mr-4 border border-neon-cyan group-hover:bg-neon-cyan/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-1">{{ feature.title }}</h3>
                  <p class="text-white/70">{{ feature.description }}</p>
                </div>
              </div>
              
              <!-- Feature Description -->
              <p class="text-white/80 mb-6">{{ feature.content }}</p>
              
              <!-- Benefits -->
              <div class="mb-6">
                <h4 class="text-lg font-medium mb-3 text-neon-cyan">Key Benefits</h4>
                <ul class="space-y-2">
                  <li v-for="(benefit, index) in feature.benefits" :key="index" class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-white/70">{{ benefit }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- CTA Button -->
              <button class="btn-secondary text-sm">See It Work</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- How They Work Together -->
    <section class="section bg-gray-850 border-y border-gray-750">
      <div class="container">
        <SectionTitle 
          title="How Everything Works Together" 
          subtitle="Our features don't just work in isolation — they form a seamless, end-to-end pipeline that eliminates manual work."
        />
        
        <div class="max-w-4xl mx-auto glass-card p-8">
          <div class="relative">
            <!-- Pipeline Flow Diagram -->
            <div class="w-full h-auto py-8">
              <!-- This would be an SVG diagram in production -->
              <div class="flex flex-col space-y-12">
                <!-- Flow Stages -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div class="text-center p-4">
                    <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-3 border border-neon-cyan">
                      <span class="text-xl font-bold text-neon-cyan">1</span>
                    </div>
                    <p class="text-sm font-medium">Data Collection</p>
                  </div>
                  
                  <div class="text-center p-4">
                    <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-3 border border-neon-magenta">
                      <span class="text-xl font-bold text-neon-magenta">2</span>
                    </div>
                    <p class="text-sm font-medium">Processing</p>
                  </div>
                  
                  <div class="text-center p-4">
                    <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-3 border border-neon-violet">
                      <span class="text-xl font-bold text-neon-violet">3</span>
                    </div>
                    <p class="text-sm font-medium">Enrichment</p>
                  </div>
                  
                  <div class="text-center p-4">
                    <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-3 border border-neon-cyan">
                      <span class="text-xl font-bold text-neon-cyan">4</span>
                    </div>
                    <p class="text-sm font-medium">Activation</p>
                  </div>
                </div>
                
                <!-- Detailed Flow Description -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 class="text-xl font-semibold mb-4 text-neon-cyan">Input to Output Flow</h3>
                    <p class="text-white/70 mb-4">
                      The entire pipeline connects your manual prospecting directly to your outreach tools and CRM, creating a seamless flow of high-quality leads without repetitive tasks.
                    </p>
                    <p class="text-white/70">
                      Data moves intelligently through each stage, with quality checks and enrichment happening automatically in the background.
                    </p>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold mb-4 text-neon-magenta">Automation Points</h3>
                    <ul class="space-y-2 text-white/70">
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-magenta mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>File detection and processing</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-magenta mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Email discovery and verification</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-magenta mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>AI content generation</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-magenta mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>CRM and campaign creation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <CallToAction
      title="Ready to See These Features in Action?"
      subtitle="Book a personalized demo to see how our automated pipeline works with your specific sales process."
      primaryBtnText="Book My Demo"
      primaryBtnLink="/demo"
    />
  </div>
</template>