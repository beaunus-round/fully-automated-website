<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const sidebarOpen = ref(false)
const currentPage = ref('enrichment-queue')

onMounted(async () => {
  // Set sidebar default state based on screen size
  sidebarOpen.value = window.innerWidth >= 1024 // lg breakpoint
})

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const navigateToPage = (page: string) => {
  currentPage.value = page
  // Close sidebar on mobile after navigation
  if (window.innerWidth < 1024) {
    sidebarOpen.value = false
  }
}

const handleSignOut = async () => {
  await authStore.signOut()
}

const menuItems = [
  {
    id: 'enrichment-queue',
    name: 'Enrichment Queue',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    id: 'job-logs',
    name: 'Job Logs',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 'campaign-analytics',
    name: 'Campaign Analytics',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  }
]
</script>

<template>
  <div class="min-h-screen bg-background-dark flex">
    <!-- Sidebar Overlay (Mobile) -->
    <div 
      v-if="sidebarOpen" 
      class="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
      @click="toggleSidebar"
    ></div>

    <!-- Sidebar -->
    <div 
      class="fixed inset-y-0 left-0 z-50 w-64 bg-background-card border-r border-gray-750 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Sidebar Header -->
      <div class="flex items-center justify-between h-16 px-6 border-b border-gray-750">
        <div class="text-lg font-bold">
          <span class="text-white">Fully</span>
          <span class="text-neon-cyan">Automated</span>
        </div>
        <button 
          @click="toggleSidebar"
          class="lg:hidden text-white/70 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6 space-y-2">
        <button
          v-for="item in menuItems"
          :key="item.id"
          @click="navigateToPage(item.id)"
          class="w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200"
          :class="currentPage === item.id 
            ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20' 
            : 'text-white/70 hover:text-white hover:bg-gray-750'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
          </svg>
          <span class="font-medium">{{ item.name }}</span>
        </button>
      </nav>

      <!-- User Section -->
      <div class="p-4 border-t border-gray-750">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-neon-cyan/20 rounded-full flex items-center justify-center">
              <span class="text-neon-cyan text-sm font-medium">
                {{ authStore.user?.email?.charAt(0).toUpperCase() }}
              </span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">
                {{ authStore.user?.email }}
              </p>
            </div>
          </div>
          <button 
            @click="handleSignOut"
            class="text-white/70 hover:text-red-400 transition-colors"
            title="Sign out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Header -->
      <header class="h-16 bg-background-card border-b border-gray-750 flex items-center justify-between px-6">
        <div class="flex items-center space-x-4">
          <!-- Mobile Menu Button -->
          <button 
            @click="toggleSidebar"
            class="lg:hidden text-white/70 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <!-- Page Title -->
          <h1 class="text-xl font-semibold text-white">
            {{ menuItems.find(item => item.id === currentPage)?.name || 'Dashboard' }}
          </h1>
        </div>

        <!-- Header Actions -->
        <div class="flex items-center space-x-4">
          <div class="text-white/70 text-sm">
            Welcome back, {{ authStore.user?.user_metadata?.first_name || 'User' }}
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto bg-background-dark">
        <div class="p-6">
          <!-- Enrichment Queue -->
          <div v-if="currentPage === 'enrichment-queue'" class="space-y-6">
            <div class="glass-card p-8 text-center">
              <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Enrichment Queue</h3>
              <p class="text-white/70 mb-6">
                Your enrichment queue is being set up. Jobs requiring QA will appear here.
              </p>
              <div class="text-sm text-white/50">
                <p>Coming soon:</p>
                <ul class="mt-2 space-y-1">
                  <li>• Review AI-generated company descriptions</li>
                  <li>• Approve or reject enriched data</li>
                  <li>• Monitor enrichment quality scores</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Job Logs -->
          <div v-else-if="currentPage === 'job-logs'" class="space-y-6">
            <div class="glass-card p-8 text-center">
              <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-magenta">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Job Logs</h3>
              <p class="text-white/70 mb-6">
                Detailed logs of all processing jobs will be displayed here.
              </p>
              <div class="text-sm text-white/50">
                <p>Coming soon:</p>
                <ul class="mt-2 space-y-1">
                  <li>• View processing history</li>
                  <li>• Filter by job status and type</li>
                  <li>• Export job data and errors</li>
                  <li>• Real-time job monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Campaign Analytics -->
          <div v-else-if="currentPage === 'campaign-analytics'" class="space-y-6">
            <div class="glass-card p-8 text-center">
              <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-violet">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Campaign Analytics</h3>
              <p class="text-white/70 mb-6">
                Your campaign performance data and analytics will be shown here.
              </p>
              <div class="text-sm text-white/50">
                <p>Coming soon:</p>
                <ul class="mt-2 space-y-1">
                  <li>• Real-time Smartlead campaign metrics</li>
                  <li>• Response rate tracking</li>
                  <li>• Lead conversion analytics</li>
                  <li>• Performance comparisons</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template><script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useDashboard } from '../composables/useDashboard'
import JobsOverview from '../components/dashboard/JobsOverview.vue'

const authStore = useAuthStore()
const { 
  jobs,
  campaigns, 
  qaJobs, 
  hasCampaigns, 
  loading, 
  error,
  fetchJobs,
  fetchUserCampaigns,
  processQAJob
} = useDashboard()

onMounted(async () => {
  await fetchJobs()
  await fetchUserCampaigns()
})

const handleProcessJob = async (jobId: string) => {
  const result = await processQAJob(jobId)
  if (result.success) {
    // Show success message or toast
    console.log('Job processed successfully')
  } else {
    // Show error message
    console.error('Failed to process job:', result.error)
  }
}

const handleSignOut = () => {
  authStore.signOut()
}
</script>

<template>
  <div class="min-h-screen pt-20">
    <!-- Header -->
    <div class="border-b border-gray-750 bg-background-dark/50 backdrop-blur-md">
      <div class="container py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold">Dashboard</h1>
            <p class="text-white/70">Welcome back, {{ authStore.user?.user_metadata?.first_name || 'User' }}</p>
          </div>
          <button @click="handleSignOut" class="btn-secondary text-sm">
            Sign Out
          </button>
        </div>
      </div>
    </div>

    <div class="container py-8">
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="flex items-center space-x-3">
          <svg class="animate-spin h-6 w-6 text-neon-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-white/70">Loading dashboard...</span>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="glass-card p-6 border-red-500/50">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 class="font-semibold text-red-400">Error Loading Dashboard</h3>
            <p class="text-white/70">{{ error }}</p>
          </div>
        </div>
      </div>

      <!-- No Campaigns State -->
      <div v-else-if="!hasCampaigns" class="text-center py-12">
        <div class="glass-card p-8 max-w-md mx-auto">
          <div class="w-16 h-16 mx-auto bg-background-dark rounded-full flex items-center justify-center mb-4 border border-neon-cyan">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">Setting Up Your Pipeline</h3>
          <p class="text-white/70 mb-6">
            Your automated sales pipeline is being configured. Come back soon for campaign stats and analytics!
          </p>
          <div class="text-sm text-white/50">
            <p>While you wait, your campaigns are being:</p>
            <ul class="mt-2 space-y-1">
              <li>• Connected to data sources</li>
              <li>• Configured with AI enrichment</li>
              <li>• Integrated with your CRM</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dashboard Content -->
      <div v-else class="space-y-8">
        <!-- Jobs Overview -->
        <div v-if="jobs.length > 0">
          <h2 class="text-xl font-semibold mb-4">Jobs Overview</h2>
          <JobsOverview :jobs="jobs" />
        </div>

        <!-- QA Jobs Section -->
        <div v-if="qaJobs.length > 0">
          <h2 class="text-xl font-semibold mb-4">Jobs Requiring QA</h2>
          <div class="space-y-4">
            <div 
              v-for="job in qaJobs" 
              :key="job.id"
              class="glass-card p-6"
            >
              <div class="flex items-start justify-between">
                <div class="flex-grow">
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="font-semibold">Job #{{ job.id.slice(-8) }}</h3>
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
                  
                  <div class="space-y-1 text-sm">
                    <p class="text-white/70">Type: <span class="text-white">{{ job.type }}</span></p>
                    <p class="text-white/70">Webhook ID: <span class="text-white/90">{{ job.webhook_id }}</span></p>
                    <p class="text-white/70">Attempts: <span class="text-white/90">{{ job.attempt_count }}</span></p>
                    <p class="text-white/50 text-xs">Created: {{ new Date(job.created_at).toLocaleDateString() }} at {{ new Date(job.created_at).toLocaleTimeString() }}</p>
                    <p class="text-white/50 text-xs">Updated: {{ new Date(job.updated_at).toLocaleDateString() }} at {{ new Date(job.updated_at).toLocaleTimeString() }}</p>
                  </div>
                  
                  <!-- Error Message if any -->
                  <div v-if="job.error_message" class="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p class="text-red-400 text-sm">
                      <strong>Error:</strong> {{ job.error_message }}
                    </p>
                  </div>
                  
                  <!-- Payload Preview -->
                  <details class="mt-3">
                    <summary class="text-white/70 text-sm cursor-pointer hover:text-neon-cyan">
                      View Payload
                    </summary>
                    <div class="mt-2 p-3 bg-background-dark/50 rounded-lg">
                      <pre class="text-xs text-white/70 overflow-x-auto">{{ JSON.stringify(job.payload, null, 2) }}</pre>
                    </div>
                  </details>
                </div>
                
                <div class="ml-6 flex-shrink-0">
                  <button 
                    @click="handleProcessJob(job.id)"
                    class="btn-primary"
                    :disabled="loading"
                  >
                    <span v-if="loading">Processing...</span>
                    <span v-else>Go</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Campaigns Grid -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Campaign Analytics</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="campaign in campaigns" 
              :key="campaign.id"
              class="glass-card p-6 transition-all duration-300 hover:shadow-glow"
            >
              <!-- Campaign Header -->
              <div class="mb-4">
                <h3 class="text-lg font-semibold">{{ campaign.name || `Campaign ${campaign.id}` }}</h3>
                <div class="flex items-center mt-2">
                  <span 
                    class="px-2 py-1 rounded-full text-xs font-medium"
                    :class="{
                      'bg-green-500/20 text-green-400': campaign.status === 'COMPLETED',
                      'bg-blue-500/20 text-blue-400': campaign.status === 'ACTIVE',
                      'bg-yellow-500/20 text-yellow-400': campaign.status === 'PAUSED',
                      'bg-gray-500/20 text-gray-400': campaign.status === 'DRAFT'
                    }"
                  >
                    {{ campaign.status }}
                  </span>
                  <span class="text-white/50 text-xs ml-2">
                    {{ campaign.sequence_count }} sequences
                  </span>
                </div>
              </div>

              <!-- Key Metrics -->
              <div class="space-y-3 mb-4">
                <div class="flex justify-between">
                  <span class="text-white/70 text-sm">Total Sent</span>
                  <span class="font-medium">{{ campaign.sent_count }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-white/70 text-sm">Opens</span>
                  <span class="font-medium text-neon-cyan">{{ campaign.open_count }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-white/70 text-sm">Replies</span>
                  <span class="font-medium text-neon-magenta">{{ campaign.reply_count }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-white/70 text-sm">Clicks</span>
                  <span class="font-medium text-neon-violet">{{ campaign.click_count }}</span>
                </div>
              </div>

              <!-- Response Rate -->
              <div class="border-t border-gray-750 pt-3">
                <div class="flex justify-between items-center">
                  <span class="text-white/70 text-sm">Response Rate</span>
                  <span class="font-semibold text-neon-cyan">
                    {{ campaign.sent_count > 0 ? ((parseInt(campaign.reply_count) / parseInt(campaign.sent_count)) * 100).toFixed(1) : 0 }}%
                  </span>
                </div>
              </div>

              <!-- Lead Stats -->
              <div class="mt-4 p-3 bg-background-dark/50 rounded-lg">
                <h4 class="text-sm font-medium mb-2 text-white/90">Lead Progress</h4>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="flex justify-between">
                    <span class="text-white/60">Total:</span>
                    <span>{{ campaign.campaign_lead_stats.total }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-white/60">Completed:</span>
                    <span>{{ campaign.campaign_lead_stats.completed }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-white/60">In Progress:</span>
                    <span>{{ campaign.campaign_lead_stats.inprogress }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-white/60">Interested:</span>
                    <span class="text-green-400">{{ campaign.campaign_lead_stats.interested }}</span>
                  </div>
                </div>
              </div>

              <!-- Tags -->
              <div v-if="campaign.tags && campaign.tags.length > 0" class="mt-4">
                <div class="flex flex-wrap gap-1">
                  <span 
                    v-for="tag in campaign.tags" 
                    :key="tag.id"
                    class="px-2 py-1 rounded text-xs"
                    :style="{ backgroundColor: tag.color + '20', color: tag.color }"
                  >
                    {{ tag.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="glass-card p-6 text-center">
            <div class="text-2xl font-bold text-neon-cyan mb-2">
              {{ campaigns.reduce((sum, c) => sum + parseInt(c.sent_count), 0) }}
            </div>
            <div class="text-white/70">Total Emails Sent</div>
          </div>
          
          <div class="glass-card p-6 text-center">
            <div class="text-2xl font-bold text-neon-magenta mb-2">
              {{ campaigns.reduce((sum, c) => sum + parseInt(c.reply_count), 0) }}
            </div>
            <div class="text-white/70">Total Replies</div>
          </div>
          
          <div class="glass-card p-6 text-center">
            <div class="text-2xl font-bold text-neon-violet mb-2">
              {{ campaigns.reduce((sum, c) => sum + c.campaign_lead_stats.interested, 0) }}
            </div>
            <div class="text-white/70">Interested Leads</div>
          </div>
          
          <div class="glass-card p-6 text-center">
            <div class="text-2xl font-bold text-neon-cyan mb-2">
              {{ campaigns.length }}
            </div>
            <div class="text-white/70">Active Campaigns</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>