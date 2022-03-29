import { render, screen, fireEvent } from "@testing-library/react";

import UserDetailsForm from "./2-UserDetailsForm";

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
};
const changedUser = {
  firstName: "Mary",
  lastName: "Williams",
  role: "User",
};

describe("UserDetailsForm", () => {
  it("Correctly fills in the initial values", () => {
    // TODO: Fill in!
    expect(true).toBe(false);
  });

  it("Correctly changes a fields value", () => {
    // TODO: Fill in!
    expect(true).toBe(false);
  });

  it("Submits the right values to the onSubmit function", () => {
    // TODO: Fill in!
    // TIP: You will need to mock the onSubmit function prop so you can check that it was called and what it was called with! Have a look at `jest.fn`
    expect(true).toBe(false);
  });
});
