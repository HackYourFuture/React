# Lesson Plan Week 4

## Agenda

_The beginning of this class is a refresher of the JavaScript 3 module_

### Asynchronous JavaScript (Promises)

- For a long time, developers had to live in [callback hell](http://callbackhell.com/)
- Now, Promises are native to JavaScript.
- The `Promise` constructor takes one argument, a callback with two arguments, resolve and reject. Do something within the callback, typically async, then call resolve if everything worked, otherwise call reject.
- **README** [In-depth explanation about promises](https://developers.google.com/web/fundamentals/primers/promises)


### Async/await 
- User-friendly layer on top of Promises.
- **README** [Documentation on async/await](https://javascript.info/async-await)
- Not all browsers support this natively, but Webpack/Babel will provide a compatibility layer so we don't have to worry about it.

### Fetch API
- This is a _browser_ API only, will not work in Node environments (although there's of course a [node module](https://www.npmjs.com/package/node-fetch))
- The new version of XMLHttpRequest.
- Fetch uses Promises
- **WATCHME** Watch a [short video introduction to fetch](https://www.youtube.com/watch?v=g6-ZwZmRncs)
- **README** Read [Working with the Fetch API](https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api)
- More examples of fetch usage [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- **OPTIONAL, RECOMMENDED** Run [Google's Fetch API code lab](https://developers.google.com/web/ilt/pwa/lab-fetch-api):

```
git clone https://github.com/google-developer-training/pwa-training-labs.git
cd pwa-training-labs/fetch-api-lab/app
npm install
npm start
```

You should be able to access the site on <http://localhost:8081>. Then, follow the instructions on the page to make Fetch work. 

### React + Fetch

- **README** Read about [the component lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle) to understand when React components do their thing.
- **README** Read the short introduction on [using APIs in React](https://reactjs.org/docs/faq-ajax.html). 
- We'll build a simple weather fetching app.

### React + Fetch + Backend

- We'll implement fetch to get data from a Node.js backend. 
- **WATCHME** Quick whirlwind demo of a backend and front-end app: [YouTube video](https://www.youtube.com/watch?v=HPIjjFGYSJ4). **Warning:** don't use this approach in production because it's vulnerable to a [SQL injection attack](https://en.wikipedia.org/wiki/SQL_injection). We'll talk about how to mitigate that.
