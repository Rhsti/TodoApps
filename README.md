# React Todo App

A simple Todo list application built with React. Add, complete, edit, and delete tasks with a clean component-based structure.

## Features

- ✅ **Add tasks** — enter a task (minimum 5 characters) and submit
- ✅ **Mark as done** — click the check button to toggle a task's completed state (shown with strikethrough text)
- ✅ **Edit tasks** — click "Edit" to open an inline editor and update the task text
- ✅ **Delete tasks** — remove a task from the list
- ✅ **Empty state** — shows "No Task Yet!" when the list is empty

## Tech Stack

- React (functional components + hooks)
- Font Awesome icons (`fa-solid fa-check`)
- Plain CSS for styling (`App.css`, `TodoApp.css`, `ListApp.css`)

## Project Structure

```
src/
├── App.jsx                # Root component, holds state & logic
├── App.css
└── component/
    ├── TodoApp.jsx         # Input form to add new tasks
    ├── TodoApp.css
    ├── ListApp.jsx         # Renders the task list
    └── ListApp.css
```



## License

MIT
