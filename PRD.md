# PRD (Project Requirements Document)

## Project Camp Backend

### 1. Product Overview

**Product Name:** Project Camp Backend
**Version:** 1.0.0
**Product Type:** Backend API for Project management system

Project Camp backend is RESTful API service designed to support collaborative project management. The system enables teams to organize projects, manage tasks with subtasks, maintain project notes, and handle user authentication with role-based access control.

### 2. Target users

- **Project Administration:** Create and manage projects, assign roles, oversee all project activities
- **Project Admin:** Manage tasks and project content within assigned projects
- **Team Members:** View projects, update task completion status project information

### 3. Core Features

#### 3.1 User Authentication & Autherization

- **User Registration:** Account creation with email verification
- **User Login:** Secure Authentication with JWT tokens
- **Password Mangement:** Change password, forgot/reset password functionality
- **Email Verification:** Account verification via email tokens
- **Token Mangement:** Access token regresh mechanism
- **Role-Based Access Control:** Three-tier permission system(Admin, Project Admin, Member)

#### 3.2 Project Management

- **Project Creation:** Create new projects with name and description
- **Project Listing:** View all projects User access to with member count
- **Project Details:** Access individal project information
- **Project Updates:** Modify project inoformation(Admin Only)
- **Project Deleteion:** Remove Projects(Admin Only)
