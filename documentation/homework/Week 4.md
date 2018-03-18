# Homework Week 4

Base your week 4 homework on the result of week 3.

When you are done, update your PR from week 3.

## Outline

Refactor your todo list app so that all state is handled by MobX stores. You _may_ want to keep some form state as local state inside React components. But think carefully about this.

Make sure to only mutate your store(s) with MobX actions - you will need to move all your handler functions inside your MobX store(s).

To use decorators (the `@` syntax) with `create-react-app`, follow this [tutorial](https://swizec.com/blog/mobx-with-create-react-app/swizec/7158).

 _You must have MobX strict mode enabled. Any homework submitted without strict mode on will be rejected. You enable strict mode like this:_
 
    configure({ enforceActions: true })

## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Cleanliness of code
