import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '../utils/supabase'
import type { User, AuthSession } from '../types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const session = ref<AuthSession | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  const signUp = async (email: string, password: string, userData?: Record<string, any>) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      })

      if (signUpError) throw signUpError

      if (data.user) {
        user.value = data.user as User
        session.value = data.session as AuthSession

        // Create campaign_config row for new user
        const { error: configError } = await supabase
          .from('campaign_config')
          .insert({
            user_id: data.user.id,
            campaign_id: '', // Will be set later when campaign is created
            webhook_id: '', // Will be set later
            name: 'Default Campaign'
          })

        if (configError) {
          console.error('Failed to create campaign config:', configError)
          // Don't throw error here, user is still created successfully
        }
      }

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err.message }
    } finally {
      loading.value = false
    }
  }

  const signIn = async (email: string, password: string) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (signInError) throw signInError

      if (data.user) {
        user.value = data.user as User
        session.value = data.session as AuthSession
      }

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err.message }
    } finally {
      loading.value = false
    }
  }

  const signOut = async () => {
    loading.value = true
    error.value = null

    try {
      const { error: signOutError } = await supabase.auth.signOut()
      if (signOutError) throw signOutError

      user.value = null
      session.value = null
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const initialize = async () => {
    loading.value = true

    try {
      // Get current session
      const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession()
      
      if (sessionError) throw sessionError

      if (currentSession) {
        user.value = currentSession.user as User
        session.value = currentSession as AuthSession
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
          user.value = session.user as User
          this.session = session as AuthSession
        } else {
          user.value = null
          this.session = null
        }
      })
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const clearError = () => {
    error.value = null
  }

  return {
    user,
    session,
    loading,
    error,
    isAuthenticated,
    signUp,
    signIn,
    signOut,
    initialize,
    clearError
  }
})