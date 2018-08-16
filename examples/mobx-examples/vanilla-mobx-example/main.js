(function () {
    
    //  ******* Model/state/store ******* 
    const person = mobx.observable({
        name: 'nouran',
        get nameWithGreetings() {
            return 'Hallo,' + this.name + '!';
        },
        addNewName: mobx.action('addNewValue', function (value) {
            person.name = value;
        })    
    });

    // ******* Component stuff ******* 
    function addNewName(e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            // person.changeName(e.target.value);
            person.addNewName(e.target.value)
            console.log(person);
        }
    }
    
    // VIEWS/Templates
    const text = document.getElementById('name');
    const input = document.getElementById('i-name');

    input.addEventListener('keypress', addNewName)

    const render = () => {
        console.log('runn');
        text.innerHTML = person.nameWithGreetings;

    }

    mobx.autorun(render);

})();