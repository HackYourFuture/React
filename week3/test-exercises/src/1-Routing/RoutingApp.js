import { BrowserRouter, Link } from "react-router-dom";
import Routing from "./Routing";

/**
 * You will notice that we need to separate our BrowserRouter from the actual Routing component.
 * The reason is that to test the routing we will need to use a different component.
 * The BrowserRouter as the name suggests works in a browser, whereas our tests do not run in a browser.
 *
 * You will not be able to test the RoutingApp component in jest, for that we will trust in the e2e tests (in cypress for example).
 * It is good to be aware of that though and keep a wrapper component like this as small as possible!
 */

function RoutingApp() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Routing />
    </BrowserRouter>
  );
}

export default RoutingApp;
