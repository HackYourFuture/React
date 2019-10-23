import React, { useState, useEffect, useCallback } from "react";
import UserCard from "../components/UserCard";
import UserInfo from "../components/UserInfo/UserInfo";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import "./HomeworkWeek3.css";

function HomeWorkWeek3() {
  const API = "https://uinames.com/api/?ext";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsersData() {
    setIsLoading(true);
    const res = await fetch(API);
    const usersData = await res.json();
    setIsLoading(false);
    setData(usersData);
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

export default HomeWorkWeek3;
