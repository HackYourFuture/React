import React from 'react';
import getMainInfo from '../services/getMainInfo'



class mainInfo extends React.Component {

   onDelete = (id) => {

      getMainInfo.deleteItem(id)
         .then(data => {
            this.props.onItemRemoved(id)
         })
   }

   onLike = (id, info) => {
      console.log("Checked", id, info)
      getMainInfo.checkLiked(id, info)
         .then(data => {
            this.props.onItemLiked(id, info)
         })
   }

   render() {

      return ((this.props.mainInfo.length > 0) && this.props.mainInfo.map(info => {

         return (

            <div className="items" key={info._id} info={info} >

               <input className="edit-button" type="button" value="Delete" onClick={() => this.onDelete(info._id)} />
               <input className="edit-button" type="button" value={"Edit Item"} />
               <div className="text">
                  <img className="avatar" alt="avatar" src={info.author.avatarURL} />
                  <p>  {`Name:  ${info.author.firstName} ${info.author.lastName}`}</p>
                  <p>{`Text: ${info.text}`}</p>
                  <span>{info.date}</span>
               </div>
               <input type="checkbox" className="checkbox" checked={info.isLiked} onChange={() => this.onLike(info._id, info)} />

            </div>

         )

      }))

   }

}



export default mainInfo
