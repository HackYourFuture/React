// class ListName extends React.component {
//   render() {

//     return < h1 > Static List  </h1 >


//   }
// }

// class ListItem extends React.component {
//   render() {
//     return
//     { this.props.description } { this.props.deadline }


//   }

// }


const ListItem = ({ description, deadline }) => { return (<li>{description}{deadline}</li>) }


const Header = () => {
  return < h1 className="title"> Static List  </h1 >

}

const List = () => (
  <ul className="ul">
    <ListItem description="Get out of bed" deadline=", Wed Sep 13 2017 ." />
    <ListItem description=" Brush teeth" deadline=", Thu Sep 14 2017 ." />
    <ListItem description=" Eat breakfast" deadline=", Fri Sep 15 2017 ." />
  </ul>
)

fetch('main.json')
  .then(function (response) { return response.json(); })
  .then(function (data) {
    const ToDoListDynamic = () => (
      data.map((item) =>
        <span className={item.done ? 'done' : 'notdone'}>
          <div className="data"> {item.id + " -    " + item.description + " , " + item.deadline + "."}</div>
        </span>)



    )

    // if (item.done == true) {

    //   <div className=" done"></div>

    // } else { <div className=" not done"></div> }



    class TodoJson extends React.Component {
      render() {
        return <ToDoListDynamic />
      }
    }
    ReactDOM.render(<div><TodoList /><TodoJson /> </div >,
      document.getElementById("thisIsWhereReactIsInjected"))
  });

class TodoList extends React.Component {
  render() {
    return (<div><Header /><List /></div>)
  }
}



// ReactDOM.render(<div><Header /><List /></div>, root)



