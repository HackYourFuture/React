# Lesson Plan Week 4

## Agenda

### Asynchronous JavaScript (Promises)

- For a long time, developers had to live in [callback hell](http://callbackhell.com/)
- Now, Promises are native to JavaScript.
- The `Promise` constructor takes one argument, a callback with two arguments, resolve and reject. Do something within the callback, typically async, then call resolve if everything worked, otherwise call reject.
- [In-depth explanation here](https://developers.google.com/web/fundamentals/primers/promises)


### Async/await 
- User-friendly layer on top of Promises.
- [Documentation](https://javascript.info/async-await)
- Not all browsers support this natively, but Webpack/Babel will provide a compatibility layer so we don't have to worry about it.

### Fetch API

- This is a _browser_ API only, will not work in Node environments (although there's of course a [node module](https://www.npmjs.com/package/node-fetch))
- The new version of XMLHttpRequest.
- Fetch uses Promises
- In-depth explanation [here](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- Examples of fetch usage [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- Alternatives (isomorphic):
  - [superagent](https://www.npmjs.com/package/superagent)
  - [axios](https://www.npmjs.com/package/axios)
  - [request](https://www.npmjs.com/package/request)

- We will use fetch for our purposes, because it is standard to all modern browsers and does not require any third-party code
- Fetch requires a little more boilerplate than some alternatives, but overall the API is basically the same

## In-Class Blog App

### TODOs

- Convert application to read/write data from API instead of local state or localStorage
