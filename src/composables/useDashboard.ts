import { ref, computed } from 'vue'
import { supabase } from '../utils/supabase'
import type { Job, Campaign } from '../types'

export function useDashboard() {
  const jobs = ref<Job[]>([])
  const campaigns = ref<Campaign[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const qaJobs = computed(() => 
    jobs.value.filter(job => job.status === 'needs_qa')
  )

  const hasCampaigns = computed(() => campaigns.value.length > 0)

  const fetchJobs = async () => {
    loading.value = true
    error.value = null

    try {
      // This would be a real Supabase query in production
      // For now, return empty array since tables don't exist yet
      jobs.value = []
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const fetchUserCampaigns = async () => {
    loading.value = true
    error.value = null

    try {
      // This would be a real Supabase query in production
      // For now, return empty array since tables don't exist yet
      campaigns.value = []
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const processQAJob = async (jobId: string) => {
    try {
      // This would process the job in production
      // For now, just return success
      return { success: true, error: null }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  return {
    jobs,
    campaigns,
    qaJobs,
    hasCampaigns,
    loading,
    error,
    fetchJobs,
    fetchUserCampaigns,
    processQAJob
  }
}