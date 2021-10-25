# Dog photo gallery

Let's make a randomized dog photo gallery!

In this exercise we'll be using the following API endpoint: `https://dog.ceo/api/breeds/image/random`

1. Create 3 functional components: `<DogGallery>`, `<DogPhoto>` and `<Button>`
2. Inside `<DogGallery>` create a state variable called `dogPhotos` (initialize with value `[]`) and state handler `setDogPhotos`
3. Inside (before the return statement) also create a function called `getDogPhoto`. The purpose of this function is to make an API call to `https://dog.ceo/api/breeds/image/random`. You can either use `fetch` or `axios`. At the end of the function push the new `dog image URL` into the `dogPhotos` array state variable using `setDogPhotos`
4. Inside the `<Button>` component, create a `<button>` that has the text "Get a dog!" and `onClick` attribute
5. Pass down the function `getDogPhoto` to `<Button>`
6. Inside `<DogGallery>` return all the dogs stored in the `dogPhotos` array using the `map()` function. Pass down each `dogPhoto` into an instance of `<DogPhoto>`.
7. However, when there are no dogs in the array yet make sure to display the message "Get your first dog by clicking the button!"
8. Check your components by importing it into the top level component, which is `<App>`
9. Now write the tests!
