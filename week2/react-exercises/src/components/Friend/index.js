import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button";
import FriendProfile from "../FriendProfile";
import "./Friend.css";

const Friend = () => {
  const friendAPI = `https://www.randomuser.me/api?results=1`;
  const [friend, setFriend] = useState({});
  const [friendsDataStatus, setFriendsDataStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  async function getFriend() {
    try {
      const res = await fetch(friendAPI);
      if (!res.ok) {
        throw Error("An error occurred while fetching data");
      }
      const friendsData = await res.json();
      setFriend(friendsData);
      setFriendsDataStatus("Success");
    } catch (error) {
      if (error) {
        setFriendsDataStatus("Error");
        setErrorMessage(error.message);
      }
    }
  }

  useEffect(() => {
    getFriend();
    return () => {
      console.log("not running");
      getFriend();
    };
  }, []);

  const getFriendBtn = useCallback(() => {
    getFriend();
  }, []);

  return (
    <div className="ex-1">
      {console.log(friend)}
      {friendsDataStatus === "loading" && <div>Loading please wait...</div>}
      {friendsDataStatus === "Success" && <FriendProfile friend={friend} />}
      {friendsDataStatus === "Error" && <div>{errorMessage}</div>}
      <Button fetchFriend={() => getFriendBtn()} />
    </div>
  );
};

export default Friend;
