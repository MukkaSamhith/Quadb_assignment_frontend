First install react in your vs code (npx create-react-app my-app) using the above mentioned and start by using npm start.

After starting the development server, open your browser and go to http://localhost:3000. You should see the ToDo List application interface where you can:

Add Tasks: Enter a title and description, then click "ADD".
View Tasks: All tasks will be displayed in a list.
Delete Tasks: Click the delete button next to a task to remove it.
Edit Tasks: Click the edit button next to a task to edit its details.

Features
Add Tasks: Users can add tasks with a title and description.
View Tasks: Users can view a list of all added tasks.
Delete Tasks: Users can delete tasks from the list.
Edit Tasks: Users can edit the title and description of existing tasks.
Persistent Storage: Tasks are stored in local storage, so they persist even after the browser is closed or refreshed.

TaskForm
The TaskForm component is responsible for rendering the form that allows users to add new tasks and edit existing tasks. It also handles the state management for task input fields and the logic for adding and editing tasks.

TaskList
The TaskList component is responsible for rendering the list of tasks. It receives the list of tasks as props and includes functionality for deleting tasks.

Technologies Used
React: A JavaScript library for building user interfaces.
Local Storage: Web storage for persisting tasks data.
CSS: Styling the application.
