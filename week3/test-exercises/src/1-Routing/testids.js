/**
 * As we are now testing more complex components and are getting ready to do testing in bigger projects it is time to start splitting up code again.
 * In previous tests you have written you have probably used the text or type of an element to find it on the screen. That is definitely an option if your test provides the text or element, but can cause some problems later on when other features are added (multiple languages for example!).
 *
 * A common solution to this is to use the `data-testid` attribute on elements. These will never need to be changed for app purposes and such provide a great way to consistently identify the parts of your app you want to check.
 *
 * The reason for putting them all in a separate file is to lower the risk that there are no duplicate strings used. (It would probably be a good idea to write a test that makes sure that no duplicate strings are exported here ;)). Duplicate strings can cause the strangest test fails or even worse, can cause tests to pass without testing what you are actually testing. If every page had a div with a data-testid of `container` for example, and you want to check that the page went to a the Home page by checking that the data-testid is `container`. Then you would get a false positive if you would send it to the UserList component. The test would be green but the app would be broken.
 */

export default {
  HOME_CONTAINER: "home-container",
  USER_LIST_CONTAINER: "user-list-container",
  USER_DETAILS_CONTAINER: "user-details-container",
};
