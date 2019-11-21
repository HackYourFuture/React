import React from "react";
import "./App.css";
import HobbyList from "./components/HobbyList";
import Guarantee from "./components/Guarantee";
import Counter from "./components/Counter";
import deliveryIcon from "./img/f-delivery.png";
import chatIcon from "./img/chat.png";
import coinIcon from "./img/coin.png";
function App() {
  return (
    <React.Fragment>
      <div className="ex-1">
        <h1>Hobby List</h1>
        <HobbyList />
      </div>
      <div>
        <h1>Guarantee</h1>
        <div className="ex-2">
          <Guarantee
            image={deliveryIcon}
            imgName={deliveryIcon}
            title="Free Shipping"
            description="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?"
          />
          <Guarantee
            image={coinIcon}
            imgName={coinIcon}
            title="Money Back"
            description="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?"
          />
          <Guarantee
            image={chatIcon}
            imgName={chatIcon}
            title="Online Support 24/7"
            description="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?"
          />
        </div>
      </div>
      <div className="ex-3">
        <h1>Counter</h1>
        <Counter />
      </div>
    </React.Fragment>
  );
}

export default App;
