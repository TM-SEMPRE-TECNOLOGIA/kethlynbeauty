export interface Service {
  id: string;
  name: string;
  category: 'cilios-aplicacao' | 'cilios-manutencao' | 'cilios-mega' | 'sobrancelhas' | 'tratamentos';
  price: number;
  duration: number; // in minutes
  description?: string;
  imageUrl?: string;
  isPopular?: boolean;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date?: string;
  avatarUrl?: string;
  verified?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}
