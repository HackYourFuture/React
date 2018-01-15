# Homework Week 5

Base your week 5 homework on the result of week 4.

When you are done, update your PR from week 4.

## Outline

Your todo list app should now handle all its important state in MobX stores. Now, instead of loading your data from a static JSON file, refactor your app to read and write data via an external REST API.

**API root:** https://hyf-react-api.herokuapp.com

**API docs:** https://hyf-react-api.herokuapp.com/apiDocs

For this homework, you will only need the /todos paths.

GET paths take no params, POST paths take strictly validated params, and PUT paths are param-flexible (if you only want to update one field, you can just send that field alone).

All requests should be done with the `fetch` API, and all store mutation should happen inside MobX actions. _MobX strict mode should be turned on!_

You will almost certainly need to refactor your app to handle a new todo object shape.

## NB

The API for this homework reads and writes to a database. Unlike past weeks, you will now be sharing data with your colleagues. Please be aware of this - for example, deleting all the todos may lead to a confusing situation for others.

## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Cleanliness of code
