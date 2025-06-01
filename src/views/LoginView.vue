<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

const formError = ref('')
const successMessage = ref('')

const handleLogin = async () => {
  formError.value = ''
  successMessage.value = ''
  
  if (!form.value.email || !form.value.password) {
    formError.value = 'Please fill in all fields'
    return
  }
  
  const { data, error } = await authStore.signIn(form.value.email, form.value.password)
  
  if (error) {
    formError.value = error
  } else if (data?.user) {
    successMessage.value = 'Login successful! Redirecting...'
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center py-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-background-dark"></div>
      
      <!-- Gradient Orbs -->
      <div class="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-neon-cyan/20 blur-3xl"></div>
      <div class="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-neon-magenta/20 blur-3xl"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
    </div>
    
    <div class="relative z-10 w-full max-w-md px-4">
      <div class="glass-card p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold mb-2">
            <span class="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet bg-clip-text text-transparent">
              Welcome Back
            </span>
          </h1>
          <p class="text-white/70">Sign in to access your dashboard</p>
        </div>
        
        <!-- Success Message -->
        <div v-if="successMessage" class="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-green-400">{{ successMessage }}</span>
          </div>
        </div>
        
        <form @submit.prevent="handleLogin">
          <div class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-white/70 mb-1">
                Email Address
              </label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white placeholder-white/40"
                placeholder="you@company.com"
                required
              />
            </div>
            
            <div>
              <label for="password" class="block text-sm font-medium text-white/70 mb-1">
                Password
              </label>
              <input 
                id="password"
                v-model="form.password"
                type="password" 
                class="w-full px-4 py-3 bg-background-dark border border-gray-750 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white placeholder-white/40"
                placeholder="Your password"
                required
              />
            </div>
            
            <!-- Error Message -->
            <div v-if="formError || authStore.error" class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span class="text-red-400">{{ formError || authStore.error }}</span>
              </div>
            </div>
            
            <button 
              type="submit" 
              class="w-full btn-primary text-lg relative overflow-hidden group"
              :disabled="authStore.loading"
            >
              <span v-if="authStore.loading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-background-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </span>
              <span v-else>Sign In</span>
              
              <!-- Button Hover Effect -->
              <div class="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </form>
        
        <div class="mt-6 text-center">
          <p class="text-white/50 text-sm">
            Need access? Contact your administrator
          </p>
        </div>
      </div>
    </div>
  </div>
</template>