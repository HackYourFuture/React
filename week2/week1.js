var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      // 4- Each list item should have a prop of description and deadline
      var _props = this.props,
          description = _props.description,
          deadline = _props.deadline,
          done = _props.done,
          todoId = _props.todoId;

      return (
        //6 Using CSS (a conditional className), cross out the item if done is true
        React.createElement(
          'li',
          { key: todoId, className: done ? 'item-list' : '' },
          description,
          ', ',
          deadline
        )
      );
    }
  }]);

  return Item;
}(React.Component);

//the goal of this component is to dynamically render the second todo list using map() function:


var DynamicList = function (_React$Component2) {
  _inherits(DynamicList, _React$Component2);

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
              deadLine: item.deadLine,
              done: Item.done
            });
          })
        )
      );
    }
  }]);

  return DynamicList;
}(React.Component);

var initInput = function initInput(_ref) {
  var AddItem = _ref.AddItem;

  return React.createElement(
    'form',
    { onSubmit: AddItem },
    React.createElement('input', { type: 'text', name: 'description', placeholder: 'Insert description' }),
    React.createElement('input', { type: 'date', name: 'date', placeholder: 'Insert deadLine' })
  );
};

var Button = function Button(_ref2) {
  var Add = _ref2.Add,
      clickHandler = _ref2.clickHandler;

  return React.createElement(
    'button',
    { onClick: clickHandler },
    Add
  );
};

// the goal of this component is to render the previous components (DynamicList)

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    var _ref3;

    var _temp, _this3, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref3 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
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
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(App, [{
    key: 'initInput',
    value: function initInput(event) {
      this.setState({ todoList: this.state.todoList });
    }
  }, {
    key: 'Item',
    value: function Item(event) {
      this.setState({ todoList: ++this.state.todoList });
    }
  }, {
    key: 'AddItem',
    value: function AddItem(event) {
      event.preventDefault();
      var value = event.target.description.value;
      this.setState({ todoList: value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'panel' },
        React.createElement(DynamicList, { items: { todoList: todoList } })
      );
    }
  }]);

  return App;
}(React.Component);
// I tell ReactDOM to render the content of <App/> component in the root.


var root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(React.createElement(App, null), root);