import React from "react";

import UserListItem from "./1-UserListItem";
import UserDetailsForm from "./2-UserDetailsForm";
import ChuckNorrisJoke from "./3-ChuckNorrisJoke";

function App() {
  /**
   * We just render the components in the simplest way possible so you can see them in the UI to get an idea what they do.
   * As you can see we haven't done any styling ;)
   */
  return (
    <div>
      <UserListItem
        user={{ firstName: "John", lastName: "Doe", role: "Admin" }}
      />
      <hr />
      <UserDetailsForm
        initialUserValues={{
          firstName: "John",
          lastName: "Doe",
          role: "Admin",
        }}
        onSubmit={() => {}}
      />
      <hr />
      <ChuckNorrisJoke />
    </div>
  );
}

export default App;
