<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SectionTitle from '../ui/SectionTitle.vue';

const testimonials = [
  {
    id: 1,
    quote: "This pipeline automation has completely transformed how our SDR team operates. We're spending 80% less time on manual tasks and 4x more time on actual selling.",
    name: "Sarah Johnson",
    title: "Head of Sales, TechConnect",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    quote: "The AI enrichment is what makes this tool stand out. We're getting prospect insights that would take hours of research, all delivered automatically to our HubSpot.",
    name: "Michael Chen",
    title: "SDR Manager, GrowthPoint",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    quote: "As an agency, we needed a solution that scales with our client volume. This system handles hundreds of leads daily with quality we couldn't achieve manually.",
    name: "Aisha Patel",
    title: "Director, LeadGen Partners",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const companyLogos = [
  { name: "TechConnect", grayscale: true },
  { name: "GrowthPoint", grayscale: true },
  { name: "LeadGen Partners", grayscale: true },
  { name: "Stratosphere", grayscale: true },
  { name: "BlueWave", grayscale: true },
  { name: "NextLevel", grayscale: true }
];

const currentTestimonial = ref(0);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length;
};

let autoplayInterval: number | null = null;

onMounted(() => {
  autoplayInterval = window.setInterval(() => {
    nextTestimonial();
  }, 5000);
});
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionTitle 
        title="Trusted by Top SDRs & Agencies" 
        subtitle="Hear from the teams who've transformed their sales processes with our pipeline automation."
      />
      
      <div class="max-w-4xl mx-auto">
        <!-- Testimonial Carousel -->
        <div class="relative glass-card p-8 mb-12">
          <div class="testimonial-container overflow-hidden">
            <transition-group name="slide" tag="div">
              <div 
                v-for="(testimonial, index) in testimonials" 
                :key="testimonial.id"
                v-show="index === currentTestimonial"
                class="testimonial-item"
              >
                <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div class="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
                  </div>
                  
                  <div>
                    <svg class="h-8 w-8 text-neon-cyan mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <p class="text-xl italic mb-6 text-white/90">{{ testimonial.quote }}</p>
                    
                    <div>
                      <p class="font-semibold text-lg">{{ testimonial.name }}</p>
                      <p class="text-white/70">{{ testimonial.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
          
          <!-- Navigation Arrows -->
          <button 
            class="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background-dark flex items-center justify-center text-white/70 hover:text-neon-cyan hover:border-neon-cyan border border-gray-750"
            @click="prevTestimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <button 
            class="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background-dark flex items-center justify-center text-white/70 hover:text-neon-cyan hover:border-neon-cyan border border-gray-750"
            @click="nextTestimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <!-- Indicator Dots -->
          <div class="flex justify-center mt-6 space-x-2">
            <button 
              v-for="(_, index) in testimonials" 
              :key="index"
              class="w-2.5 h-2.5 rounded-full"
              :class="index === currentTestimonial ? 'bg-neon-cyan' : 'bg-gray-750'"
              @click="currentTestimonial = index"
            ></button>
          </div>
        </div>
        
        <!-- Client Logos -->
        <div class="py-8 border-t border-gray-750">
          <p class="text-center text-white/50 text-sm mb-8">TRUSTED BY INDUSTRY LEADERS</p>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div 
              v-for="(logo, index) in companyLogos" 
              :key="index"
              class="flex items-center justify-center h-12"
            >
              <!-- These would be actual logo images in production -->
              <div 
                class="text-lg font-bold"
                :class="logo.grayscale ? 'text-white/30' : 'text-white'"
              >
                {{ logo.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.testimonial-item {
  width: 100%;
}
</style>