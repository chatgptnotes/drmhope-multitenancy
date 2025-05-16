// Define the user roles in our application
export type UserRole = 'super_admin' | 'hospital_admin' | 'billing_officer' | 'doctor' | 'patient';

// Hospital subscription plans
export type SubscriptionPlan = 'free' | 'basic' | 'premium';

// Basic user type
export interface User {
  id: string;
  email: string;
  role: UserRole;
  hospital_id?: string; // Not required for super_admin
  created_at: string;
}

// Hospital type
export interface Hospital {
  id: string;
  name: string;
  domain_name?: string;
  subscription_plan: SubscriptionPlan;
  super_admin_user_id: string;
  created_at: string;
}

// Patient type
export interface Patient {
  id: string;
  hospital_id: string;
  esic_id?: string;
  name: string;
  contact_info: string;
  treatment_history?: string;
  created_at: string;
  updated_at: string;
}

// Billing type
export interface Billing {
  id: string;
  patient_id: string;
  hospital_id: string;
  treatment_details: string;
  total_amount: number;
  payment_status: 'paid' | 'pending' | 'under_review';
  billing_date: string;
  approved_amount?: number;
  billing_type: 'ESIC' | 'CGHS';
  updated_at: string;
}

// Subscription type
export interface Subscription {
  id: string;
  hospital_id: string;
  plan_type: SubscriptionPlan;
  start_date: string;
  end_date: string;
  status: 'active' | 'inactive' | 'expired';
  created_at: string;
} 