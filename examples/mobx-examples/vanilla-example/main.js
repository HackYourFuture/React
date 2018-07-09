(function() {
    // Model/state/store
    const person = {
        name: 'nouran',
        changeName: function (newName) {
            this.name = newName;
        }
    }

    // Controller
    function addNewName(e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            person.changeName(e.target.value);
            console.log(person);
        }
    }
    // VIEWS/Templates
    const text = document.getElementById('name');
    const input = document.getElementById('i-name');

    input.addEventListener('keypress', addNewName)

    // The DOM won't be affected by any change to the property name
    // Change anything to the DOM is side effect
    // Side effects are using anything outside the JS API world like (browser API (alert, confirm..), calling a server ..)
    text.innerHTML = person.name;


    // Use The Observer Pattern
    // we can make the model into an “observable”, and a view into an “observer”.
    // When the observable is changed, it notifies the observer of its state,
    // and the observer can react to that change. 
    const render = () => {
        text.innerHTML = person.name;
    }
})();