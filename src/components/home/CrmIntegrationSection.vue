<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const integrations = [
  {
    name: 'HubSpot',
    description: 'Sync contacts, companies, and deals with bi-directional integration',
    icon: 'M14.5 0h-13C.67 0 0 .67 0 1.5v13c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5zM12 2v9.5H4V2h8z'
  },
  {
    name: 'Smartlead',
    description: 'Automated campaign creation with intelligent email sequencing',
    icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
  },
  {
    name: 'Findymail',
    description: 'Real-time email discovery and verification for high deliverability',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
];

const navigateToFeatures = () => {
  router.push('/features');
};
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionTitle 
        title="Warm Leads to HubSpot & Smartlead" 
        subtitle="Our API syncs only the best contacts to your CRM and outbound campaigns."
      />
      
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div 
            v-for="(integration, index) in integrations" 
            :key="index"
            class="glass-card p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow text-center"
          >
            <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="integration.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ integration.name }}</h3>
            <p class="text-white/70">{{ integration.description }}</p>
          </div>
        </div>
        
        <!-- CRM Integration Features -->
        <div class="glass-card p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4 text-neon-cyan">Seamless Data Flow</h3>
              <ul class="space-y-3 text-white/70">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Automatic contact creation in HubSpot</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Company record linking with rich metadata</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Deal creation with proper lifecycle stage</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Custom field population with enriched data</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold mb-4 text-neon-magenta">Outreach Automation</h3>
              <ul class="space-y-3 text-white/70">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-magenta mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Smartlead campaign drafting based on lead data</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-magenta mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Personalized email sequences with enriched context</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-magenta mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Automated follow-up scheduling and tracking</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-magenta mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Response rate analytics and optimization</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <button class="btn-primary" @click="navigateToFeatures">
              See All Features
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>