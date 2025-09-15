// API service for Ilum Stars NGO
// This handles all backend communications

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.ilumstars.org' 
  : 'http://localhost:8000';

// Types for API responses
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export interface EnrollmentData {
  fullName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  skillInterest: string;
  location: string;
  education?: string;
  experience?: string;
  motivation: string;
  availability: string;
  howDidYouHear: string;
}

export interface VolunteerApplicationData {
  fullName: string;
  email: string;
  phone: string;
  areaOfExpertise: string;
  shortBio: string;
  cv: File | null;
  availability: string;
  experience: string;
  motivation: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
  author: string;
  publishedAt: string;
  slug: string;
  status: 'published' | 'draft';
}

export interface AdmissionMailData {
  candidates: Array<{ id: number; name: string; email: string; course: string }>;
  subject: string;
  message: string;
  ctaLink?: string;
  ctaText?: string;
}

// API functions
export const apiService = {
  // Enrollment endpoints
  async submitEnrollment(data: EnrollmentData): Promise<ApiResponse<{ enrollmentId: number }>> {
    const response = await fetch(`${API_BASE_URL}/api/enrollments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getEnrollments(page = 1, limit = 10): Promise<ApiResponse<{ enrollments: any[], total: number }>> {
    const response = await fetch(`${API_BASE_URL}/api/admin/enrollments?page=${page}&limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });
    return response.json();
  },

  async exportEnrollments(): Promise<Blob> {
    const response = await fetch(`${API_BASE_URL}/api/admin/enrollments/export`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });
    return response.blob();
  },

  // Volunteer Application endpoints
  async submitVolunteerApplication(data: VolunteerApplicationData): Promise<ApiResponse<{ applicationId: number }>> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (value !== null) {
        formData.append(key, String(value));
      }
    });

    const response = await fetch(`${API_BASE_URL}/api/volunteer-applications`, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  },

  async getVolunteerApplications(page = 1, limit = 10): Promise<ApiResponse<{ volunteers: any[], total: number }>> {
    const response = await fetch(`${API_BASE_URL}/api/admin/volunteer-applications?page=${page}&limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });
    return response.json();
  },

  async exportVolunteerApplications(): Promise<Blob> {
    const response = await fetch(`${API_BASE_URL}/api/admin/volunteer-applications/export`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });
    return response.blob();
  },

  // Contact endpoints
  async submitContact(data: ContactData): Promise<ApiResponse<{ contactId: string }>> {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Blog endpoints
  async getBlogPosts(page = 1, limit = 10): Promise<ApiResponse<{ posts: BlogPost[], total: number }>> {
    const response = await fetch(`${API_BASE_URL}/api/blog/posts?page=${page}&limit=${limit}`);
    return response.json();
  },

  async getBlogPost(slug: string): Promise<ApiResponse<BlogPost>> {
    const response = await fetch(`${API_BASE_URL}/api/blog/posts/${slug}`);
    return response.json();
  },

  async getBlogPostById(id: number): Promise<ApiResponse<BlogPost>> {
    const response = await fetch(`${API_BASE_URL}/api/admin/blog/posts/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });
    return response.json();
  },

  // Admin Blog endpoints
  async createBlogPost(data: Omit<BlogPost, 'id' | 'publishedAt'>): Promise<ApiResponse<BlogPost>> {
    const response = await fetch(`${API_BASE_URL}/api/admin/blog/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async updateBlogPost(id: number, data: Partial<BlogPost>): Promise<ApiResponse<BlogPost>> {
    const response = await fetch(`${API_BASE_URL}/api/admin/blog/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async deleteBlogPost(id: number): Promise<ApiResponse<null>> {
    const response = await fetch(`${API_BASE_URL}/api/admin/blog/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });
    return response.json();
  },

  // Admin authentication
  async loginAdmin(credentials: { email: string; password: string }): Promise<ApiResponse<{ token: string; admin: any }>> {
    const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  // Admission Mailer endpoints
  async uploadCandidatesCsv(file: File): Promise<ApiResponse<{ candidates: Array<{ id: number; name: string; email: string; course: string }> }>> {
    const formData = new FormData();
    formData.append('csv', file);

    const response = await fetch(`${API_BASE_URL}/api/admin/admission-mailer/upload-csv`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
      body: formData,
    });
    return response.json();
  },

  async sendAdmissionEmails(data: AdmissionMailData): Promise<ApiResponse<{ sentCount: number }>> {
    const response = await fetch(`${API_BASE_URL}/api/admin/admission-mailer/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Newsletter subscription
  async subscribeNewsletter(email: string): Promise<ApiResponse<null>> {
    const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    return response.json();
  },

  // Donation endpoints
  async initiateDonation(data: { amount: number; email: string; name: string }): Promise<ApiResponse<{ paymentUrl: string }>> {
    const response = await fetch(`${API_BASE_URL}/api/donations/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Volunteer/Partner interest
  async submitVolunteerInterest(data: { name: string; email: string; phone: string; interest: string; message?: string }): Promise<ApiResponse<{ interestId: number }>> {
    const response = await fetch(`${API_BASE_URL}/api/volunteer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};