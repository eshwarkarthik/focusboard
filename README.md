
# FocusBoard – Task Management Dashboard

FocusBoard is a responsive task management dashboard built using React. It helps users organize daily activities, manage priorities, track progress, and stay productive.

## Features

- Dashboard with task statistics
- Create new tasks
- Edit existing tasks
- Delete tasks with confirmation
- Update task status
- Search tasks by title (case-insensitive)
- Filter tasks by status
- Filter tasks by priority
- Combined search and filtering
- Completion rate calculation
- Focus Notes carousel with three slides
- LocalStorage persistence
- Responsive design for desktop, tablet, and mobile

## Tech Stack

- React
- JavaScript
- Vite
- HTML5
- CSS3
- Lucide React
- Browser LocalStorage

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd focusboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Visit:

http://localhost:5173/

## Project Structure

```text
focusboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskForm.jsx
│   │   └── FocusNotes.jsx
│   ├── data/
│   │   └── initialTasks.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Data Persistence

FocusBoard uses browser LocalStorage to save tasks. Task information remains available after refreshing the browser.

## Author

Eshwar Karthik

## License

This project was created as a frontend development assignment.
