import React from 'react';
import data from './data';
import './TodoLists.css'



const checkIfDone = data.map((item) => {
    return item.done;
})

// let xerov = () => {


//     for (let i = 0; i < checkIfDone.length; i++) {
//         if (checkIfDone[i] === true) {
//             alert('huaawei')
//         } else {
//             alert('klir');
//         }
//     }
// }

console.log(checkIfDone);

export default class TodoLists extends React.Component {
    constructor() {
        super();

        this.state = {

            isChecked: '',
        }
    }

    handleChecked = () => {
        for (let i = 0; i < checkIfDone.length; i++) {
            if (checkIfDone[i] === true) {
                this.setState({ isChecked: true })
            } else {
                this.setState({ isChecked: false })
            }
        }


    }

    render() {
        let { description, deadline, done } = this.props;
        // let xxx = new Date(1 / 11 / 1999)


        return (

            <div className='list'>

                <ul>

                    <li>
                        <input type="checkbox" className="myCheck"
                            onChange={this.handleChecked} /><label > {description} /{deadline}/ {done} </label>


                    </li>
                </ul>
            </div>
        );


    }


}