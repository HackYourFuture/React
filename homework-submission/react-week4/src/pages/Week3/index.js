import React, { useState, useEffect, useCallback } from "react";
import UserCard from "../../components/UserCard";
import UserInfo from "../../components/UserInfo";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import "./style.css";

function Week3() {
  const API = "https://uinames.com/api/?ext";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const res = await fetch(API);
    const usersData = await res.json();
    setIsLoading(false);
    setData(usersData);
  }

  useEffect(() => {
    fetchData();

    return function cleanup() {
      return fetchData();
    };
  }, []);

  const onHandleClick = useCallback(() => {
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
          button={<Button onHandleClick={onHandleClick} buttonText="Next" />}
        />
      )}
    </React.Fragment>
  );
}

export default Week3;
