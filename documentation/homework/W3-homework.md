# Homework Week 3

Base your week 3 homework on the result of week 2.

When you are done, update your PR from week 2.

## Outline

Extend your contacts app with the ability to **view item details** and **search items**.

You should already have a search field, based on the HTML code from the [demo app](https://hyf-contacts.netlify.com). You should also have the details pane.

### Search

To add search functionality, add an `onChange` handler to the search field. In the handler, update a state variable that contains the `searchText`. Then, there are two ways to implement this:

- Search the contact list in the search handler by creating a second list (e.g. filteredContacts) in state, and using that list to render. Make sure that you update your constructor and render method too.
- Search the contact list right before you render (so in the body of the `render` method), and turn the `filteredContacts` into contact elements.

When searching, make sure the following cases work:

- Searching should work for both first name and last name
- Searching should be case-insensitive, e.g. searching for `"BOB"` will also return `"Bob"`.
- Searching for nothing (empty string) should return all contacts.
- Bonus points if you figure out how to return all contacts if your search string is just spaces (e.g. searching for `"  "`)

### View item details

Clicking on a contact should show their details in the details pane. 

We've already seen the main "trick" to make this work, which is to remember the **index** of the contact you clicked on. Use the [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) function to figure out the index of the item, and use standard [array indexing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections) to get back that item.

### Bonus: refactoring

As your app grows, this is a good time to structure the source code in multiple files. The `App.js` is the container that calls out to `ContactList.js` and `ContactDetails.js`. There could also be a `Header.js` that contains the header. 

To make sure this works, look again at the docs for [lifting state up](https://reactjs.org/docs/lifting-state-up.html). Specifically, you need to store the search text and active contact in the App component. Pass down the state using render props, and also pass down the handlers that trigger when the user is searching or selecting a contact.

Good luck! ✨
