<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue';

const steps = [
  {
    id: 1,
    title: 'Manual list building',
    description: 'Use LinkedIn & Crunchbase to gather your initial prospect URLs',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    id: 2,
    title: 'Paste URLs into FindyLead',
    description: 'Bulk upload your URLs and receive a structured CSV',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
  },
  {
    id: 3,
    title: 'Gmail triggers automation',
    description: 'Automated Google Sheets workflow processes the CSV',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    id: 4,
    title: 'Findymail API lookup',
    description: 'Email addresses are discovered and verified',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: 5,
    title: 'AI enrichment',
    description: 'Company data is enhanced with detailed descriptions',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    id: 6,
    title: 'QA scoring system',
    description: 'AI checks accuracy and confidence of enriched data',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    id: 7,
    title: 'High-quality leads routed',
    description: 'Top prospects sent to Smartlead and HubSpot automatically',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
];
</script>

<template>
  <section class="section bg-gray-850 border-y border-gray-750">
    <div class="container">
      <SectionTitle 
        title="How It Works" 
        subtitle="From manual prospecting to fully automated handoff, our pipeline operates with minimal touch points."
      />
      
      <div class="max-w-4xl mx-auto">
        <!-- Step-by-step Timeline -->
        <div class="relative">
          <!-- Connection Line -->
          <div class="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-violet"></div>
          
          <!-- Steps -->
          <div class="space-y-12">
            <div 
              v-for="step in steps" 
              :key="step.id"
              class="relative pl-16"
            >
              <!-- Step Number -->
              <div class="absolute left-0 w-12 h-12 rounded-full glass-card flex items-center justify-center border-2 border-neon-cyan">
                <span class="text-neon-cyan font-bold">{{ step.id }}</span>
              </div>
              
              <!-- Step Content -->
              <div class="glass-card p-6 transition-all duration-300 hover:shadow-glow">
                <div class="flex items-start">
                  <div class="mr-4 text-neon-cyan">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="step.icon" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
                    <p class="text-white/70">{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>