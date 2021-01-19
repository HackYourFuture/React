import chat from "../assets/exercises/chat.png";
import coin from "../assets/exercises/coin.png";
import delivery from "../assets/exercises/f-delivery.png";

const details = [
  {
    img: delivery,
    title: "Free shipping",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    img: coin,
    title: "100% Money back",
    description:
      "Quis, iusto officia ut eaque, qui consequatur odio distinctio nesciunt dolore magni illum in",
  },
  {
    img: chat,
    title: "Online support 24/7",
    description: "veniam aut molestias ratione? Vero quos eum voluptatum?",
  },
];

export default function Excercise2() {
  return details.map((detail, index) => (
    <Guarantee
      key={"Guarantee" + index}
      img={detail.img}
      title={detail.title}
      description={detail.description}
    />
  ));
}

function Guarantee(props) {
  return (
    <div className="guarantee">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
