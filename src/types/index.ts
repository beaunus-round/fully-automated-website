export interface User {
  id: string
  email?: string
  user_metadata?: {
    first_name?: string
    last_name?: string
    [key: string]: any
  }
  [key: string]: any
}

export interface AuthSession {
  access_token: string
  refresh_token: string
  expires_in: number
  user: User
  [key: string]: any
}

export interface Job {
  id: string
  type: string
  status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'needs_qa'
  webhook_id: string
  payload: any
  error_message?: string
  attempt_count: number
  created_at: string
  updated_at: string
}

export interface Campaign {
  id: string
  name: string
  status: 'ACTIVE' | 'PAUSED' | 'COMPLETED' | 'DRAFT'
  sequence_count: string
  sent_count: string
  open_count: string
  reply_count: string
  click_count: string
  campaign_lead_stats: {
    total: number
    completed: number
    inprogress: number
    interested: number
  }
  tags?: Array<{
    id: string
    name: string
    color: string
  }>
}