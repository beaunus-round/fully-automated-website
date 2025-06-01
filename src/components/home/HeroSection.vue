<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToDemo = () => {
  router.push('/demo');
};

const getStarted = () => {
  router.push('/features');
};
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-background-dark"></div>
      
      <!-- Gradient Orbs -->
      <div class="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-neon-cyan/20 blur-3xl"></div>
      <div class="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-neon-magenta/20 blur-3xl"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
    </div>
    
    <div class="container relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span class="block">Fully Automated</span>
          <span class="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet bg-clip-text text-transparent">
            Sales Pipeline
          </span>
        </h1>
        
        <p class="text-xl sm:text-2xl text-white/80 mb-8">
          From LinkedIn & Crunchbase to HubSpot — Zero Manual Touch
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button 
            class="btn-primary text-lg"
            @click="navigateToDemo"
          >
            See My Demo
          </button>
          <button 
            class="btn-secondary text-lg"
            @click="getStarted"
          >
            Get Started Free
          </button>
        </div>
        
        <!-- Floating Animation Pipeline Graphic -->
        <div class="glass-card p-4 md:p-8 mb-8 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-magenta/10 to-neon-violet/10 opacity-50"></div>
          
          <div class="relative">
            <!-- Pipeline Illustration -->
            <div class="flex flex-col md:flex-row items-center justify-between relative">
              <!-- Input Sources -->
              <div class="text-center mb-8 md:mb-0">
                <div class="w-16 h-16 mx-auto bg-gray-750 rounded-lg flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <p class="text-sm font-medium text-white/70">LinkedIn & Crunchbase</p>
              </div>
              
              <!-- Arrow Animation -->
              <div class="h-12 w-12 md:w-24 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neon-magenta" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              
              <!-- AI Processing -->
              <div class="text-center mb-8 md:mb-0">
                <div class="w-16 h-16 mx-auto bg-gray-750 rounded-lg flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-magenta" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-sm font-medium text-white/70">AI Enrichment</p>
              </div>
              
              <!-- Arrow Animation -->
              <div class="h-12 w-12 md:w-24 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neon-magenta" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              
              <!-- Output Destinations -->
              <div class="text-center">
                <div class="w-16 h-16 mx-auto bg-gray-750 rounded-lg flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-violet" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-sm font-medium text-white/70">HubSpot & Smartlead</p>
              </div>
            </div>
          </div>
        </div>
        
        <p class="text-white/50 text-sm">
          Automated processing with quality control and intelligent routing
        </p>
      </div>
    </div>
  </section>
</template>