<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const currentYear = new Date().getFullYear();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<template>
  <footer class="bg-gray-850 border-t border-gray-750 pt-16 pb-8">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-1">
          <div class="text-xl font-bold tracking-tight mb-4">
            <span class="text-white">Fully</span>
            <span class="text-neon-cyan">Automated</span>
          </div>
          <p class="text-white/70 mb-4">
            From LinkedIn & Crunchbase to HubSpot — Zero Manual Touch
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Navigation Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Product</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/features" class="text-white/70 hover:text-neon-cyan transition-colors">
                Features
              </router-link>
            </li>
            <li>
              <router-link to="/pricing" class="text-white/70 hover:text-neon-cyan transition-colors">
                Pricing
              </router-link>
            </li>
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                Roadmap
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/resources" class="text-white/70 hover:text-neon-cyan transition-colors">
                Blog
              </router-link>
            </li>
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                Documentation
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" class="text-white/70 hover:text-neon-cyan transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Footer -->
      <div class="pt-8 border-t border-gray-750 flex flex-col md:flex-row justify-between items-center">
        <p class="text-white/50 text-sm mb-4 md:mb-0">
          © {{ currentYear }} Fully Automated Sales Pipeline. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-white/50 hover:text-neon-cyan transition-colors text-sm">
            Privacy Policy
          </a>
          <a href="#" class="text-white/50 hover:text-neon-cyan transition-colors text-sm">
            Terms of Service
          </a>
          <a href="#" class="text-white/50 hover:text-neon-cyan transition-colors text-sm">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>