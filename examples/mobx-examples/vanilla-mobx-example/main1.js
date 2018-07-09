(function () {
    // store
    const person = mobx.observable({
        name: 'nouran',
        changeName: mobx.action('changeName', function (value) {
            person.name = value;
        })  
    });



    // React Component ----
    function addNewName(e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            // person.changeName(e.target.value);
            person.changeName(e.target.value)
            // console.log(person);
        }
    }

    const text = document.getElementById('name');
    const input = document.getElementById('i-name');

    input.addEventListener('keypress', addNewName)

    // const whatever = () => {
        
    // }

    mobx.autorun(function() {
        text.innerHTML = person.name;
        console.log('autorun');
    });

    // default state
    // text.innerHTML = person.name;

    
})();