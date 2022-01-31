import { render, screen } from "@testing-library/react";

import UserListItem from "./1-UserListItem";

/**
 * UserListItem is a very simple component that places the data given into an <li> element.
 * For a simple component like this the main thing to check is that all of the data that is
 * given to the component is actually being shown on the screen as that is what the user interacts with.
 */

// You can use this object as the props to send. By putting it outside of the `describe` function we make it available for every test.
// This makes it easier to update all of the tests if the main component changes
const testUser = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
};

describe("UserListItem", () => {
  it("Displays all of the fields ", () => {
    // TODO: FILL THIS IN
    expect(true).toBe(false);
  });
});
