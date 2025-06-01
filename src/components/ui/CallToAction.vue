<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{
  title: string;
  subtitle?: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}>();

const router = useRouter();

const navigate = (path: string) => {
  if (path.startsWith('http')) {
    window.open(path, '_blank');
  } else {
    router.push(path);
  }
};
</script>

<template>
  <div class="section bg-gray-850 border-y border-gray-750">
    <div class="container max-w-4xl text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ title }}</h2>
      <p v-if="subtitle" class="text-lg text-white/70 mb-8">{{ subtitle }}</p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button 
          class="btn-primary w-full sm:w-auto"
          @click="navigate(primaryBtnLink)"
        >
          {{ primaryBtnText }}
        </button>
        <button 
          v-if="secondaryBtnText && secondaryBtnLink" 
          class="btn-secondary w-full sm:w-auto"
          @click="navigate(secondaryBtnLink)"
        >
          {{ secondaryBtnText }}
        </button>
      </div>
    </div>
  </div>
</template>