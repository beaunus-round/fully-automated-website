<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}>();
</script>

<template>
  <div 
    class="mb-12 max-w-3xl"
    :class="{
      'mx-auto text-center': align === 'center' || !align,
      'ml-0 text-left': align === 'left',
      'ml-auto text-right': align === 'right'
    }"
  >
    <h2 class="mb-4 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet bg-clip-text text-transparent">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg text-white/70">
      {{ subtitle }}
    </p>
  </div>
</template>