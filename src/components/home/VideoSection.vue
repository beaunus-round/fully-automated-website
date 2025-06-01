<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const openDemo = () => {
  router.push('/demo');
};
</script>

<template>
  <section class="section bg-gray-850 border-y border-gray-750">
    <div class="container">
      <SectionTitle 
        title="Watch It Work" 
        subtitle="A 60-second walkthrough of how your entire pipeline runs without you."
      />
      
      <div class="max-w-4xl mx-auto">
        <!-- Video Embed -->
        <div class="glass-card p-4 mb-8 aspect-video relative overflow-hidden group">
          <!-- This would be a real video in production -->
          <div class="absolute inset-0 bg-background-dark/50 backdrop-blur-sm flex items-center justify-center">
            <div class="text-center">
              <div class="w-20 h-20 mx-auto bg-neon-cyan/20 rounded-full flex items-center justify-center mb-4 cursor-pointer group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-neon-cyan" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-lg font-medium">Click to Play Demo Video</p>
            </div>
          </div>
        </div>
        
        <!-- Video Benefits -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="glass-card p-6 text-center">
            <div class="w-12 h-12 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Save 15+ Hours Weekly</h3>
            <p class="text-white/70">Eliminate manual prospecting and data entry tasks</p>
          </div>
          
          <div class="glass-card p-6 text-center">
            <div class="w-12 h-12 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-magenta">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neon-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">98.5% Delivery Rate</h3>
            <p class="text-white/70">Higher inbox placement with verified emails</p>
          </div>
          
          <div class="glass-card p-6 text-center">
            <div class="w-12 h-12 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-violet">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neon-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">3.2x Response Rates</h3>
            <p class="text-white/70">Better engagement with AI-enriched personalization</p>
          </div>
        </div>
        
        <!-- CTA Button -->
        <div class="text-center">
          <button class="btn-primary" @click="openDemo">
            Book My Walkthrough
          </button>
        </div>
      </div>
    </div>
  </section>
</template>