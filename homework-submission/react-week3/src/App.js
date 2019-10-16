import React, { useState, useEffect, useCallback } from "react";
import UserCard from "./components/UserCard/UserCard";
import UserInfo from "./components/UserInfo/UserInfo";
import Spinner from "./components/Spinner";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("https://uinames.com/api/?ext");
      const usersData = await res.json();
      setIsLoading(false);
      setData(usersData);
    }
    fetchData();

    return function cleanup() {
      return fetchData();
    };
  }, []);

  const generateNextUser = useCallback(async () => {});

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <UserCard
          image={data.photo}
          image_info={data.name}
          children={
            <UserInfo
              name={data.name}
              surname={data.surname}
              phone={data.phone}
              email={data.email}
            />
          }
          button={<Button generateNextUser={() => generateNextUser} />}
        />
      )}
    </React.Fragment>
  );
}

export default App;
