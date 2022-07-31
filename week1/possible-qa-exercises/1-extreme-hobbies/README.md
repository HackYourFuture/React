# Extreme hobbies

There's nothing better than some extreme sports to get the blood pumping.

Take a look at the following:

```js
const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
```

1. Run `create-react-app` in this folder to create your environment
2. Create 2 functional components: `<HobbyList>` and `<Hobby>`
3. Put the `hobbies` variable into the `<HobbyList>` component.
4. In the `return` statement of the `<HobbyList>` use the `map()` function to return an instance of `<Hobby>` for every hobby in the array
5. Pass down the hobby string as a `prop` to the `<Hobby>` component (don't forget to add the `key` prop as well!)
6. Test out if it works by importing it into the top level component, which in this case is `<App>`
