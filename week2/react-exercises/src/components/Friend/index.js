import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button";
import FriendProfile from "../FriendProfile";
import uuid from "uuid/v1";
import "./Friend.css";

const Friend = () => {
  const friendAPI = `https://www.randomuser.me/api?results=1`;
  const [friend, setFriend] = useState({});
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  async function getFriend() {
    try {
      const res = await fetch(friendAPI);
      if (!res.ok) {
        throw Error("An error occurred while fetching data");
      }
      const friendsData = await res.json();
      setFriend(friendsData);
      setStatus("Success");
    } catch (error) {
      if (error) {
        setStatus("Error");
        setErrorMessage(error.message);
      }
    }
  }

  useEffect(() => {
    getFriend();
    return () => {
      getFriend();
    };
  }, []);

  const getFriendBtn = useCallback(() => {
    getFriend();
  }, []);

  return (
    <div className="ex-1">
      {status === "loading" && <div>Loading please wait...</div>}
      {status === "Success" && <FriendProfile friend={friend} key={uuid()} />}
      {status === "Error" && <div>{errorMessage}</div>}
      <Button fetchData={() => getFriendBtn()} text="Get a friend!" />
    </div>
  );
};

export default Friend;
