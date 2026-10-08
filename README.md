# Truth Finder

> AI-powered resume verification and technical assessment platform

Truth Finder is a full-stack AI-powered platform designed to evaluate candidates through resume analysis, personalized technical assessments, and a proctored examination process.

The platform analyzes a candidate's resume, generates skill-based questions using Large Language Models (LLMs), conducts technical assessments, and produces a final authenticity-oriented **Truth Score** based on the assessment process.

---

## 🚀 Features

- 📄 **Resume Parsing**
  - Upload and analyze candidate resumes.
  - Extract relevant skills and technical information.

- 🤖 **AI-Powered Assessment Generation**
  - Generates personalized technical questions based on the candidate's skills.
  - Uses LLM APIs to create assessment questions dynamically.

- 📝 **Technical Assessment**
  - Skill-based MCQ assessment.
  - Personalized question generation.

- 🔐 **Authentication & Authorization**
  - JWT-based authentication.
  - Access and refresh tokens.
  - Google/GitHub OAuth authentication.
  - Role-based access control.

- 🛡️ **Security**
  - Password hashing using bcrypt.
  - Helmet security middleware.
  - CORS protection.
  - API rate limiting.
  - Session and token management.
  - Proctoring-related tab-switch detection.

- 📊 **Assessment Results**
  - Tracks candidate performance.
  - Provides assessment results and analytics.
  - Generates an authenticity-oriented Truth Score.

- ⚡ **Performance Optimization**
  - Parallel LLM calls.
  - Optimized database operations using Prisma.
  - Assessment generation time improved from approximately **45 seconds to 10 seconds**, representing a **78% reduction in generation time**.

- 🐳 **Dockerized Application**
  - Separate Docker images for frontend and backend.
  - Docker Compose support for local and production deployment.

- 🔄 **CI/CD Pipeline**
  - GitHub Actions automatically builds Docker images.
  - Images are pushed to Amazon ECR.
  - EC2 automatically pulls the latest images and redeploys the application.

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │       User          │
                         │    Web Browser      │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ React Frontend      │
                         │ Vite + TypeScript   │
                         │ Tailwind CSS        │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Node.js / Express   │
                         │ TypeScript Backend  │
                         └──────┬─────┬────────┘
                                │     │
                    ┌───────────┘     └────────────┐
                    ▼                              ▼
           ┌─────────────────┐             ┌───────────────┐
           │ MongoDB         │             │ LLM APIs      │
           │ Prisma ORM      │             │ OpenRouter /  │
           │                 │             │ Gemini / etc. │
           └─────────────────┘             └───────────────┘


                    CI/CD Architecture

           ┌─────────────────┐
           │ GitHub Repository│
           └────────┬────────┘
                    │ git push
                    ▼
           ┌─────────────────┐
           │ GitHub Actions  │
           │ Build & Deploy  │
           └────────┬────────┘
                    │
                    ▼
           ┌─────────────────┐
           │ Amazon ECR      │
           │ Docker Images   │
           └────────┬────────┘
                    │ docker pull
                    ▼
           ┌─────────────────┐
           │ Amazon EC2      │
           │ Docker Compose  │
           └────────┬────────┘
                    │
                    ▼
           ┌─────────────────┐
           │ Live Application│
           └─────────────────┘