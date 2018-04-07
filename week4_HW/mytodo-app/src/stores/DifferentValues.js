
import {observable, action} from 'mobx'

class DifferentValues {

    @observable
    taskValue = ''
    @observable
    dateValue = ''
    
    @action
    ChangeText = (event) => {
        
        this.taskValue =  event.target.value
            console.log(event.target.value)
    }

    @action
    ChangeDateField = (event) => {
         
        this.dateValue= event.target.value
            console.log(event.target.value)
    }
    
}

export default new DifferentValues() 