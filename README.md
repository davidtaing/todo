# todo
Yet another attempt at a todo app using React &amp; Redux with a basic REST API as the backend.

For now the backend is a basic REST API that uses an array of todos to store the data.
- GET /todos - Loads and returns all todos.
- POST /todo - Adds new todo using JSON body in the request and returns the new todo.
- PUT /todo/:id/toggle - Toggles the completed flag of the target todo and returns the updated todo.
- DELETE /todo/:id - Deletes target todo and returns the removed todo.
