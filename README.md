# Welcome to your Lovable project

## Ilum Stars NGO Platform

A comprehensive platform for the Ilum Stars NGO, featuring candidate enrollment, volunteer applications, blog management, and an admin panel with admission mailer functionality.

### Features

- **Public Website**: Home, About, Programs, Leadership, Blog, Contact pages
- **Enrollment System**: Candidate application form with expanded course options
- **Volunteer Applications**: Facilitator/instructor application system
- **Blog System**: Public blog with detailed post views and social sharing
- **Admin Panel**: Complete management system for enrollments, volunteers, blog posts, and admission emails
- **Admission Mailer**: CSV upload, course filtering, and targeted email campaigns

## Project info

**URL**: https://lovable.dev/projects/64f0ca15-a3e1-432a-80af-2298aff743d3

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/64f0ca15-a3e1-432a-80af-2298aff743d3) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router DOM
- React Hook Form
- Lucide React Icons

## Backend API Requirements

The frontend is designed to work with a Laravel backend. Below are the required API endpoints:

### Authentication Endpoints

#### Admin Login
- **URL**: `POST /api/admin/login`
- **Parameters**: 
  ```json
  {
    "email": "admin@ilumstars.org",
    "password": "password"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "token": "jwt_token_here",
      "admin": {
        "id": 1,
        "name": "Admin User",
        "email": "admin@ilumstars.org"
      }
    },
    "message": "Login successful"
  }
  ```

### Enrollment Endpoints

#### Submit Enrollment
- **URL**: `POST /api/enrollments`
- **Parameters**: 
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
    "motivation": "Want to learn and grow",
    "availability": "yes-full-time",
    "howDidYouHear": "social-media"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "enrollmentId": 123
    },
    "message": "Enrollment submitted successfully"
  }
  ```

#### Get Enrollments (Admin)
- **URL**: `GET /api/admin/enrollments?page=1&limit=10`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: 
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
          "skillInterest": "web-development",
          "createdAt": "2024-12-01T10:00:00Z"
        }
      ],
      "total": 42
    },
    "message": "Enrollments retrieved successfully"
  }
  ```

#### Export Enrollments (Admin)
- **URL**: `GET /api/admin/enrollments/export`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: CSV file download

### Volunteer Application Endpoints

#### Submit Volunteer Application
- **URL**: `POST /api/volunteer-applications`
- **Content-Type**: `multipart/form-data`
- **Parameters**: 
  ```
  fullName: "Dr. Sarah Wilson"
  email: "sarah@example.com"
  phone: "+234123456789"
  areaOfExpertise: "web-development"
  shortBio: "Experienced developer..."
  cv: [File]
  availability: "weekends"
  experience: "10 years in web development"
  motivation: "Want to give back to community"
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "applicationId": 456
    },
    "message": "Volunteer application submitted successfully"
  }
  ```

#### Get Volunteer Applications (Admin)
- **URL**: `GET /api/admin/volunteer-applications?page=1&limit=10`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: 
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
          "shortBio": "Experienced developer...",
          "cvUrl": "/storage/cvs/sarah-cv.pdf",
          "availability": "weekends",
          "createdAt": "2024-12-01T10:00:00Z"
        }
      ],
      "total": 15
    },
    "message": "Volunteer applications retrieved successfully"
  }
  ```

#### Export Volunteer Applications (Admin)
- **URL**: `GET /api/admin/volunteer-applications/export`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: CSV file download

### Blog Endpoints

#### Get Blog Posts (Public)
- **URL**: `GET /api/blog/posts?page=1&limit=10`
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "posts": [
        {
          "id": 1,
          "title": "Welcome to Ilum Stars",
          "content": "Full blog post content...",
          "excerpt": "Brief description...",
          "author": "Ilum Stars Team",
          "publishedAt": "2024-12-01T10:00:00Z",
          "slug": "welcome-to-ilum-stars",
          "status": "published",
          "imageUrl": "/storage/blog/image.jpg"
        }
      ],
      "total": 8
    },
    "message": "Blog posts retrieved successfully"
  }
  ```

#### Get Single Blog Post (Public)
- **URL**: `GET /api/blog/posts/{slug}`
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "title": "Welcome to Ilum Stars",
      "content": "Full blog post content...",
      "excerpt": "Brief description...",
      "author": "Ilum Stars Team",
      "publishedAt": "2024-12-01T10:00:00Z",
      "slug": "welcome-to-ilum-stars",
      "status": "published",
      "imageUrl": "/storage/blog/image.jpg"
    },
    "message": "Blog post retrieved successfully"
  }
  ```

#### Create Blog Post (Admin)
- **URL**: `POST /api/admin/blog/posts`
- **Headers**: `Authorization: Bearer {token}`
- **Parameters**: 
  ```json
  {
    "title": "New Blog Post",
    "content": "Full blog post content...",
    "excerpt": "Brief description...",
    "author": "Admin User",
    "status": "published",
    "slug": "new-blog-post",
    "imageUrl": "/storage/blog/image.jpg"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "id": 2,
      "title": "New Blog Post",
      "slug": "new-blog-post",
      "status": "published",
      "publishedAt": "2024-12-01T10:00:00Z"
    },
    "message": "Blog post created successfully"
  }
  ```

#### Update Blog Post (Admin)
- **URL**: `PUT /api/admin/blog/posts/{id}`
- **Headers**: `Authorization: Bearer {token}`
- **Parameters**: Same as create
- **Response**: Updated blog post data

#### Delete Blog Post (Admin)
- **URL**: `DELETE /api/admin/blog/posts/{id}`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: 
  ```json
  {
    "success": true,
    "data": null,
    "message": "Blog post deleted successfully"
  }
  ```

#### Get Blog Post by ID (Admin)
- **URL**: `GET /api/admin/blog/posts/{id}`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: Blog post data (same as public single post)

### Admission Mailer Endpoints

#### Upload Candidates CSV
- **URL**: `POST /api/admin/admission-mailer/upload-csv`
- **Headers**: `Authorization: Bearer {token}`
- **Content-Type**: `multipart/form-data`
- **Parameters**: 
  ```
  csv: [File] (CSV with columns: Name, Email, Course)
  ```
- **Response**: 
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
        }
      ]
    },
    "message": "CSV processed successfully"
  }
  ```

#### Send Admission Emails
- **URL**: `POST /api/admin/admission-mailer/send`
- **Headers**: `Authorization: Bearer {token}`
- **Parameters**: 
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
    "subject": "Congratulations! You've been admitted to {Course}",
    "message": "Dear {Name}, Welcome to {Course}...",
    "ctaLink": "https://wa.me/2348123456789",
    "ctaText": "Join WhatsApp Group"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "sentCount": 25
    },
    "message": "Admission emails sent successfully"
  }
  ```

### Contact & Newsletter Endpoints

#### Submit Contact Form
- **URL**: `POST /api/contact`
- **Parameters**: 
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I have a question..."
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "contactId": "789"
    },
    "message": "Contact form submitted successfully"
  }
  ```

#### Newsletter Subscription
- **URL**: `POST /api/newsletter/subscribe`
- **Parameters**: 
  ```json
  {
    "email": "john@example.com"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "data": null,
    "message": "Successfully subscribed to newsletter"
  }
  ```

### Database Schema Recommendations

#### Tables to Create:

1. **enrollments**
   - id, full_name, email, phone, age, gender, skill_interest, location, education, experience, motivation, availability, how_did_you_hear, created_at, updated_at

2. **volunteer_applications**
   - id, full_name, email, phone, area_of_expertise, short_bio, cv_path, availability, experience, motivation, created_at, updated_at

3. **blog_posts**
   - id, title, content, excerpt, author, slug, status, image_url, published_at, created_at, updated_at

4. **contacts**
   - id, name, email, message, created_at, updated_at

5. **newsletter_subscriptions**
   - id, email, subscribed_at, created_at, updated_at

6. **admins**
   - id, name, email, password, created_at, updated_at

### File Storage
- CV files should be stored in `storage/app/public/cvs/`
- Blog images should be stored in `storage/app/public/blog/`
- Create symbolic link: `php artisan storage:link`

### Email Configuration
- Configure SMTP settings in `.env`
- Use Laravel's Mail facade for sending admission emails
- Implement email templates for admission notifications

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/64f0ca15-a3e1-432a-80af-2298aff743d3) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
