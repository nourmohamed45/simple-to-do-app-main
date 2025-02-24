You are my assistant and instructor. you will give me the fully ultimate assistance to help me learn how to build this entire app when i ask.

- You must have to Analyze the whole codebase and understand it to know the whole context of the app every time i ask you question.

- When you give code to me you have to explain it in details step by step as much as possible.

- We will start with building the ui without add any logic then after finishing the ui we will start to build the logic and the database setup

# App Blueprint Context File

## 1. Project Breakdown

### App Name
**TodoMaster**

### Platform
Web

### App Summary
TodoMaster is a simple yet powerful todo list application designed to help users manage their tasks efficiently. It allows users to Create, Read, Update, and Delete (CRUD) tasks, with local storage ensuring data persistence across sessions. The app includes filtering options to view all, active, or completed tasks, and basic form validation to ensure data integrity. Built with TypeScript, TodoMaster provides a robust and type-safe development experience, making it an ideal project for beginners to learn modern web development practices. The application will be enhanced with routing and protected routes, authentication and authorization, error handling, real-time updates, API pagination (implemented from scratch), React Query for caching, React Context API for state management, a selection box for controlling the number of records per page (10, 50, 100), sorting functionality by oldest and latest, API mocking, and cookie management.

### Primary Use Case
Productivity tool for task management.

### Authentication Requirements
- **User Accounts:** Required. To enable protected routes and user-specific todo lists.
- **Guest Users:** Support guest users with limited access and features.
- **Social Login Options:** Consider adding social login (Google, Facebook) for simplified onboarding.
- **User Roles:** Implement basic roles (e.g., admin, user) for future feature enhancements or administrative functions.

### Tech Stack Overview
| Category       | Web (React.ts)                                  |
|---------------|------------------------------------------------|
| **Frontend**  | Vite + React + Typescript + zod                              |
| **UI Library** | Tailwind CSS + ShadCN                         |
| **Backend (BaaS)** | Supabase (data storage, real-time features) |
| **API Caching** | React Query                                     |
| **Deployment** | Vercel                                        |
| **State Management** | React Context API                              |
| **Authentication** | Supabase Auth/Custom Implementation           |
| **Cookies** | js-cookie / browser-native `document.cookie`        |

---

## 2. Core Features

### CRUD Operations (Create, Read, Update, Delete)
- **Create Todos:** Users can add new tasks with a title and optional description.
- **Read Todos:** Users can view a list of all or filtered todos.
- **Update Todos:** Users can edit existing todos (title, description, status).
- **Delete Todos:** Users can remove tasks they no longer need.

### Local Storage for Persistence
- **Data Persistence:** Todos are saved in the browser's local storage, ensuring they persist across sessions. (Consider transitioning to database storage with authentication).

### Filter Todos
- **Filter Options:** Users can filter todos to view all, active, or completed tasks.

### Basic Form Validation
- **Validation:** Ensures that todos cannot be added with empty titles.

### TypeScript Interfaces for Todo Items
- **Type Safety:** TypeScript interfaces define the structure of todo items, ensuring type safety and reducing runtime errors.

### Routing and Protected Routes
- **Routing:** Implement client-side routing using `react-router-dom` to navigate between different views (e.g., all todos, completed todos, user profile).
- **Protected Routes:** Ensure that certain routes (e.g., user profile) are only accessible to authenticated users.

### Authentication & Authorization
- **Authentication:** Implement user registration, login, and logout functionalities using Supabase Auth or a custom solution.
- **Authorization:** Control access to resources based on user roles.

### Error Handling
- **Global Error Boundary:** Implement a global error boundary to catch and display unexpected errors gracefully.
- **API Error Handling:** Handle API errors (e.g., 404, 500) and display appropriate messages to the user.

### Real-Time App Feature
- **Real-time Updates:** Use Supabase real-time functionality to automatically update the todo list when changes are made by other users.

### API Pagination
- **Pagination:** Implement server-side pagination to handle large datasets of todos. Divide data into pages with a specified number of records per page.
- **Page Controls:** Provide controls for users to navigate between pages (e.g., "Previous," "Next," page numbers).

### React Query for Caching
- **Caching:** Use React Query to cache API responses, improving performance and reducing network requests.
- **Invalidation:** Automatically invalidate the cache when data is modified.

### React Context API
- **State Management:** Use React Context API to manage application-wide state, such as the current user and authentication status.

### Record Display Selection
- **Selection Box:** Allow users to choose the number of records to display per page (10, 50, 100).
- **Dynamic Updates:** Update the pagination parameters and data display based on the user's selection.

### Sorting
- **Sorting Options:** Allow users to sort todos by oldest and latest creation dates.
- **API Integration:** Implement the sorting logic on the server-side for efficient handling.

### API Mocking
- **API Mocking:**  Use tools like Mock Service Worker (MSW) or Mirage.js to simulate API endpoints during development. This allows frontend development to proceed independently of the backend and enables testing different scenarios without relying on a live API.

### Cookies
- **Cookie Management:** Use cookies to store authentication tokens or user preferences. Implement secure cookie handling and respect user privacy.

---

## 3. User Flow

1. **Landing Page:** Users are presented with a clean interface showing their current list of todos.
2. **Add Todo:** Users can click an "Add Todo" button to open a form, enter a title and optional description, and submit to add the todo.
3. **Toggle Todo:** Users can click a checkbox next to a todo to mark it as completed or uncompleted.
4. **Delete Todo:** Users can click a delete button next to a todo to remove it from the list.
5. **Update Todo:** Users can click an "Edit" button next to a todo, modify its details in a form, and save the changes.
6. **Filter Todos:** Users can select a filter option (all, active, completed) to view specific subsets of their todos.
7. **Persistence:** Todos are automatically saved to local storage and persist across browser sessions. (Consider transitioning to database storage with authentication).
8. **Authentication:**
    - **Registration:** New users can register for an account.
    - **Login:** Existing users can log in to their accounts.
    - **Logout:** Users can log out of their accounts.
9. **Protected Routes:**  Authenticated users can access specific areas, like a user profile. Unauthenticated users are redirected to the login page.
10. **Pagination:**  Users can navigate through pages of todos.
11. **Sorting:** Users can sort the todo list by oldest or latest.
12. **Record per page Selection:** Users can choose the number of items displayed per page.

---

## 4. Design and UI/UX

### Visual Design
- **Minimalist Design:** Clean and simple interface with a focus on usability.
- **Color Scheme:** Light theme with subtle colors to differentiate between active and completed tasks.
- **Typography:** Sans-serif fonts for readability.

### User Experience
- **Intuitive Navigation:** Easy-to-understand buttons and controls.
- **Responsive Design:** Fully responsive to work on various screen sizes.
- **Feedback:** Immediate visual feedback when adding, toggling, or deleting todos.
- **Clear Error Messages:** Provide helpful error messages to guide users.
- **Loading Indicators:** Display loading indicators during API requests.
- **Edit Mode:** Clear and intuitive UI for editing todo details.

---

## 5. Technical Implementation

### Frontend
- **React + Next.js:** For building a fast and scalable web application.
- **Tailwind CSS + ShadCN:** For styling and UI components.
- **TypeScript:** For type safety and better developer experience.
- **React Router:** For implementing client-side routing.
- **React Query:** For data fetching and caching.
- **React Context API:** For state management (authentication status, user info, etc.).
- **Cookies Library:** (e.g., `js-cookie`) for managing cookies.
- **Form Library (Optional):**  Consider using a form library like `react-hook-form` for managing complex forms.

### Backend
- **Supabase:** For data storage and real-time features (if needed in the future).
- **Node.js (Optional):** For creating custom API endpoints if Supabase's capabilities are insufficient.  Necessary if moving from local storage to a proper database backend for more advanced features like user-specific data.

### Deployment
- **Vercel:** For seamless deployment and hosting.

### Local Storage
- **Implementation:** Use the browser's local storage API to save and retrieve todos.  **Warning:** This should be replaced by database interaction in a real application with users.

### Form Validation
- **Implementation:** Use React's state management to validate todo titles before submission.

### API Pagination
- **Implementation:**
    - **Frontend:** Implement UI for pagination controls (Previous, Next, page numbers). Send pagination parameters (page number, page size) to the API.
    - **Backend:**  Retrieve todos based on the pagination parameters. Return the paginated data along with the total number of records.

### API Mocking Explanation

**API Mocking** is the process of creating simulated API endpoints that mimic the behavior of a real API. It's primarily used during development and testing when the actual backend API is not yet available, unstable, or difficult to work with. Here's a breakdown of its purpose and common techniques:

*   **Purpose:**
    *   **Decoupling Frontend and Backend Development:** Allows frontend developers to work independently without being blocked by backend progress.
    *   **Faster Development:** Eliminates the need to wait for API responses, speeding up the development process.
    *   **Easier Testing:** Enables testing of different scenarios (e.g., success, error, loading states) without relying on a live API.
    *   **Reduced API Dependencies:** Protects against changes to the API that could break the frontend.
    *   **Improved Performance:** Can simulate API responses with specific latency to test the application's behavior under different network conditions.

*   **Common Techniques:**
    *   **Mock Service Worker (MSW):** Intercepts HTTP requests and returns mocked responses. Can be used in the browser and in Node.js environments.
    *   **Mirage.js:** A client-side in-memory database that simulates API endpoints.
    *   **JSON Server:** Creates a simple REST API from a JSON file. Useful for prototyping and testing.
    *   **Manual Mocking:**  Creating mock functions or data structures in code to simulate API responses.

*   **Benefits:**
    *   Faster development cycles.
    *   Improved testing coverage.
    *   Reduced dependencies on the backend.
    *   More robust and resilient frontend applications.

---

## 6. Workflow Links and Setup Instructions

### Tools and Resources
- **Code Editor:** Visual Studio Code
- **Version Control:** Git + GitHub
- **Package Manager:** npm
- **UI Library:** Tailwind CSS, ShadCN
- **Backend as a Service:** Supabase
- **Deployment:** Vercel
- **Routing:** react-router-dom
- **API Caching:** React Query
- **Cookies:** js-cookie
- **Form Library (Optional):** react-hook-form

### Folder Structure

src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── ProtectedRoute.tsx
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Spinner.tsx
│   │   ├── ErrorBoundary.tsx
│   │   └── ErrorMessage.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   └── todos/
│       ├── TodoList.tsx
│       ├── TodoItem.tsx
│       ├── TodoForm.tsx
│       ├── TodoFilter.tsx
│       ├── TodoPagination.tsx
│       └── TodoSort.tsx
├── context/
│   ├── AuthContext.tsx
│   └── TodoContext.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useTodos.ts
│   ├── usePagination.ts
│   └── useLocalStorage.ts
├── lib/
│   ├── supabase.ts
│   ├── api.ts
│   └── cookies.ts
├── mocks/
│   ├── handlers.ts
│   ├── server.ts
│   └── data.ts
├── pages/
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Profile.tsx
│   └── NotFound.tsx
├── types/
│   ├── todo.ts
│   ├── user.ts
│   └── api.ts
├── utils/
│   ├── validation.ts
│   ├── formatters.ts
│   └── constants.ts
├── styles/
│   └── globals.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts