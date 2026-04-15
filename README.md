# Social App

A full-featured social networking web application where users can register, log in, create posts, comment on posts, view profiles, and toggle between light and dark themes.

## Features

- **Authentication** — JWT-based login and registration with protected routes
- **Posts** — Create, view, and delete posts from the home feed
- **Post Details** — View a single post with its full comment thread
- **Comments** — Add comments to any post
- **User Profiles** — View a user's profile and their posts
- **Dark / Light Mode** — Persistent theme toggle stored in `localStorage`
- **Form Validation** — Client-side schema validation on login and registration forms
- **Toast Notifications** — Real-time success and error feedback

## Project Structure

```
src/
├── apis/          # API call functions (auth, posts, comments, profile)
├── assets/        # Static assets
├── components/    # Reusable UI components (Navbar, PostItem, Comments, etc.)
├── context/       # React context providers (auth, theme)
├── lib/           # Utility helpers and validation schemas
└── pages/         # Route-level page components (Home, Login, Register, PostDetails)
```

## Technologies Used

| Category            | Technology                                                                             |
| ------------------- | -------------------------------------------------------------------------------------- |
| **Framework**       | [React 19](https://react.dev/)                                                         |
| **Build Tool**      | [Vite](https://vitejs.dev/)                                                            |
| **Routing**         | [React Router DOM v7](https://reactrouter.com/)                                        |
| **Server State**    | [TanStack React Query v5](https://tanstack.com/query)                                  |
| **HTTP Client**     | [Axios](https://axios-http.com/)                                                       |
| **Forms**           | [React Hook Form](https://react-hook-form.com/)                                        |
| **Validation**      | [Zod](https://zod.dev/)                                                                |
| **Styling**         | [Tailwind CSS v4](https://tailwindcss.com/) + [Bootstrap 5](https://getbootstrap.com/) |
| **Icons**           | [Font Awesome 6](https://fontawesome.com/)                                             |
| **Notifications**   | [React Hot Toast](https://react-hot-toast.com/)                                        |
| **Loading Spinner** | [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/)                  |
| **SEO / Head**      | [React Helmet](https://github.com/nfl/react-helmet)                                    |
| **Linting**         | [ESLint](https://eslint.org/)                                                          |

## Backend API

The app consumes the **Linked Posts** REST API provided by Route Academy:

```
https://linked-posts.routemisr.com
```

## Getting Started

### Prerequisites

- Node.js ≥ 18

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```
