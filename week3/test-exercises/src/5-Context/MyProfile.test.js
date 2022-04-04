import { fireEvent, render, screen } from "@testing-library/react";
import LoggedInUserContext from "./LoggedInUserContext";

import MyProfile from "./MyProfile";

import TEST_ID from "./testids";

/**
 * MyProfile in essence is very similar to a simple component that reacts (haha, get it?) based on props it is given.
 * The only difference is that the props are given by a context rather than directly to the component.
 *
 * It would be tempting to wrap your component in the LoggedInUserContextProvider but you will notice that you then do not have a lot of control over what is being provided to your component.
 * This lack of control will make it more difficult to specifically test the component.
 * Besides, we should not be testing the workings of the Provider here, we need to test MyProfile.
 * So we can use the same trick as we use in testing the Context, a specific component just for this test that will create a provider in the state we want it!
 */
function TestComponent({ loggedInUser, isLoggedIn, login, logout }) {
  return (
    <LoggedInUserContext.Provider
      value={{ loggedInUser, isLoggedIn, login, logout }}
    >
      <MyProfile />
    </LoggedInUserContext.Provider>
  );
}

/**
 * When looking at the MyProfile component we can see a couple things that needs to be tested:
 * - If the user is logged in we should be showing their name
 * - If the user is logged in we should be showing a button to logout
 * - If the user is not logged in we should be showing a message to login
 */
describe("MyProfile", () => {
  it("Displays the name of the logged in user", () => {});

  it("Allows the user to log out if the user is logged in", () => {});

  it("Shows a message to login if the user is not logged in", () => {});
});
