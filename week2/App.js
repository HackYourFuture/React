var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//the goal of this component is to create a list item
var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          description = _props.description,
          deadline = _props.deadline,
          done = _props.done,
          todoId = _props.todoId;

      return React.createElement(
        'li',
        { key: todoId, className: done ? 'item-list' : '' },
        description,
        ', ',
        deadline
      );
    }
  }]);

  return Item;
}(React.Component);

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      id = _ref.id;

  return React.createElement('input', { id: id, type: 'submit', value: text, onClick: onClick });
};

//the goal of this component is to dynamically render todoList using map() function:

var DynamicList = function (_React$Component2) {
  _inherits(DynamicList, _React$Component2);

  function DynamicList() {
    _classCallCheck(this, DynamicList);

    return _possibleConstructorReturn(this, (DynamicList.__proto__ || Object.getPrototypeOf(DynamicList)).apply(this, arguments));
  }

  _createClass(DynamicList, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          items = _props2.items,
          deleteItem = _props2.deleteItem;

      return React.createElement(
        'ul',
        null,
        items.map(function (item, index) {
          return React.createElement(
            'div',
            { key: index, className: 'item-wrapper' },
            React.createElement(Item, { description: item.description, deadline: item.deadline, done: item.done }),
            React.createElement(Button, { id: item.id, type: 'button', text: 'Delete', onClick: deleteItem })
          );
        })
      );
    }
  }]);

  return DynamicList;
}(React.Component);

var UserInput = function UserInput(_ref2) {
  var addItem = _ref2.addItem;

  return React.createElement(
    'form',
    { onSubmit: addItem },
    React.createElement('input', { type: 'text', name: 'description', placeholder: 'Insert description' }),
    React.createElement('input', { type: 'date', name: 'date' }),
    React.createElement(Button, { text: 'Add' })
  );
};

// Move your todo items array to the state of your application. This creates a copy of it that we can change.
// - Create a state object with the todo array as initial value
// - Pass the todos array from the state to the components using props

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.addItem = function (event) {
      event.preventDefault();
      var description = event.target.description.value;
      var deadline = event.target.date.value;
      var todoList = [].concat(_toConsumableArray(_this3.state.todoList)); //copy the old state array to the new array
      todoList.push({
        id: todoList[todoList.length - 1].id + 1,
        description: description,
        deadline: deadline,
        done: false
      });
      _this3.setState({ todoList: todoList });
    };

    _this3.deleteItem = function (event) {
      console.log(event.target);
      event.preventDefault();
      var todoList = _this3.state.todoList.filter(function (item) {
        return item.id !== parseInt(event.target.id);
      });
      _this3.setState({ todoList: todoList });
    };

    _this3.state = {
      todoList: [{
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
      }]
    };
    return _this3;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'panel' },
        'namicList items=',
        this.state.todoList,
        ' deleteItem=',
        this.deleteItem,
        ' />'
      );
    }
  }]);

  return App;
}(React.Component);
// I tell ReactDOM to render the content of <App/> component in the root.


var root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(React.createElement(App, null), root);