import React from "react";

const Guarantee = () => {
  const guarantees = [
    {
      img: "./images/f-delivery.png",
      title: "Free shipping",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sunt praesentium, quaerat voluptatum consequuntur nam",
    },
    {
      img: "./images/coin.png",
      title: "100% Money back",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sunt praesentium, quaerat voluptatum consequuntur nam",
    },
    {
      img: "./images/chat.png",
      title: "Online support 24/7",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sunt praesentium, quaerat voluptatum consequuntur nam",
    },
  ];

  return (
    <div className="gContainer">
      {guarantees.map((guar, i) => (
        <GuaranteeLayout
          key={i}
          img={guar.img}
          title={guar.title}
          desc={guar.description}
        />
      ))}
    </div>
  );
};

const GuaranteeLayout = props => {
  return (
    <div className="guarantees">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default Guarantee;
