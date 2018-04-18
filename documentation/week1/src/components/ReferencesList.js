// /**
//  * Created by nasir on 25/02/2018.
//  */
// import React, {Component} from 'react';
// import ReferenceItem from './ReferenceItem';

// export default class ReferencesList extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       clickedName: ''
//     }
//   }
//   buttonClicked(name) {
//     console.log(name);
//     // this.setState({
//     //   clickedName:name
//     // });
//   }

//   render() {
//     const references = [
//       {name: 'Reference1', number: "123", imageUrl:"/logo.png"},
//       {name: 'Reference2', number: "5423", imageUrl:"/role_host_blue.png"},
//     ];

//     const referenceItems = references.map((item, idx) =>
//         <ReferenceItem
//             name={item.name}
//             number={item.number}
//             imageUrl={item.imageUrl}
//             key={idx}
//             buttonClicked={this.buttonClicked}
//         />);
//     return (
//         <div>
//           <h2>References</h2>
//           <h3>Last clicked {this.state.clickedName}</h3>
//           <ul>
//             {referenceItems}
//           </ul>
//         </div>
//     );
//   }
// }

