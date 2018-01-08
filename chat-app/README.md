# Chat app

## Outline

Imagine a chat app:

![Chats](./chats.png)
![Chat](./chat.png)
![Profile](./profile.png)

With the following component hierarchy:

![Hierarchy](./hierarchy.png)

## Components

Review the list of components, their state and their props:

| Component | Props | State |
| --------- | ----- | ----- |
| `App` | &lt;None&gt; | <ul><li>`chats`</li><li>`profile`</li></ul> |
| `ChatsScreen` | <ul><li>`chats`</li></ul> | &lt;None&gt; |
| `ChatItem` | <ul><li>`chat`</li></ul> | &lt;None&gt; |
| `ChatScreen` | <ul><li>`chat`</li></ul> | &lt;None&gt; |
| `Message` | <ul><li>`message`</li></ul> | &lt;None&gt; |
| `ProfileScreen` | <ul><li>`profile`</li></ul> | &lt;None&gt; |
| `Avatar` | <ul><li>`profile`</li></ul> | &lt;None&gt; |
| `ProfileName` | <ul><li>`profile`</li></ul> | &lt;None&gt; |

## Data structure

The following lists the structure of the data:

### `chats`

```js
[
  <chat>,
  <chat>,
  ...
]
```

### `profile`

```js
{
  "name":      <string>,
  "avatarURL": <string>
]
```

### `chat`

```js
{
  "id":       <number>,
  "contact":  <contact>,
  "messages": [<message>, <message>, ...]
}
```

### `contact`

```js
{
  "id":        <number>,
  "name":      <string>,
  "avatarURL": <string>
}
```

### `message`

```js
{
  "id":     <number>,
  "fromMe": <boolean>,
  "date":   <string / date>,
  "text":   <contact>,
  "read":   <boolean>
}
```
