import { render, screen, waitFor } from "@testing-library/react";

import ChuckNorrisJoke from "./3-ChuckNorrisJoke";

/**
 * ChuckNorrisJoke is a component that fetches a joke from an api and displays it on the screen.
 * It is a simple component that we can use to practice API testing! Let's look at how the user sees the component:
 *
 * - When starting, the user should see a Loading... text
 * - Once the joke has been fetched it should be shown on the screen
 * - If there is an error, an error message needs to be showen to the user
 *
 * You don't want your component to really connect to the API when unit testing so you will want to mock that.
 * To make this easier, a package called `jest-fetch-mock` can be useful, you will have to set that up yourself.
 * Have a look at: https://github.com/jefflau/jest-fetch-mock
 */

const joke = "Chuck Norris's log statements are always at the FATAL level.";
const testSuccessfullResponse = JSON.stringify({
  type: "success",
  value: {
    id: 538,
    joke,
    categories: ["nerdy"],
  },
});

describe("ChuckNorrisJoke", () => {
  it("should show the Loading text when the component is still loading", async () => {
    //TODO: Fill in!
    expect(true).toBe(false);
  });

  it("should show the joke the fetch returns", async () => {
    //TODO: Fill in!
    expect(true).toBe(false);
  });

  it("should show an error message if the fetch fails", async () => {
    //TODO: FIll in!
    //EXTRA CHALLENGE: You will find that you will get a `console.error` log because the component calls it.
    //     The test will pass but it will clog up your test runs which will become a problem.
    //     Think of a way to not change the component but also not get an error message.
    expect(true).toBe(false);
  });
});
