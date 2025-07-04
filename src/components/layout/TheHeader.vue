<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

defineProps<{
  isScrolled: boolean
}>();

const router = useRouter();
const authStore = useAuthStore();
const mobileMenuOpen = ref(false);

const isAuthenticated = computed(() => authStore.isAuthenticated);

onMounted(() => {
  // Initialize auth store when header mounts
  authStore.initialize();
});

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const navigateTo = (path: string) => {
  router.push(path);
  closeMobileMenu();
};

const handleSignOut = async () => {
  await authStore.signOut();
  router.push('/');
  closeMobileMenu();
};
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'py-3 bg-background-dark/90 backdrop-blur-md shadow-lg' 
        : 'py-5 bg-transparent'
    ]"
  >
    <div class="container flex items-center justify-between">
      <!-- Logo -->
      <div 
        class="text-xl md:text-2xl font-bold tracking-tight cursor-pointer"
        @click="navigateTo('/')"
      >
        <span class="text-white">Fully</span>
        <span class="text-neon-cyan">Automated</span>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <router-link 
          to="/" 
          class="text-white/80 hover:text-neon-cyan transition-colors"
          active-class="text-neon-cyan"
        >
          Home
        </router-link>
        <router-link 
          to="/features" 
          class="text-white/80 hover:text-neon-cyan transition-colors"
          active-class="text-neon-cyan"
        >
          Features
        </router-link>
        <router-link 
          to="/pricing" 
          class="text-white/80 hover:text-neon-cyan transition-colors"
          active-class="text-neon-cyan"
        >
          Pricing
        </router-link>
        <router-link 
          to="/resources" 
          class="text-white/80 hover:text-neon-cyan transition-colors"
          active-class="text-neon-cyan"
        >
          Resources
        </router-link>
        
 In
          </router-link>
          <router-link 
            to="/signup" 
            class="btn-primary"
          >
            Get Started
          </router-link>
        </template>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden text-white focus:outline-none"
        @click="toggleMobileMenu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            v-if="!mobileMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-lg border-t border-gray-750"
    >
      <div class="container py-4 flex flex-col space-y-4">
        <router-link 
          to="/" 
          class="text-white/80 hover:text-neon-cyan py-2 transition-colors"
          active-class="text-neon-cyan"
          @click="closeMobileMenu"
        >
          Home
        </router-link>
        <router-link 
          to="/features" 
          class="text-white/80 hover:text-neon-cyan py-2 transition-colors"
          active-class="text-neon-cyan"
          @click="closeMobileMenu"
        >
          Features
        </router-link>
        <router-link 
          to="/pricing" 
          class="text-white/80 hover:text-neon-cyan py-2 transition-colors"
          active-class="text-neon-cyan"
          @click="closeMobileMenu"
        >
          Pricing
        </router-link>
        <router-link 
          to="/resources" 
          class="text-white/80 hover:text-neon-cyan py-2 transition-colors"
          active-class="text-neon-cyan"
          @click="closeMobileMenu"
        >
          Resources
        </router-link>
        
        <!-- Auth Navigation Mobile -->
        <template v-if="isAuthenticated">
          <router-link 
            to="/dashboard" 
            class="text-white/80 hover:text-neon-cyan py-2 transition-colors"
            active-class="text-neon-cyan"
            @click="closeMobileMenu"
          >
            Dashboard
          </router-link>
          <button 
            @click="handleSignOut"
            class="text-white/80 hover:text-neon-cyan py-2 transition-colors text-left"
          >
            Sign Out
          </button>
        </template>
        <template v-else>
          <router-link 
            to="/login" 
            class="btn-primary w-full text-center"
            @click="closeMobileMenu"
            Sign In
          </router-link>
        </template>
      </div>
    </div>
  </header>
</template>