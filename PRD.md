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

#### 3.3 Team Member Management

- **Member Addition:** Invites users to projects via email
- **Member Listing:** View all project team members
- **Role Management:** Update member roles within projects (Admin only)
- **Member Removal:** Remove team members from projects (Admin Only)

#### 3.4 Task Management

- **Task Creation:** Create tasks with title, description, assignee
- **Task Listing:** View all tasks within a project
- **Task Details:** Access individual task information 
- **Task Updates:** Modifiy task information and status
- **Task Deletion:** Remove tasks from the project
- **File Attatchment:** Support for multiple file attactchments on tasks
- **Task Assignment:** Assign tasks to specific team members
- **Status Tracking:** Three-state status system (Todo in Progress, Done)


#### 3.5 Subtask Management

- **Subtask Creation:** Add task to existing tasks
- **Subtask Updates:** Modify subtask details and completion status
- **Subtask Deletion:** Remove subtasks (Admin/Project Admin only)
- **Member completion:** Allow members to mark subtasks as complete

#### 3.6 Project Notes

- **Notes Creation:** Add notes to projects (Admin Only)
- **Note Listing:** View all projects notes
- **Note Details:** Access individual note content
- **Note Updates:** Modifiy existing notes (Admin only)
- **Note Deletion:** Remove notes (Admin only)

#### 3.7 System Heatlth

- **Health check:** API endpoints for system status monitoring

### 4. Technical Specification

#### 4.1 API Endpoints Structure

**Authentication Routess** (/api/v1/auth/)

- **POST /register** - User registration
- **POST /login** - User authentication
- **POST /logout** - User logout (secured)




