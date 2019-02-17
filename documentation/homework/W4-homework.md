# Homework Week 4

To reinforce the concepts for this week, we want you to rebuild the mini CMS page we wrote in class by following the video. The video starts from scratch, so you can skip ahead if you followed along in class.

📹 Video: <https://enigmeta.s3.amazonaws.com/hackyourfuture/hyf-react-minicms-part1.mp4>

**Note:** If you have issues with stuttering video in the browser, you can download the video locally. Just right-click the link and choose save as, or run the following commands in a Linux terminal:

```
sudo apt-get install curl
curl -O https://enigmeta.s3.amazonaws.com/hackyourfuture/hyf-react-minicms-part1.mp4
```

If you get stuck, full sources are already available in the [examples folder of this repository](https://github.com/HackYourFutureBelgium/React/tree/master/examples/minicms).

## Outline

Create a small website that stores content in Markdown files in a `data/` directory. Build a backend server in Node.js/Express that serves these pages through an API. Build a frontend server in React that fetches pages and displays them to the user.

## Backend

The backend is a Node.js / Express server. It uses the [fs module](https://nodejs.org/api/fs.html) to read files from the data directory into a string that it sends to the client.

Because our backend and frontend run on different servers, we need to enable [cors](https://www.npmjs.com/package/cors). 

A page in our CMS looks like this:
```
# About Us

ACME Inc is the largest distributor of things.
```

The first line (without the hashtag) is the page title. The rest of the page is the body. 

Here's the default content of my website:
* [index.md](https://raw.githubusercontent.com/HackYourFutureBelgium/React/master/examples/minicms/backend/data/index.md)
* [about.md](https://raw.githubusercontent.com/HackYourFutureBelgium/React/master/examples/minicms/backend/data/about.md)

To extract out the title and body, [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) the string into a list of lines, then take out the first line and use [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to put the list back together.

Make sure to handle errors from fs properly. If the page doesn't exist, don't just throw an error. Instead, return a JSON object with a `error` status code.

## Frontend

The frontend is a standard React app that uses React Router for switching between pages. The router belongs in `App.js`, which then renders pages using the `ShowPage` component. To route to this component, we use the following code:

```
<Router>
  ... other components / elements ....
  <main>
    <Route exact path="/" component={ShowPage} />
    <Route exact path="/:slug" component={ShowPage} />
  </main>
  ... other components / elements ...
</Router>
```

The `ShowPage` component will execute a fetch request to get the data for the page from the API server. E.g. to fetch the about page it would GET `http://localhost:4000/api/pages/about`. Note that to retrieve the homepage, it needs to fetch a page with the name `index`. 

In our ShowPage component we can access the slug using `this.props.match.params.slug`. For the homepage (`/`) the slug will be `undefined`. We can add a condition to check if the slug is defined, and set it to `index` otherwise.

Make sure to handle errors from fetch properly. If the status is error, we want to show this error to the user.

Normally we want to call fetch from `componentDidMount`. However, when switching from page to page, we're not actually changing components, so we're not mounting/unmounting the component. Instead, we're just updating props on that component, so we will need to check in `componentDidUpdate` if we switched to a new page, and load that page there as well. Read more about the [React Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle) and look at the [cheat sheet](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) to understand why we need to possible load the page in two places.

To render the page body we use [Marked](https://www.npmjs.com/package/marked). Note that React makes it purposefully difficult to render raw HTML. You will need to use [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

## Resources / Documentation

* Express: [Getting Started](http://expressjs.com/en/starter/hello-world.html) and [Reference Docs](http://expressjs.com/en/4x/api.html#req)
* React Router: [Quick Start Page](https://reacttraining.com/react-router/web/guides/quick-start)
* [Marked](https://www.npmjs.com/package/marked): Convert Markdown to HTML
* [CSS Flexbox video tutorial](https://flexbox.io/)
* [Finished application](https://github.com/HackYourFutureBelgium/React/tree/master/examples/minicms)

