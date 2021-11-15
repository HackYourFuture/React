import "../src/styles/App.css";
import Search from "./components/search/Search";
import React, { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Search
        data-testid="search-bar"
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {isLoading && <h2>Is Loading...</h2>}
    </div>
  );
}

export default App;
