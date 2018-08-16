(function() {


    // model/state/store
    const person = {
        firstname: 'Nouran',
    }

    // View 
    const text = document.getElementById('name');
    const input = document.getElementById('i-name');


    input.addEventListener('keydown', function(e){
        var key = e.which || e.keyCode;
        if(key === 13) {
            person.firstname = e.target.value;
            console.log(person);
            text.innerHTML = person.firstname;
        }
    })

    // Side Effect coden (Observer Pattern)
    // person.firstname.addEventListener('change', function(newValue) {
    //     text.innerHTML = newValue;
    // });
    

})()