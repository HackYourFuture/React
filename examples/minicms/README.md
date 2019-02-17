## Mini Content Management System.

This system is a very small application to create and edit webpages. Pages are stored as [Markdown](https://commonmark.org/help/) files on the server, and send to the frontend.

## Backend

The `backend` folder contains a node.js server. To run it:

```
cd backend
npm install
npm run dev
```

You should be able to get the contents of the index page by going to <http://localhost:4000/api/pages/index>.

## Frontend

The `frontend` folder contains a React application that can show and edit pages. It uses [React Router](https://reacttraining.com/react-router/web/guides/philosophy) to switch between different routes. It uses [Marked](https://github.com/markedjs/marked) to render the Markdown pages as HTML.

To run it, first make sure the backend is running on port 4000. Then start the React dev server in another tab:

```
cd frontend
npm install
npm start
```

