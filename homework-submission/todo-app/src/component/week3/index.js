import React, { useState, useEffect } from "react";
import Name from "./name";
import Img from "./img";
import Region from "./region";
import Gender from "./gender";
import "core-js";

function Week3() {
  const [user, setUser] = useState("");
  const [order, setOrder] = useState(false);

  useEffect(() => {
    const fetchData = async url => {
      await fetch(url, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(content => setUser(content));
    };
    if (order) {
      try {
        fetchData("https://uinames.com/api/?ext");
        setOrder(false);
      } catch (err) {
        console.log(err);
      }
    }
  }, [order]);

  document.body.onkeydown = e => {
    if (e.keyCode === 32) {
      setOrder(true);
    }
  };

  return (
    <div className="week3">
      {user === "" ? (
        <h1 className="press-space">Please press space</h1>
      ) : (
        <>
          <h1>week3-homework</h1>
          <ul>
            <Img
              imgSrc={`${user.photo}`}
              imgAlt={`${user.name} ${user.surname}`}
            />
            <Name name={user.name} surname={user.surname} />
            <Gender gender={user.gender} />
            <Region region={user.region} />
          </ul>
        </>
      )}
    </div>
  );
}

export default Week3;
