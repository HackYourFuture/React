# Hack Your Future site in React

Example site built in React, for [Hack Your Future Belgium React class](https://github.com/HackYourFutureBelgium/React).

![](https://raw.githubusercontent.com/HackYourFutureBelgium/React/master/examples/hyf-site/.github/screenshot.png)

This project contains two versions. You can pick which one you like in `index.js`.

* **Static version**: The different pages of the site are hard-coded in the `pages` directory. This works well if you have a limited number of pages.
* **Dynamic version**: The pages are stored in a "database" under `data/pages.js`. The `Page` component will extract title, body and blocks from the database and render a page on the fly. This is a good approach if you have many pages and want to add a CMS for your site.

## Design

The design was originally done in Sketch (see the `artwork` folder) and then converted to Figma:

https://www.figma.com/file/LHvKwmf4lFWeKNVOmQnbTsZ0/HYF-Website

## Dependencies

This project uses [React](https://reactjs.org) of course, and [React Router](https://reacttraining.com/react-router/web/guides/quick-start).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

