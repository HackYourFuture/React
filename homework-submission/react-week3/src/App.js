import React, { useState, useEffect, useCallback } from "react";
import UserCard from "./components/UserCard/UserCard";
import UserInfo from "./components/UserInfo/UserInfo";
import Spinner from "./components/Spinner";
import Button from "./components/Button";
import "./App.css";

function App() {
  const API = "https://uinames.com/api/?ext";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(API);
      const usersData = await res.json();
      setIsLoading(false);
      setData(usersData);
    }
    fetchData();

    return function cleanup() {
      return fetchData();
    };
  }, []);

  const generateNextUser = useCallback(() => {
    async function fetchNewUser() {
      setIsLoading(true);
      const res = await fetch(API);
      const newUserData = await res.json();
      setIsLoading(false);
      setData(newUserData);
    }
    fetchNewUser();

    return function cleanup() {
      return fetchNewUser();
    };
  }, []);

  document.body.onkeyup = function(e) {
    if (e.keyCode === 32) {
      async function fetchWithSpace() {
        setIsLoading(true);
        const res = await fetch(API);
        const newUserData = await res.json();
        setIsLoading(false);
        setData(newUserData);
      }
      return fetchWithSpace();
    }
  };

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
          button={<Button generateNextUser={generateNextUser} />}
        />
      )}
    </React.Fragment>
  );
}

export default App;
