import React, { Component } from "react";
import "./App.css";
import Item from "./Components/Item";

export default class App extends Component {
  render() {
    let todos = [
      {
        description: "Get out of bed",
        deadline: "Wed Sep 13 2017"
      },
      {
        description: "Brush teeth",
        deadline: "Thu Sep 14 2017"
      },
      {
        description: "Eat breakfast",
        deadline: "Fri Sep 15 2017"
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img
            alt="logo"
            className="App-logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARVSURBVFhHxZh/aBNnGMerTFH/UhDHZEOmbdptIOJmKdgY2rtL0uZSp8z6q9CKKyiKrHNVGWJsUZzO6dTazm6CU5PUFK0ybTf/EdlgbGPTgeAfVlAYjMnmHxMsLs37+DyX59Lk8taZy932hS+93PO+n+/D3Xu/WuKUdF2fpmnaqz6fr1RRlLm4PSsSiUzk8v+nmpqaRvSP6NHa2lqwOIn7f0Efw8YX8JT/TtjAdktDzzQ2ehU9h6c7q6qqqqkY0oQBXfg3QcbtJ2Z4Af4dj2YFY50RrSds5ldJmF3fxianML54YXN9kpCijMx2xhcnr9f7EgKT1gAHfA/xE9IpRQhBKyxgw35NgbZmFbraA3CoLWD8zq7RPqq1NWugqfnz2fM5xr7wVOy0gvds8sOf/SGAoXDGd74MQesq1TBtZ9ceJHTYvUHLYZCR3cox9oWgj7OhdFSyw7OdvKwbltXEYBg+ec+f0yD6AMfYF0JOmMA1y5RxG3ge/3M5DI0NY0sBfZJj7AshURM4sDcoDS7Eic5gdoNRjrEvgpjAP87ZP3qmf4uF3Glwua5IA+24oS5zmp1rcP1KVRpmxy3vuNFgo3MNEsvVBv8eSN/3vu+qhx+666Vrk/ZRjcbQWJpj1lxr8GZvPWxt0UBJwzOm32cjY1f46V1B6ZgP1mkGw7EGxbny8iObF31LsFAwHWIGWq0qtfi08EMETduyMWRiEIu2iS3iFR6OK1wiXtYOcQ98uqlyeC3epJfW59xk8/zdsTrDspppYhDryObKu8SmDI4rXAjYQRCIlcK1w3VwZf/44XV+BR5d1I21FtDkY8jEIBYxDTZmcFzhosmpz2bA6OFJxtqi5+lxfBYrllNIv2O7x9ZgFNejbEz3Nr/BoDFJZBK7qAZFzLMt1TMdUidfzIST750NwVcfBSHeEYTze4Jw93Tu2wuZ9lGNxtBYmpNdJyY1SBkcV7hErKxZnHoZxJk5OXAnTExx6hVssKyZ4woXRD0zcRE/NNaKJKQopy+Qh5TBcfYk+srXutYgsjmmOOFp2CqG9JQ0yIaJJeKe9xnvjMRQ+IYszI7xSv6Zsc4JoRulYecXw2jvbKmpJpuDbmGsc4LEisliUL9lDRPxhZA8WCI11fLGD+k/wTXfC4x1VuLrUCUGPLGGPq9Tg/pjMdjwOuPcUaIz8I0s/N9MT5AvPgxcYYx7wm/Z/mhk/E/P8dyzPUDfwf2McU8YYrx+9eEjTNaI1XTkTuwIGM9jmssY94RBw+YLAH2IP+s7+fElHTo35vxHYZgx7glDRrICoWm5Cvc/rwIx4AVxYQnbC9cPKbByad774whj3FF1dfUMS6DhkN8H9zumZm4vl7bMzhtjmhiMc16qqr4mCyVvWPYWjByYAH/tmwRvB7zSMWRiMM55KYqiykJN97bOg4MtFdKaaWIwznnR6cEr8c2O1W+Ej64rbbK65925q7tbS9fIajSH5hZ2iktKngKAPqqhFV3J8wAAAABJRU5ErkJggg=="
          />
          <h3 className="App-title">Welcome to React</h3>
        </header>
        <p>Static</p>
        <ul>
          <li>
            <Item
              description={todos[0].description}
              deadline={todos[0].deadline}
            />
          </li>
          <li>
            <Item
              description={todos[1].description}
              deadline={todos[1].deadline}
            />
          </li>
          <li>
            <Item
              description={todos[2].description}
              deadline={todos[2].deadline}
            />
          </li>
        </ul>
        <p>Dynamic</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo.index}>
                <Item description={todo.description} deadline={todo.deadline}/>
              </li>
            );
          })}
        </ul>
        <h3 className="footer">Todo or not todo</h3>
      </div>
    );
  }
}
