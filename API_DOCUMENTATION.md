# Ilum Stars NGO - Backend API Documentation

This document outlines all the backend API endpoints required for the Ilum Stars NGO platform. The frontend is built with React/TypeScript and expects a Laravel backend with these specific endpoints.

## Base URL
- **Development**: `http://localhost:8000`
- **Production**: `https://api.ilumstars.org`

## Authentication
Most admin endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer {jwt_token}
```

## Response Format
All API responses follow this standard format:
```json
{
  "success": boolean,
  "data": object|array|null,
  "message": string
}
```

---

## Authentication Endpoints

### Admin Login
**POST** `/api/admin/login`

**Request Body:**
```json
{
  "email": "admin@ilumstars.org",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "admin": {
      "id": 1,
      "name": "Admin User",
      "email": "admin@ilumstars.org"
    }
  },
  "message": "Login successful"
}
```

---

## Enrollment Endpoints

### Submit Enrollment Application
**POST** `/api/enrollments`

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+234123456789",
  "age": 22,
  "gender": "male",
  "skillInterest": "web-development",
  "location": "Lagos, Nigeria",
  "education": "University Graduate",
  "experience": "Some coding experience",
  "motivation": "I want to learn and grow in tech",
  "availability": "yes-full-time",
  "howDidYouHear": "social-media"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "enrollmentId": 123
  },
  "message": "Enrollment submitted successfully"
}
```

### Get Enrollments (Admin Only)
**GET** `/api/admin/enrollments?page=1&limit=10`

**Headers:** `Authorization: Bearer {token}`

**Response:**
```json
{
  "success": true,
  "data": {
    "enrollments": [
      {
        "id": 1,
        "fullName": "John Doe",
        "email": "john@example.com",
        "phone": "+234123456789",
        "age": 22,
        "gender": "male",
        "skillInterest": "web-development",
        "location": "Lagos, Nigeria",
        "education": "University Graduate",
        "howDidYouHear": "social-media",
        "createdAt": "2024-12-01T10:00:00Z"
      }
    ],
    "total": 42
  },
  "message": "Enrollments retrieved successfully"
}
```

### Export Enrollments to CSV (Admin Only)
**GET** `/api/admin/enrollments/export`

**Headers:** `Authorization: Bearer {token}`

**Response:** CSV file download with headers:
```
Full Name,Email,Phone,Age,Gender,Skill Interest,Location,Education,How Did You Hear,Applied Date
```

---

## Volunteer Application Endpoints

### Submit Volunteer Application
**POST** `/api/volunteer-applications`

**Content-Type:** `multipart/form-data`

**Form Data:**
```
fullName: "Dr. Sarah Wilson"
email: "sarah@example.com"
phone: "+234123456789"
areaOfExpertise: "web-development"
shortBio: "Experienced web developer with 10+ years..."
cv: [File] (PDF, DOC, DOCX - max 5MB)
availability: "weekends"
experience: "10 years in web development and teaching"
motivation: "I want to give back to the community"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "applicationId": 456
  },
  "message": "Volunteer application submitted successfully"
}
```

### Get Volunteer Applications (Admin Only)
**GET** `/api/admin/volunteer-applications?page=1&limit=10`

**Headers:** `Authorization: Bearer {token}`

**Response:**
```json
{
  "success": true,
  "data": {
    "volunteers": [
      {
        "id": 1,
        "fullName": "Dr. Sarah Wilson",
        "email": "sarah@example.com",
        "phone": "+234123456789",
        "areaOfExpertise": "web-development",
        "shortBio": "Experienced web developer...",
        "cvUrl": "/storage/cvs/sarah-wilson-cv.pdf",
        "availability": "weekends",
        "experience": "10 years in web development",
        "motivation": "Want to give back to community",
        "createdAt": "2024-12-01T10:00:00Z"
      }
    ],
    "total": 15
  },
  "message": "Volunteer applications retrieved successfully"
}
```

### Export Volunteer Applications to CSV (Admin Only)
**GET** `/api/admin/volunteer-applications/export`

**Headers:** `Authorization: Bearer {token}`

**Response:** CSV file download with headers:
```
Full Name,Email,Phone,Area of Expertise,Availability,Applied Date,CV URL
```

---

## Blog Management Endpoints

### Get Blog Posts (Public)
**GET** `/api/blog/posts?page=1&limit=10`

**Response:**
```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "id": 1,
        "title": "Welcome to Ilum Stars NGO",
        "content": "We are excited to announce the launch...",
        "excerpt": "Brief description of the post...",
        "author": "Ilum Stars Team",
        "publishedAt": "2024-12-01T10:00:00Z",
        "slug": "welcome-to-ilum-stars",
        "status": "published",
        "imageUrl": "/storage/blog/welcome-image.jpg"
      }
    ],
    "total": 8
  },
  "message": "Blog posts retrieved successfully"
}
```

### Get Single Blog Post by Slug (Public)
**GET** `/api/blog/posts/{slug}`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Welcome to Ilum Stars NGO",
    "content": "Full blog post content with HTML formatting...",
    "excerpt": "Brief description of the post...",
    "author": "Ilum Stars Team",
    "publishedAt": "2024-12-01T10:00:00Z",
    "slug": "welcome-to-ilum-stars",
    "status": "published",
    "imageUrl": "/storage/blog/welcome-image.jpg"
  },
  "message": "Blog post retrieved successfully"
}
```

### Get Blog Post by ID (Admin Only)
**GET** `/api/admin/blog/posts/{id}`

**Headers:** `Authorization: Bearer {token}`

**Response:** Same format as single blog post above

### Create Blog Post (Admin Only)
**POST** `/api/admin/blog/posts`

**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "title": "New Blog Post Title",
  "content": "Full blog post content with HTML...",
  "excerpt": "Brief description for listings...",
  "author": "Admin User",
  "status": "published",
  "slug": "new-blog-post-title",
  "imageUrl": "/storage/blog/new-post-image.jpg"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "title": "New Blog Post Title",
    "slug": "new-blog-post-title",
    "status": "published",
    "publishedAt": "2024-12-01T10:00:00Z"
  },
  "message": "Blog post created successfully"
}
```

### Update Blog Post (Admin Only)
**PUT** `/api/admin/blog/posts/{id}`

**Headers:** `Authorization: Bearer {token}`

**Request Body:** Same as create blog post

**Response:** Updated blog post data

### Delete Blog Post (Admin Only)
**DELETE** `/api/admin/blog/posts/{id}`

**Headers:** `Authorization: Bearer {token}`

**Response:**
```json
{
  "success": true,
  "data": null,
  "message": "Blog post deleted successfully"
}
```

---

## Admission Mailer Endpoints

### Upload Candidates CSV
**POST** `/api/admin/admission-mailer/upload-csv`

**Headers:** `Authorization: Bearer {token}`

**Content-Type:** `multipart/form-data`

**Form Data:**
```
csv: [File] (CSV file with columns: Name, Email, Course)
```

**Expected CSV Format:**
```csv
Name,Email,Course
John Doe,john@example.com,Web Development
Jane Smith,jane@example.com,Graphic Design
```

**Response:**
```json
{
  "success": true,
  "data": {
    "candidates": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "course": "Web Development"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com",
        "course": "Graphic Design"
      }
    ]
  },
  "message": "CSV processed successfully"
}
```

### Send Admission Emails
**POST** `/api/admin/admission-mailer/send`

**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "candidates": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "course": "Web Development"
    }
  ],
  "subject": "Congratulations! You've been admitted to {Course} at Ilum Stars",
  "message": "Dear {Name},\n\nCongratulations! We are excited to inform you that you have been admitted to our {Course} program at Ilum Stars NGO.\n\nYour journey starts here...",
  "ctaLink": "https://wa.me/2348123456789",
  "ctaText": "Join WhatsApp Group"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "sentCount": 25
  },
  "message": "Admission emails sent successfully"
}
```

**Note:** The backend should:
1. Replace `{Name}` with candidate's name
2. Replace `{Course}` with candidate's course
3. Append CTA link if provided
4. Send emails via configured SMTP
5. Log email sending status

---

## Contact & Newsletter Endpoints

### Submit Contact Form
**POST** `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question about programs",
  "message": "Hello, I have a question about your programs..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "contactId": "789"
  },
  "message": "Contact form submitted successfully"
}
```

### Newsletter Subscription
**POST** `/api/newsletter/subscribe`

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "data": null,
  "message": "Successfully subscribed to newsletter"
}
```

---

## Database Schema

### Required Tables

#### 1. enrollments
```sql
CREATE TABLE enrollments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    skill_interest VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    education TEXT,
    experience TEXT,
    motivation TEXT NOT NULL,
    availability VARCHAR(50) NOT NULL,
    how_did_you_hear VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 2. volunteer_applications
```sql
CREATE TABLE volunteer_applications (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    area_of_expertise VARCHAR(100) NOT NULL,
    short_bio TEXT NOT NULL,
    cv_path VARCHAR(500),
    availability VARCHAR(50) NOT NULL,
    experience TEXT NOT NULL,
    motivation TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 3. blog_posts
```sql
CREATE TABLE blog_posts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content LONGTEXT NOT NULL,
    excerpt TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('published', 'draft') DEFAULT 'draft',
    image_url VARCHAR(500),
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 4. contacts
```sql
CREATE TABLE contacts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 5. newsletter_subscriptions
```sql
CREATE TABLE newsletter_subscriptions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 6. admins
```sql
CREATE TABLE admins (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## File Storage Configuration

### Storage Directories
- **CV Files**: `storage/app/public/cvs/`
- **Blog Images**: `storage/app/public/blog/`

### Laravel Storage Setup
```bash
# Create symbolic link
php artisan storage:link

# Set proper permissions
chmod -R 755 storage/
chmod -R 755 bootstrap/cache/
```

### File Upload Validation
- **CV Files**: PDF, DOC, DOCX formats, max 5MB
- **Blog Images**: JPG, PNG, GIF formats, max 2MB

---

## Email Configuration

### SMTP Settings (.env)
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=hello@ilumstars.org
MAIL_FROM_NAME="Ilum Stars NGO"
```

### Email Templates
Create Blade templates for:
1. **Admission Email**: `resources/views/emails/admission.blade.php`
2. **Contact Form Notification**: `resources/views/emails/contact.blade.php`
3. **Newsletter Welcome**: `resources/views/emails/newsletter-welcome.blade.php`

---

## Security Considerations

### Authentication
- Use JWT tokens for admin authentication
- Implement token expiration (24 hours recommended)
- Hash admin passwords with bcrypt

### File Upload Security
- Validate file types and sizes
- Scan uploaded files for malware
- Store files outside web root when possible
- Generate unique filenames to prevent conflicts

### Rate Limiting
- Implement rate limiting on public endpoints
- Limit enrollment submissions per IP
- Protect admin endpoints with stricter limits

### Data Validation
- Validate all input data
- Sanitize HTML content in blog posts
- Use Laravel's validation rules consistently

---

## Error Handling

### Standard Error Response
```json
{
  "success": false,
  "data": null,
  "message": "Detailed error message"
}
```

### HTTP Status Codes
- **200**: Success
- **201**: Created
- **400**: Bad Request (validation errors)
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **422**: Unprocessable Entity (validation errors)
- **500**: Internal Server Error

---

## Testing Recommendations

### API Testing
- Use Postman or similar tools for endpoint testing
- Create automated tests with PHPUnit
- Test file upload functionality thoroughly
- Verify email sending in staging environment

### Sample Test Data
Create seeders for:
- Admin users
- Sample enrollments
- Sample volunteer applications
- Sample blog posts

This completes the comprehensive API documentation for the Ilum Stars NGO platform backend implementation.