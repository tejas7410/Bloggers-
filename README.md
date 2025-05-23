# 📝 Blogger

A robust CMS built on **React** with backend powered by **Appwrite** for authentication, database, and storage. Designed for scalability and secure content management with minimal frontend styling.

The application is designed with flexibility in mind—while it currently uses Appwrite as the backend service for authentication, database, and storage, the architecture allows for easy replacement with any other Backend-as-a-Service (BaaS) provider or a custom backend. This is possible because **all backend interactions, including authentication and data services, are abstracted through a reusable service layer**. To switch the backend, only minimal changes are required in the authentication and configuration files, enabling seamless integration with alternative platforms without impacting the core frontend logic or user experience. This design ensures scalability and adaptability as your backend needs evolve.

---

## ⚙️ Features

- **Reusable Service Layer** abstracts Appwrite SDK calls for easy backend swapping or scaling
- **User Authentication** via Appwrite Auth (email/password, OAuth support)
- **Post Management** using Appwrite Database collections
- **Image & File Storage** handled by Appwrite Storage service
- **Redux Store** used exclusively for storing authentication & app state (e.g. user status, session)

---

## 🚀 Scalability & Limits(Due to appwrite free version)

Based on the **Appwrite Free Tier (Cloud service)**:

| Resource          | Limit                | Notes                            |
| ----------------- | -------------------- | -------------------------------- |
| **Users**         | 1,000 users max      | Suitable for MVP and small teams |
| **Storage**       | 2 GB total           | Image and file uploads           |
| **Database docs** | 10,000 documents max | Posts, comments, metadata        |

> This app is optimized to run smoothly within these limits. For larger scale, consider upgrading your Appwrite plan or self-hosting.

---

## 📦 Setup & Environment

### 1. Clone & Install

```bash
git clone https://github.com/your-username/techblog-cms.git
cd techblog-cms
npm install
```

### 2. Environment Variables

Create a .env file with your Appwrite and TinyMCE credentials:

```bash
VITE_APPWRITE_URL = ""
VITE_APPWRITE_PROJECT_ID = ""
VITE_APPWRITE_DATABASE_ID = ""
VITE_APPWRITE_COLLECTION_ID = ""
VITE_APPWRITE_BUCKET_ID = ""
VITE_APPWRITE_ENDPOINT = ""
VITE_TINY_MCE_API_KEY = "tinymc_API"
```

### 3. Run Locally

```bash
npm run dev
```

### 🧩 Architecture Overview

```bash
Authentication:
Handled fully by Appwrite Auth service. Redux stores user session and status for global state management.

Data Management:
Posts and user-related data are stored in Appwrite Database collections. Storage service manages image uploads linked to posts.

Backend Services Layer:
All Appwrite SDK calls are abstracted into reusable services allowing backend changes without frontend refactor.

Authorization & Security:
Appwrite’s built-in permissions system protects data at collection and document levels.

 Implement server-side validation with Appwrite functions

 Role-based access control (e.g., Admin, Editor, Reader)

 Pagination & query optimization for large post collections

 Extend storage quota by upgrading Appwrite plan or integrating CDN

⚠️ Troubleshooting
Auth Errors (401):
Verify that your Appwrite project ID, endpoint, and permissions are correctly configured.

Storage Limits Exceeded:
Monitor file sizes and usage to avoid reaching the 1 GB limit on free tier.

API Rate Limits:
Avoid exceeding 10,000 requests per day on free plan; optimize calls and cache where possible.
```

### ✨ Author

Made by Tejas Kangule — focusing on scalable backend-first React apps.
