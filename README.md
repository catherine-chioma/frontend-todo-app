# Todo Application

A simple Todo application built with React and TypeScript that provides complete CRUD (Create, Read, Update, Delete) functionality.

## Features

- **Create**: Add new tasks to your todo list
- **Read**: View all your existing tasks
- **Update**: Edit task content and mark tasks as completed
- **Delete**: Remove tasks from your list
- **Persistence**: Tasks are saved to localStorage so they persist between browser sessions

## Technologies Used

- React
- TypeScript
- CSS for styling
- localStorage for data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository or download the source code
```
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

2. Install dependencies
```
npm install
# or
yarn install
```

3. Start the development server
```
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
todo-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TodoForm.tsx     # Form for adding new todos
│   │   ├── TodoList.tsx     # Renders the list of todos
│   │   └── TodoListItem.tsx # Individual todo item component
│   ├── types/
│   │   └── TodoItem.ts      # TypeScript interface for todo items
│   ├── App.css              # Application styles
│   ├── App.tsx              # Main App component
│   ├── TodoApp.tsx          # Todo application logic
│   └── index.tsx            # Entry point
└── package.json
```

## Usage

- **Adding a Todo**: Type your task in the input field and click "Add" or press Enter
- **Completing a Todo**: Click the checkbox next to a task to mark it as completed
- **Editing a Todo**: Click the "Edit" button on a task, make your changes, then click "Save"
- **Deleting a Todo**: Click the "Delete" button on a task to remove it

## Accessibility Features

- All interactive elements are keyboard accessible
- Form inputs have proper labels
- Action buttons have descriptive aria-labels
- Sufficient color contrast for readability

## Future Enhancements

- Add categories/tags for todos
- Implement due dates and reminders
- Add filtering and sorting options
- Implement drag-and-drop reordering
- Add user authentication for personal todo lists

## License

This project is licensed under the MIT License
