import React, { useState, useEffect } from "react";
import Name from "./name";
import Img from "./img";
import Region from "./region";
import Gender from "./gender";
import "core-js";

function Week3() {
  const [data, setData] = useState("");
  const [id, setId] = useState(-1);

  useEffect(() => {
    const fetchData = async url => {
      await fetch(url)
        .then(response => response.json())
        .then(content => setData(content));
    };
    try {
      fetchData("https://uinames.com/api/?amount=10");
    } catch (err) {
      console.log(err);
    }

    return () => fetchData("https://uinames.com/api/?amount=10");
  }, []);

  document.body.onkeyup = e => {
    if (e.keyCode === 32 && id <= 8) {
      setId(id + 1);
    } else {
      setId(0);
    }
  };

  return (
    <div className="week3">
      {id === -1 ? (
        <h1 className="press-space">Please press space to get new data</h1>
      ) : (
        <>
          <h1>week3-homework</h1>
          <ul>
            <Img
              imgSrc={`https://uinames.com/api/photos/${data[id].gender}/${id +
                1}.jpg`}
              imgAlt={`${data[id].name} ${data[id].surname}`}
            />
            <Name name={data[id].name} surname={data[id].surname} />
            <Gender gender={data[id].gender} />
            <Region region={data[id].region} />
          </ul>
        </>
      )}
    </div>
  );
}

export default Week3;
