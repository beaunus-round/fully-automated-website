<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  name: '',
  email: '',
  company: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref('');

const submitForm = () => {
  isSubmitting.value = true;
  errorMessage.value = '';
  
  // Validate form
  if (!form.value.name || !form.value.email || !form.value.company) {
    errorMessage.value = 'Please fill in all fields';
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
      company: ''
    };
    
    // Redirect after success
    setTimeout(() => {
      router.push('/features');
    }, 2000);
  }, 1000);
};
</script>

<template>
  <section class="section bg-gradient-to-br from-background-dark via-gray-850 to-background-dark">
    <div class="container max-w-4xl">
      <div class="glass-card p-8 overflow-hidden relative">
        <!-- Background Gradient Effects -->
        <div class="absolute -top-20 -right-20 w-60 h-60 bg-neon-cyan/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-neon-magenta/20 rounded-full blur-3xl"></div>
        
        <!-- Content -->
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">Let's Automate Together</h2>
          <p class="text-lg text-white/70 mb-8 text-center max-w-xl mx-auto">
            Ready to transform your sales process? Start with a free pipeline assessment.
          </p>
          
          <div v-if="!isSubmitted" class="max-w-md mx-auto">
            <form @submit.prevent="submitForm">
              <div class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-white/70 mb-1">Full Name</label>
                  <input 
                    id="name"
                    v-model="form.name"
                    type="text" 
                    class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                  <input 
                    id="email"
                    v-model="form.email"
                    type="email" 
                    class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
                    placeholder="you@company.com"
                  />
                </div>
                
                <div>
                  <label for="company" class="block text-sm font-medium text-white/70 mb-1">Company</label>
                  <input 
                    id="company"
                    v-model="form.company"
                    type="text" 
                    class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
                    placeholder="Your company name"
                  />
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
                    <span v-else>Start My Pipeline</span>
                    
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
            <p class="text-white/70 mb-4">Your request has been submitted successfully.</p>
            <p class="text-white/50">Redirecting you to our features page...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>