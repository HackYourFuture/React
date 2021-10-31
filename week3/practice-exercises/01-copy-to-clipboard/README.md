# Copy to clipboard

Can you make a hook that takes a user input and copies it to their computer's clipboard?

1. Create a new application via `create-react-app`
2. Add a new component, with a simple text field the user can type in.
3. Add another component consisting of a button.
4. Store the user's entry. (Bonus question: How should you store this value? In the component? Context API? App.js?)
5. It's time to make our hook!

- Create a `hooks` folder in your project, and inside create a file called `useCopy.js`.
- Create (and export!) a function called `useCopy` and inside create another function `handleCopy`.
- Handle copy should take one string as a parameter, copy that parameter to the clipboard.
- For that, we're going to need the [navigator object](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard). Look for the method that adds text to the user's clipboard.
- Return the `handleCopy` function. (For a familiar syntax, you might want to export it like so: `return [handleCopy]`.)

6. Import `handleCopy` from the `useCopy` function. Based on how you've stored the user input, you will need to call it in different places, but be sure it is triggered by a button click.
7. Let's see if it works!

Extra:

- Could we make and return something else from this hook? Perhaps something to indicate the user has copied to clipboard?
- Could we do anything to ensure the data type is valid? What if users are inputting letters into a phone number field?
