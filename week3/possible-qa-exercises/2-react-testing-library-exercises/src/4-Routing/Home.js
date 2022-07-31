/**
 * A simplified Home component to help with testing routing.
 *
 * The `data-testid` may be a little confusing, have a look at the testids file that we are importing for an explanation.
 */

import TEST_IDS from "./testids";

function Home() {
  return <div data-testid={TEST_IDS.HOME_CONTAINER}>This is the Home page</div>;
}

export default Home;
