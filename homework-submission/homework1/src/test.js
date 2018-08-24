// <ListTitle title="this is todo"/>
// <List description="first" deadline="today"/>
// <List description="SECOND" deadline="TOMMOROW"/>
// <List description="THID" deadline="DAY AFTER"/>
// <p>,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,</p>
// <p style={{textDecorationLine:this.state.textDecorationLine}}>
// <input type="checkbox" onClick={()=>this.onChange()}/>
// <List description={this.state.StateLists[0].description} deadline={this.state.StateLists[0].deadline}/></p>
// onChange=()=>{
//     this.setState({
//       done:StateLists[0].done=true
//     })
//
//  if(StateLists[0].done==true){
//    this.setState({
//      textDecorationLine:"line-throug"
//    })
//  }else{
//    this.setState({
//      textDecorationLine:""
//    })
//  }
// }


// state = {
//        StateLists,
//        textDecorationLine: '',
//        id1:StateLists[0].id,
//        description1:StateLists[0].description,
//        deadline1:StateLists[0].deadline,
//        id2:StateLists[1].id,
//        description2:StateLists[1].description,
//        deadline2:StateLists[1].deadline,
//        id2:StateLists[2].id,
//        description3:StateLists[2].description,
//         deadline3:StateLists[2].deadline,
//         done:StateLists[0].done,
//         done1:StateLists[1].done,
//         done2:StateLists[2].done,
//         textDecorationLine:'',
//         textDecorationLine1:'',
//         textDecorationLine2:'',
//         itemsDone:
//           {
//             firstItem:'',
//             secondItem:'',
//             thirdItem:''
//           }
//
//    }
//
//
//     onChange0=(id)=>{
//            this.setState({
//              done:StateLists[0].done=true
//            })
//            if(this.state.done===true){
//              this.setState({
//                textDecorationLine:"line-through"
//              })
//
//            }else{
//              this.setState({
//                textDecorationLine:""
//              })
//            }
//        }
//     onChange1=()=>{
//       this.setState({
//         done1:StateLists[1].done=true
//       })
//
//       if(this.state.done===true){
//         this.setState({
//           textDecorationLine1:"line-through"
//         })
//       }else{
//         this.setState({
//           textDecorationLine1:""
//         })
//       }
//     }
//      onChange2=()=>{
//        this.setState({
//          done2:StateLists[2].done=true
//        })
//        if(this.state.done===true){
//          this.setState({
//            textDecorationLine2:"line-through"
//          })
//        }else{
//          this.setState({
//            textDecorationLine2:""
//          })
//        }
//        // if(this.state.done===true){
//        //   this.setState({
//        //     itemsDone:this.state.itemsDone.thirdItem='done1'
//        //   })
//        //   console.log("third item "+this.state.itemsDone.thirdItem)
//        // }
//      }
// render() {
//   return (
//     <div className="App">
//         <ListTitle title="todo list"></ListTitle>
//            <p style={{textDecorationLine:this.state.textDecorationLine}}>
//              <input type="checkbox" onClick={()=>this.onChange0()}/>
//              <List description={this.state.description1} deadline={this.state.deadline1}/>
//            </p>
//            <p style={{textDecorationLine:this.state.textDecorationLine1}}>
//               <input type="checkbox" onClick={()=>this.onChange1()}/>
//               <List description={this.state.description2} deadline={this.state.deadline2}/>
//             </p>
//            <p style={{textDecorationLine:this.state.textDecorationLine2}}>
//                <input type="checkbox" onClick={()=>this.onChange2()}/>
//                <List description={this.state.description3} deadline={this.state.deadline3}/>
//            </p>
//
//     </div>
//   );
// }
