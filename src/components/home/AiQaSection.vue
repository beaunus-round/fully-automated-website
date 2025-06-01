<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue';

const confidenceTiers = [
  {
    percentage: '85%+',
    label: 'Auto-approved',
    description: 'High confidence leads are automatically approved and passed to your outreach tools',
    color: 'neon-cyan'
  },
  {
    percentage: '50-85%',
    label: 'Sent to QA queue',
    description: 'Medium confidence leads are flagged for human review before processing',
    color: 'neon-magenta'
  },
  {
    percentage: '<50%',
    label: 'Discarded or rewritten',
    description: 'Low confidence leads are either dropped or enhanced with additional research',
    color: 'neon-violet'
  }
];
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionTitle 
        title="AI That Checks Itself" 
        subtitle="Each company description is verified against their domain using a blend of semantic similarity and structured AI checks."
      />
      
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="(tier, index) in confidenceTiers" 
            :key="index"
            class="glass-card p-6 transition-all duration-300 hover:scale-105"
            :class="{
              'hover:shadow-glow': tier.color === 'neon-cyan',
              'hover:shadow-glow-magenta': tier.color === 'neon-magenta',
              'hover:shadow-glow-violet': tier.color === 'neon-violet'
            }"
          >
            <div 
              class="text-4xl font-bold mb-2"
              :class="{
                'text-neon-cyan': tier.color === 'neon-cyan',
                'text-neon-magenta': tier.color === 'neon-magenta',
                'text-neon-violet': tier.color === 'neon-violet'
              }"
            >
              {{ tier.percentage }}
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ tier.label }}</h3>
            <p class="text-white/70">{{ tier.description }}</p>
          </div>
        </div>
        
        <!-- AI Verification Diagram -->
        <div class="glass-card p-6 mt-12">
          <h3 class="text-xl font-semibold mb-4 text-center">How AI Verification Works</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-medium mb-3 text-neon-cyan">Semantic Analysis</h4>
              <ul class="space-y-2 text-white/70">
                <li class="flex items-start">
                  <span class="text-neon-cyan mr-2">•</span>
                  <span>Domain content scraping and summarization</span>
                </li>
                <li class="flex items-start">
                  <span class="text-neon-cyan mr-2">•</span>
                  <span>Comparison with AI-generated company description</span>
                </li>
                <li class="flex items-start">
                  <span class="text-neon-cyan mr-2">•</span>
                  <span>Vector similarity scoring using embeddings</span>
                </li>
                <li class="flex items-start">
                  <span class="text-neon-cyan mr-2">•</span>
                  <span>Key phrase extraction and matching</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-medium mb-3 text-neon-magenta">Structural Verification</h4>
              <ul class="space-y-2 text-white/70">
                <li class="flex items-start">
                  <span class="text-neon-magenta mr-2">•</span>
                  <span>Company name and URL consistency check</span>
                </li>
                <li class="flex items-start">
                  <span class="text-neon-magenta mr-2">•</span>
                  <span>Industry classification validation</span>
                </li>
                <li class="flex items-start">
                  <span class="text-neon-magenta mr-2">•</span>
                  <span>Employee count and revenue range verification</span>
                </li>
                <li class="flex items-start">
                  <span class="text-neon-magenta mr-2">•</span>
                  <span>Contact detail format and validity assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>