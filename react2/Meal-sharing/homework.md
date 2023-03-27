# Meal-sharing homework overview

This section provides you an overview of which Meal-sharing parts should be completed **before** the Meal-sharing session itself.
Those are the parts implemented as parts of homework, starting with the node module.  
<br/>
The [last](#meal-sharing-session) section details the homework to be implemented after the Meal-sharing session.

<br/>

## node week1

### ➡️ routes:

- `/future-meals `
- `/past-meals`
- `/all-meals`
- `/first-meal ` -`/last-meal `

[ -> full description](https://github.com/HackYourFuture-CPH/node.js/tree/main/week1/homework)

<br/>

## node week2

### ➡️ routes:

**meals**

- GET `/api/meals   `
- POST `/api/meals   `
- GET `/api/meals/:id   `
- PUT `/api/meals/:id   `
- DELETE `/api/meals/:id   `

**reservations**

- GET `/api/reservations`
- POST `/api/reservations`
- GET `/api/reservations/:id`
- PUT `/api/reservations/:id`
- DELETED `/api/reservations/:id`

[ -> full description](https://github.com/HackYourFuture-CPH/node.js/tree/main/week2)

<br/>

## node week3

**meals**

### ➡️ GET `api/meals` query parameters:

- `maxPrice`
- `availableReservations`
- `title`
- `dateAfter`
- `dateBefore`
- `limit`
- `sortKey`
- `sortDir`

Make sure that the query parameters can be combined, f.x. `?limit=4&maxPrice=90`.

<br/>

**reviews**

### ➡️ routes:

- GET `/api/reviews`
- GET `/api/meals/:meal_id/reviews`
- POST `/api/reviews`
- GET `/api/reviews/:id`
- PUT `/api/reviews/:id`
- DELETE `/api/reviews/:id`

[ -> full description](https://github.com/HackYourFuture-CPH/node.js/tree/main/week3)

<br/>

## react1 week1 , react1 week2

-> nothing for Meal-sharing!

<br/>

## react1 week3

`MealsList` component.

<br/>

## react2 week1

`Meal` component - created and used in `MealsList`.

<br/>

## react2 week2

**➡️ adding frontend routes**

- `/ `
- `/meals/{id}`
- `/meals`

**➡️ in the `/meals/{id}` route:**

- form for reservation: `POST /api/reservations`

- form for review: `POST /api/reviews`

[ -> full description](https://github.com/HackYourFuture-CPH/React/blob/main/react2/week2/homework.md)

<br/>

## Meal-sharing session

- find a meal by title, use your `title` query parameter. Have a search bar above your `MealsList` in the `/meals` page.
- sort by `sortKey` and use `sortDir` query parameters (`when`, `max_reservations` and `price`  should be available as per previous homework). Flip between ⬆️ and ⬇️ for sorting direction or implement it in a different way of your choice.
- show how many spots for reservations are left on the `Meal` component.
