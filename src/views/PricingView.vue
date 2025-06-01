<script setup lang="ts">
import { ref } from 'vue';
import SectionTitle from '../components/ui/SectionTitle.vue';
import CallToAction from '../components/ui/CallToAction.vue';

const isYearly = ref(false);

const toggleBilling = () => {
  isYearly.value = !isYearly.value;
};

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small teams getting started with automation',
    monthlyPrice: 29,
    yearlyPrice: 290, // 2 months free
    features: [
      '500 records/month',
      'Manual review only',
      'Basic AI enrichment',
      'Email CSV exports',
      'Email support'
    ],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Pro',
    description: 'Ideal for growing teams with established outreach processes',
    monthlyPrice: 79,
    yearlyPrice: 790, // 2 months free
    features: [
      '2,000 records/month',
      'Auto-sync to Smartlead',
      'HubSpot integration',
      'Advanced AI enrichment',
      'QA confidence scoring',
      'Priority email support'
    ],
    cta: 'Get Started',
    highlight: true
  },
  {
    name: 'Agency',
    description: 'Complete solution for agencies and sales teams at scale',
    monthlyPrice: 249,
    yearlyPrice: 2490, // 2 months free
    features: [
      'Unlimited records',
      'White-label dashboard',
      'Multi-client management',
      'Custom API integrations',
      'Advanced analytics',
      'Dedicated account manager',
      'Phone & email support'
    ],
    cta: 'Contact Sales',
    highlight: false
  }
];

const faqs = [
  {
    question: 'How accurate is the AI?',
    answer: 'Our AI enrichment system achieves over 90% accuracy for company descriptions and metadata. This is ensured through our proprietary QA confidence scoring system that verifies AI-generated content against trusted sources. High-confidence data (85%+) is automatically approved, while medium-confidence data (50-85%) is sent for human review to maintain quality standards.'
  },
  {
    question: 'What happens with low-confidence leads?',
    answer: 'Low-confidence leads (below 50%) are either discarded or flagged for manual enhancement. Our system identifies specific issues with these leads, such as inconsistent company information or potential data errors. You can choose to have these leads automatically discarded or sent to a dedicated queue for manual review and enrichment by your team or ours (available on Agency plans).'
  },
  {
    question: 'Can I export to other CRMs?',
    answer: 'Absolutely! While we offer seamless HubSpot integration out of the box, you can export your enriched leads to any CRM system. We provide standardized CSV exports compatible with Salesforce, Pipedrive, Zoho, and other major CRM platforms. Custom API integrations for direct syncing with other CRMs are available on Agency plans or as add-ons to Pro plans.'
  },
  {
    question: 'Do I need technical knowledge to use the system?',
    answer: 'No technical expertise is required. Our system is designed for sales professionals, not developers. The initial setup takes about 15 minutes with our guided process, and ongoing usage involves simple, familiar tools like CSV files and spreadsheets. For HubSpot and Smartlead integrations, we provide step-by-step connection wizards and can assist with configuration if needed.'
  },
  {
    question: 'How long does it take to process new leads?',
    answer: 'Lead processing time depends on volume but typically happens within minutes. Small batches (under 100 leads) are usually processed in 3-5 minutes. Larger batches can take 10-15 minutes. Email discovery and verification happen in real-time, while AI enrichment typically adds 1-2 minutes per batch. The entire pipeline from CSV upload to CRM sync completes automatically without manual intervention.'
  }
];

const featureComparison = {
  categories: [
    {
      name: 'Core Features',
      features: [
        'Records per month',
        'Email discovery',
        'AI enrichment',
        'Export formats'
      ]
    },
    {
      name: 'Integrations',
      features: [
        'HubSpot sync',
        'Smartlead campaigns',
        'Custom API access',
        'White-label options'
      ]
    },
    {
      name: 'Support',
      features: [
        'Response time',
        'Support channels',
        'Onboarding',
        'Dedicated manager'
      ]
    }
  ],
  plans: [
    {
      name: 'Starter',
      values: [
        '500',
        'Basic',
        'Standard',
        'CSV only',
        '❌',
        '❌',
        '❌',
        '❌',
        '24 hours',
        'Email',
        'Self-service',
        '❌'
      ]
    },
    {
      name: 'Pro',
      values: [
        '2,000',
        'Advanced',
        'Advanced',
        'CSV, JSON, API',
        '✓',
        '✓',
        'Read-only',
        '❌',
        '12 hours',
        'Email, Chat',
        'Guided setup',
        '❌'
      ]
    },
    {
      name: 'Agency',
      values: [
        'Unlimited',
        'Premium',
        'Premium',
        'All formats',
        '✓',
        '✓',
        'Full access',
        '✓',
        '4 hours',
        'Email, Chat, Phone',
        'Concierge setup',
        '✓'
      ]
    }
  ]
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-background-dark"></div>
        
        <!-- Gradient Orbs -->
        <div class="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-neon-violet/20 blur-3xl"></div>
        <div class="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-neon-cyan/20 blur-3xl"></div>
        
        <!-- Grid pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      <div class="container relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet bg-clip-text text-transparent">
              Plans that Fit Your Flow
            </span>
          </h1>
          
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your sales automation needs, from individual prospectors to full agency teams.
          </p>
          
          <!-- Pricing Toggle -->
          <div class="flex items-center justify-center mb-12">
            <span 
              class="mr-3 text-lg"
              :class="isYearly ? 'text-white/50' : 'text-white'"
            >
              Monthly
            </span>
            <button 
              class="relative w-16 h-8 rounded-full bg-gray-750 flex items-center p-1 cursor-pointer transition-colors"
              :class="isYearly ? 'bg-neon-cyan/30' : 'bg-gray-750'"
              @click="toggleBilling"
            >
              <span 
                class="absolute w-6 h-6 rounded-full bg-white transition-transform duration-300"
                :class="isYearly ? 'transform translate-x-8' : ''"
              ></span>
            </button>
            <span 
              class="ml-3 text-lg flex items-center"
              :class="isYearly ? 'text-white' : 'text-white/50'"
            >
              Yearly
              <span class="ml-2 text-sm bg-neon-magenta text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Pricing Cards -->
    <section class="pb-20">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            v-for="(plan, index) in plans" 
            :key="index"
            class="relative"
          >
            <!-- Highlight Badge -->
            <div 
              v-if="plan.highlight" 
              class="absolute -top-4 inset-x-0 flex justify-center"
            >
              <span class="bg-neon-magenta text-white text-sm font-medium px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            
            <div 
              class="glass-card p-8 h-full flex flex-col transition-all duration-300"
              :class="{
                'ring-2 ring-neon-magenta shadow-glow-magenta': plan.highlight,
                'hover:shadow-glow': !plan.highlight
              }"
            >
              <!-- Plan Header -->
              <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
              <p class="text-white/70 mb-6">{{ plan.description }}</p>
              
              <!-- Pricing -->
              <div class="mb-6">
                <div class="flex items-end">
                  <span class="text-4xl font-bold">
                    ${{ isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice }}
                  </span>
                  <span class="text-white/70 ml-2">/month</span>
                </div>
                <div v-if="isYearly" class="text-sm text-white/50 mt-1">
                  Billed annually (${{'$' + plan.yearlyPrice }}/year)
                </div>
              </div>
              
              <!-- Features -->
              <ul class="space-y-3 mb-8 flex-grow">
                <li 
                  v-for="(feature, featureIndex) in plan.features" 
                  :key="featureIndex"
                  class="flex items-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-white/70">{{ feature }}</span>
                </li>
              </ul>
              
              <!-- CTA Button -->
              <button 
                class="w-full btn"
                :class="plan.highlight ? 'btn-primary' : 'btn-secondary'"
              >
                {{ plan.cta }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Feature Comparison Table -->
    <section class="section bg-gray-850 border-y border-gray-750">
      <div class="container">
        <SectionTitle 
          title="Compare Plan Features" 
          subtitle="See exactly what you get with each plan to make the right choice for your team."
        />
        
        <div class="max-w-5xl mx-auto overflow-x-auto glass-card">
          <table class="min-w-full divide-y divide-gray-750">
            <thead>
              <tr>
                <th class="px-6 py-4 text-left text-sm font-medium text-white/50 uppercase tracking-wider">Feature</th>
                <th 
                  v-for="(plan, index) in featureComparison.plans" 
                  :key="index"
                  class="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider"
                  :class="index === 1 ? 'text-neon-magenta' : 'text-white/90'"
                >
                  {{ plan.name }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-750">
              <!-- Category Headers -->
              <template v-for="(category, categoryIndex) in featureComparison.categories" :key="categoryIndex">
                <tr class="bg-background-dark/30">
                  <td colspan="4" class="px-6 py-3 text-sm font-semibold text-white">
                    {{ category.name }}
                  </td>
                </tr>
                
                <!-- Features in this category -->
                <tr 
                  v-for="(feature, featureIndex) in category.features" 
                  :key="`${categoryIndex}-${featureIndex}`"
                  class="hover:bg-background-dark/10"
                >
                  <td class="px-6 py-4 text-sm text-white/70">
                    {{ feature }}
                  </td>
                  <td 
                    v-for="(plan, planIndex) in featureComparison.plans" 
                    :key="`${categoryIndex}-${featureIndex}-${planIndex}`"
                    class="px-6 py-4 text-center text-sm"
                    :class="planIndex === 1 ? 'text-neon-magenta' : 'text-white/70'"
                  >
                    {{ plan.values[categoryIndex * category.features.length + featureIndex] }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
    <!-- ROI & Value Proposition -->
    <section class="section">
      <div class="container">
        <SectionTitle 
          title="Return on Investment" 
          subtitle="See how our automation platform pays for itself by saving time and increasing conversions."
        />
        
        <div class="max-w-4xl mx-auto glass-card p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-neon-cyan">Time Savings</h3>
              
              <div class="space-y-4">
                <div class="glass-card p-4 bg-background-dark/50">
                  <div class="flex justify-between mb-2">
                    <span class="text-white/70">Manual Prospecting</span>
                    <span class="text-white font-medium">10 hrs/week</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span class="text-white/70">Data Entry</span>
                    <span class="text-white font-medium">4 hrs/week</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span class="text-white/70">Research & Enrichment</span>
                    <span class="text-white font-medium">5 hrs/week</span>
                  </div>
                  <div class="flex justify-between pt-2 border-t border-gray-750">
                    <span class="text-white font-medium">Time Saved</span>
                    <span class="text-neon-cyan font-bold">15+ hrs/week</span>
                  </div>
                </div>
                
                <p class="text-white/70">
                  At an average SDR hourly cost of $25-35, automation saves $1,500-2,100 per month in labor costs alone.
                </p>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-neon-magenta">Conversion Improvements</h3>
              
              <div class="space-y-4">
                <div class="glass-card p-4 bg-background-dark/50">
                  <div class="flex justify-between mb-2">
                    <span class="text-white/70">Email Deliverability</span>
                    <span class="text-white font-medium">+35%</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span class="text-white/70">Response Rates</span>
                    <span class="text-white font-medium">+45%</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span class="text-white/70">Meeting Conversions</span>
                    <span class="text-white font-medium">+28%</span>
                  </div>
                  <div class="flex justify-between pt-2 border-t border-gray-750">
                    <span class="text-white font-medium">Revenue Impact</span>
                    <span class="text-neon-magenta font-bold">+32%</span>
                  </div>
                </div>
                
                <p class="text-white/70">
                  With higher quality data and personalization, most customers see pipeline growth of 25-40% within 60 days.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Break-even Example -->
          <div class="mt-12 p-6 border border-neon-cyan/30 rounded-lg bg-neon-cyan/5">
            <h3 class="text-xl font-semibold mb-4 text-center">Break-even Example</h3>
            
            <p class="text-white/80 mb-4">
              An SDR team of 3 using our Pro plan ($79/mo) will typically:
            </p>
            
            <ul class="space-y-2 mb-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Save 45+ hours/month in manual work (valued at $1,125+)</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Generate 3x more qualified meetings per month</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Add $3,000-5,000 in pipeline value from increased conversions</span>
              </li>
            </ul>
            
            <p class="text-neon-cyan font-medium text-center">
              ROI of 14x or more on your subscription investment
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="section bg-gray-850 border-y border-gray-750">
      <div class="container">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Get answers to the most common questions about our platform and pricing."
        />
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="glass-card p-6"
            >
              <h3 class="text-xl font-semibold mb-3">{{ faq.question }}</h3>
              <p class="text-white/70">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <CallToAction
      title="Ready to Automate Your Sales Pipeline?"
      subtitle="Get started with a free trial today and see the difference."
      primaryBtnText="Get Started Free"
      primaryBtnLink="/demo"
      secondaryBtnText="Contact Sales"
      secondaryBtnLink="/demo"
    />
  </div>
</template>