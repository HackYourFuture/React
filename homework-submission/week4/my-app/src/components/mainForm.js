import React from 'react';
import getMainInfo from '../services/getMainInfo';


class MainForm extends React.Component {

   state = {

      text: "",
      isLiked: true,
      author: {
         firstName: "",
         lastName: "",
         avatarURL: "http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg"
      }

   }


   onValueChange = (e) => {
      let name = e.target.name
      this.setState({ [name]: e.target.value });
      // console.log(name, e.target.value)
      // console.log(this.state)
   }

   addAuthor = (e) => {
      let { author } = this.state
      let name = e.target.name
      author[name] = e.target.value
      this.setState({ author });
      // console.log(name, e.target.value)
      // console.log(this.state)
   }

   onItemAdd = (e) => {

      this.setState({ status: 'loading' })
      getMainInfo.createNewItem({

         "author": this.state.author,
         "text": this.state.text,
         "date": Date().trim(),
         "isLiked": this.state.isLiked,

      }).then(item => {

         this.setState({ text: "", author: {} })
         this.props.onItemAdd(item)

      }).catch(error => {
         this.setState({ status: "error" })
      })
      e.preventDefault()
      e.target.reset()
   }

   render() {

      return (

         <div>
            {this.state.status === "error" && <h6> Error </h6>}
            <form className="main-form" onSubmit={this.onItemAdd}>

               <input className="input" type="text" name="firstName" value={this.state.firstName} onChange={this.addAuthor} placeholder="First name" />
               <input className="input" type="text" name="lastName" value={this.state.lastName} onChange={this.addAuthor} placeholder="Last name" />
               <input className="input" type="text" name="text" value={this.state.text} onChange={this.onValueChange} placeholder="Text" />

               <input className="button" type="submit" value={"Add Item"} />

            </form>
         </div>
      )

   }
}


export default MainForm;