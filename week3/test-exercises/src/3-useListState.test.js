import { renderHook, act } from "@testing-library/react-hooks";

import useListState from "./6-useListState";

/**
 * useListState is a custom hook, which means we (just like with a context) have something that does not render anything to the screen.
 * We can use the same trick as with contexts and write our own test component that puts it all on the screen, but there is a built in way especially for custom hooks.
 * Have a look at https://kentcdodds.com/blog/how-to-test-custom-react-hooks where you can find how the `renderHook` function can help
 */

/**
 * For the hook we have a couple of things to check:
 * - We provide an initialList, we should check that that one is actually filled in
 * - We get an addElement function, we should use that and see that the list is updated
 * - We get a removeElementById function, we should use that and see that the list is updated
 */

describe("useListState", () => {
  it("Sets the correct initial list", () => {
    
  });

  it("Adding an element updates the list", () => {
    
  });

  it("Removing an element updates the list", () => {
    
  });
});
