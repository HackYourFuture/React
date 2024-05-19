# Building a counter

The counter is one of the best way to learn about state management as it is nice and simple and isolates the management of state. Let's create a simple number counter, starting from 0 until infinity!

1. Run `npm create vite` in this folder to create your environment
2. Create 3 functional components called `<Counter>`, `<Count>` and `<Button>`
3. Inside `<Counter>` define a state variable called `count` (initialized with value `0`) and state handler called `setCount`
4. Inside `<Button>` create a `<button>` with the text `Add 1!` and `onClick` attribute
5. Pass down the `count` state variable to `<Count>`, and a function to add 1 to the count to `<Button>`
6. Inside `<Counter>`, declare a variable called `feedback` above the return statement. Give this variable a ternary operator value: if `count` is higher than 10 it should display the string `"It's higher than 10!"`, else it displays `"Keep counting..."`
7. Test out if it works by importing `<Counter>` into the top level component, which is `<App>`

## Things to think about

Building this little App should be straightforward, now let's get those _brain juices_ flowing. Before the session on Sunday have a think about the following:

- How would you implement a decrement button that lowers the count by 1? Would you make 2 different <Button> functions or would you add props to the component to handle the change in text?
- Once you can decrement as well, how would you implement it never going below 0?
- What would you need to change to also have a button that adds 2 and one that removes 2? Will that create a problem with your logic for never going below 0?
