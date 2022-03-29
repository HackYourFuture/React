# Random Joke Generator]

Never run out of jokes with the Random Joke Generator!

In this exercise we'll be using the following API endpoint: `https://official-joke-api.appspot.com/random_joke`

1. Create 2 functional components: `<RandomJoke>` and `<Joke>`
2. Inside `<RandomJoke>` create a state variable called `joke` (with initial state `{}`) and state handler `setJoke`
3. Make use of the `useEffect` hook to make an asynchronous API call to the API endpoint. Put the end result into the state variable using `setJoke`
4. Now pass the reassigned state variable `joke` to the `<Joke>` component
5. Inside the `<Joke>` component, display the `setup` and `punchline` attributes in 2 `<p>` tags
6. Check out your work by importing your components into the top level component, which is `<App>`
