var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Create a todo list called Static List with three list items:

var staticList = [{ description: 'Get out of bed', deadline: 'Wed Sep 13 2017' }, { description: 'Brush teeth', deadline: 'Thu Sep 14 2017' }, { description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }];

//1- Divide the list into reusable components (create at least 2):

// A- reusable list title component:
//the goal of this component is to create a reusable list title by using props

var ListTitle = function (_React$Component) {
  _inherits(ListTitle, _React$Component);

  function ListTitle() {
    _classCallCheck(this, ListTitle);

    return _possibleConstructorReturn(this, (ListTitle.__proto__ || Object.getPrototypeOf(ListTitle)).apply(this, arguments));
  }

  _createClass(ListTitle, [{
    key: 'render',
    value: function render() {
      var title = this.props.title;

      return React.createElement(
        'h1',
        null,
        title
      );
    }
  }]);

  return ListTitle;
}(React.Component);

// B- reusable li component
//the goal of this component is to create a list item


var Item = function (_React$Component2) {
  _inherits(Item, _React$Component2);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      // 4- Each list item should have a prop of description and deadline
      var _props = this.props,
          description = _props.description,
          deadline = _props.deadline,
          done = _props.done;

      return (
        //6 Using CSS (a conditional className), cross out the item if done is true
        React.createElement(
          'li',
          { className: done ? 'item-list' : '' },
          description,
          ', ',
          deadline
        )
      );
    }
  }]);

  return Item;
}(React.Component);

// 3- Reuse one component at least 3 times
// the goal of this component is to make static component which make render to the title list and three items


var List = function (_React$Component3) {
  _inherits(List, _React$Component3);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(ListTitle, { title: 'Static List' }),
        React.createElement(
          'ul',
          null,
          React.createElement(Item, { description: staticList[0].description, deadline: staticList[0].deadline }),
          React.createElement(Item, { description: staticList[1].description, deadline: staticList[1].deadline }),
          React.createElement(Item, { description: staticList[2].description, deadline: staticList[2].deadline })
        )
      );
    }
  }]);

  return List;
}(React.Component);

//Create a second todo list


var secondTodoList = [{
  id: 1,
  description: 'Get out of bed',
  deadline: '2017-09-11',
  done: true
}, {
  id: 2,
  description: 'Brush teeth',
  deadline: '2017-09-10',
  done: false
}, {
  id: 3,
  description: 'Eat breakfast',
  deadline: '2017-09-09',
  done: false
}];

//the goal of this component is to dynamically render the second todo list using map() function:

var DynamicList = function (_React$Component4) {
  _inherits(DynamicList, _React$Component4);

  function DynamicList() {
    _classCallCheck(this, DynamicList);

    return _possibleConstructorReturn(this, (DynamicList.__proto__ || Object.getPrototypeOf(DynamicList)).apply(this, arguments));
  }

  _createClass(DynamicList, [{
    key: 'render',
    value: function render() {
      var items = this.props.items;

      return React.createElement(
        'div',
        null,
        React.createElement(ListTitle, { title: 'Dynamic List' }),
        React.createElement(
          'ul',
          null,
          items.map(function (item) {
            return React.createElement(Item, {
              key: item.id,
              description: item.description,
              deadline: item.deadline,
              done: Item.done
            });
          })
        )
      );
    }
  }]);

  return DynamicList;
}(React.Component);

// the goal of this component is to render the previous components (List, DynamicList)


var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(List, null),
        React.createElement(DynamicList, { items: secondTodoList })
      );
    }
  }]);

  return App;
}(React.Component);
// I tell ReactDOM to render the content of <App/> component in the root.


var root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(React.createElement(App, null), root);