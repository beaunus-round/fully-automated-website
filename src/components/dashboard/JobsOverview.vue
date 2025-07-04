<script setup lang="ts">
import type { Job } from '../../types'

defineProps<{
  jobs: Job[]
}>()
</script>

<template>
  <div class="glass-card p-6">
    <h3 class="text-lg font-semibold mb-4">Jobs Overview</h3>
    
    <div v-if="jobs.length === 0" class="text-center py-8">
      <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-cyan">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <p class="text-white/70">No jobs found. Your pipeline is ready to process new leads.</p>
    </div>
    
    <div v-else class="space-y-4">
      <div 
        v-for="job in jobs" 
        :key="job.id"
        class="p-4 bg-background-dark/50 rounded-lg border border-gray-750"
      >
        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-medium">{{ job.type }}</h4>
            <p class="text-sm text-white/70">{{ job.webhook_id }}</p>
          </div>
          <span 
            class="px-2 py-1 rounded-full text-xs font-medium"
            :class="{
              'bg-yellow-500/20 text-yellow-400': job.status === 'needs_qa',
              'bg-blue-500/20 text-blue-400': job.status === 'in_progress',
              'bg-green-500/20 text-green-400': job.status === 'completed',
              'bg-red-500/20 text-red-400': job.status === 'failed'
            }"
          >
            {{ job.status.replace('_', ' ').toUpperCase() }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>