<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  company: '',
  useCase: '',
  message: ''
});

const useCaseOptions = [
  'Individual prospecting',
  'Small team automation',
  'Agency multi-client',
  'Enterprise integration',
  'Other'
];

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref('');

const submitForm = () => {
  isSubmitting.value = true;
  errorMessage.value = '';
  
  // Validate form
  if (!form.value.name || !form.value.email || !form.value.company || !form.value.useCase) {
    errorMessage.value = 'Please fill in all required fields';
    isSubmitting.value = false;
    return;
  }
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      company: '',
      useCase: '',
      message: ''
    };
  }, 1000);
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-16 relative overflow-hidden">
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
              Let's Talk Results
            </span>
          </h1>
          
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our automated pipeline can work for your specific needs.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Demo Form Section -->
    <section class="pb-24">
      <div class="container">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Form Column -->
            <div class="md:col-span-2">
              <div class="glass-card p-8">
                <h2 class="text-2xl font-semibold mb-6">Book Your Personalized Demo</h2>
                
                <div v-if="!isSubmitted">
                  <form @submit.prevent="submitForm">
                    <div class="space-y-6">
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label for="name" class="block text-sm font-medium text-white/70 mb-1">Full Name *</label>
                          <input 
                            id="name"
                            v-model="form.name"
                            type="text" 
                            class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label for="email" class="block text-sm font-medium text-white/70 mb-1">Email Address *</label>
                          <input 
                            id="email"
                            v-model="form.email"
                            type="email" 
                            class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label for="company" class="block text-sm font-medium text-white/70 mb-1">Company *</label>
                          <input 
                            id="company"
                            v-model="form.company"
                            type="text" 
                            class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
                            placeholder="Your company name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label for="useCase" class="block text-sm font-medium text-white/70 mb-1">Use Case *</label>
                          <select 
                            id="useCase"
                            v-model="form.useCase"
                            class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
                            required
                          >
                            <option value="" disabled selected>Select your use case</option>
                            <option v-for="(option, index) in useCaseOptions" :key="index" :value="option">
                              {{ option }}
                            </option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label for="message" class="block text-sm font-medium text-white/70 mb-1">Additional Information</label>
                        <textarea 
                          id="message"
                          v-model="form.message"
                          rows="4" 
                          class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
                          placeholder="Tell us about your current sales process and challenges"
                        ></textarea>
                      </div>
                      
                      <div v-if="errorMessage" class="text-red-500 text-sm py-2">
                        {{ errorMessage }}
                      </div>
                      
                      <div>
                        <button 
                          type="submit" 
                          class="w-full btn-primary text-lg relative overflow-hidden group"
                          :disabled="isSubmitting"
                        >
                          <span v-if="isSubmitting" class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-background-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                          <span v-else>Schedule My Demo</span>
                          
                          <!-- Button Hover Effect -->
                          <div class="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                
                <div v-else class="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-neon-cyan mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 class="text-2xl font-bold mb-2">Thank You!</h3>
                  <p class="text-white/70 mb-4">Your demo request has been submitted successfully.</p>
                  <p class="text-white/90 mb-6">One of our team members will contact you within 24 hours to schedule your personalized demo.</p>
                  <router-link to="/" class="btn-secondary">
                    Return to Home
                  </router-link>
                </div>
              </div>
            </div>
            
            <!-- Sidebar Column -->
            <div class="md:col-span-1">
              <div class="glass-card p-8 h-full">
                <!-- Testimonial -->
                <div class="mb-8">
                  <div class="mb-4">
                    <svg class="h-6 w-6 text-neon-cyan mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <p class="text-white/80 italic mb-4">
                      "The demo was eye-opening. Seeing how much time we could save with automation made the decision to adopt the platform easy."
                    </p>
                    
                    <div>
                      <p class="font-semibold">Michael Chen</p>
                      <p class="text-white/50 text-sm">SDR Manager, GrowthPoint</p>
                    </div>
                  </div>
                </div>
                
                <!-- Stats -->
                <div class="space-y-6">
                  <div class="p-4 glass-card bg-background-dark/50">
                    <p class="text-white/50 text-sm">Average Time Saved</p>
                    <p class="text-2xl font-bold text-neon-cyan">15+ hours/week</p>
                  </div>
                  
                  <div class="p-4 glass-card bg-background-dark/50">
                    <p class="text-white/50 text-sm">Response Rate Increase</p>
                    <p class="text-2xl font-bold text-neon-magenta">+45%</p>
                  </div>
                  
                  <div class="p-4 glass-card bg-background-dark/50">
                    <p class="text-white/50 text-sm">Average ROI</p>
                    <p class="text-2xl font-bold text-neon-violet">14x</p>
                  </div>
                </div>
                
                <!-- Contact Info -->
                <div class="mt-8 pt-8 border-t border-gray-750">
                  <p class="text-white/50 text-sm mb-2">Need immediate assistance?</p>
                  <p class="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:sales@fullyautomated.com" class="text-neon-cyan hover:underline">
                      sales@fullyautomated.com
                    </a>
                  </p>
                  <p class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neon-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="text-white">+1 (888) 555-1234</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>