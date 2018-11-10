import React from 'react';
import ItemCreate from './ItemCreate';


class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            el: []
        }
    }
    handleEdit = () => {
        this.setState({
            //issue=> value,to_do state
            el: [<div className='update'>
                <input type="text" value={this.props.value} onChange={this.props.change} />
                <button type="button" onClick={this.handleSave}> Save</button >
                <button type="button" onClick={this.canCel} > Cancel</button ></div>]
        })
        // console.log(this.value)
    }

    // handleUpdate = (e) => {
    //     this.setState({
    //         el: [e.target.value]
    //     });
    // }

    //PARADOX cancels Save a anum ,hahaha
    handleSave = () => {
        this.setState({ el: [] })
    }
    canCel = () => {

        this.setState({ el: [] })
    }

    render() {
        var editItems = this.state.el.map((item, index) => (
            <div key={index}>
                {item}
                {/* {console.log(item, index)} */}
            </div>

        ));
        return (

            <div>
                <button type="button" onClick={this.handleEdit}> Edit </button >
                {editItems}

            </div >
        )
    }
}

export default Edit; 