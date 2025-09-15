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
  passportPhoto?: File;
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

// API functions
export const apiService = {
  // Enrollment endpoints
  async submitEnrollment(data: EnrollmentData): Promise<ApiResponse<{ enrollmentId: string }>> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    });

    const response = await fetch(`${API_BASE_URL}/api/enrollments`, {
      method: 'POST',
      body: formData,
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
  async submitVolunteerInterest(data: { name: string; email: string; phone: string; interest: string; message?: string }): Promise<ApiResponse<null>> {
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