# Exercises

Answer the following questions about the hypothetical chat application described [in this folder](.). You don't have to do any programming, this is just about thinking the "React way".

> Tip: keep the component hierarchy open in a separate tab, or print it out to keep a quick reference.

## 1. Profile

We want users to edit their profile name. For this, you will use a component `<TextEditor>` that takes props `value`, `onCancel` and `onSave`. This component displays a text box and manages its state. When the user presses save, the `onSave` callback prop is called.

- 1a. Which existing components do you need to modify?
- 1b. Which *state* properties are you going to add, and in which component?
- 1c. Which component should be the one that performs the name change (i.e. calls `setState` with the new name)?
- 1d. Do you need to add *props* to existing components? If so, which ones?

## 2. Message read receipts

We want users to check if their messages have been read by the other party. Imagine that the application is set up so that if the other party reads a message, the `read` flag in the `<message>` object is set to `true` automatically.

- 2a. Which existing components do you need to modify?
- 2b. Do you need to create additional components? If so, which, and what are their *props*? (Specify name and type.)
- 2c. Do you need to add *state* properties to any existing component?
- 2d. Do you need to add *props* to any existing component?

## 3. Message deletion

We want users to delete existing messages. Each message will have a small button, if they press it, the message is gone. Imagine that you have a `<DeleteButton>` component that displays a red cross, and has a `onPress` callback prop which is called when the user presses the button.

- 3a. Which existing components do you need to modify?
- 3b. Do you need to create additional components? If so, which, and what are their *props*? (Specify name and type.)
- 3c. Do you need to add *state* properties to any existing component?
- 3d. Which component should be the one that performs the actual deletion (i.e. calls `setState`)?
- 3e. Do you need to add *props* to any existing component?

## 4. Message deletion with confirmation

We want to build in a safeguard to prevent accidental deletion of messages. The delete button will have to states: first, it is gray, and if the user presses it, the button becomes bigger and red. If they press it a second time, the message will actually be deleted.

- 4a. To add this behavior, do you need to modify any other components than the `<Button>` component?
- 4b. Do you need to add *state* properties to the `<Button>` component?
- 4c. Do you need to add *props* to the `<Button>` component?

## 5. Date headers

We want the chat screen to display a little separator between messages received on different days, like in Whatsapp. For example:

```
> Almost new year!!

   ---- Jan 1 ----
   
> Happy new year!

           You too!! <
```

- 5a. Which existing components do you need to modify?
- 5b. Do you need to add *state* properties to any existing component?
- 5c. Do you need to add *props* to any existing component?

## 6. Navigation

One part that's missing in the application is the navigation. That is, the screen that the user is looking at should also be part of the state.

- 6a. In which component should you add the *state property* that describes where the user is in the app?
- 6b. What should be the *shape* of this property (that is, what should be its type, or in case of an object, what properties should it have?). Think very thoroughly about *all* different possibilities!
- 6c. How should you use this state property to display the correct screen to the user? (You don't need to write code, just explain it in English.)
