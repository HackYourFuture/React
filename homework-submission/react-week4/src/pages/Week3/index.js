import React, { useState, useEffect, useCallback } from "react";
import UserCard from "../../components/UserCard";
import UserInfo from "../../components/UserInfo";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import "./style.css";

function Week3() {
  const API = "https://uinames.com/api/?ext";
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const res = await fetch(API);
    const usersData = await res.json();
    setIsLoading(false);
    setUsersData(usersData);
  }

  useEffect(() => {
    fetchData();

    return function cleanup() {
      return fetchData();
    };
  }, []);

  const onHandleClick = useCallback(() => {
    fetchData();

    return function cleanup() {
      return fetchData();
    };
  }, []);

  document.body.onkeyup = function(e) {
    if (e.keyCode === 32) {
      fetchData();
    }
    return fechData();
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <UserCard
          image={usersData.photo}
          image_info={usersData.name}
          children={
            <UserInfo
              name={usersData.name}
              surname={usersData.surname}
              phone={usersData.phone}
              email={usersData.email}
            />
          }
          button={<Button onHandleClick={onHandleClick} buttonText="Next" />}
        />
      )}
    </React.Fragment>
  );
}

export default Week3;
