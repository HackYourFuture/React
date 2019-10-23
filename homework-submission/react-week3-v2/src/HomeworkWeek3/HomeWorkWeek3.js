import React, { useState, useEffect, useCallback } from "react";
import UserCard from "../components/UserCard";
import UserInfo from "../components/UserInfo/UserInfo";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import "./HomeworkWeek3.css";

function HomeWorkWeek3() {
  const API = "https://uinames.com/api/?ext";
  const [userData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsersData() {
    setIsLoading(true);
    const res = await fetch(API);
    const usersData = await res.json();
    setIsLoading(false);
    setUsersData(usersData);
  }

  useEffect(() => {
    fetchUsersData();

    return function cleanup() {
      return fetchUsersData();
    };
  }, []);

  const onHandleClick = useCallback(() => {
    fetchUsersData();

    return function cleanup() {
      return fetchUsersData();
    };
  }, []);

  document.body.onkeyup = function(e) {
    if (e.keyCode === 32) {
      fetchUsersData();
    }
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <UserCard
          image={userData.photo}
          image_info={userData.name}
          children={
            <UserInfo
              name={userData.name}
              surname={userData.surname}
              phone={userData.phone}
              email={userData.email}
            />
          }
          button={<Button onHandleClick={onHandleClick} buttonText="Next" />}
        />
      )}
    </React.Fragment>
  );
}

export default HomeWorkWeek3;
